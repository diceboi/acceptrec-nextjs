import CareerForm from "../components/CareerForm"
import CareerJobs from "../components/CareerJobs"
import CareerHero from "../components/Theme Components/CareerHero"

export default function CareerPage() {
  return (
    <>
    <CareerHero title={"Join our team"} subtitle={"Be part of our awesome team"} classname={"bg-gradient-to-br from-white to-[#00afa917] pb-10 pt-16 lg:pt-0"}/>
    <CareerJobs />
    <CareerForm classname={"flex justify-center w-11/12 lg:w-1/2 h-auto m-auto"}/>
    </>
  )
}
