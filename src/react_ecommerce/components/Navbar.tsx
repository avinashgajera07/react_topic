import React from "react";
import Link from "next/link";
import Image from "next/image";

import CustomButton from "./CustomButton";

function Navbar() {
  return (
    <header className="w-full absolute z-10">
      <nav className="max-w-[1440px] mx-auto flex justify-between items-center sm:px-16 py-4 px-6">
        <Link className="justify-center items-center" href="/">
          <Image src="/logo.svg" alt="Car Hub Logo" width={118} height={18} className="object-contain" />
        </Link>

        <CustomButton
        title="Sign In"
        containerStyles="text-primary rounded-full bg-white min-w-[130px]"
        btnType="button"
        />
      </nav>
    </header>
  );
}

export default Navbar;
