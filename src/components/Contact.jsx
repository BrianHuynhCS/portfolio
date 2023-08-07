import React from 'react'

const Contact = () => {
    return (
        <div name='contact' className='w-full h-screen bg-[#79a9f2] text-white flex justify-center items-center p-4'>
            <form method='POST' action="https://getform.io/f/a01ba581-232e-4b1a-9fb7-df1635fc2ab9" className='max-w-[700px] flex flex-col w-full'>
                <div className='pb-8'>
                    <p className='text-4xl font-bold inline border-b-4 border-white'>Contact</p>
                </div>
                <input className='text-black bg-[#e7ebf8] p-2' type='text' placeholder='Name' name='name'></input>
                <input className='text-black my-4 p-2 bg-[#e7ebf8]' type='text' placeholder='Email' name='email'></input>
                <textarea className='text-black bg-[#e7ebf8] p-2' rows='10' placeholder='Message' name='message'></textarea>
                <button className='text-black hover:bg-white hover:text-black border-2 px-4 py-3 my-8 mx-auto flex items-center'>Ask Me Anything!</button>
            </form>
        </div>
    )
}

export default Contact;