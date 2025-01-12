'use client'

import { useState } from 'react';

export default function ContactForm() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    message: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch('/api/send', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        console.log('Message sent successfully');
      } else {
        console.error('Error sending message');
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };

  
    return (
      <form className="flex flex-col mt-5" onSubmit={handleSubmit}>
          <label htmlFor="firstName" className="text-stone-700 text-xl">
              First Name:
          </label>
          <input
              type="text"
              id="firstName"
              name="firstName"
              value={formData.firstName}
              onChange={handleChange}
              className="text-stone-800"/>

          <label htmlFor="lastName" className="text-stone-700 text-xl">
              Last Name:
          </label>
          <input
              type="text"
              id="lastName"
              name="lastName"
              value={formData.lastName}
              onChange={handleChange}
              className=" text-xl text-stone-700" />

          <label htmlFor="email" className="text-stone-700 text-xl">
              Email:
          </label>
          <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className=" text-xl text-stone-700" />

          

          <span style={{ display: "flex" }}>
              
          </span>
          <span style={{ display: "flex" }}>
              
          </span>

<div className="mt-16 flex justify-start items-baseline gap-x-5"> 
  <button type="submit" className=" w-[20vw] bg-stone-600 rounded-xl py-3 text-xl text-stone-200 hover:border hover:border-white ">
              Submit
          </button>
          <button type="reset" className="border-2 w-[20vw] rounded-xl py-3 text-xl text-stone-200 hover:bg-stone-500 hover:border-white ">
              Reset
          </button>
          </div>
      </form>
  );}