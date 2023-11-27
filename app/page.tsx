import Hero from './components/hero'
import Recruitment from './components/recruitment'
import Advantages from './components/advantages'
import Logocarousel from './components/logocarousel'
import Industries from './components/industries'
import Rated from './components/rated'
import Team from './components/team'
import getJobs from './api/getJobs'
import HomeBanner from './components/HomeBanner'


export default async function Home() {

  const jobs = await getJobs();

  return (
    <>
      <Hero/>
      <Industries /> 
      <Recruitment/>
      <Advantages />
      <Rated />
      <Team />
      <Logocarousel/>
    </>
  )
}