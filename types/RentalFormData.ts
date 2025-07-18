export interface RentalFormData {
    // Initial Car Info (from page component)
    carId?: string; 
    carModel?: string; 

    // Step 1: BillingForm fields
    name?: string;
    address?: string;
    city?: string;
    zipCode?: string;
    cardholderName?: string;

    // Step 2: RentalInfoForm fields
    rentalPickupLocation?: string;
    rentalPickupDate?: string;
    rentalDropoffLocation?: string;
    rentalDropoffDate?: string;
    // Step 3: PaymentForm fields
    paymentMethod?: string; 
    cardToken?: string;

    //pix payer field
    payerFirstName?: string;
    payerLastName?: string;
    payerIdentificationType?: string;
    payerIdentificationNumber?: string;
    payerEmail?:string;
    //step 4: Confirmation fields
    marketing?: boolean;
    terms?: boolean;
}

export type UpdateRentalFormData = (data: Partial<RentalFormData>) => void;

export type StepErrors = Record<string, string[]> | null;