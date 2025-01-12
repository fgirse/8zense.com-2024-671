"use client"

import React, { FormEvent, useState } from 'react';
import { useRouter } from 'next/navigation';

interface ContactFormProps {
  requestFunc: (formData: FormData) => Promise<string>;
}

interface FormState {
  errors: {
    name?: string[];
    email?: string[];
    message?: string[];
  };
  success?: string;
}

const initialState: FormState = {
  errors: {
    name: [],
    email: [],
    message: [],
  },
};

const ContactForm: React.FC<ContactFormProps> = ({ requestFunc }) => {
  const router = useRouter();
  const [formState, setFormState] = useState<FormState>(initialState);

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    try {
      const response = await requestFunc(formData);
      setFormState({ success: response, errors: {} });
      console.log('Form submitted successfully:', response);
      // Optionally, navigate to another page
      if (router) {
        router.push('/success');
      }
    } catch (error) {
      setFormState({
        errors: {
          name: ['Name is required'],
          email: ['Email is required'],
          message: ['Message is required'],
        },
      });
      console.error('Form submission error:', error);
    }
  };

  return (
    <form className="flex flex-col gap-y-1" onSubmit={handleSubmit}>
      <label htmlFor="name">Name:</label>
      <input type="text" id="name" name="name" required />
      {formState.errors.name && <p>{formState.errors.name.join(', ')}</p>}
      <label htmlFor="email">Email:</label>
      <input type="email" id="email" name="email" className='text-stone-700' required />
      {formState.errors.email && <p>{formState.errors.email.join(', ')}</p>}
      <label htmlFor="message">Message:</label>
      <textarea id="message" name="message" className='text-stone-700 'required />
      {formState.errors.message && <p>{formState.errors.message.join(', ')}</p>}
      <button className=' border-2 border-white  py-3 px-3 rounded-lg hover:cursor-pointer hover:bg-stone-500' type="submit">Submit</button>
      {formState.success && <p>{formState.success}</p>}
    </form>
  );
};

export default ContactForm;