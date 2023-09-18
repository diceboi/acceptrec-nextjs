import IndustriesInner from "../components/IndustriesInner";
import IndustriesHero from "../components/Theme Components/IndustriesHero";


export default function IndustriesPage() {
  return (
    <>
    <IndustriesHero title={"Industries"} subtitle={"Specialising within niche industries, we use our expertise and systems to source the staff you need. We provide both temporary staffing and permanent solutions."} classname={"bg-gradient-to-br from-white to-[#00afa917] pb-10"}/>
    <IndustriesInner />
    </>
  )
}
