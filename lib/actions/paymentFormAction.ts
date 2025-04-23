'use server';

export async function paymentFormAction(prevState: any, formData: FormData) {

  const rawFormData = Object.fromEntries(formData.entries());

  console.log('Received Combined Form Data:', rawFormData);

  return {
    message: 'Data received on server. Check your server console!',
    errors: null,
  };
}