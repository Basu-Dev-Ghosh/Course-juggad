import React from "react";
import { AiOutlineShoppingCart } from "react-icons/ai";

const ShoppingCart = () => {
  return (
    <div className="group relative mr-44 md:mr-10">
      <AiOutlineShoppingCart
        size={24}
        className="cursor-pointer transition-all duration-150 ease-in-out hover:scale-95 active:scale-90"
      />
      <span className="group-hover:scale-90 transition-all duration-150 ease-in-out -top-4 -right-4 w-5 h-5 flex justify-center items-center absolute rounded-full bg-red-500 text-xs text-white">
        2
      </span>
    </div>
  );
};

export default ShoppingCart;
