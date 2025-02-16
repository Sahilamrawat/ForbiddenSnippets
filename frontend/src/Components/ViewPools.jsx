import React, { useState } from "react";
import Navheader from "./Navheader";
import Footer from "./Footer";

function PoolCard({ pool, index, onClick }) {
  return (
    <div
      className="w-max h-60 bg-[#f0c77b71] shadow-lg rounded-lg flex flex-col justify-center items-start relative p-4 m-4 cursor-pointer hover:bg-gray-200"
      onClick={() => onClick(pool)}
    >
      <h2 className="font-bold text-gray-700 text-[35px]">{pool.name}</h2>
      <p className="text-gray-600 text-[20px]">Members: {pool.members.length}</p>
      <p className="text-gray-600 text-[20px]">Interest Rate: {pool.interest}%</p>
      <p className="text-gray-600 text-[20px]">Pooled Amount: ${pool.amount}</p>
    </div>
  );
}

function PoolOverlay({ pool, onClose }) {
  return (
    <div className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 flex justify-center items-center">
      <div className="bg-white text-black p-6 rounded-lg w-96">
        <h2 className="text-2xl font-bold mb-4">{pool.name} - Members</h2>
        <table className="w-full border-collapse border border-gray-400">
          <thead>
            <tr className="bg-gray-200">
              <th className="border border-gray-400 px-4 py-2">Name</th>
              <th className="border border-gray-400 px-4 py-2">Contribution ($)</th>
            </tr>
          </thead>
          <tbody>
            {pool.members.map((member, index) => (
              <tr key={index} className="text-center">
                <td className="border border-gray-400 px-4 py-2">{member.name}</td>
                <td className="border border-gray-400 px-4 py-2">{member.contribution}</td>
              </tr>
            ))}
          </tbody>
        </table>
        <button
          className="mt-4 bg-red-500 text-white px-4 py-2 rounded hover:bg-red-700 w-full"
          onClick={onClose}
        >
          Close
        </button>
      </div>
    </div>
  );
}

function ViewPools() {
  const [pools] = useState([
    {
      name: "Alpha Fund",
      interest: 5.2,
      amount: 50000,
      members: [
        { name: "Alice", contribution: 10000 },
        { name: "Bob", contribution: 15000 },
        { name: "Charlie", contribution: 25000 },
      ],
    },
    {
      name: "Beta Pool",
      interest: 4.8,
      amount: 40000,
      members: [
        { name: "David", contribution: 8000 },
        { name: "Eve", contribution: 12000 },
        { name: "Frank", contribution: 20000 },
      ],
    },
    {
      name: "Gamma Trust",
      interest: 6.1,
      amount: 60000,
      members: [
        { name: "Grace", contribution: 20000 },
        { name: "Heidi", contribution: 25000 },
        { name: "Ivan", contribution: 15000 },
      ],
    },
    {
      name: "Delta Savings",
      interest: 5.5,
      amount: 75000,
      members: [
        { name: "Jack", contribution: 30000 },
        { name: "Kim", contribution: 25000 },
        { name: "Liam", contribution: 20000 },
      ],
    },
  ]);

  const [selectedPool, setSelectedPool] = useState(null);

  return (
    <>
    <Navheader/>
    <div className=" p-6 text-white h-max">
      <h2 className="text-3xl font-bold mb-6 text-center text-black">My Pools</h2>
      <div className="flex flex-wrap justify-center">
        {pools.map((pool, index) => (
          <PoolCard key={index} pool={pool} onClick={setSelectedPool} />
        ))}
      </div>

      {selectedPool && <PoolOverlay pool={selectedPool} onClose={() => setSelectedPool(null)} />}
    </div>
    <Footer/>
    </>
    
  );
}

export default ViewPools;
