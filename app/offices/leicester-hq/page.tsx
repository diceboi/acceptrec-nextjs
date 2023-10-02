"use client"

import LeicesterHqOffice from "@/app/components/LeicesterHqOffice"
import OfficeHero from "@/app/components/Theme Components/OfficeHero"

export default function LeicesterHqOfficePage() {
  return (
    <>
        <OfficeHero title={"Leicester HQ"} subtitle={"Offices"} bgimage={"/leicesterhqofficehero.webp"}/>
        <LeicesterHqOffice />
    </>
  )
}
