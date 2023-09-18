import React from 'react'
import CandidateOfTheMonthHero from '../components/Theme Components/CandidateOfTheMonthHero'
import CandidatesOfTheMonth from '../components/CandidatesOfTheMonth'

export default function CandidateOfTheMonth() {
  return (
    <>
        <CandidateOfTheMonthHero title={"Candidate of the month"} subtitle={"Every month, we select the Candidate of the month, thereby recognizing the value of their work."} classname={"bg-gradient-to-br from-white to-[#00afa917] pb-10"}/>
        <CandidatesOfTheMonth />
    </>
  )
}
