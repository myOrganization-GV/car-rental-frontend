"use server";
import { auth } from "@/auth";
import { RentalFormData } from "@/types/RentalFormData";
import { getToken } from "next-auth/jwt"
import { headers } from "next/headers";

export async function paymentFormAction(prevState: any, formData: FormData) {
  const rawFormData = Object.fromEntries(formData.entries()) as RentalFormData;
  const requestHeaders = await headers();
  const token = await getToken({ 
      req: {headers: requestHeaders},
      secret: process.env.AUTH_SECRET 
    });
  console.log(token)
  console.log("Received Combined Form Data:", rawFormData);
  if (rawFormData.paymentMethod === "Credit Card") {
    console.log("Processing Credit Card payment in Server Action...");
    try {
      const backendUrl = "http://localhost:9090";
      if (!backendUrl) {
        console.error("BACKEND_URL environment variable is not set.");
        return {
          message: "Backend URL is not configured.",
          errors: { config: ["Backend URL is not set."] },
          cardPaymentStatus: "failed",
          cardPaymentError: "Backend URL not configured",
          pixData: undefined,
          successForPix: false,
        };
      }

      console.log(
        `Calling backend API at ${backendUrl}/api/payments/card with token.`
      );
      if (!rawFormData.token) {
        console.error("CardToken not available, something went wrong.");
        return {
          message: "CardToken not available.",
          errors: { config: ["CardToken not available."] },
          cardPaymentStatus: "failed",
          cardPaymentError: "CardToken not available",
          pixData: undefined,
          successForPix: false,
        };
      }
      const requestBody = {
        token: rawFormData.token,
        payment_method_id: rawFormData.paymentMethod,
/*         issuer_id: rawFormData.issuer, */
        transactionAmount: 125,
        description: "Rental Payment",
        payer: {
          email: "test@gmail.com",
          firstName: "testName",
          lastName: "testLastName",
          identification: {
            type: "CPF",
            number: "16940233709",
          },
        },
      };

      const cardPaymentResponse = await fetch(
        `${backendUrl}/api/payments/card`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${JSON.stringify(token)}`
          },
          body: JSON.stringify(requestBody),
        }
      );

      const cardPaymentResult = await cardPaymentResponse.json();

      if (!cardPaymentResponse.ok) {
        console.error(
          "Backend API Error processing card payment:",
          cardPaymentResult
        );
        return {
          message: "Failed to process card payment.",
          errors: {
            backendError: [
              cardPaymentResult.message || cardPaymentResponse.statusText,
            ],
          },
          cardPaymentStatus: "failed",
          cardPaymentError:
            cardPaymentResult.message || cardPaymentResponse.statusText,
          pixData: undefined,
          successForPix: false,
        };
      }

      console.log(
        "Card payment processed successfully by backend:",
        cardPaymentResult
      );

      return {
        message: "Card payment processed successfully.",
        errors: null,
        cardPaymentStatus: cardPaymentResult.status,
        cardPaymentId: cardPaymentResult.id,
        cardPaymentError: undefined,
        pixData: undefined,
        successForPix: false,
      };
    } catch (error: any) {
      console.error("Error calling backend API for card payment:", error);
      return {
        message: "An error occurred while processing card payment.",
        errors: { fetchError: [error.message || "Unknown fetch error"] },
        cardPaymentStatus: "failed",
        cardPaymentError: error.message || "Unknown fetch error",
        pixData: undefined,
        successForPix: false,
      };
    }
  }

  if (rawFormData.paymentMethod === "Pix") {
   
  
  }
  return {
    message: "Data received on server. Check your server console!",
    errors: null,
  };
}
