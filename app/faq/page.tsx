import FaqHero from "../components/Theme Components/FaqHero"
import FAQComponent from "../components/FaqComponent"

export default function Faqpage() {
  return (
    <>
    <FaqHero title={"FAQ"} subtitle={"Frequently asked questions"} classname={"bg-gradient-to-br from-white to-[#00afa917] pb-10 pt-16 lg:pt-0"}/>
    <FAQComponent />
    </>
  )
}
