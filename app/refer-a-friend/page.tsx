import ReferAFriendHero from "../components/Theme Components/ReferAFriendHero"
import ReferAFriend from "../components/ReferAFriend"
import ContactReferAFriend from "../components/ContactReferAFriend"
export default function OnboardingProcess() {
  return (
    <>
        <ReferAFriendHero title={"Refer a friend"} subtitle={""} classname={"bg-gradient-to-br from-white to-[#00afa917] pb-10"}/>
        <ReferAFriend />
        <ContactReferAFriend classname={'flex flex-col w-11/12 lg:w-8/12 gap-4 m-auto py-10'}/>
    </>
  )
}
