import Link from "next/link";
import React from "react";

const Hero = () => {
    return (
        <>
            <div className="sm:p-12">
                <div className="flex flex-col md:flex-row items-center justify-between bg-[#2A254B] text-white">
                    <div className="p-8 md:w-1/2">
                        <h1 className="text-4xl font-bold mb-4" style={{ fontFamily: "Clash Display" }}>The furniture brand for the future, with timeless designs</h1><br />
                        <button className="bg-[#F9F9F926] text-white font-bold py-2 px-4 rounded hidden sm:block" style={{ fontFamily: "Satoshi" }}><Link href={"/Shopping"}>View Collection</Link></button>
                        <p className="mt-8" style={{ fontFamily: "Satoshi" }}>A new era in eco-friendly furniture with Avelon, the French luxury retail brand with nice fonts, tasteful colors, and a beautiful way to display things digitally using modern web technologies.</p><br />
                        <button className="bg-[#F9F9F926] text-white font-bold py-2 px-4 rounded md:hidden w-full" style={{ fontFamily: "Satoshi" }}>View Collection</button>

                    </div>
                    <div className="hidden sm:block">
                        <img src="/images/Right Image.png" alt="Chair" className="w-full h-full" />
                    </div>
                </div>
            </div>
        </>
    )
}

export default Hero;