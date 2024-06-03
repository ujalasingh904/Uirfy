import React from 'react'
import img1 from "../../assets/advantages/bell.png"
import img2 from "../../assets/advantages/mobile2.png"
import img3 from "../../assets/advantages/mobile1.png"
import img4 from "../../assets/advantages/star.png"
import img5 from "../../assets/Feautres/shade2.png"

const Advantages = () => {
    return (
        <>
            <div className="main px-2 md:px-14 lg:px-28 md:flex justify-between items-center">
                <div className="left  w-[100%] md:w-[45%] space-y-6">
                    <div>
                        <h2 className='tracking-[.1rem] text-primary font-[600] text-lg'>ADVANTAGES</h2>
                        <h1 className='text-[1.8rem] lg:text-4xl xl:text-5xl  font-bold'>Why Choose Uifry</h1>
                    </div>


                    <span className='flex items-center font-bold gap-x-4 text-[1.2rem] md:text-2xl'>
                        <img src={img1} className='w-[2rem] sm:w-[3rem]' />
                        Clever Notifications
                    </span>
                    <p className='text-gray-500 text-sm md:text-[1rem]'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Fuga ratione repellendus ipsam aliquid praesentium in accusamus, nesciunt id, impedit modi dignissimos soluta saepe quisquam porro a distinctio exercitationem? Delectus, et? Quasi ullam alias quos libero tempore, quo error voluptatibus modi, dicta, labore ea? Ducimus et minus provident laboriosam animi praesentium.</p>

                </div>
                <div className="right w-[100%] md:w-[50%] relative flex justify-center">
                    <img src={img2} className='w-[80%] md:w-[100%]' />
                    <img src={img5}  className='absolute sm:top-24 sm:right-20 z-[-1]'/>
                </div>

            </div>

            <div className='main2 flex flex-col-reverse md:flex-row  px-2 md:px-14 lg:px-28 justify-between items-center'>
                <div className='w-[100%] md:w-[50%] relative flex justify-center'>
                    <img src={img3} className='w-[80%] md:w-[100%]' />
                    <img src={img5}  className='absolute  sm:top-24 sm:right-20 z-[-1]'/>
                </div>
                <div className='w-[100%] md:w-[45%] space-y-6'>
                    <span className='flex items-center font-bold gap-x-4 text-[1.2rem] md:text-2xl'>
                        <img src={img4} className='w-[2rem] sm:w-[3rem]' />
                        Fully Customizable
                    </span>
                    
                    <p className='text-gray-500 text-sm md:text-[1rem]'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Blanditiis ad animi fugiat. Dolor omnis aliquam dicta! Harum eos eveniet at ipsa? Fugit sapiente est ullam ratione itaque tenetur atque voluptas vero, debitis nemo maiores minima earum tempore tempora corporis vitae facere, totam molestias voluptate. Eius ducimus qui impedit perferendis nihil.</p>
                </div>
            </div>

        </>
    )
}

export default Advantages