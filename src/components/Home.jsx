import React from 'react'
import {HiArrowNarrowRight} from 'react-icons/hi'

const Home = () => {
    return (
        <div>
            <div name='home' className='w-fill h-screen bg-[#6da2f3]'>
                {/* Container */}
                <div className='max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full text-white'>
                    <p className='text-2xl'>Hi, my name is</p>
                    <h1 className='text-4xl sm:text-7xl font-bold'>Brian Huynh</h1>
                    <h2 className='text-4xl sm:text-7xl font-bold'>I'm a Software Engineer.</h2>
                    <p className='text-2xl py-4 max-w-[700px]'> A software enthusiast with a love for two adorable poodles – Mochi and Kobi. 
                        From conceptualization to execution, I create tailor-made software solutions for businesses. 
                        With years of hands-on experience and academic background, I'm passionate about bringing innovative ideas to life.
                    </p>
                    <div>
                        <button className='border-2 px-6 py-3 my-2 flex items-center hover:bg-white hover:text-black'>View Work <HiArrowNarrowRight className='ml-3'/></button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home;