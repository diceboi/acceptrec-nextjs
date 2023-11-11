import RegistrationInner from "../components/RegistrationInner"
import RegistrationHero from "../components/Theme Components/RegistrationHero"

export default function RegistrationPage() {
  return (
    <>
        <RegistrationHero title={"Registration / Sign In"} subtitle={""} classname={"bg-gradient-to-br from-white to-[#00afa917] pb-10 pt-16 lg:pt-0"}/>
        <RegistrationInner />
    </>
  )
}
