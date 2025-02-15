import React from 'react'
import SavingsIcon from '@mui/icons-material/Savings';
import LoginIcon from '@mui/icons-material/Login';
import './Style.css'

function Navheader() {
    return (
      <div className='Nav-Container bg-[#191A19] w-full min-h-[5vh]  text-white flex items-center px-10 py-4 flex-wrap'>
        <div className='Logo-Container flex items-center'>
          <SavingsIcon fontSize='large' />
          <h1 className='ml-2 font-bold text-xl'>TRUST POOL</h1>
        </div>

        <div className='Item-Container flex-grow w-auto p-3'>
          <ul className='flex justify-center text-lg gap-9 flex-wrap'>
            {/* <li className='List-Items cursor-pointer'>Ride</li>
            <li className='List-Items cursor-pointer'>Drive</li>
            <li className='List-Items cursor-pointer'>About</li> */}
          </ul>
        </div>

        <div className='Sign-In-btn ml-auto bg-[#4E9F3D] text-white px-4 py-2 rounded-lg flex items-center gap-2'>
          <button >Sign In</button>
          <LoginIcon />
        </div>
      </div>
    )
}



export default Navheader