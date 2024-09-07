"use client";

import { useState } from "react";
import { FaFacebookF, FaTwitter, FaLinkedinIn } from "react-icons/fa";
import { BsWhatsapp } from "react-icons/bs";

interface SocialShareButtonProps {
  url: string;
  title: string;
}

const SocialShareButton: React.FC<SocialShareButtonProps> = ({
  url,
  title,
}) => {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(url).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    });
  };

  return (
    <div className="flex items-center gap-2">
      <a
        href={`https://www.facebook.com/sharer/sharer.php?u=${url}&t=${title}`}
        target="_blank"
        rel="noopener noreferrer"
        className="text-blue-500 hover:text-blue-700"
      >
        <FaFacebookF size={24} />
      </a>
      <a
        href={`https://twitter.com/intent/tweet?text=${title}&url=${url}`}
        target="_blank"
        rel="noopener noreferrer"
        className="text-blue-500 hover:text-blue-700"
      >
        <FaTwitter size={24} />
      </a>
      <a
        href={`https://www.linkedin.com/shareArticle?mini=true&url=${url}&title=${title}`}
        target="_blank"
        rel="noopener noreferrer"
        className="text-blue-500 hover:text-blue-700"
      >
        <FaLinkedinIn size={24} />
      </a>
      <a
        href={`https://api.whatsapp.com/send?text=${title}%0A${url}`}
        target="_blank"
        rel="noopener noreferrer"
        className="text-green-500 hover:text-green-700"
      >
        <BsWhatsapp size={24} />
      </a>
      <button
        onClick={handleCopy}
        className={`px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:border-blue-500 ${
          copied ? "bg-green-500 text-white" : ""
        }`}
      >
        {copied ? "Copied!" : "Copy Link"}
      </button>
    </div>
  );
};

export default SocialShareButton;