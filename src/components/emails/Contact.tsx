// components/ContactUsForm.tsx

'use client';
import { toast } from 'react-hot-toast'; // updated code

import React from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';

interface FormInput {
  name: string;
  email: string;
  message: string;
}



export default function ContactUsForm() {
  const {
    register,
    handleSubmit,
    formState: { isSubmitting },
    reset,
  } = useForm<FormInput>();

   /**
   * The function sends a POST request to a server with form data and displays a success notification.
   * @param {FormInput} formData - The formData parameter is an object that contains the input values
   * from the form.
   */
  async function onSubmit(formData: FormInput) { 
    await fetch('/api/send', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },

      body: JSON.stringify({
        name: formData.name,
        email: formData.email,
        message: formData.message,
      }),
    }).then(() => {
      // Toast notification
      toast.success('Your email message has been sent successfully');
    });

    reset();
  }

  return (
    <div className='w-10/12 md:w-8/12'>
      <form
        onSubmit={handleSubmit(onSubmit)} // updated code
        className='mb-10 mt-5 flex w-[90vw] gap-y-2 flex-col rounded-md bg-white p-5 py-14 shadow-lg md:max-w-3xl md:px-10 mx-auto'
      >
        <input
          className='mt-4 mb-3 h-14 block w-full rounded-md border px-3 text-stone-700 outline-none focus:border-stone-500 focus:outline-none md:mb-0'
          type='text'
          placeholder='Name'
          required
          {...register('name')}
        />
        <input
          className='mt-4 mb-3 h-14 block w-full rounded-md border px-3 text-stone-700 outline-none focus:border-stone-500 focus:outline-none md:mb-0'
          type='email'
          placeholder='Email'
          required
          {...register('email')}
        />
        <textarea
          className='mt-4 mb-5 block w-full rounded-md border px-3 text-stone-700 outline-none focus:border-stone-500 focus:outline-none md:mb-0'
          placeholder='Message Us'
          rows={6}
          required
          {...register('message')}
        />

        <button
          disabled={isSubmitting}
          type='submit'
          className='border-2 border-stone-700 px-6 py-3 disabled:bg-gray-500 block-primary rounded-md cursor-pointer text-stone-700 mt-4 font-bold hover:bg-stone-300'
        >
          Send Message
        </button>
      </form>
    </div>
  );
}
