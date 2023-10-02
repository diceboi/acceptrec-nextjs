"use client"

import DesfordOffice from "@/app/components/DesfordOffice"
import OfficeHero from "@/app/components/Theme Components/OfficeHero"

export default function DesfordOfficePage() {
  return (
    <>
        <OfficeHero title={"Desford"} subtitle={"Offices"} bgimage={"/desfordofficehero.webp"}/>
        <DesfordOffice />
    </>
  )
}
