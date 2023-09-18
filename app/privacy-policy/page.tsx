import PrivacyPolicy from "../components/PrivacyPolicy";
import PrivacyPolicyHero from "../components/Theme Components/PrivacyPolicyHero";

export default function PrivacyPolicyPage() {
  return (
    <>
    <PrivacyPolicyHero title={"Privacy Policy"} subtitle={""} classname={"bg-gradient-to-br from-white to-neutral-100 pb-10"}/>
    <PrivacyPolicy />
    </>
  )
}
