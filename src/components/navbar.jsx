import React from "react";
import Link from "next/link";
import NavbarLinks from "./navbarLinks";

export default function Navbar() {
  return (
    <div>
      <nav className=" shadow-sm bg-white fixed w-full">
        <div className="w-full">
          <div className="flex items-center h-15 w-full">
            <div className="flex items-center  mx-5 justify-between w-full ">
              <div className="flex justify-center items-center flex-shrink-0 ">
                <Link href={"/inicio"}>
                  <h1 className="font-bold text-xl cursor-pointer">
                    Pixel project
                  </h1>
                </Link>
              </div>
              <div className="hidden md:block">
                <NavbarLinks />
              </div>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}
