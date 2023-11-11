import Covid19 from "../components/Covid19";
import SecondaryHero from "../components/Theme Components/SecondaryPageHero";

export default function Covid19Page() {
  return (
    <>
    <SecondaryHero title={"Covid 19"} classname={"bg-gradient-to-br from-white to-neutral-100 pb-10 pt-16 lg:pt-0"}/>
    <Covid19 />
    </>
  )
}
