import React from 'react'
import img1 from "../../assets/faq/Frame.png"
import img2 from "../../assets/Hero/heroStar.png"
import img5 from "../../assets/Feautres/shade2.png"

const Faq = () => {
    return (
        <>
            <div className='main px-2 md:px-14 lg:px-28 py-20'>

                <div className='flex flex-col md:flex-row  md:h-screen justify-between'>

                    <div className="left w-[100%] md:w-[40%] md:h-screen ">
                        <span className=''>
                            <h2 className='text-primary font-[600] text-lg'>FAQ</h2>
                            <h1 className='text-[1.8rem] lg:text-4xl xl:text-5xl font-bold'>Frequently Asked Questions</h1>
                        </span>

                        <div className=' bg-primary rounded-[5px] text-white  mt-5 p-7'>
                            <h1 className='text-[1.2rem] md:text-2xl   font-bold'>The Best Financial Accounting App Ever!</h1>
                            <p className='text-sm md:text-[1rem] '>"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsam, dolorum."</p>
                        </div>
                        <div className=' rounded-[5px]  p-7'>
                            <h1 className='text-[1.2rem] md:text-2xl  font-bold'>The Best Financial Accounting App Ever!</h1>
                            <p className='text-sm md:text-[1rem]'>"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsam, dolorum."</p>
                        </div>
                        <div className=' bg-primary rounded-[5px] text-white  p-7'>
                            <h1 className='text-[1.2rem] md:text-2xl  font-bold'>The Best Financial Accounting App Ever!</h1>
                            <p className='text-sm md:text-[1rem]'>"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsam, dolorum."</p>
                        </div>

                    </div>

                    <div className="right w-[100%] md:w-[40%] md:h-screen">
                        <span className='h-1/5 hidden md:block'>
                            <img src={img2} className='p-10' />
                        </span>
                        <div className=' rounded-[5px]  mt-5 p-7'>
                            <h1 className='text-[1.2rem] md:text-2xl  font-bold'>The Best Financial Accounting App Ever!</h1>
                            <p className='text-sm md:text-[1rem]'>"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsam, dolorum."</p>
                        </div>
                        <div className='bg-primary text-white rounded-[5px] p-7'>
                            <h1 className='text-[1.2rem] md:text-2xl  font-bold'>The Best Financial Accounting App Ever!</h1>
                            <p className='text-sm md:text-[1rem]'>"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsam, dolorum."</p>
                        </div>
                        <div className=' rounded-[5px] p-7'>
                            <h1 className='text-[1.2rem] md:text-2xl  font-bold'>The Best Financial Accounting App Ever!</h1>
                            <p className='text-sm md:text-[1rem]'>"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsam, dolorum."</p>
                        </div>
                    </div>
                </div>

                <div className=' flex justify-center py-10 md:py-28 relative md:mt-[10rem] lg:mt-[0rem]'>
                    <img src={img1} className='w-[86%]' />
                    <img src={img5}  className='absolute top-[-10rem] right-[56rem] z-[-1]'/>
                </div>
            </div>
        </>
    )
}

export default Faq