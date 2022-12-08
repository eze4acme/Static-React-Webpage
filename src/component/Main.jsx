import React from 'react'

function Main() {
  return (
    <main className="bg-gray-800 h-full sm:py-5 bg-[url('/dist/assets/images/react-icon-large.png')] bg-repeat-y bg-right">
        <div className='max-w-md w-9/12 mx-auto text-gray-200 pb-10  sm:max-w-3xl'>
            <h1 className='py-6 sm:text-4xl font-semibold text-3xl mb-5'>Fun Facts about React</h1>
            <ul className='list-square list-inside text-lg marker:text-blue-500 leading-10 sm:tracking-wide sm:font-black '>
                <li>Was first released in <span className='text-lg text-red-400'>2013</span></li>
                <li>Was originally created by <span className='text-lg text-red-400'>Jordan Walke</span></li>
                <li>Has well over <span className='text-lg text-red-400'>100K </span>stars on GitHub</li>
                <li>Is maintained by <span className='text-lg text-red-400'>Facebook</span></li>
                <li><span className='text-lg text-red-400'>Powers</span> thousands of enterprise apps, including mobile apps</li>
            </ul> 
        </div>
    </main>
  )
}

export default Main
