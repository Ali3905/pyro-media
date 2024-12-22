import React, { useState } from 'react'

const Hero = ({ handleSubmit, fetchingState }) => {
    const [prompt, setPrompt] = useState("")
    return (
        <div>
            <div className="relative w-full">
                <h1 className="text-[68px] items-center text-[#312F39] w-[60%] mx-auto text-center font-bold relative">
                    <img src='./star.png' alt='start' className='absolute top-[-10px] right-[-1px] w-[50px] h-auto  ' />
                    Find, Connect, Succeed - The
                    <span className="relative inline-block mx-2">
                        <span className="relative z-10 text-[#00674F]">PyroMedia</span>
                        <img
                            src="/frame.png"
                            alt="frame"
                            className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[120%] h-auto pointer-events-none"
                        />
                    </span>
                    Way.
                </h1>
            </div>


            <p className="text-center text-[#59565F] mt-2 text-[16px] w-[40%] mx-auto">
                Leverage AI to connect with influencers who truly resonate with your target
                audience and amplify your brand's voice.
            </p>

            <div class="flex items-center mt-[75px] justify-center">
                <div class="flex items-center justify-between w-full max-w-4xl border-2 border-green-700 rounded-full p-2 bg-white">
                    <input value={prompt} onChange={(e) => setPrompt(e.target.value)} type="text" placeholder="Example: I want to find best influencer fashion industry" class="w-full outline-none px-4 text-gray-600 placeholder:text-gray-400 text-sm bg-transparent" />
                    <button onClick={()=>handleSubmit(prompt)} class="bg-[#00674F] text-white rounded-full px-6 py-2 text-sm">
                        Find
                    </button>
                </div>
            </div>



        </div>
    )
}

export default Hero