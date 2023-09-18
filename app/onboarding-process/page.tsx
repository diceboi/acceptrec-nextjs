import React from 'react'
import OnboardingHero from '../components/Theme Components/OnboardingHero'
import OnboardingInner from '../components/OnboardingInner'

export default function OnboardingProcess() {
  return (
    <>
        <OnboardingHero title={"Onboarding Process"} subtitle={"To ensure that our recruitment process is a marketing leading experience for both Clients and Candidates alike, we always evaluate essential feedback to make the process as smooth, efficient and rewarding as possible."} classname={"bg-gradient-to-br from-white to-[#00afa917] pb-10"}/>
        <OnboardingInner />
    </>
  )
}
