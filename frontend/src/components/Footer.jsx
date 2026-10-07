import React from "react";
import { assets } from "../assets/frontend_assets/assets";

const Footer = () => {
  return (
    <div>
      <div className="flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10 mt-40 text-sm ">
        <div>
          <img src={assets.logo} alt="" className="mb-5 w-32 " />
          <p className="w-full md:w-2/3 text-gray-600">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nobis
            reprehenderit incidunt dignissimos. Id aliquam quis, minus maiores
            recusandae et, reiciendis earum amet pariatur vel quos unde ut
            suscipit adipisci saepe odio nisi?
          </p>
        </div>
        <div>
          <h2 className="text-xl font-medium mb-5">COMPANY</h2>
          <ul className="flex flex-col gap-1 text-gray-600">
            <li>Home</li>
            <li>About</li>
            <li>Delivery</li>
            <li>Privacy policy</li>
          </ul>
        </div>
        <div>
          <h2 className="text-xl font-medium mb-5">GET IN TOUCH</h2>
          <ul className="flex flex-col gap-1 text-gray-600">
            <li>+1 (215) 845-0403</li>
            <li>forever@contact.com</li>
          </ul>
        </div>
      </div>
      <div className="text-center mt-10 mb-10 border-t  pt-5">
        <p>Copyright 2024@ forever.com - All Right Reserved.</p>
      </div>
    </div>
  );
};

export default Footer;
