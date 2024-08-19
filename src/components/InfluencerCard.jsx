import { ChartColumnIncreasing, Eye, Facebook, Heart, Instagram, ThumbsUp } from 'lucide-react'
import React from 'react'

const InfluencerCard = ({ influencer }) => {
    return (
        <div className='bg-white flex justify-between overflow-hidden rounded-md'>
            <img src="/dummyAvatar1.jpg" alt="profile" className='w-[280px] aspect-square rounded-full relative -top-[50px] -left-[50px]' />
            <div className='mr-auto flex flex-col gap-[15px] self-center ml-[50px]'>
                <p className='font-medium text-[24px] relative -left-[30px]'>{influencer.userName}</p>
                <span className='flex items-center gap-[6px]'>
                    <p className='mr-[10px]'>Type</p>
                    {
                        influencer.type.map((type) => {
                            return <p className='p-1 text-[color:var(--dark-green)] border-2 border-[color:var(--dark-green)]'>{type}</p>
                        })
                    }
                </span>
                <p>Total Followers <span className='font-semibold'>{influencer.totalFollowers}</span></p>
                <p>Followers</p>
                <span className='flex gap-4'>
                    <p className='flex gap-2 bg-[color:var(--dark-green)] px-4 py-2 rounded-md text-white'>
                        <Facebook />
                        {influencer.facebookFollowers}
                    </p>
                    <p className='flex gap-2 bg-[color:var(--dark-green)] px-4 py-2 rounded-md text-white'>
                        <Instagram />
                        {influencer.instagramFollowers}
                    </p>
                </span>
            </div>

            <div className='bg-[#F5F5F5] px-[41px] py-[30px] flex flex-col justify-end relative'>
                <Heart className='absolute top-[5%] right-[5%] text-[color:var(--green)]' />
                <span>
                    <p className='font-medium text-[12px] text-[#86848B] flex items-center gap-2'>Engagement Rate <ThumbsUp size={18} /></p>
                    <p className='font-semibold text-[20px] text-[#312F39]'>{influencer.engagementRate}</p>
                </span>
                <span>
                    <p className='font-medium text-[12px] text-[#86848B] flex gap-2 items-center'>Followers growth rate <ChartColumnIncreasing size={18} /></p>
                    <p className='font-semibold text-[20px] text-[#312F39]'>{influencer.followersGrowthRate}</p>
                </span>
                <span>
                    <p className='font-medium text-[12px] text-[#86848B] flex gap-2 items-center'>View rate <Eye size={18} /></p>
                    <p className='font-semibold text-[20px] text-[#312F39]'>{influencer.viewRate}</p>
                </span>
            </div>
        </div>
    )
}

export default InfluencerCard