import React from 'react'
import CandidatesHero from '../components/Theme Components/CandidatesHero'
import OurPromise from '../components/OurPromise'
import OurServices from '../components/OurServices'
import EasyRegistration from '../components/EasyRegistration'
import FilterJobs from '../components/FilterJobs'
import AgainstViolance from '../components/AgainstViolance'
import CandidateSuccessStories from '../components/CandidateSuccessStories'
import JobsInYourArea from '../components/JobsInYourArea'
import Offices from '../components/Offices'

export default function ForCandidates() {
  return (
    <>
    <CandidatesHero />
    <OurPromise />
    <EasyRegistration />
    <FilterJobs />
    <AgainstViolance />
    <OurServices />
    <CandidateSuccessStories />
    <Offices classname={'grid grid-cols-2 gap-8 w-11/12 lg:w-8/12 m-auto py-20'} />
    </>
  )
}
