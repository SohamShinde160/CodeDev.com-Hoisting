import React from 'react';
import ContactUsForm from '../ContactUsPage/ContactUsForm';
const ContactFormSection = () => {
  return (
    <div className="mx-auto">
      <h1 className="text-center text-4xl font-semibold">Get in Touch</h1>
      <p className="text-center font-semibold text-richblack-300 mt-3">
         Please fill out this form, to contact with us .
      </p>
      <div className="mt-12 mx-auto">
        <ContactUsForm/>
      </div>
    </div>
  );
}

export default ContactFormSection;