import React from 'react';
import JS_icon from '../assets/icons/javascript.svg'
import Java_icon from '../assets/icons/java.svg'
import Python_icon from '../assets/icons/python.svg'
import React_icon from '../assets/icons/react.svg'
import Tailwindcss_icon from '../assets/icons/tailwindcss-icon.svg'
import NodeJS_icon from '../assets/icons/nodejs.svg'


const Skill = () => {
    return (
        <div name='skill' className='w-full h-screen bg-[#79a9f2] text-white'>
            <div className='max-w-[1100px] w-full h-full mx-auto p-4 flex flex-col justify-center'>
                <div>
                    <p className='text-4xl font-bold inline border-b-4 border-white'>Skills</p>
                </div>

                <div className='grid grid-cols-2 sm:grid-cols-3 gap-4 text-center py-8'>
                    <div>
                        <img className='w-20 mx-auto hover:scale-110 duration-500' src={JS_icon} alt='javascript icon' />
                        <p>JavaScript</p>
                    </div>
                    <div>
                        <img className='w-20 mx-auto hover:scale-110 duration-500' src={React_icon} alt='react icon' />
                        <p>React</p>
                    </div>
                    <div>
                        <img className='w-20 mx-auto hover:scale-110 duration-500' src={Python_icon} alt='python icon' />
                        <p>Python</p>
                    </div>
                    <div>
                        <img className='w-20 mx-auto hover:scale-110 duration-500' src={Java_icon} alt='java icon' />
                        <p>Java</p>
                    </div>
                    <div>
                    <img className='w-20 mx-auto hover:scale-110 duration-500' src={Tailwindcss_icon} alt='tailwindcss icon' />
                        <p>TailwindCSS</p>   
                    </div>
                    <div>
                    <img className='w-20 mx-auto hover:scale-110 duration-500' src={NodeJS_icon} alt='nodejs icon' />
                        <p>NodeJS</p>   
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Skill;
