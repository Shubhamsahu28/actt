import React from 'react'
import { useState } from 'react';
import { Link } from 'react-router-dom';
import Search from './Search';
// import { Container, TextField } from "@mui/material";





const Navbar = () => {

    const [isHidden,setIsHidden] = useState(false)
    
    const sideBar = () => {
        setIsHidden(!isHidden);
    }
    
  return (
    <nav className=' max-w-full flex flex-col justify-between mx-1 sm:mx-0 sm:bg-[#FFFFFF]  mt-4 sm:mt-0 sm:py-4  sm:fixed sm:bg-opacity-[0.9] z-50 sm:w-full sm:h-[8vh]'>
        <div className="max-w-full flex flex-row justify-between mx-1  mt-1 sm:justify-evenly sm:relative sm:bottom-[50%]">
            <div className=' w-[20%] mt-2 sm:h-[4vh] sm:mt-2 sm:w-[10%] sm:flex logo_img'>
                <Link to="/">< img src={require('../image/logo.png')} alt="" /></Link>
            </div>
            <div onClick={() => sideBar()} className='  sm:hidden w-[8%] h-[4vh] my-2 cursor-pointer outline-none mr-4'>
                <div className=' w-7 h-1 bg-black rounded '></div>
                <div className=' w-7 h-1 bg-black rounded my-1'></div>
                <div className=' w-7 h-1 bg-black rounded '></div>
            </div>
            <ul className='  w-[75%] hidden  md:flex sm:flex sm:flex-row sm:justify-evenly md:justify-evenly font-poppins font-[300] sm:text-[1rem] navv'>
                <Link to='/' onClick={() => setIsHidden(false)} className=" hover:text-slate-400 mr-8 mt-2 one">Home</Link>
                <Link to='/about' onClick={() => setIsHidden(false)} className=" hover:text-slate-400 mr-8 mt-2 two">About us</Link>
                <Link onClick={() => setIsHidden(false)} to='/services' className="mt-2 hover:text-slate-400 mx-1 three">Services</Link>
                {/* <Link to='/solution' className="  hover:text-slate-400 mx-1 mt-2 ml-8">Solution</Link> */}
                {/* <li className='w-[200px] mx-12 h-[5vh] flex justify-center mt-2'><img className='h-[1px] mt-3' src={require('../image/Line1.png')} alt="" /></li> */}
                <Link><Search /></Link>
                <Link onClick={() => setIsHidden(false)} to='/engine' className="mt-2  hover:text-slate-400 mx-1 four">karam.ai</Link>
                <Link onClick={() => setIsHidden(false)} to='/contact' className="mt-2  hover:text-slate-400 mx-1 five">Contact</Link>
                {/* <TextField  type="search" id="search" label="Search"/> */}
                {/* <Search /> */}
                {/* <Link onClick={() => setIsHidden(false)} to='/' className="sm:relative sm:bottom-[5%] mb-1 w-[12%]  justify-center h[12vh] flex  hover:text-slate-400 mx-1"><div className=' border-[1px] border-black w-[30%] mb-2 h-[5vh] flex justify-center rounded-[50%] mt-2'><p className='mt-1 sm:relative sm:top-[3%]'>EN</p></div></Link> */}
            </ul>
            {isHidden && <ul className=" font-poppins font-[300] sm:hidden  list-none text-lg text-center absolute top-0 bottom-0  flex flex-col bg-cyan-100 h-full w-[60%] m-2 mt-1  rounded-xl  right-0 text-black ">
                <span onClick={() => sideBar()} className=' w-[90%] text-6xl text-right cursor-pointer '>&times;</span>
                <Link to='/' onClick={() => setIsHidden(false)} className="inline p-4 mt- hover:text-slate-400 mx-1">Home</Link>
                <Link to='/about' onClick={() => setIsHidden(false)} className="inline p-4 mt- hover:text-slate-400 mx-1">About us</Link>
                <Link onClick={() => setIsHidden(false)} to='/services' className="inline p-4 hover:text-slate-400 mx-1">Services</Link>
                <Link onClick={() => setIsHidden(false)} to='/engine' className="inline p-4 hover:text-slate-400 mx-1">karam.ai</Link>
                <Link onClick={() => setIsHidden(false)} to='/contact' className="inline p-4 hover:text-slate-400 mx-1">Contact</Link>
            </ul>
            
            }
        </div>
        
    </nav>
  )
}

export default Navbar
