import SecondaryHero from "../components/Theme Components/SecondaryPageHero";
import NationalInsuranceChanges from "../components/NationalInsuranceChanges";
import NationalContactForm from "../components/NationalContactForm";

export default function NationalInsuranceChangesPage() {
  return (
    <>
    <SecondaryHero title={"National insurance changes"} classname={"bg-gradient-to-br from-white to-neutral-100 pb-10"}/>
    <NationalInsuranceChanges />
    <NationalContactForm classname={"self-center flex flex-col gap-4 m-auto lg:w-1/2 w-full px-4 lg:pb-20 pb-8"}/>
    </>
  )
}
