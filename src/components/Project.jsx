import React from 'react';
import ProjectImg1 from '../assets/IMG_0888.JPG';
// import ProjectImg2 from '../assets/IMG_4775.JPG';

const Project = () => {
    return (
        <div name='project' className='w-full md:h-screen bg-white text-black'>
            <div className='max-w-[1100px] w-full h-full mx-auto p-4 flex flex-col justify-center'>
               <div className='pb-8'>
                    <p className='text-4xl font-bold inline border-b-4 border-black'>Projects</p>
                </div> 

                <div className='grid sm:grid-cols-2 md:grid-cols-3 gap-4'>

                    <div style={{backgroundImage: `url(${ProjectImg1})`}}
                    className='shadow-lg shadow-[#040c16] group container flex justify-center items-center mx-auto content-div'>
                        
                        {/* Hover Effects */}
                        <div className='opacity-0 group-hover:opacity-100'>
                            <span className='text-2xl font-bold tracking-wider'>
                                ReactJS Application
                            </span>

                            <div className='pt-8 text-center'>
                                <a href='/'>
                                    <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-black font-bold text-lg'>Demo</button>
                                </a>
                                <a href='/'>
                                    <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-black font-bold text-lg'>Code</button>
                                </a>
                            </div>
                        </div>
                    </div>
                    <div style={{backgroundImage: `url(${ProjectImg1})`}}
                    className='shadow-lg shadow-[#040c16] group container flex justify-center items-center mx-auto content-div'>
                        
                        {/* Hover Effects */}
                        <div className='opacity-0 group-hover:opacity-100'>
                            <span className='text-2xl font-bold tracking-wider'>
                                ReactJS Application
                            </span>

                            <div className='pt-8 text-center'>
                                <a href='/'>
                                    <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-black font-bold text-lg'>Demo</button>
                                </a>
                                <a href='/'>
                                    <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-black font-bold text-lg'>Code</button>
                                </a>
                            </div>
                        </div>
                    </div>
                    <div style={{backgroundImage: `url(${ProjectImg1})`}}
                    className='shadow-lg shadow-[#040c16] group container flex justify-center items-center mx-auto content-div'>
                        
                        {/* Hover Effects */}
                        <div className='opacity-0 group-hover:opacity-100'>
                            <span className='text-2xl font-bold tracking-wider'>
                                ReactJS Application
                            </span>

                            <div className='pt-8 text-center'>
                                <a href='/'>
                                    <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-black font-bold text-lg'>Demo</button>
                                </a>
                                <a href='/'>
                                    <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-black font-bold text-lg'>Code</button>
                                </a>
                            </div>
                        </div>
                    </div>
                    <div style={{backgroundImage: `url(${ProjectImg1})`}}
                    className='shadow-lg shadow-[#040c16] group container flex justify-center items-center mx-auto content-div'>
                        
                        {/* Hover Effects */}
                        <div className='opacity-0 group-hover:opacity-100'>
                            <span className='text-2xl font-bold tracking-wider'>
                                ReactJS Application
                            </span>

                            <div className='pt-8 text-center'>
                                <a href='/'>
                                    <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-black font-bold text-lg'>Demo</button>
                                </a>
                                <a href='/'>
                                    <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-black font-bold text-lg'>Code</button>
                                </a>
                            </div>
                        </div>
                    </div>
                    <div style={{backgroundImage: `url(${ProjectImg1})`}}
                    className='shadow-lg shadow-[#040c16] group container flex justify-center items-center mx-auto content-div'>
                        
                        {/* Hover Effects */}
                        <div className='opacity-0 group-hover:opacity-100'>
                            <span className='text-2xl font-bold tracking-wider'>
                                ReactJS Application
                            </span>

                            <div className='pt-8 text-center'>
                                <a href='/'>
                                    <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-black font-bold text-lg'>Demo</button>
                                </a>
                                <a href='/'>
                                    <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-black font-bold text-lg'>Code</button>
                                </a>
                            </div>
                        </div>
                    </div>
                    <div style={{backgroundImage: `url(${ProjectImg1})`}}
                    className='shadow-lg shadow-[#040c16] group container flex justify-center items-center mx-auto content-div'>
                        
                        {/* Hover Effects */}
                        <div className='opacity-0 group-hover:opacity-100'>
                            <span className='text-2xl font-bold tracking-wider'>
                                ReactJS Application
                            </span>

                            <div className='pt-8 text-center'>
                                <a href='/'>
                                    <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-black font-bold text-lg'>Demo</button>
                                </a>
                                <a href='/'>
                                    <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-black font-bold text-lg'>Code</button>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Project;