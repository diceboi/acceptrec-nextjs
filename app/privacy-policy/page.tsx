import PrivacyPolicy from "../components/PrivacyPolicy";
import SecondaryHero from "../components/Theme Components/SecondaryPageHero";

export default function PrivacyPolicyPage() {
  return (
    <>
    <SecondaryHero title={"Privacy Policy"} classname={"bg-gradient-to-br from-white to-neutral-100 pb-10 pt-16 lg:pt-0"}/>
    <PrivacyPolicy />
    </>
  )
}
