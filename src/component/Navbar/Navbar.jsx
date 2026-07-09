import React from 'react';
import logoImg from "../../assets/logo.png";
import dollarImg from "../../assets/Currency.svg"

const Navbar = () => {
    return (
        <div>
             <div className="navbar primary-font bg-white max-w-300 mx-auto px-4 py-2 flex items-center justify-between">
                    <div className="flex-1">
                      <img src={logoImg} alt="Logo" />
                    </div>
                    <div className="flex gap-2 items-center border border-gray-300 rounded-lg px-4 py-2">
                      <span>6000000000</span> <span>Coin</span>  <img src={dollarImg} alt="Dollar" />
                    </div>
                  </div>
        </div>
    );
};

export default Navbar;