import React from 'react'
import { Card, Heading } from './ContentTypeDistribution';
import { creatorData } from '../../data/data';

const AudienceNewDesign = () => {
    return (
        <>
            <h1 className='font-bold text-[32px] text-[color:var(--dark-green)]'>Audience</h1>
            <div className='bg-white  p-[20px] rounded-xl'>
                <div className='flex flex-col'>
                    <Heading text="Gender Distribution" />
                    <span className='flex gap-[20px] self-center'>
                        <Card title={"Men"} data={"64"} />
                        <Card title={"Women"} data={"36"} />
                    </span>
                    <AudienceByCountry data={creatorData.data.membersCountries} />
                </div>
            </div>
        </>
    )
}

export default AudienceNewDesign


export function AudienceByCountry({ data }) {
    return (
        <div className=''>
            <Heading text={"Top Cities"} />
            <div className='flex border-b px-[30px] pb-[10px] my-[20px]'>
                <p className='w-[100px]'>Country</p>
                <p>Progress</p>
            </div>
            <div className='px-[30px] flex flex-col gap-[20px]'>
                {
                    data.map((ele) => {
                        return <div className='flex'>
                            <p className='w-[100px] capitalize'>{ele.category}</p>
                            <span className='bg-[color:var(--light-grey)] w-[200px] relative h-[10px] rounded-md overflow-hidden'>
                                <span className="bg-[#3CB448] h-full absolute top-0 left-0" style={{ width: ele.value * 100 + "%" }}></span>
                            </span>
                        </div>
                    })
                }
            </div>
        </div>
    );
}