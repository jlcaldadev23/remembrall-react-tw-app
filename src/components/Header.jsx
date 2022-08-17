import React from "react";
import images from "../constants/images";

const Header = () => {
  return (
    <div className="flex items-center flex-start py-2 space-x-4">
      <img src={images.remembrall} alt="logo" className="w-20 h-20" />
      <div className="flex flex-col space-y-2">
        <span className="block uppercase text-2xl font-bold">Remembrall</span>
        <span className="block text-sm font-thin">
          Search it, paste it and we remember.
        </span>
      </div>
    </div>
  );
};

export default Header;
