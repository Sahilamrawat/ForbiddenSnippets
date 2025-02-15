import React from "react";
import Navheader from "./Navheader";
import OurVision from "../assets/OurVision.svg";
import Offer from "../assets/Offer.svg";
import Choose from "../assets/Choose.svg";

function AboutPage(){
    return(
        <div>
            <Navheader />
            <About/>
        </div>
    )
}
export default AboutPage




function About() {
  return (
    <div className="w-[80%] h-auto bg-white text-black p-10 m-auto flex flex-col items-center justify-center ">
      <div className="w-[100%] mx-auto">
        {/* Header */}
        <h1 className="text-[60px] font-bold text-left mb-6 text-[#4E9F3D] ">About Us</h1>

        {/* Section: Introduction */}
        <section className=" mb-20 flex items-center  justify-center ">
            
            <div className=" p-10 w-[40%] hover:scale-110 transition-transform duration-500">
                <h2 className="text-2xl font-semibold mb-4">Our Vision</h2>
                <p className="text-lg w-[80%]">
                    Welcome to <span className="font-bold text-blue-600">Share Pool</span>, 
                    the ultimate solution for effortless money management. We believe that financial support should be accessible, flexible, and built on trust. Traditional banking systems often create barriers with strict requirements and collateral-based loans, making it difficult for many to get timely assistance. Our platform empowers families, relatives, and trusted communities to create shared financial pools, ensuring that funds are available when needed—without the high interest rates or rigid policies of conventional banks.

                </p>
            </div>
            <img src={OurVision} className=" w-[700px] h-[400px]" alt="" />
        </section>

        {/* Section: Features */}
        <section className="mb-20 flex items-center  justify-center">
            <img src={Offer} alt="" />
            <div className="p-10 w-[60%] hover:scale-110 transition-transform duration-500">
                <h2 className="text-2xl font-semibold mb-4">What We Offer</h2>
                <ul className="list-disc list-inside space-y-2 text-lg">
                    <li>
                    <span className="font-bold text-blue-600">Create or Join a Pool:</span> Trusted members contribute funds to a common pool.

                    </li>
                    <li>
                    <span className="font-bold text-blue-600">Borrow When Needed:</span> Members can borrow based on eligibility, need, and priority levels.

                    </li>
                    <li>
                    <span className="font-bold text-blue-600">Fair Interest Rates:</span> Predefined slabs ensure affordable borrowing.

                    </li>
                    <li>
                    <span className="font-bold text-blue-600">Auto Repayment System:</span> Linked bank accounts enable smooth transactions.
                    
                    </li>
                    <li>
                    <span className="font-bold text-blue-600">Secure & Transparent:</span> Verified users and strong fraud prevention measures.

                    
                    </li>
                </ul>
            </div>
            
        </section>

        {/* Section: Why Choose Us */}
        <section className="mb-20 flex items-center  justify-center">
          <div className="p-10 w-[60%] hover:scale-110 transition-transform duration-500">
            <h2 className="text-2xl font-semibold mb-4">Why Choose Digital Wallet?</h2>
            <ul className="list-disc list-inside space-y-2 text-lg">
                    <li>
                    <span className="font-bold text-blue-600">No Collateral Required:</span> Access financial support without pledging assets.
                    </li>
                    <li>
                    <span className="font-bold text-blue-600">Low Interest Rates:</span>  Get loans at affordable rates within your trusted network.

                    </li>
                    <li>
                    <span className="font-bold text-blue-600">Smart Risk Management:</span> Auto-deduction ensures repayments, reducing risk for contributors.


                    </li>
                    <li>
                    <span className="font-bold text-blue-600">Community-Driven:</span> Built for families and close-knit communities, ensuring trust and transparency.

                    
                    </li>
                
                </ul>
          </div>
          <img src={Choose} alt="" />
        </section>

        {/* Section: Contact Information */}
        <section className="mb-10">
          <h2 className="text-2xl font-semibold mb-4">Get In Touch</h2>
          <p className="text-lg">
            Have questions or need support? Reach out to us at:
          </p>
          <ul className="list-none mt-4 space-y-2 text-lg">
            <li><i className="fas fa-envelope text-blue-600"></i> Email: support@sharepool.com</li>
            <li><i className="fas fa-phone text-blue-600"></i> Phone: +1 234-567-890</li>
            <li><i className="fas fa-map-marker-alt text-blue-600"></i> Address:DLF Cyber City
                Building 10, Tower A
                DLF Phase 2, Sector 24
                Gurugram, Haryana 122002
                India</li>
          </ul>
        </section>

        {/* Footer */}
        <footer className="text-center text-sm text-gray-600 mt-10">
          © {new Date().getFullYear()} Share Pool. All Rights Reserved.
        </footer>
      </div>
    </div>
  );
}

