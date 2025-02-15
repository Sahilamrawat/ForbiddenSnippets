import React from 'react'
import SavingsIcon from '@mui/icons-material/Savings';
import LoginIcon from '@mui/icons-material/Login';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { useNavigate } from "react-router-dom";
import './Style.css'

function Navheader() {
    const navigate = useNavigate();
    return (
      <div className='Nav-Container bg-[#191A19] w-full min-h-[5vh] text-white flex items-center justify-between px-10 py-4 flex-wrap'>
        
        {/* Grouped logo, name, and navigation items */}
        <div className='flex items-center gap-10'>
          <div className='Logo-Container flex items-center cursor-pointer' onClick={()=>navigate('/')}>
            <SavingsIcon fontSize='large' />
            <h1 className='ml-2 font-bold text-xl'>SHARE POOL</h1>
          </div>

          <div className='Item-Container'>
            <ul className='flex text-lg gap-9 flex-wrap'>
              <li className='List-Items cursor-pointer' onClick={()=>navigate('/')}>Home</li>
              <li className='List-Items cursor-pointer' onClick={()=>navigate('/about')}>About</li>
              <li className='List-Items cursor-pointer' onClick={()=>navigate('/tNc')}>Terms & Conditions</li>
            </ul>
          </div>
        </div>

        {/* Separate Sign-In button */}
        <div onClick={()=>navigate('/profile')} className='Sign-In-btn bg-[#4E9F3D] text-white  rounded-full flex items-center gap-2 cursor-pointer'>
          
          <AccountCircleIcon sx={{ fontSize: '3rem' }}/>
        </div>
      </div>
    )
}

export default Navheader;
