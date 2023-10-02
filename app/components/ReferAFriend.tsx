import Image from "next/image"
import Link from "next/link"

export default function ReferAFriend() {
  return (
    <section className="w-full py-20">
        <div className="flex flex-col gap-8 w-11/12 lg:w-8/12 m-auto">
            <div className="flex flex-col lg:flex-row items-center gap-20 pb-20">
                <div className="lg:w-1/2 w-full h-[40vh] bg-[url('/referafriendinner.webp')] bg-center bg-cover bg-no-repeat rounded-3xl">
                </div>
                <div className="flex flex-col gap-4 lg:w-1/2">
                    <h2 className="text-4xl font-black">Refer a friend to us and earn unlimited cash!</h2>
                    <p>We are fortunate at Accept Recruitment that almost all of our new candidates come from recommendations. We focus our efforts on providing you with Accept&apos;s 5 star care and as a result, we see family members and best friends knocking our doors and asking for their next career move. </p>
                </div>
            </div>

            <div className="flex flex-col-reverse lg:flex-row items-center gap-20 pb-20">
                <div className="flex flex-col gap-4 lg:w-1/2">
                    <h2 className="text-4xl font-black">Recommendations are always the best way</h2>
                    <p>Whether it&apos;s a new hairdresser, restaurant or career advisor! Knowing that your friend has been there, and had a good experience, offers you some reassurance that you are not wasting your valuable time, effort and money. Referral work exactly the same in the warehouse and Logistics environment. We are lucky to have a great number of clients that are highly recommended by our candidates.</p>
                </div>
                <div className="lg:w-1/2 w-full h-[40vh] bg-[url('/referafriendinner2.webp')] bg-center bg-contain bg-no-repeat rounded-3xl">
                </div>                
            </div>
            <div className="flex flex-col items-center w-full">
                <h2 className="text-4xl font-black">Referral bonuses available</h2>
                <div className="flex flex-col lg:flex-row gap-8 w-full py-20">
                    <div className="flex flex-col gap-8 items-center justify-center">
                        <h3 className="w-1/2 bg-[#00afaa] rounded-3xl text-5xl text-center text-white font-black p-8 shadow-special">£50</h3>
                        <p className="lg:w-1/2 text-center">£50 worth of voucher will be given to you for every worker that goes on to complete 150 hours with Accept Recruitment! Do you know someone looking for work in Leicestershire or Yorkshire?</p>
                    </div>
                    <div className="flex flex-col gap-8 items-center justify-center">
                        <h3 className="w-1/2 bg-[#00afaa] rounded-3xl text-5xl text-center text-white font-black p-8 shadow-special">£100</h3>
                        <p className="lg:w-1/2 text-center">Referral paid to you if you recommend a vacancy to Accept Recruitment! Do you know someone recruiting for temporary or permanent staff within the Warehouse, Driving or Logistics?</p>
                    </div>

                </div>
            </div>
            
            <div className="flex flex-col gap-4">
                <h2 className="text-2xl font-black">Here&apos;s a treat from us to say thanks!</h2>
                <p>We have just reintroduced our &apos;Recommend a Friend Offer&apos;. So whether it&apos;s a friend, family member, work colleague or whoever you get chatting to! You&apos;ll receive a £50 worth of high-street gift voucher. The more people that come to work for us the more bonuses you will receive. </p>
            </div>

            <div className="flex flex-col gap-4">
                <h2 className="text-2xl font-black">What&apos;s in it for your friend? </h2>
                <p>Registering with a new recruitment agency can be a daunting experience, new consultants, new workplaces and fear of the unknown. Once the online registration is completed and the RTW documents uploaded, our friendly consultants will contact the person you referred to get to know their job requirements. If any steps of the process are unclear, they will happily explain it again and ensure the person you referred to us is left with all the information need for their next job assignment. </p>
            </div>

            <div className="flex flex-col gap-4">
                <h2 className="text-2xl font-black">What&apos;s next? </h2>
                <p>Let us know your recommendation, sit back and let us do the counting!</p>
                <Link href="/refer-terms-and-conditions" className="underline">Terms and conditions</Link>
            </div>
        </div>
    </section>
  )
}
