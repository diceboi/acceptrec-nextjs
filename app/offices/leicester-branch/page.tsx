"use client"

import LeicesterBranchOffice from "@/app/components/LeicesterBranchOffice"
import OfficeHero from "@/app/components/Theme Components/OfficeHero"

export default function LeicesterBranchOfficePage() {
  return (
    <>
        <OfficeHero title={"Leicester Branch"} subtitle={"Offices"} bgimage={"/leicesterbrancofficehero.webp"}/>
        <LeicesterBranchOffice />
    </>
  )
}
