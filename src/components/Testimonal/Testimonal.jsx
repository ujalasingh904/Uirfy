import React from 'react'
import img1 from "../../assets/Testimonal/Group.png"
import img2 from "../../assets/Testimonal/photos.png"
import img5 from "../../assets/Feautres/shade2.png"

const Testimonal = () => {
    return (
        <>
            <div className="main px-2 md:px-14 lg:px-28 space-y-6">
                <div className='top text-center w-full'>
                    <h6 className='tracking-[.1rem] text-primary font-[600] text-lg '>TESTIMONAL</h6>
                    <div className='flex justify-center'>
                        <div className='sm:w-1/3'></div>
                        <span className='text-[1.8rem] lg:text-4xl xl:text-5xl font-bold flex sm:w-1/3'>What Our Users Say About Us ?</span>
                        <div className='sm:w-1/3'></div>
                    </div>
                </div>

                <div className=' flex flex-col-reverse md:flex-row items-center justify-between'>
                    <div className='left w-[100%] md:w-[45%] relative flex justify-center'>
                        <img src={img1} className='w-[80%] md:w-[100%]'  />
                        <img src={img5}  className='absolute sm:top-10 sm:right-10 z-[-1]'/>
                    </div>

                    <div className='right w-[100%] md:w-[45%] space-y-4'>
                        <h1 className='font-bold gap-x-4 text-[1.2rem] md:text-2xl'>The Best Financial Accounting App Ever!</h1>
                        <p className='text-gray-500 text-sm md:text-[1rem]'>
                            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae possimus, molestiae quia minima illum illo inventore eius eaque optio dignissimos praesentium fuga quae quam numquam ducimus provident culpa quaerat laboriosam deserunt. Odio aperiam ipsam laboriosam, eius doloremque, quae est unde ab necessitatibus officiis natus aliquid? Sunt quibusdam recusandae molestiae numquam?"
                        </p>
                        <img src={img2} />
                        <p className='font-bold'>Nick Jonas</p>
                    </div>
                </div>

            </div>
        </>
    )
}

export default Testimonal