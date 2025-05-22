import React, { useState } from 'react';

const Contact = () => {
  const [showEmail, setShowEmail] = useState(false);

  return (
    <div className="flex flex-col mt-20 mb-10 items-center animate-slide-in-up">
   

      
        <p className="mt-4 text-teal-400 text-lg font-medium">
          Email: <a href="mailto:shahmina814@gmail.com" className="text-teal-400 hover:underline">shahmina814@gmail.com</a>
        </p>
      
    </div>
  );
};

export default Contact;
