"use server";
import { auth } from "@/auth";
import { RentalFormData } from "@/types/RentalFormData";
import { getToken } from "next-auth/jwt"
import { headers } from "next/headers";

export async function paymentFormAction(prevState: any, formData: FormData) {
  const rawFormData = Object.fromEntries(formData.entries()) as RentalFormData;
  const session = await auth();
  const requestHeaders = await headers();
  const token = await getToken({ 
      req: {headers: requestHeaders},
      secret: process.env.AUTH_SECRET 
    }) as any;

    console.log(session?.user?.email)

  if (rawFormData.paymentMethod === "Credit Card") {
    console.log("Processing Credit Card payment in Server Action...");
    try {
      const backendUrl = "http://localhost:8080";
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
        `Calling backend API at ${backendUrl}/rent/car with token.`
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
        rentalStartDate: `${rawFormData.rentalPickupDate + "T00:00:00"}`,
        rentalEndDate: `${rawFormData.rentalDropoffDate + "T20:00:00"}`,
        carId: rawFormData.carId,
        userId: rawFormData.carId,
        paymentDto: {
          cardToken: rawFormData.token,
          paymentMethod: "CREDIT_CARD",
          payerEmail: session?.user?.email,
          payerFirstName: rawFormData.name,
          payerIdentificationType: "CPF",
          payerIdentificationNumber: "11111111111"
        }
      };

      const cardPaymentResponse = await fetch(
        `${backendUrl}/rent/car`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            "type": "google",
            "Authorization": `Bearer ${token.idToken}`
          },
          body: JSON.stringify(requestBody),
        }
      );
      
      if (!cardPaymentResponse.ok) {
        console.error(
          "Backend API Error processing card payment:",
          cardPaymentResponse.status, cardPaymentResponse.statusText
        );
        
        return {
          message: "Failed to process card payment.",
          errors: {
            backendError: [
              cardPaymentResponse.statusText,
            ],
          },
          cardPaymentStatus: "failed",
          cardPaymentError:
            cardPaymentResponse.statusText,
          pixData: undefined,
          successForPix: false,
        };
      }
     const cardPaymentResult = await cardPaymentResponse.json();
      
     console.log(
        "Card payment processed successfully by backend:",
        cardPaymentResult
      );

      return {
        message: "Card payment processed successfully.",
        errors: null,
        cardPaymentStatus: null,
        cardPaymentId: null,
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
