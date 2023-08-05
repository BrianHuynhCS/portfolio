import React from 'react';

const About = () => {
    return (
        <div name='about' className='w-full h-screen bg-[#79a9f2] text-white px-8'>
            <div className='flex flex-col justify-center items-center w-full h-full'>
                <div className='max-w-[1300px] w-full flex border border-red-500'>
                    <div className='flex-1 sm:text-center pb-8'>
                        <div className='inline-block md:w-1/2'>
                            <p className='text-4xl font-bold inline border-b-4 border-white'>
                                About
                            </p>
                        </div>
                        <div className='inline-block md:w-1/2'>
                            <p className='flex-1 text-4xl font-bold inline border-b-4 border-white'>
                                Experience
                            </p>  
                        </div>
                    </div>
                    <div>
                        
                    </div>
                </div>

                
                <div className='max-w-[1300px] w-full'>
                    <div className='text-2xl'>
                        <p>Hey there! I'm Brian Huynh, a Software Engineer based in California. I'm passionate about full-stack development and enjoy creating products for both personal and business use. My portfolio is a space where I showcase my projects, learning journey, and anything else happening in my life. When I'm not coding, you'll find me indulging in my hobbies of building custom keyboards and playing video games!</p>
                    </div>
                    <div>
                        

                    </div>
                </div>
                

            </div>
        </div>
    )
}

export default About;