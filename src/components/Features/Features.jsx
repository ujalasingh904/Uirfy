import React from 'react'
import img1 from "../../assets/Feautres/star-05.png"
import img2 from "../../assets/Feautres/cube-02.png"
import img3 from "../../assets/Feautres/cube-04.png"
import img4 from "../../assets/Feautres/phone.png"
import img5 from "../../assets/Feautres/shade2.png"
import img6 from "../../assets/Feautres/shade1.png"



const Features = () => {
    return (
        <>
            <div className="main px-2 md:px-14 lg:px-28 flex flex-col-reverse justify-between md:flex-row lg:justify-between items-center h-screen md:py-16 lg:py-24 relative mt-[25rem] sm:mt-[45rem] md:mt-[0rem] lg:mt-[5rem]">
                <div className="left w-[100%] md:w-[50%] relative flex justify-center">
                    <img src={img4} className='w-[80%] md:w-[100%]' />
                    <img src={img5} className='absolute sm:top-6 sm:right-[6rem] z-[-1]' />
                </div>

                <div className="right md:w-1/2 lg:w-[45%] space-y-6 flex-1">
                    <div>
                        <h4 className='uppercase tracking-[.2rem] text-primary font-[600] text-lg'>Features</h4>
                        <h1 className='text-[1.8rem] lg:text-4xl xl:text-5xl font-bold'>Uirfry Premium</h1>
                    </div>

                    <div className='space-y-6'>

                        <div className='space-y-2' >
                            <main className='flex gap-x-4 font-bold'>
                                <img src={img1} />
                                Budgeting Intervals
                            </main>
                            <p className='text-gray-500 text-sm'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis eum iste nihil fugit, asperiores numquam. Magnam, quo? Doloru</p>
                        </div>

                        <div className='space-y-2' >
                            <main className='flex gap-x-4 font-bold'>
                                <img src={img2} />
                                Budgeting Intervals
                            </main>
                            <p  className='text-gray-500 text-sm'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis eum iste nihil fugit, asperiores numquam. Magnam, quo? Doloru</p>
                        </div>

                        <div className='space-y-2' >
                            <main className='flex gap-x-4 font-bold'>
                                <img src={img3} />
                                Budgeting Intervals
                            </main>
                            <p className='text-gray-500 text-sm'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis eum iste nihil fugit, asperiores numquam. Magnam, quo? Doloru</p>
                        </div>
                    </div>

                </div>
                 
                 <img src={img6} className='absolute top-0 sm:top-20 right-0 z-[-1]' />
            </div>
        </>

    )
}

export default Features