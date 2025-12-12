"use client"

import CaseStudies from '../../components/CaseStudies'
import MainHero from '../../components/Theme Components/MainHero'

export default function CaseStudiesPage() {
  return (
    <>
      <MainHero 
        MainTitle={"Case Studies"}
        Text={"Discover how we've helped individuals achieve their career goals through innovative solutions and dedicated partnerships."} 
        BackgroundImage={"/case-studies/case-studies.webp"} 
        BackgroundImageAltText={"Case Studies"} 
      />
      <CaseStudies 
        title={""} 
        text={""} 
      />
    </>
  )
}
