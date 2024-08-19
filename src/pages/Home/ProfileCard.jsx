import { Heart } from 'lucide-react'
import React from 'react'

const ProfileCard = () => {
    return (
        <div className='flex justify-between'>
            <div className='flex flex-col gap-[20px]'>
                <img src="/dummyAvatar1.jpg" alt="profile" height={150} width={150} className='rounded-full border-4 border-white' />
                <p className='bg-[color:var(--green)] px-[10px] py-[5px] font-bold text-[20px] text-[color:var(--sea-green)] cursor-pointer rounded-md'>95 - Excellent</p>
            </div>
            <div className=''>
                <p className='font-bold text-[20px] text-[color:var(--dark-green)]'>Adela Parkson</p>
                <p>Skin care - Food - Travel</p>
                <span className='flex gap-[60px] mt-[30px]'>
                    <span>
                        <p className='font-bold text-[20px] text-[color:var(--dark-green)]'>97.1k</p>
                        <p>Followers</p>
                    </span>
                    <span>
                        <p className='font-bold text-[20px] text-[color:var(--dark-green)]'>17.1</p>
                        <p>View Rate</p>
                    </span>
                    <span>
                        <p className='font-bold text-[20px] text-[color:var(--dark-green)]'>24.7</p>
                        <p>Engagement Rate</p>
                    </span>
                </span>
            </div>
            <div className='flex items-start gap-4'>
                <button className='border-2 border-[color:var(--green)] px-[20px] py-[5px] rounded-xl h-[50px]'>View on instagram</button>
                <button className='border-2 border-[color:var(--green)] px-[20px] py-[5px] rounded-xl h-[50px]'><Heart size={20} color='#169B00' /></button>
            </div>
        </div>
    )
}

export default ProfileCard