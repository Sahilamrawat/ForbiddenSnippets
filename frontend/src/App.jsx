import { BrowserRouter ,Routes, Route } from 'react-router-dom'
import React from 'react'
import "./index.css"    
import Navheader from './Components/Navheader'

function App() {

  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/"element={<Home/>}/>
    
        </Routes>
      </BrowserRouter>
    </div>
  )
}
export function Home(){
  return(
    <>
    <Navheader />
    <div>
      <h1>Home</h1>
    </div>
    </>
    
  )
}

export default App
