import React from 'react'
import { Link } from 'react-router-dom'
import img1 from "../../assets/navbar/logo.png"
import { useState, useEffect } from 'react'
import { RxHamburgerMenu } from "react-icons/rx";
import { RxCross1 } from "react-icons/rx";

const Navbar = () => { 
    const [showToggle, setShowToggle] = useState(false);

    useEffect(() => {
        window.addEventListener('scroll', ()=>{setShowToggle(false)});
    }, []);

    const showSidebar = () => {
        setShowToggle(true);
    }

    const closeSidebar = () => {
        setShowToggle(false);
    }



    useEffect(() => {
        window.addEventListener("resize", () => {
            setShowToggle(false);
        })
    }, [])


    return (
        <>

            <nav className={`px-2 md:px-14 lg:px-28 flex py-4 overflow-hidden sticky top-0 left-0 justify-between   z-[1000]  bg-white`}>
                <div className='flex justify-center items-center md:gap-x-10 lg:gap-x-20'>
                    <span className='flex space-x-1'>
                        <img src={img1} className='w-[1.5rem] h-[1.5rem]' />
                        <span className='text-black text-[1.34rem] font-[600] '>uifry</span>
                    </span>
                    <ul className='space-x-6 hidden md:flex' >
                        <Link className=' text-primary  text-[1.1rem] font-[800] '>Home</Link>
                        <Link className='font-semibold text-[1.1rem] text-black '>About us</Link>
                        <Link className='font-semibold text-[1.1rem] '>Pricing</Link>
                        <Link className='font-semibold text-[1.1rem] '>Feautres</Link>
                    </ul>

                    <ul className={`fixed right-0 top-0 w-[170px] h-lvh  bg-primary z-[1000] px-2 gap-y-4 flex flex-col py-6 list2 ${showToggle ? "translate-x-0" : "translate-x-[100%]"}  transition-all linear duration-[10000] z-[999]  md:!hidden dark:bg-gray-800 `}>
                        <div className='flex justify-end '><RxCross1 className='md:hidden cursor-pointer text-white text-2xl' onClick={closeSidebar} /></div>
                        <Link className='hover:translate-x-4 ease-in-out duration-150  text-white text-[1.1rem] font-[800] '>Home</Link>
                        <Link className='hover:translate-x-4 ease-in-out duration-150 text-white font-semibold text-[1.1rem]  '>About us</Link>
                        <Link className='hover:translate-x-4 ease-in-out duration-150 text-white font-semibold text-[1.1rem] '>Pricing</Link>
                        <Link className='hover:translate-x-4 ease-in-out duration-150 text-white font-semibold text-[1.1rem] '>Feautres</Link>
                    </ul>

                </div>

                <div className='flex space-x-4 items-center'>
                    <Link to='/download'>
                        <button className='w-[6rem]  md:w-[8rem] bg-black text-white py-2 md:py-3 rounded-[4px] text-sm hover:scale-[1.1] transition ease-in-out hover:-translate-y-1 duration-300'>
                            Download
                        </button>
                    </Link>

                    <RxHamburgerMenu className='md:hidden block cursor-pointer text-2xl' onClick={showSidebar} />

                </div>
            </nav>
        </>
    )
}

export default Navbar