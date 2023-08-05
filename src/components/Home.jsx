import React from 'react'
import {HiArrowNarrowRight} from 'react-icons/hi'
import pf from '../assets/IMG_9408.jpg'

const Home = () => {
    return (
        <div>
            <div name='home' className='w-fill h-screen bg-[#79a9f2] text-white'>
                {/* Container */}
                <div className='max-w-[1300px] mx-auto px-8 flex flex-col justify-center h-full'>
                    <div className='flex items-center justify-between'>
                        <div>
                            <p className='text-2xl'>Hi, my name is</p>
                            <h1 className='text-4xl sm:text-7xl font-bold'>Brian Huynh</h1>
                            <h2 className='text-4xl sm:text-7xl font-bold'>I'm a Software Engineer.</h2>
                            <p className='text-2xl py-4 max-w-[700px]'> A software enthusiast with a love for two adorable poodles – <a href='/' className='hover:text-transparent bg-gradient-to-r from-pink-500 hover:to-yellow-500 bg-clip-text'>Mochi and Kobi</a>. 
                                From conceptualization to execution, I create tailor-made software solutions for businesses. 
                                With years of hands-on experience, I'm passionate about bringing innovative ideas to life.
                            </p>
                        </div>

                        <div className='hidden md:block'>
                            <img src={pf} alt='pf' className='w-80 h-120 rounded-full'/>
                        </div>
                    </div>
                    <div>
                        <a href='/'>
                            <button className='group rounded-md border-2 px-6 py-3 my-2 flex items-center hover:bg-white hover:text-black'>View Work 
                            <span className='group-hover:rotate-90 duration-300'>
                                <HiArrowNarrowRight className='ml-3'/>
                            </span>
                            </button>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home;