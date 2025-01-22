import React from 'react'
import { FaXTwitter } from "react-icons/fa6";
import { FaLinkedin, FaInstagram, FaGithub } from "react-icons/fa6";
import Link from 'next/link';
import { useState,useEffect } from 'react';

 

 

function intro() {
    // const [activesection,setactivesection]=useState('home')

    // useEffect(()=>{
    //  const scrolpage=()=>{
    //     const sections=document.querySelector()
    //  }
    // },[])
  return (
    <div className='flex gap-6 text-white flex-col'>
      <h1 className='text-[30px] font-semibold'>Saviour Samuel</h1>
      <h2 className='text-[20px] font-[500]'>Front End developer</h2>
      <p className='max-w-[300px] text-[#94a3b8] text-[16px]'>I build accessible, pixel-perfect digital experiences for the web.</p>
      <div className='flex flex-col gap-6 '>
        <div>
            <div className='w-[100px] h-[2px] bg-white'></div>
            <span>
                 <Link href='/'></Link>
            </span>
        </div>
      </div>
      <span className='flex items-center  gap-4 '>
        <FaXTwitter className=' block cursor-pointer' size={25} />
        <FaLinkedin size={25} arial-label='linkedin' />
        <FaInstagram size={25} />
        <FaGithub size={25} />
      </span>

    </div>
  )
}

export default intro
