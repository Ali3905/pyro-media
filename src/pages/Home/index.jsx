import React from 'react'
import { Sidebar } from '../../components/Sidebar'
import Navbar from '../../components/Navbar'
import ProfileCard from './ProfileCard'
import ContentTypeDistribution from './ContentTypeDistribution'
import Audience from './Audience'
import AudienceAuthenticity from './AudienceAuthenticity'
import CollaborationAndValue from './CollaborationAndValue'
import TopPosts from './TopPosts'
import ContentAnalysis from './ContentAnalysis'

const index = () => {
  return (
    <div className='flex w-full'>
      <Sidebar />
      <div className='ml-[20vw] bg-[color:var(--light-grey)] w-full min-h-screen px-[50px] py-[30px]'>
        <Navbar />
        <div className='mt-[60px] flex flex-col gap-[40px]'>
          <ProfileCard />
          <ContentTypeDistribution />
          <Audience />
          <AudienceAuthenticity />
          <CollaborationAndValue />
          <TopPosts />
          <ContentAnalysis />
        </div>
      </div>
    </div>
  )
}

export default index