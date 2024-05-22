import React from "react";
import { IoMailSharp } from "react-icons/io5";
import { FaGithub } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa6";
import { BsFillThreadsFill } from "react-icons/bs";
import { GoDot } from "react-icons/go";




const Footer = () => {
  return (
    <footer className="fixed bottom-0 w-full bg-white">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 xl:max-w-5xl xl:px-0 flex items-center flex-col">
        <div className="pb-4 flex flex-row gap-5">
        <IoMailSharp className="size-5 text-muted hover:text-blue-500"/>
        <FaGithub className="size-5 text-muted hover:text-blue-500"/>
        <FaFacebook className="size-5 text-muted hover:text-blue-500"/>
        <FaYoutube className="size-5 text-muted hover:text-blue-500"/>
        <FaLinkedin className="size-5 text-muted hover:text-blue-500"/>
        <FaXTwitter className="size-5 text-muted hover:text-blue-500"/>
        <FaInstagram className="size-5 text-muted hover:text-blue-500"/>
        <BsFillThreadsFill className="size-5 text-muted hover:text-blue-500"/>
        </div>
        <div className="flex flex-row items-center gap-6 mb-2">
            <div>Beyza Bay</div>
            <div><GoDot className="size-2"/> </div>
            <div>© 2024</div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;


