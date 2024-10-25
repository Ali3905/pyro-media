import { Bell, Heart, Search } from 'lucide-react'
import React from 'react'

const Navbar = ({ url, onChange }) => {
  return (
    <nav className='flex justify-between items-center'>
      <h1 className='font-bold text-[32px] text-[color:var(--dark-green)] sm:block hidden'>Overview</h1>
      <div className='flex items-center sm:gap-[25px] gap-[10px] bg-white rounded-full p-[10px]'>
        <span className='flex items-center gap-2 p-[10px] py-[11px] sm:px-[20px] rounded-full bg-[color:var(--light-grey)]'>
          <Search size={16} />
          <input type="search" placeholder='Search Influencer' className='outline-none bg-transparent placeholder:text-[color:var(--grey)]' onChange={onChange} url={url} />
        </span>
        <span className='flex gap-[10px]'>
          <Heart size={20} className='cursor-pointer' color='#A3D0A5' />
          <Bell size={20}  className='cursor-pointer' color='#A3D0A5'/>
        </span>
        <img src="/dummyAvatar1.jpg" alt="profile" width={40} height={40} className='rounded-full' />
      </div>
    </nav>
  )
}

export default Navbar