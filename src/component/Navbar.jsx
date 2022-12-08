import React from 'react'

function Navbar() {
  return (
    <nav className='bg-slate-900 sm:py-8 py-3'>
        <div className='sm:w-1/1 justify-between sm:flex sm:flex-row sm:max-w-3xl flex flex-col items-left text-left w-9/12 max-w-md mx-auto'>
            <div className='flex items-center'>
                <img src={require("./images/react-icon-small.png")} alt="" className='w-2/12'/>
                <h2 className='text-sky-300 font-semibold text-2xl ml-1'>ReactFacts</h2>
            </div>
            <h4 className='text-gray-300 font-bold text-lg'>React Course - Project 1</h4>
        </div>
    </nav>
  )
}

export default Navbar

