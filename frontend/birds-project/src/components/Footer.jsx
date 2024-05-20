import React from "react";

const Footer = () => {
  return (
    <div className="bg-green-800 fixed text-white flex flex-col justify-center items-center  w-full bottom-0">
      <div className="logo font-bold text-white text-2xl">
        <span className="text-white">Which Bird Is It?</span>
      </div>
      <div className="flex justify-center items-center">
        {" "}
        Created with <img className="w-7 mx-2" src="eagle.png" alt="" />
        by sumerrr.iykyk{" "}
      </div>
    </div>
  );
};

export default Footer;
