"use client"
import React from 'react'
import { FaXTwitter } from "react-icons/fa6";
import { FaLinkedin, FaInstagram, FaGithub } from "react-icons/fa6";
import Link from 'next/link';

import { useState,useEffect } from 'react';

 

 

function introduc() {
    const [activesection,setactivesection]=useState("home")

    useEffect(()=>{
     const scrolpage=()=>{
        const sections=document.querySelectorAll('section')
        let currentsection = "home";
        sections.forEach((section,i)=>{
          
            const sectionTop= section.offsetTop - window.innerHeight / 2;
            console.log(`Section: ${section.id}, Section Top: ${sectionTop}, ScrollY: ${window.scrollY}`);
            if (window.scrollY >= sectionTop){
                 currentsection =section.getAttribute("id") ?? "home"; 
            }
         
        }) 
        setactivesection(currentsection)
     }
     window.addEventListener('scroll', scrolpage)
     return ()=> window.removeEventListener('scroll', scrolpage)
    },[])
  return (
    <div className='flex mb-10 md:mb-0  w-[90%] md:sticky md:top-[100px] gap-6 md:w-[50%] text-white flex-col'>
      <h1 className='text-[40px] font-bold'>Saviour Samuel</h1>
      <h2 className='text-[20px] font-[500]'>Front End developer</h2>
      <h2>Download resume </h2>
      <p className='max-w-[300px] text-[#94a3b8] text-[16px]'>I build accessible, pixel-perfect digital experiences for the web.</p>
      <div className=' hidden  md:flex flex-col gap-6 '>
        <div className='flex gap-5 items-center'>
            <div className={`${activesection === "home" ? 'w-[80px]':'w-[40px]'} transition-[500]  h-[1px] bg-white`}></div>
            <span>
                 <Link className={`${activesection === "home" ? "text-white":"text-blue-200 "  } transition-[500] text-[12px] font-semibold`} href='#home'>ABOUT</Link>
            </span>
        </div>
        <div className='flex gap-5 items-center'>
            <div className={`${activesection=== "experience"? 'w-[80px]':'w-[40px]'}   h-[1px] transition-[500] bg-white`}></div>
            <span>
                 <Link className= {`${activesection === "experience" ? "text-white": " text-blue-200 "  } text-[12px] font-semibold`} href='#experience'>EXPERIENCE</Link>
            </span>
        </div>
        <div className='flex gap-5 items-center'>
            <div className={`${activesection=== "project"? 'w-[80px]':'w-[40px]'}   h-[1px] bg-white`}></div>
            <span>
                 <Link className= {`${activesection === "project" ? "text-white":"text-blue-200"  } text-[12px] font-semibold`} href='#project'>PROJECT</Link>
            </span>
        </div>
      </div>
      <span className='flex   items-center gap-4 '>
      <Link href='/'>  <FaXTwitter className='cursor-pointer hover:text-blue-200 transition-all' size={24} /></Link>  
       <Link href='jj'>  <FaLinkedin className='cursor-pointer hover:text-blue-200 transition-all' size={24} arial-label='linkedin' /></Link>
        <FaInstagram className='cursor-pointer hover:text-blue-200 transition-all' size={24} />
        <FaGithub className='cursor-pointer hover:text-blue-200 transition-all' size={24} />
      </span>

    </div>
  )
}

export default introduc
