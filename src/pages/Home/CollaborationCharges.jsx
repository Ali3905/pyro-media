import React from 'react'

const CollaborationCharges = () => {
    return (
        <>
           <h1 className='font-bold text-[32px] text-[color:var(--dark-green)]'>Collaboration Charges</h1>
            <div className='bg-white  p-[40px] rounded-xl flex justify-center'>
                <div className='divide-y-2 flex flex-col'>
                    <span className='flex justify-between gap-[50px] py-[10px]'>
                        <p className='font-bold'>One Reel Cost</p>
                        <p>$50</p>
                    </span>
                    <span className='flex justify-between gap-[50px] py-[10px]'>
                        <p className='font-bold'>Story Cost</p>
                        <p>$50</p>
                    </span>
                    <span className='flex justify-between gap-[50px] py-[10px]'>
                        <p className='font-bold'>Post Cost</p>
                        <p>$50</p>
                    </span>
                    <span className='flex justify-between gap-[50px] py-[10px]'>
                        <p className='font-bold'>One Month digital right's Cost</p>
                        <p>$50</p>
                    </span>
                </div>
            </div>
        </>
    )
}

export default CollaborationCharges