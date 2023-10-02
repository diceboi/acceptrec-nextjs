"use client"

import LeicesterHQOffice from "@/app/components/LeicesterHQOffice"
import OfficeHero from "@/app/components/Theme Components/OfficeHero"

export default function LeicesterHQOfficePage() {
  return (
    <>
        <OfficeHero title={"Leicester HQ"} subtitle={"Offices"} bgimage={"/leicesterhqofficehero.webp"}/>
        <LeicesterHQOffice />
    </>
  )
}
