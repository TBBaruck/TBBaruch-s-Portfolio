'use client'

import { FaEnvelope, FaPhone } from 'react-icons/fa';

const ContactMe = () => {
  const emailAddress = 'blessingzidane93@gmail.com';
  const phoneNumber = '+234 70 551 7321';
  const phoneNumber2 = '+234 701 810 7503';

  const handleEmailClick = () => {
    window.location.href = `mailto:${emailAddress}`;
  };

  const handlePhoneClick = () => {
    window.location.href = `tel:${phoneNumber}`;
  };
  const handlePhoneClick2 = () => {
    window.location.href = `tel:${phoneNumber2}`;
  };

  return (
    <div className="max-w-4xl mx-auto p-6">
      <section className="text-center mb-12">
        <h1 className="text-4xl font-bold mb-4 text-gray-800">Contact Me</h1>
        <p className="text-xl text-gray-600">Feel free to reach out to me via email or phone.</p>
      </section>
      <section className="flex flex-col items-center">
        <div className="bg-white shadow-md rounded-lg p-6 w-full text-center mb-8 cursor-pointer" onClick={handleEmailClick}>
          <div className="text-4xl mb-4 text-blue-500"><FaEnvelope /></div>
          <h3 className="text-2xl font-semibold mb-2 text-gray-800">Email</h3>
          <p className="text-lg text-gray-600">{emailAddress}</p>
        </div>
        <div className="bg-white shadow-md rounded-lg p-6 w-full text-center cursor-pointer" onClick={handlePhoneClick}>
          <div className="text-4xl mb-4 text-green-500"><FaPhone /></div>
          <h3 className="text-2xl font-semibold mb-2 text-gray-800">Phone1</h3>
          <p className="text-lg text-gray-600">{phoneNumber}</p>
        </div>
        <div className="bg-white shadow-md rounded-lg p-6 w-full text-center cursor-pointer" onClick={handlePhoneClick2}>
          <div className="text-4xl mb-4 text-green-500"><FaPhone /></div>
          <h3 className="text-2xl font-semibold mb-2 text-gray-800">Phone2</h3>
          <p className="text-lg text-gray-600">{phoneNumber2}</p>
        </div>
      </section>
    </div>
  );
};

export default ContactMe;
