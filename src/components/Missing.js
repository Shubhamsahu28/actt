import React from 'react'
import { Link } from 'react-router-dom'

export const Missing = () => {
  return (
    <div className='w-[100%] flex flex-col justify-center h-[75vh]'>
        <h1 className='text-center text-4xl'>Missing</h1>
        <p className='mt-4 text-2xl'>Please Go Back To Our <br /> <Link to='/' className='text-cyan-400' >HomePage </Link></p>

    </div>
  )
}
