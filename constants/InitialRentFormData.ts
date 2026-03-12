import { RentalFormData } from '@/types/RentalFormData';

const today = new Date();
const pickupDate = new Date();
pickupDate.setDate(today.getDate() + 2);
const pickupISOString = pickupDate.toISOString().split('T')[0];

const dropoffDate = new Date(pickupDate);
dropoffDate.setDate(pickupDate.getDate() + 7);
const dropoffISOString = dropoffDate.toISOString().split('T')[0];


export const defaultRentalFormData: RentalFormData = {
  name: "Test User",
  city: "New York",
  address: "123 Test Street",
  zipCode: "12345-678",
  rentalPickupLocation: "New York, NY",
  rentalPickupDate: pickupISOString,
  rentalDropoffLocation: "Los Angeles, CA",
  rentalDropoffDate: dropoffISOString,
  paymentMethod: "Credit Card",
  payerEmail: "test@example.com",
  payerFirstName: "Test",
  payerLastName: "User",
  payerIdentificationNumber: "123.456.789-09", 
  terms: true,
};