import React from 'react'
import img1 from "../../assets/navbar/logo.png"
import img2 from "../../assets/footer/telephone.png"
import img3 from "../../assets/footer/message.png"
import img4 from "../../assets/footer/copyright.png"
import { Link } from 'react-router-dom'


const Footer = () => {
    return (
        <>
            <div className="main px-2 md:px-4 lg:px-16 xl:px-28  space-y-10">
                <div className='flex flex-col md:flex-row space-y-6 md:space-y-0 justify-between'>
                    <div className=' w-[100%] md:w-[15%] space-y-2'>
                        <span className='flex space-x-2'>
                            <img src={img1} className='w-[1.5rem] h-[1.5rem]' />
                            <span className='text-black text-[1.34rem] font-[600] '>uifry</span>
                        </span>
                        <span className='flex space-x-2'>
                            <img src={img3} className='w-[1.5rem] h-[1.5rem]' />
                            <span className='text-black  font-[400] break-words text-wrap '>help@frybix.com</span>
                        </span>
                        <span className='flex space-x-2'>
                            <img src={img2} className='w-[1.5rem] h-[1.5rem]' />
                            <span className='text-black '>+123445667889</span>
                        </span>
                    </div>

                    <div className=' w-[100%] md:w-[15%] space-y-2'>
                        <h1 className='text-[1.2rem] md:text-xl lg:text-3xl font-[600]'>Links</h1>
                        <ul className='flex flex-col space-y-2'>
                            <Link to='/home'>Home</Link>
                            <Link to='/aboutus'>About Us</Link>
                            <Link to='/bookings'>Bookings</Link>
                            <Link to='/blog'>Blog</Link>
                        </ul>
                    </div>

                    <div className=' w-[100%] md:w-[15%] space-y-2'>
                        <h1 className='text-[1.2rem] md:text-xl lg:text-3xl font-[600]'>Legal</h1>
                        <ul className='flex flex-col space-y-2'>
                            <Link to='/home'>Terms of Use</Link>
                            <Link to='/aboutus'>Privacy policy</Link>
                            <Link to='/bookings'>Cookie Policy</Link>
                        </ul>
                    </div>
                    <div className=' w-[100%] md:w-[15%] space-y-2'>
                        <h1 className='text-[1.2rem] md:text-xl lg:text-3xl font-[600]'>Product</h1>
                        <ul className='flex flex-col space-y-2'>
                            <Link to='/home'>Take Tour</Link>
                            <Link to='/aboutus'>Live Chat</Link>
                            <Link to='/bookings'>Reveiws</Link>
                            <Link to='/blog'>Blog</Link>
                        </ul>
                    </div>
                    <div className=' w-[100%] md:w-[25%] space-y-2'>
                        <h1 className='text-[1.2rem] md:text-xl lg:text-3xl font-[600]'>Newsletter</h1>
                        <p>Stay Up to Date</p>
                        <form className='flex flex-row md:flex-col lg:flex-row justify-between lg:items-center md:justify-normal'>
                            <input type="text" placeholder='Your email' className='outline-none md:h-12 md:w-[10rem] lg:h-8' />

                            <button className='w-[6rem]  md:w-[8rem] bg-black text-white py-2 md:py-3 rounded-[4px] text-sm hover:bg-gray-500 ease-in-out'>
                                Subscribe
                            </button>

                        </form>
                    </div>
                </div>

                <div className='text-center py-4'>
                    <p className='text-[.7rem] sm:text-[1rem] md:text-[1.1rem]'>CopyRight2024@Urify.com All rights resevered</p>
                </div>

            </div>
        </>
    )
}

export default Footer