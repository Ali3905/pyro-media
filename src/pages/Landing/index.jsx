import { MoveRight } from 'lucide-react'
import React, { useState } from 'react'
import Plans from './Plans'
import WhyPhyo from './WhyPhyo'
import Navbar from '../../components/Navbar'
import Footer from '../../components/Footer'
import Feature from './Feature'
import Faq from './Faq'
import Testimonials from './Testimonials'
import Hero from './Hero'
import How from './How'
import { InfluencersList } from './Search'
import axios from 'axios'


const index = () => {
    const [influencers, setInfluencers] = useState([])
    const [fetchingState, setFetchingState] = useState("idle")

    const getInfluencers = async (prompt) => {
        setFetchingState("loading")
        try {
            const res = await axios({
                method: "post",
                baseURL: "http://localhost:8000",
                url: "/api/ask",
                data: {
                    prompt
                }
            })
            if (res.data.data.length < 1) {
                setFetchingState("notFound")
            } else {
                setInfluencers(res.data.data)
                setFetchingState("success")
            }

        } catch (error) {
            alert("Could not fetch the influencers")
            setFetchingState("error")
            console.log(error);
        }
    }
    return (
        <div className=''>
            <div className='max-w-[1400px] mx-auto pt-[52px] relative z-10'>
                <Navbar />
                {/* <Header /> */}
                <Hero  handleSubmit={getInfluencers} fetchingState={fetchingState} />
                <InfluencersList influencers={influencers} fetchingState={fetchingState} />
                <Feature />
                <WhyPhyo />
                <How />
                {/* <Cards /> */}
                <Faq />
                <Plans />
                <Testimonials />
                <Footer />
                {/* <div className='h-[200px] bg-black'></div> */}
            </div>

            <div className='h-[400px] w-[300px] rounded-full bg-[color:var(--green)] blur-[180px] shadow-2xl absolute -right-[100px] top-[20vh]'></div>

        </div>
    )
}

const Header = () => {
    return (
        <div className=''>
            <h1 className='text-white font-semibold text-[64px] text-center max-w-[70%] mx-auto'>Lorem ipsum sectetur dolor sit amet,con. </h1>
            <h2 className='text-white text-[16px] text-center max-w-[50%] mx-auto'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et. </h2>
            <div className='mt-[55px] border-2 border-[color:var(--dark-green)] flex p-2 pl-[40px] rounded-xl '>
                <input type="text" placeholder="Example: I want to find best influencer fashion industry" className='outline-none bg-transparent border-none flex-grow py-2 text-white' />
                <button className='bg-white px-6 py-2 rounded-md'>Find</button>
            </div>
        </div>
    )
}

const Cards = () => {
    return (
        <div className='mt-[200px]'>
            <h3 className='text-[#5FC34E]'>Services</h3>
            <p className='text-[24px] text-[#F5F5F5]'>Lorem ipsum dolor sit.</p>
            <div className='flex justify-between mt-[35px]'>
                <div className='bg-white p-[42px] max-w-[35%]'>
                    <p className='text-[#5FC34E]'>Services</p>
                    <p className='text-[24px] text-[#161616]'>Lorem ipsum dolor sit.</p>
                    <p className='text-[#86848B] mt-[22px] mb-[30px]' >Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation .</p>
                    <button className='p-4 bg-[color:var(--green)] text-white flex gap-4 items-center'>know more <MoveRight /> </button>
                </div>
                <div className='bg-[#4C4D4C40] p-[42px] max-w-[40%]'>
                    <p className='text-[#5FC34E]'>Services</p>
                    <p className='text-[24px] text-white'>Lorem ipsum dolor sit.</p>
                    <p className='text-[#86848B] mt-[22px] mb-[30px]' >Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation .</p>
                    <button className='p-4 bg-transparent text-white border-2 flex gap-4 items-center'><MoveRight /> </button>
                </div>
            </div>
        </div>
    )
}

export default index