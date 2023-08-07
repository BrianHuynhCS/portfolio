import React, {useState} from 'react';
import {FaBars, FaTimes, FaGithub, FaLinkedin} from 'react-icons/fa';
import {HiOutlineMail} from 'react-icons/hi';
import {BsFillPersonLinesFill} from 'react-icons/bs'
import {Link} from 'react-scroll';

const Navbar = () => {
    const [nav, setNav] = useState(false)
    const handleClick = () => setNav(!nav)

    return (
    /* bg-[#79a9f2] */
        <div className='fixed w-full h-[100px] flex justify-end items-center px-4 bg-[#79a9f2] text-white'>
            {/* menu */}
            <ul className='hidden md:flex'>
                <li className='py-4 text-lg hover:bg-white hover:text-black'>
                    <Link to='home' smooth={true} offset={50} duration={500}>
                        Home
                    </Link>
                </li>
                <li className='py-4 text-lg hover:bg-white hover:text-black'>
                    <Link to='about' smooth={true} offset={50} duration={500}>
                        About
                    </Link>
                </li>
                <li className='py-4 text-lg hover:bg-white hover:text-black'>
                    <Link to='skill' smooth={true} offset={50} duration={500}>
                        Skill
                    </Link>
                </li>
                <li className='py-4 text-lg hover:bg-white hover:text-black'>
                <Link to='contact' smooth={true} offset={50} duration={500}>
                        Contact
                </Link>
                </li>
            </ul>

            {/* Hamburger */}
            <div onClick={handleClick} className='md:hidden z-10'>
                {!nav ? <FaBars size={30} /> : <FaTimes />}
            </div>

            <ul className={!nav ? 'hidden' : 'absolute top-0 left-0 w-full h-screen bg-[#79a9f2] flex flex-col justify-center items-center'}>
                <li className='py-6 text-4xl'>
                    <Link onClick={handleClick} to='home' smooth={true} offset={50} duration={500}>
                        Home
                    </Link>
                </li>
                <li className='py-6 text-4xl'>
                    <Link onClick={handleClick} to='about' smooth={true} offset={50} duration={500}>
                        About
                    </Link>
                </li>
                <li className='py-6 text-4xl'>
                    <Link onClick={handleClick} to='skill' smooth={true} offset={50} duration={500}>
                        Skill
                    </Link>
                </li>
                <li className='py-6 text-4xl'>
                    <Link onClick={handleClick} to='contact' smooth={true} offset={50} duration={500}>
                        Contact
                    </Link>
                </li>
            </ul>

            {/* Social Icons */}
            <div className='hidden lg:flex fixed flex-col top-[35%] left-0'>
                <ul>
                    <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-blue-600'>
                        <a className='flex justify-between items-center w-full text-gray-300' href='https://www.linkedin.com/in/brian-huynhcs/'>
                            LinkedIn <FaLinkedin size={30}/>
                        </a>
                    </li>
                    <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-gray-800'>
                        <a className='flex justify-between items-center w-full text-gray-300' href='https://github.com/BrianHuynhCS'>
                            Github <FaGithub size={30}/>
                        </a>
                    </li>
                    <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-white'>
                        <a className='flex justify-between items-center w-full text-black' href='/'>
                            Email <HiOutlineMail size={30}/>
                        </a>
                    </li>
                    <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#565f69]'>
                        <a className='flex justify-between items-center w-full text-gray-300' href='https://github.com/BrianHuynhCS/Resume/blob/main/Brian_Huynh_Resume.pdf'>
                            Resume <BsFillPersonLinesFill size={30}/>
                        </a>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default Navbar