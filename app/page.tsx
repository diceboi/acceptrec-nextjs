import Hero from './components/hero'
import NewestJobs from './components/newestjobs'
import Recruitment from './components/recruitment'
import Advantages from './components/advantages'
import Logocarousel from './components/logocarousel'
import Industries from './components/industries'


export default function Home() {
  return (
    <>
      <Hero/>
      <NewestJobs/>
      <Logocarousel/>
      <Recruitment/>
      <Advantages />
      <Industries />
    </>
  )
}