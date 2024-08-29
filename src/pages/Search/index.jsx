import React from 'react'
import { influencers } from '../../data/data'
import InfluencerCard from '../../components/InfluencerCard'

const index = () => {
    return (
        <div className='relative bg-black overflow-hidden'>
            {/* Content container */}
            <div className='max-w-[1200px] mx-auto pt-[130px] relative z-10'>
                <Header />
                <InfluencersList influencers={influencers} />
            </div>
            
            {/* Background div */}
            <div className='h-[400px] w-[300px] rounded-full bg-[color:var(--green)] blur-[180px] shadow-2xl absolute -right-[100px] top-[20vh]'></div>
        </div>
    )
}

const Header = () => {
    return (
        <div>
            <h1 className='text-[color:var(--light-green)] font-semibold text-[64px] text-center'>Ai Search</h1>
            <h2 className='text-white text-[40px] font-medium text-center'>Find top right  influencer for your brand </h2>
            <div className='mt-[55px] border-2 border-[color:var(--dark-green)] flex p-2 pl-[40px] rounded-xl'>
                <input type="text" placeholder="Example: I want to find best influencer fashion industry" className='outline-none bg-transparent border-none flex-grow py-2 text-white' />
                <button className='bg-white px-6 py-2 rounded-md'>Find</button>
            </div>
        </div>
    )
}

export const InfluencersList = ({ influencers }) => {
    return (
        <div className='flex flex-col gap-[20px] mt-[150px]'>
            {
                influencers.map((influencer) => {
                    return <InfluencerCard influencer={influencer} />
                })
            }
        </div>
    )
}

export default index