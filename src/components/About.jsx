import React from 'react';
import kobi1 from '../assets/IMG_0888.JPG';
import kobi2 from '../assets/IMG_1805.JPG';
import kobi3 from '../assets/IMG_1317.JPG';
import mochi1 from '../assets/IMG_4775.JPG';
import mochi2 from '../assets/IMG_2496.JPG';
import mochi3 from '../assets/IMG_4517.JPG';

const About = () => {
    return (
        <div name='about' className='w-full h-screen bg-white text-black'>
            <div className='flex flex-col justify-center items-center w-full h-full'>
                <div className='max-w-[1100px] w-full grid grid-cols-2 gap-8'>
                    <div className='sm:text-left pb-8 pl-4'>
                        <p className='text-4xl font-bold inline border-b-4 border-black'>
                            About Me
                        </p>
                    </div>
                    <div></div>
                </div>

                <div className='max-w-[1100px] w-full grid sm:grid-cols-2 gap-8 px-4'>
                    <div className='flex gap-8 snap-x snap-mandatory overflow-x-scroll'>
                        <img src={kobi1} alt='kobi1' className='w-72 h-72 '/>
                        <img src={kobi2} alt='kobi2' className='w-72 h-72 '/>
                        <img src={kobi3} alt='kobi3' className='w-72 h-72 '/>
                        <img src={mochi1} alt='mochi1' className='w-72 h-72 '/>
                        <img src={mochi2} alt='mochi2' className='w-72 h-72 '/>
                        <img src={mochi3} alt='mochi3' className='w-72 h-72 '/>
                        
                    </div>
                    <div>
                        <p className='text-2xl'>Hey there! I'm Brian Huynh, a Software Engineer based in California. I'm passionate about full-stack development and enjoy creating products for both personal and business use. My portfolio is a space where I showcase my projects, learning journey, and anything else happening in my life. When I'm not coding, you'll find me indulging in my hobbies of building custom keyboards and playing video games!</p> 
                    </div>
                </div>
            </div>
      </div>
  
    )
}


export default About;