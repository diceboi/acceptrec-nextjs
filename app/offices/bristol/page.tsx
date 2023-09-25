"use client"

import BristolOffice from "@/app/components/BristolOffice"
import OfficeHero from "@/app/components/Theme Components/OfficeHero"

export default function BristolOfficePage() {
  return (
    <>
        <OfficeHero title={"Bristol"} subtitle={"Offices"} bgimage={"/bristolofficehero.webp"}/>
        <BristolOffice />
    </>
  )
}
