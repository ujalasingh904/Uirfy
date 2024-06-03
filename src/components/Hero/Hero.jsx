import React from 'react'
import { Link } from 'react-router-dom'
import img1 from "../../assets/Hero/play.png"
import img2 from "../../assets/Hero/heroStar.png"
import img3 from "../../assets/Hero/sticker.png"
import img4 from "../../assets/Hero/mobile1.png"
import img5 from "../../assets/Hero/mobile2.png"
import img6 from "../../assets/Hero/mobile3.png"
import img7 from "../../assets/Hero/shades2.png"
import img8 from "../../assets/Hero/shades1.png"


const Hero = () => {
    return (
        <>
            <div className="main px-2 md:px-14 lg:px-28 md:flex  flex-wrap md:py-16 lg:py-24 relative h-screen" >

                <div className="left  md:w-[50%] h-[70%] md:h-0 space-y-6" >
                    <div className='left-upper space-y-4 relative' >
                        <h1 className='font-[800] text-[1.8rem] lg:text-4xl xl:text-6xl'>Make The Best Financial Decisions</h1>
                        <img src={img7} className='absolute -top-[4rem]  md:-top-[6rem] lg:top-[-9rem] right-[11rem] md:right-3 z-[-1]' />
                        <p className='text-sm text-gray-500'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Velit officia, accusamus possimus consequatur autem provident hic quas eaque non dolorum text means what are you?</p>
                        <div className='flex gap-x-10'>
                            <Link to='/getStarted'>
                                <button className='w-[8rem] bg-black text-white py-3 rounded-[4px] text-sm hover:scale-[1.02] transition ease-in-out hover:translate-x-2 duration-300'>
                                    Download &rarr;
                                </button>
                            </Link>
                            <Link to='/watchVideo'>
                                <button className='w-[8rem] py-3 rounded-[4px] text-sm hover:underline flex items-center gap-x-2'>
                                    <img src={img1} />
                                    Watch video
                                </button>
                            </Link>
                        </div>
                    </div>
                    <div className='left-lower relative flex justify-center'>
                        <img src={img3} className='absolute top-0 w-1/2 sm:w-[70%] md:w-4/5' />
                        <img src={img2} className='absolute top-6 left-40' />

                    </div>
                </div>

                <div className="right w-[100%]  md:w-1/2 flex justify-center md:justify-end  ">
                    <img src={img5} className='absolute md:top-0 xl:top-[-3rem] md:right-[8rem] xl:right-[12rem] w-[25rem] md:w-[20rem] xl:w-[30rem] z-[3]' />

                    <img src={img6} className='absolute md:top-[4rem]  xl:top-0 w-[25rem] md:w-[20rem] xl:w-[30rem] z-[2]' />
                    <img src={img4} className='absolute md:top-[4rem] xl:top-0  w-[25rem] md:w-[20rem] xl:w-[30rem] z-[1]' />
                    <img src={img8} className='absolute md:w-[28rem] md:top-[-11rem] xl:top-[-6rem] md:right-[3.5rem] xl:right-14' />
                </div>
            </div>
        </>
    )
}

export default Hero