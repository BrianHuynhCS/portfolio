import React from 'react'

const Contact = () => {
    return (
        <div name='contact' className='w-full h-screen bg-white text-black flex justify-center items-center p-4'>
            <form method='POST' action="https://getform.io/f/a01ba581-232e-4b1a-9fb7-df1635fc2ab9" className='max-w-[700px] flex flex-col w-full'>
                <div className='pb-8'>
                    <p className='text-4xl font-bold inline border-b-4 border-black'>Contact</p>
                </div>
                <input className='text-black bg-white p-2 border-2 border-black' type='text' placeholder='Name' name='name'></input>
                <input className='text-black my-4 p-2 bg-white border-2 border-black' type='text' placeholder='Email' name='email'></input>
                <textarea className='text-black bg-white p-2 border-2 border-black' rows='10' placeholder='Message' name='message'></textarea>
                <button className='hover:text-black border-2 border-black px-4 py-3 my-8 mx-auto flex items-center'>Ask Me Anything!</button>
            </form>
        </div>
    )
}

export default Contact;