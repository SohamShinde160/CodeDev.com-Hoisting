import React from "react";
import ContactForm from "../components/core/ContactUsPage/ContactForm";
import ContactDetails from "../components/core/ContactUsPage/ContactDetails";

import Footer from "../components/Common/Footer";

const Contact = () => {
  return (
    <div>
      <div className="mx-auto mt-20 mb-10 flex w-11/12 max-w-maxContent flex-col justify-between gap-10 text-white lg:flex-row">
        {/* Contact Details */}
        <div className="lg:w-[40%]">
          <ContactDetails />
        </div>

        {/* Contact Form */}
        <div className="lg:w-[60%]">
          <ContactForm />
        </div>
      </div>
     <Footer/>
    </div>
  )
}

export default Contact