import Link from "next/link";
import ContactForm from "./ContactForm";
import { TbBrandMessenger, TbPencil, TbUserHeart } from "react-icons/tb";


export default function MainCTA() {
  return (
    <section className="w-full py-20 bg-neutral-50">
        <div className="w-11/12 lg:w-8/12 m-auto">
            <div className="flex flex-col w-full gap-20">
                <h2 className="text-5xl text-[#312252] font-black">Get in touch</h2>
                <div className="grid grid-cols-1 lg:grid-cols-3 w-full gap-8 lg:gap-20">
                    <div className="flex flex-col gap-4 lg:border-r lg:border-neutral-300 lg:pr-10">
                        <div className="flex flex-nowrap gap-2">
                            <TbPencil className="w-6 h-6"/>
                            <h3 className="uppercase font-bold">Write to Us</h3>
                        </div>
                        <p>Leave Us a message in our <Link href="/contact-us" className="text-[#00afaa] underline">Contact page</Link> and we will get in touch with you shortly.</p>
                    </div>
                    <div className="flex flex-col gap-4 lg:border-r lg:border-neutral-300 lg:pr-10">
                        <div className="flex flex-nowrap gap-2">
                            <TbUserHeart className="w-6 h-6"/>
                            <h3 className="uppercase font-bold">Visit Us</h3>
                        </div>
                        <p>Visit one of our <Link href="/offices" className="text-[#00afaa] underline">Offices</Link> and we will give you a warm welcome.</p>
                    </div>
                    <div className="flex flex-col gap-4">
                        <div className="relative flex flex-nowrap gap-2 after:absolute after:top-0 after:right-0 after:bg-[#FF914D] after:w-auto after:h-auto after:content-['New'] after:text-white after:font-bold after:uppercase after:px-1 after:shadow-special after:rounded-md">
                            <TbBrandMessenger className="w-6 h-6"/>
                            <h3 className="uppercase font-bold">Live Chat</h3>
                        </div>
                        <p>Try out our new Chat in the bottom right corner of the page, and get your first live experience with Us.</p>
                    </div>
                </div>
            </div>
        </div>

    </section>
  )
}
