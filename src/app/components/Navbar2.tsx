import React from "react";
import { IoIosSearch } from "react-icons/io";
import { MdShoppingCart } from "react-icons/md";
import { IoPersonCircleOutline } from "react-icons/io5";
import { GiHamburgerMenu } from "react-icons/gi";
import Link from "next/link";

const Navbar2 = () => {
    return (
        <>
            <nav className="bg-[#2A254B] text-[#FFFFFF] py-2">
                <div className="container mx-auto px-4 flex justify-between items-center">

                    <p className="flex gap-3 justify-center">
                        <svg width="16" height="17" viewBox="0 0 16 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <rect width="16" height="16" transform="translate(0 0.5)" fill="white" style={{ mixBlendMode: "multiply" }} />
                            <path d="M8 8.5H2V9.5H8V8.5Z" fill="white" />
                            <path d="M6 6H1V7H6V6Z" fill="white" />
                            <path d="M14.9594 8.8032L13.4594 5.3032C13.421 5.21319 13.357 5.13646 13.2753 5.08256C13.1936 5.02865 13.0979 4.99994 13 5H11.5V4C11.5 3.86739 11.4473 3.74021 11.3536 3.64645C11.2598 3.55268 11.1326 3.5 11 3.5H3V4.5H10.5V10.7781C10.2722 10.9104 10.0728 11.0865 9.91339 11.2962C9.75395 11.5059 9.6376 11.7451 9.57105 12H6.42895C6.30725 11.5287 6.01784 11.1179 5.61495 10.8447C5.21206 10.5715 4.72336 10.4546 4.24045 10.5159C3.75754 10.5773 3.31358 10.8126 2.99179 11.1779C2.66999 11.5431 2.49246 12.0132 2.49246 12.5C2.49246 12.9868 2.66999 13.4569 2.99179 13.8221C3.31358 14.1874 3.75754 14.4227 4.24045 14.4841C4.72336 14.5454 5.21206 14.4285 5.61495 14.1553C6.01784 13.8821 6.30725 13.4713 6.42895 13H9.57105C9.68007 13.4289 9.92892 13.8092 10.2783 14.0808C10.6276 14.3525 11.0575 14.4999 11.5 14.4999C11.9425 14.4999 12.3724 14.3525 12.7217 14.0808C13.0711 13.8092 13.3199 13.4289 13.429 13H14.5C14.6326 13 14.7598 12.9473 14.8536 12.8536C14.9473 12.7598 15 12.6326 15 12.5V9C15 8.93233 14.9862 8.86537 14.9594 8.8032ZM4.5 13.5C4.30222 13.5 4.10888 13.4414 3.94443 13.3315C3.77998 13.2216 3.65181 13.0654 3.57612 12.8827C3.50043 12.7 3.48063 12.4989 3.51921 12.3049C3.5578 12.1109 3.65304 11.9327 3.79289 11.7929C3.93275 11.653 4.11093 11.5578 4.30491 11.5192C4.49889 11.4806 4.69996 11.5004 4.88268 11.5761C5.06541 11.6518 5.22159 11.78 5.33147 11.9444C5.44135 12.1089 5.5 12.3022 5.5 12.5C5.4997 12.7651 5.39424 13.0193 5.20677 13.2068C5.0193 13.3942 4.76512 13.4997 4.5 13.5ZM11.5 6H12.6704L13.742 8.5H11.5V6ZM11.5 13.5C11.3022 13.5 11.1089 13.4414 10.9444 13.3315C10.78 13.2216 10.6518 13.0654 10.5761 12.8827C10.5004 12.7 10.4806 12.4989 10.5192 12.3049C10.5578 12.1109 10.653 11.9327 10.7929 11.7929C10.9327 11.653 11.1109 11.5578 11.3049 11.5192C11.4989 11.4806 11.7 11.5004 11.8827 11.5761C12.0654 11.6518 12.2216 11.78 12.3315 11.9444C12.4414 12.1089 12.5 12.3022 12.5 12.5C12.4997 12.7651 12.3942 13.0193 12.2068 13.2068C12.0193 13.3942 11.7651 13.4997 11.5 13.5ZM14 12H13.429C13.3188 11.5717 13.0696 11.1921 12.7206 10.9207C12.3715 10.6492 11.9422 10.5013 11.5 10.5V9.5H14V12Z" fill="white" />
                        </svg>
                        Free delivery on all orders over $50 with code EASTER checkout</p>
                    <button className="text-sm font-bold">X</button>
                </div>
            </nav>

            <header className="text-gray-400 body-font">
                <div className="container mx-auto flex flex-wrap p-5 md:flex-row justify-between items-center">
                    <button className="flex order-first  title-font font-medium items-center text-white lg:items-center lg:justify-center">
                        <Link href={"/"} className="ml-3 text-xl xl:block text-black" style={{ fontFamily: "Clash Display" }}>Avion</Link>
                    </button>
                    <div className="hidden sm:block">
                        <Link href={"/Products"} className="mr-5" style={{ fontFamily: "Satoshi" }}>Plant pots</Link>
                        <Link href={"/Plisting"} className="mr-5" style={{ fontFamily: "Satoshi" }}>Ceramics</Link>
                        <a className="mr-5" style={{ fontFamily: "Satoshi" }}>Tables</a>
                        <a className="mr-5" style={{ fontFamily: "Satoshi" }}>Chairs</a>
                        <a className="mr-5" style={{ fontFamily: "Satoshi" }}>Crockery</a>
                        <a className="mr-5" style={{ fontFamily: "Satoshi" }}>Tableware</a>
                        <a className="mr-5" style={{ fontFamily: "Satoshi" }}>Cutlery</a>
                    </div>
                    <div className="lg:w-2/5 flex    lg:justify-end ml-5 lg:ml-0 gap-4 text-black">
                        <nav>
                            <IoIosSearch />
                        </nav>
                        <nav>
                            <MdShoppingCart />
                        </nav>
                        <nav>
                            <IoPersonCircleOutline />
                        </nav>
                        <nav>
                            <span className="flex md:hidden pl-2">
                                <GiHamburgerMenu />
                            </span>
                        </nav>
                    </div>

                </div>
            </header>
            <hr />
        </>
    )
}

export default Navbar2;