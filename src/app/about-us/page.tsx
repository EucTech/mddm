import AboutHero from '@/components/AboutUs/AboutHero'
import Media from '@/components/AboutUs/Media'
import OurMission from '@/components/AboutUs/OurMission'
import OurTeam from '@/components/AboutUs/OurTeam'
import Support from '@/components/HomePage/Support'
import React from 'react'

const page = () => {
  return (
    <div>
      <AboutHero/>
      <OurMission/>
      <Media/>
      <OurTeam/>
      <Support/>
    </div>
  )
}

export default page
