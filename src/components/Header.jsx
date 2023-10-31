import React from 'react';
import { Form } from 'react-router-dom';
import {FaSearch} from 'react-icons/fa';

export default function Header() {
  return (
    <header className='bg-slate-300 shadow-md'>
        <div className='flex justify-between items-center max-w-6xl mx-auto p-3 '>
        <h1 className='font-bold text-sm sm:text-xl flex flex-wrap'>
            <span className='text-blue-700 '>Sahand</span>
            <span className='text-slate-800'>Estate</span>
       </h1>
        <form className='bg-slate-100 p-3 rounded-lg'>
            <input  type='text' placeholder='Search..' className='bg-transparent'> </input>
            <FaSearch className='text-slate-500' />
        </form>
        </div>
    </header>
  )
}
