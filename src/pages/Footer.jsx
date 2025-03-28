import React from 'react'
import Arrow from "../assets/Arrow";


const Footer = () => {
  return (
    <div className='w-[200vh] flex items-end px-52 h-[180vh] bg-black text-white text-center my-auto'>
        <div className='flex justify-between w-full h-1/3'>
            <div className=''>
                <div className='flex flex-col items-start'>
                    <h1>Reach out:</h1>
                    <div className='flex gap-5'>
                        <p>hello@wearefamilystyle.com</p>
                        <div className='w-7 -rotate-90'>
                            <Arrow classNamew='' color={'white'} />

                        </div>
                    </div>
                </div>
                <div className='flex flex-col items-start'>
                    <h1>Family Style</h1>
                    <div className='flex gap-5'>
                        <p>A brand studio serving up an outsider view with an in-house feeling.</p>
                    </div>
                </div>
                <div className='flex flex-col items-start'>
                    <div className='flex gap-5'>
                        <p>Instagram</p>
                        <div className='w-7 -rotate-90'>
                            <Arrow color={'white'} />
                        </div>
                    </div>
                    <div className='flex gap-5'>
                        <p>LinkedIn</p>
                        <div className='w-7 -rotate-90'>
                            <Arrow color={'white'} />
                        </div>
                    </div>
                </div>
            </div>
            <div className='w-[30%]  '>
                <img className='' src="https://cdn.prod.website-files.com/6796c16d788f8bb34c7f0884/67aa831eb8b06983db685118_5322bf67288179c5f2f7c85933c7d3e5_image-p-500.webp" alt="" />

            </div>
        </div>
    </div>
  )
}

export default Footer