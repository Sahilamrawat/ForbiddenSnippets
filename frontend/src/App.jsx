import { BrowserRouter ,Routes, Route } from 'react-router-dom'
import React, { useState } from "react";

import AddIcon from "@mui/icons-material/Add";
import DeleteIcon from "@mui/icons-material/Delete";

import "./index.css"    
import Navheader from './Components/Navheader'
import hero from "../src/Assets/hero.svg";
import SavingsIcon from '@mui/icons-material/Savings';
import TermsAndCondition from './Components/TermsAndCondition';
import SignIn from './Components/SignIn';
import Login from './Components/Login';
import Profile from './Components/Profile';
import AboutPage from './Components/About';
import FeaturesSection from './Components/FeatureSection';

function App() {

  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/tNc" element={<TermsAndCondition/>}/>
          <Route path="/signin" element={<SignIn/>}/>
          <Route path="/login" element={<Login/>}/>
          <Route path="/profile" element={<Profile/>}/>
          <Route path="/about" element={<AboutPage/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  )
}



function PoolCard({ pool, index, onRemove }) {
  return (
    <div className="w-max h-60 bg-slate-100 shadow-lg rounded-lg flex flex-col justify-center items-start relative p-4">
      <h2 className="font-bold text-gray-700 text-[35px]">{pool.name}</h2>
      <p className="text-gray-600 text-[20px]">Members: {pool.members}</p>
      <p className="text-gray-600 text-[20px]">Interest Rate: {pool.interest}%</p>
      <p className="text-gray-600 text-[20px]">Pooled Amount: ${pool.amount}</p>
      <button
        onClick={() => onRemove(index)}
        className="absolute top-2 right-2 text-red-500 hover:text-red-700"
      >
        <DeleteIcon />
      </button>
    </div>
  );
}

function Overlay({ onClose, onCreate }) {
  const [poolName, setPoolName] = useState("");
  const [members, setMembers] = useState("");
  const [interest, setInterest] = useState("");
  const [amount, setAmount] = useState(0);

  const handleInvite = () => {
    alert("Members have been invited!");
  };

  const handleSubmit = () => {
    onCreate({ name: poolName, members, interest, amount });
    onClose();
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
      <div className="bg-white p-6 rounded-lg shadow-lg w-96 flex flex-col gap-4">
        <h2 className="text-xl font-bold">Create a Pool</h2>
        <input
          type="text"
          placeholder="Pool Name"
          value={poolName}
          onChange={(e) => setPoolName(e.target.value)}
          className="p-2 border rounded"
        />
        <input
          type="text"
          placeholder="Pool Members"
          value={members}
          onChange={(e) => setMembers(e.target.value)}
          className="p-2 border rounded"
        />
        <input
          type="number"
          placeholder="Interest Rate (%)"
          value={interest}
          onChange={(e) => setInterest(e.target.value)}
          className="p-2 border rounded"
        />
        <input
          type="number"
          placeholder="Pooled Amount ($)"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
          className="p-2 border rounded"
          disabled
        />
        <button onClick={handleInvite} className="bg-blue-500 text-white p-2 rounded">Invite Members</button>
        <button onClick={handleSubmit} className="bg-green-500 text-white p-2 rounded">Create Pool</button>
        <button onClick={onClose} className="text-red-500">Cancel</button>
      </div>
    </div>
  );
}

export function Hero() {
  const [pools, setPools] = useState([]);
  const [showOverlay, setShowOverlay] = useState(false);

  const handleCreatePool = (poolData) => {
    setPools((prevPools) => [...prevPools, poolData]);
  };

  const handleRemovePool = (index) => {
    setPools((prevPools) => prevPools.filter((_, i) => i !== index));
  };

  return (
    <>
      <div className="flex flex-col items-center gap-5 border-b p-2 py-5 ">
        <div className="flex justify-around items-center w-full">
          <div className="h-fit">
            <img src={hero} className="h-full" alt="hero" />
          </div>

          <div className="text-center flex flex-col items-center">
            <SavingsIcon className="text-[#191A19]" sx={{ fontSize: "7rem" }} />
            <h1 className="font-bold text-[50px] text-[#191A19]">Lend, Borrow, Grow Together!</h1>

            {pools.length === 0 && (
              <button
                onClick={() => setShowOverlay(true)}
                className="flex items-center h-[75px] gap-2 bg-[#4E9F3D] text-white font-semibold text-lg px-5 py-2 mt-4 rounded-lg shadow-md hover:scale-105 transition-transform duration-300"
              >
                <AddIcon className="h-6 w-6 " />
                <h1>Create Pool</h1>
              </button>
            )}
          </div>
        </div>
      </div>

      {pools.length > 0 && (
        <div className="pools-container flex flex-col items-center pb-5 bg-[#FCF7F8]">
          <h2 className="font-bold text-[40px] mb-3">Your Pools</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 place-items-center">
            {pools.map((pool, index) => (
              <PoolCard key={index} index={index} pool={pool} onRemove={handleRemovePool} />
            ))}
            {pools.length < 12 && (
              <button
                onClick={() => setShowOverlay(true)}
                className="w-20 h-20 bg-[#4E9F3D] text-white font-semibold text-lg rounded-lg shadow-md hover:scale-105 transition-transform duration-300 flex justify-center items-center"
              >
                <AddIcon className="h-10 w-10" />
              </button>
            )}
          </div>
        </div>
      )}

      {showOverlay && <Overlay onClose={() => setShowOverlay(false)} onCreate={handleCreatePool} />}
    </>
  );
}
``
export function Home(){
  return(
    <>
    <Navheader />
    
    <Hero />
    <FeaturesSection/>
    </>
    
  )
}

export default App
