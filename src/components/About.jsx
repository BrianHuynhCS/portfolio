import React from 'react';

const About = () => {
    return (
        <div name='about' className='w-fill h-screen bg-[#79a9f2] text-white'>
            <div className='flex flex-col justify-center items-center w-full h-full'>
                <div className='max-w-[1300px] w-full grid grid-cols-2 gap-8'>
                    <div className='sm:text-right pb-8 pl-4'>
                        <p className='text-4xl font-bold inline border-b-4 border-white'>About</p>
                    </div>
                </div>
                
                <div className='max-w-[1300px] w-full grid grid-cols-2 gap-8'>
                    <p>Hey there! I'm Brian Huynh, a Software Engineer based in California. I'm passionate about full-stack development and enjoy creating products for both personal and business use. My portfolio is a space where I showcase my projects, learning journey, and anything else happening in my life. When I'm not coding, you'll find me indulging in my hobbies of building custom keyboards and playing video games!</p>

                </div>

            </div>
        </div>
    )
}

export default About;