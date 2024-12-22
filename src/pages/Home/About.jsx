import { Facebook, Instagram, Twitter, Youtube } from 'lucide-react'
import React from 'react'

const About = ({ creator }) => {
  return (
    <div className='flex flex-col gap-[20px] bg-white  p-[20px] rounded-xl'>
        <span className='flex justify-start gap-[50px] max-w-[550px]'>
            <p className='font-bold w-[200px] '>Location</p>
            <p>{creator?.city}, {creator?.state}</p>
        </span>
        <span className='flex justify-start gap-[50px] max-w-[550px]'>
            <p className='font-bold w-[200px] '>Language Speaks</p>
            <p>{creator.language}</p>
        </span>
        <span className='flex justify-start gap-[50px] max-w-[550px]'>
            <p className='font-bold w-[200px] '>Social Links</p>
            <span className='flex gap-2'>
                <Youtube />
                <Facebook />
                <Instagram />
                <Twitter />
            </span>
        </span>
    </div>
  )
}

export default About