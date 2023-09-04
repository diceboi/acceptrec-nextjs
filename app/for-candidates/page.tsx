import React from 'react'
import CandidatesHero from '../components/Theme Components/CandidatesHero'
import OurPromise from '../components/OurPromise'
import OurServices from '../components/OurServices'
import EasyRegistration from '../components/EasyRegistration'
import FilterJobs from '../components/FilterJobs'
import AgainstViolance from '../components/AgainstViolance'
import CandidateSuccessStories from '../components/CandidateSuccessStories'
import JobsInYourArea from '../components/JobsInYourArea'

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
    <JobsInYourArea />
    </>
  )
}
