import { ArrowUp, Share2 } from "lucide-react";
import React, { useState } from "react";
import { FaFacebook, FaInstagram, FaWhatsapp } from "react-icons/fa";

export const SocialNetworks = () => {
  const [showSocialButtons, setShowSocialButtons] = useState(false);

  const toggleSocialButtons = () => {
    setShowSocialButtons(!showSocialButtons);
  };
  return (
    <div className="fixed bottom-8 right-8 z-50">
      <button
        onClick={toggleSocialButtons}
        className="bg-neutral-950 hover:bg-neutral-700 p-4 rounded-full shadow-md transition-transform transform hover:scale-110 focus:outline-none ">
        <Share2 size={24} className="text-white " />
      </button>
      {showSocialButtons && (
        <div className="absolute bottom-20 right-0 flex flex-col gap-2">
          <a
            href="https://api.whatsapp.com/send?phone=3137352822"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-green-500 hover:bg-green-600 p-4 rounded-full shadow-md text-white flex items-center justify-center transition-colors duration-300">
            <FaWhatsapp size={23} />
          </a>
          <a
            href="https://www.facebook.com/ropafabisam.arroyave.5"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-blue-500 hover:bg-blue-600 p-4 rounded-full shadow-md text-white flex items-center justify-center transition-colors duration-300">
            <FaFacebook size={23} />
          </a>
          <a
            href="https://www.instagram.com/tenisjes_oficial/"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-pink-500 hover:bg-pink-600 p-4 rounded-full shadow-md text-white flex items-center justify-center transition-colors duration-300">
            <FaInstagram size={23} />
          </a>
        </div>
      )}
    </div>
  );
};
