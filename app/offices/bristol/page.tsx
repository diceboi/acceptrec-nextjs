import BristolOffice from "@/app/components/BristolOffice"
import PrimaryHero from "@/app/components/Theme Components/PrimaryHero"

export default function BristolOfficePage() {
  return (
    <>
        <PrimaryHero title={"Bristol Office"} classname={"bg-gradient-to-br from-white to-[#00afa917] pb-10"} bgimage={"/officehero.webp"}/>
        <BristolOffice />
    </>
  )
}
