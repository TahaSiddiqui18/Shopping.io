import React from "react";

const Properties = () => {
    return (
        <>
            <div className="flex flex-col md:flex-row items-center justify-between bg-[#FFFFFF] text-white">
                <div className="p-8 md:w-1/2">
                    <h1 className="text-4xl font-bold mb-4 text-[#2A254B]" style={{ fontFamily: "Clash Display" }}>From a studio in London to a global brand with over 400 outlets</h1>
                    <p className="mt-8 text-[#505977]" style={{ fontFamily: "Satoshi" }}>When we started Avion, the idea was simple. Make high quality furniture affordable and available for the mass market.   Handmade, and lovingly crafted furniture and homeware is what we live, breathe and design so our Chelsea boutique become the hotbed for the London interior design community.</p><br /><br />
                    <button className="bg-[#F9F9F9] text-[#2A254B] font-bold py-2 w-full sm:w-auto sm:px-4 "
                    style={{ fontFamily: "Satoshi" }}
                >
                    Get in touch
                </button>
                </div>
                <div>
                    <img src="/images/haaa.png" alt="Chair" className="w-full h-auto" />
                </div>
            </div>
        </>
    )
}
export default Properties;