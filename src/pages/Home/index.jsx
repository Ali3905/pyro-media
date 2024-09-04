import React, { useState } from 'react'
import { Sidebar } from '../../components/Sidebar'
import Navbar from '../../components/Navbar'
import ProfileCard from './ProfileCard'
import ContentTypeDistribution from './ContentTypeDistribution'
import Audience from './Audience'
import AudienceAuthenticity from './AudienceAuthenticity'
import CollaborationAndValue from './CollaborationAndValue'
import TopPosts from './TopPosts'
import ContentAnalysis from './ContentAnalysis'
import useFetchInstagramStatistics from '../../hooks/fetchInstagramStatictics'
import { creatorData } from '../../data/data'

const index = () => {
  const [url, setUrl] = useState(null)
  const [creator, setCreator] = useFetchInstagramStatistics(creatorData.data, url)

  const onChange = (e) => {
    setUrl(e.target.value)
  }

  return (
    <div className='flex w-full'>
      <Sidebar />
      <div className='ml-[20vw] bg-[color:var(--light-grey)] w-full min-h-screen px-[30px] py-[30px]'>
        <Navbar onChange={onChange} url={url} />
        <div className='mt-[60px] flex flex-col gap-[40px]'>
          <ProfileCard creator={creator} />
          <ContentTypeDistribution />
          <Audience creator={creator} />
          <AudienceAuthenticity creator={creator} />
          <CollaborationAndValue />
          <TopPosts />
          <ContentAnalysis />
        </div>
      </div>
    </div>
  )
}

export default index