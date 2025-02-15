import React from "react";
import { FaMobileAlt } from "react-icons/fa";
import { FaRegLightbulb } from "react-icons/fa";
import { GiTv } from "react-icons/gi";
import { MdOutlineSchool } from "react-icons/md";
import { IoWaterOutline } from "react-icons/io5";
import { FaArrowRight } from "react-icons/fa6";

import { useNavigate } from "react-router-dom";
import "./Style.css";
import { Card } from "@mui/material";
function FeaturesSection() {
  const navigate = useNavigate();
  return (
    <>
    <div className="bg-[#4E9F3D] p-5 flex flex-col items-center">
      <h1 className="text-[40px] text-white ">Features</h1>

      <div className="flex  pb-8 mt-[40px] ">
        <div className="cards w-[150px] flex flex-col justify-centre items-center gap-1 py-5  px-5 rounded-[10px] text-white  " onClick={() => navigate('/recharge?activeIndex=0')}>
          <div className="bg-white w-20 flex justify-center items-center h-20  rounded-full">
            <FaMobileAlt className="text-[40px] text-[#4E9F3D]" />
          </div>

          <span className="text-[20px]">
            Recharge <br />
            Prepaid <br />
            Mobile
          </span>
        </div>



        <div className="cards w-[150px] flex flex-col  justify-centre items-center gap-1 py-5  px-5 rounded-[10px] text-white  " onClick={() => navigate('/recharge?activeIndex=1')}>
          <div className="bg-white w-20 flex justify-center items-center h-20  rounded-full">
            <FaRegLightbulb className="text-[40px] text-[#4E9F3D]" />
          </div>

          <span className="text-[20px]">
            Pay <br />
            Electricity <br />
            Bill
          </span>
        </div>


        <div className="cards w-[150px] flex flex-col justify-centre items-center gap-1 py-5  px-5 rounded-[10px] text-white  "onClick={() => navigate('/recharge?activeIndex=2')}>
          <div className="bg-white w-20 flex justify-center items-center h-20  rounded-full">
            <GiTv className="text-[40px] text-[#4E9F3D]" />
          </div>

          <span className="text-[20px]">
            Recharge <br />
            TV <br />
            
          </span>
        </div>


        <div className="cards w-[150px] flex flex-col justify-centre items-center gap-1 py-5  px-5 rounded-[10px] text-white  "onClick={() => navigate('/recharge?activeIndex=3')}>
          <div className="bg-white w-20 flex justify-center items-center h-20  rounded-full">
            <IoWaterOutline className="text-[40px] text-[#4E9F3D]" />
          </div>

          <span className="text-[20px]">
            Pay <br />
            Water <br />
            Bill
            
          </span>
        </div>


        <div className="cards w-[150px] flex flex-col justify-centre items-center gap-1 py-5  px-5 rounded-[10px] text-white  " onClick={() => navigate('/recharge?activeIndex=4')}>
          <div className="bg-white w-20 flex justify-center items-center h-20  rounded-full">
            <MdOutlineSchool className="text-[40px] text-[#4E9F3D]" />
          </div>

          <span className="text-[20px]">
            Pay <br />
            Education <br />
            Fee
          </span>
        </div>


        <div className="cards w-[150px] flex flex-col justify-centre items-center gap-1 py-5  px-5 rounded-[10px] text-white  " onClick={() => navigate('/recharge?activeIndex=5')}>
          <div className="bg-white w-20 flex justify-center items-center h-20  rounded-full">
            <FaArrowRight className="text-[40px] text-[#4E9F3D]" />
          </div>

          <span className="text-[20px]">
            Others <br />
            
          </span>
        </div>
       

        
      </div>
      
      
    </div>
    </>
  )
}
export default FeaturesSection