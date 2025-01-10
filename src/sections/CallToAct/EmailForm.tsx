// src/sections/CallToAct/EmailForm.tsx
import React from 'react';

interface EmailFormProps {
  userEmail?: string;
}

const EmailForm: React.FC<EmailFormProps> = ({ userEmail }) => {
  return (
    <form>
      <input type="email" value={userEmail} placeholder="Enter your email" />
      <button type="submit">Submit</button>
    </form>
  );
};

export default EmailForm;