import React from "react";
import { FaWallet } from "react-icons/fa";
import { FaHistory } from "react-icons/fa";
import { MdOutlineEventNote } from "react-icons/md";
import { AiOutlineFundView } from "react-icons/ai";
import { useNavigate } from "react-router-dom";
import "./Style.css";

function FeaturesSection() {
  const navigate = useNavigate();

  return (
    <>
      <div className="bg-[#191A19]  flex flex-col items-center">
        <h1 className="text-[40px] text-white ">Features</h1>

        <div className="flex pb-8 mt-[40px] gap-4">
          <div
            className="cards w-[200px] flex flex-col justify-center items-center gap-1 py-5 px-5 rounded-[10px] text-white"
            onClick={() => navigate("/view-pools")}
          >
            <div className="bg-white w-20 flex justify-center items-center h-20 rounded-full">
              <AiOutlineFundView className="text-[40px] text-[#4E9F3D]" />
            </div>
            <span className="text-[20px] text-center">View <br /> Pools</span>
          </div>

          <div
            className="cards w-[200px] flex flex-col justify-center items-center gap-1 py-5 px-5 rounded-[10px] text-white"
            onClick={() => navigate("/profile", { state: { activeIndex: 1 } })}
          >
            <div className="bg-white w-20 flex justify-center items-center h-20 rounded-full">
              <FaWallet className="text-[40px] text-[#4E9F3D]" />
            </div>
            <span className="text-[20px] text-center">My <br /> Wallet</span>
          </div>

          <div
            className="cards w-[200px] flex flex-col justify-center items-center gap-1 py-5 px-5 rounded-[10px] text-white"
            onClick={() => navigate("/profile", { state: { activeIndex: 2 } })}
          >
            <div className="bg-white w-20 flex justify-center items-center h-20 rounded-full">
              <FaHistory className="text-[40px] text-[#4E9F3D]" />
            </div>
            <span className="text-[20px] text-center">View <br/> History</span>
          </div>

          <div
            className="cards w-[200px] flex flex-col justify-center items-center gap-1 py-5 px-5 rounded-[10px] text-white"
            onClick={() => navigate("/profile", { state: { activeIndex: 3 } })}
          >
            <div className="bg-white w-20 flex justify-center items-center h-20 rounded-full">
              <MdOutlineEventNote className="text-[40px] text-[#4E9F3D]" />
            </div>
            <span className="text-[20px] text-center">View <br/>Deadlines</span>
          </div>
        </div>
      </div>
    </>
  );
}

export default FeaturesSection;
