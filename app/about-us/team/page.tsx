import TeamInner from "@/app/components/TeamInner";
import TeamHero from "@/app/components/Theme Components/TeamHero";
import Team from "@/app/components/team";


export default function TeamPage() {
  return (
    <>
        <TeamHero title={"Meet the team"} subtitle={"our team"} classname={"bg-gradient-to-br from-white to-[#00afa917] pb-10"}/>
        <TeamInner />
    </>
  )
}
