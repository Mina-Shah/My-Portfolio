import React, { useState } from 'react';

const Contact = () => {
  const [showEmail, setShowEmail] = useState(false);

  const handleClick = () => {
    setShowEmail(true);
  };

  return (
    <div className="flex flex-col mt-20 mb-10 items-center animate-slide-in-up">
      <button
        onClick={handleClick}
        className="px-6 py-3 bg-yellow-500 text-black text-lg font-semibold rounded-3xl shadow-md hover:bg-yellow-600 "
      >
        Contact Me
      </button>

      {showEmail && (
        <p className="mt-4 text-yellow-500 text-lg font-medium">
          Email: <a href="mailto:shahmina814@gmail.com" className="text-yellow-500 hover:underline">shahmina814@gmail.com</a>
        </p>
      )}
    </div>
  );
};

export default Contact;
