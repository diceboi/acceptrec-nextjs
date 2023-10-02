"use client"

import TamworthOffice from "@/app/components/TamworthOffice"
import OfficeHero from "@/app/components/Theme Components/OfficeHero"

export default function TamworthOfficePage() {
  return (
    <>
        <OfficeHero title={"Tamworth"} subtitle={"Offices"} bgimage={"/tamworthofficehero.webp"}/>
        <TamworthOffice />
    </>
  )
}
