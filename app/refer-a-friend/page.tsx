import ReferAFriendHero from "../components/Theme Components/ReferAFriendHero"
import ReferAFriend from "../components/ReferAFriend"
import ContactReferAFriend from "../components/ContactReferAFriend"
export default function OnboardingProcess() {
  return (
    <>
        <ReferAFriendHero title={"Refer a friend"} subtitle={""} classname={"bg-gradient-to-br from-white to-[#00afa917] pb-10"}/>
        <ReferAFriend />
        <ContactReferAFriend />
    </>
  )
}
