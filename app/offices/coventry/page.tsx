"use client"

import CoventryOffice from "@/app/components/CoventryOffice"
import OfficeHero from "@/app/components/Theme Components/OfficeHero"

export default function CoventryOfficePage() {
  return (
    <>
        <OfficeHero title={"Coventry"} subtitle={"Offices"} bgimage={"/coventryofficehero.webp"}/>
        <CoventryOffice />
    </>
  )
}
