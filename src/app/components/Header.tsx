import React from "react";
import { IoIosSearch } from "react-icons/io";
import { MdShoppingCart } from "react-icons/md";
import { IoPersonCircleOutline } from "react-icons/io5";
import { GiHamburgerMenu } from "react-icons/gi";
import Link from "next/link";

export const Header = () => {
    return (
        <>
            <header className="text-gray-400 body-font">
                <div className="container mx-auto flex flex-wrap p-5 md:flex-row justify-between items-center">
                    <nav className="flex lg:w-2/5 flex-wrap items-center text-base md:ml-auto text-black">
                        <IoIosSearch />
                        <span className="block md:hidden pl-2">
                            <GiHamburgerMenu />
                        </span>
                    </nav>
                    <button className="flex order-first lg:order-none lg:w-1/5 title-font font-medium items-center text-white lg:items-center lg:justify-center">
                    <Link href={"/"} className="ml-3 text-xl xl:block text-black" style={{ fontFamily: "Clash Display" }}>Avion</Link>
                    </button>
                    <div className="lg:w-2/5 hidden md:inline-flex lg:justify-end ml-5 lg:ml-0 gap-4 text-black">
                        <nav>
                            <MdShoppingCart />
                        </nav>
                        <nav>
                            <IoPersonCircleOutline />
                        </nav>
                    </div>

                </div>
            </header>
            <hr />
            <header className="text-[#726E8D] body-font hidden sm:block ">
                <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
                    <nav className="md:ml-auto md:mr-auto flex flex-wrap items-center text-base justify-center  gap-6">
                        <Link href={"/Products"} className="mr-5" style={{ fontFamily: "Satoshi" }}>Plant pots</Link>
                        <Link href={"/Plisting"} className="mr-5" style={{ fontFamily: "Satoshi" }}>Ceramics</Link>
                        <Link href={"/About"} className="mr-5" style={{ fontFamily: "Satoshi" }}>Tables</Link>
                        <a className="mr-5" style={{ fontFamily: "Satoshi" }}>Chairs</a>
                        <a className="mr-5" style={{ fontFamily: "Satoshi" }}>Crockery</a>
                        <a className="mr-5" style={{ fontFamily: "Satoshi" }}>Tableware</a>
                        <a className="mr-5" style={{ fontFamily: "Satoshi" }}>Cutlery</a>
                    </nav>
                </div>
            </header>
        </>
    )
}
export default Header;