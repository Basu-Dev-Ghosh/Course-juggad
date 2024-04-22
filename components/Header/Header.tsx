import React from "react";
import Logo from "./Logo";
import AuthButtons from "./AuthButtons";

const Header = () => {
  return (
    <header className="mx-3 md:mx-auto max-w-5xl  my-8 md:my-6 md:shadow-sm  md:bg-white max-h-[70px] px-2 md:px-8 py-2 md:py-8 rounded-3xl flex items-center justify-between">
      <Logo />
      <div className="flex items-center">
        {/* <ShoppingCart /> */}
        <AuthButtons />
      </div>
    </header>
  );
};

export default Header;
