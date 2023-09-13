import GoogleReviewNumber from "./googlereviewnumber"
import Logocarousel from "./logocarousel"
import {BiSearchAlt} from 'react-icons/bi'
import { FcGoogle } from 'react-icons/fc'
import { AiFillStar } from 'react-icons/ai'
import Image from "next/image"

export default function Hero() {
    return(
        <>
            <section className="relative flex flex-col w-full overflow-hidden bg-gradient-to-br from-white to-neutral-200 h-[92vh]">
                <div id="jobsearch" className="flex flex-col justify-evenly w-10/12 lg:w-8/12 mx-auto p-4 lg:p-2 z-10">
                    <div id="hero-title" className="flex flex-col gap-4 lg:pt-32 w-full justify-center items-center ">
                    <div className="flex items-center justify-center gap-1 text-sm"><span className="flex gap-1 items-center"><AiFillStar className=" text-amber-400"/><b>4.8</b> stars by</span><b><GoogleReviewNumber/></b><span className="flex gap-1 items-center"> +<FcGoogle /> Google reviews</span></div>
                        <h1 className="hero-title text-6xl lg:text-8xl font-black tracking-tighter text-center p-2">Looking for job?</h1>
                        <div className="flex flex-col gap-2 justify-between items-center pb-8">
                            <p className="text-sm lg:text-lg font-medium tracking-widest uppercase text-center">find the best in your region</p>
                            {/*<GoogleReviewsWidget apiKey="AIzaSyDKNg9kVl8dYp43BWI7CE5VOGGl4ZhhBYs" placeId="ChIJFdvKHaJgd0gR6jNAd4xRYJk" />*/}
                            
                        </div>
                        
                    </div>
                    <div id="job-filter" className="flex gap-4 py-4 w-full justify-center items-center">
                        <form className="flex flex-col items-center max-w-5xl gap-8 mb-28">
                            <div className="flex flex-col justify-between lg:flex-row items-center lg:items-end gap-2">
                                <div className="grid w-full">
                                    <label className="text-sm lg:text-md uppercase font-medium tracking-widest py-2">Region</label>
                                    <select id="job-region" className="p-4 shadow-special rounded-full hover:bg-neutral-50 cursor-pointer ">
                                        <option value="Bristol">City of Bristol</option>
                                        <option value="Leicestershire">Leicestershire</option>
                                        <option value="Warwickshire">Warwickshire</option>
                                        <option value="Gloucestershire">Gloucestershire</option>
                                        <option value="Staffordshire">Staffordshire</option>
                                        <option value="Lanarkshire">Lanarkshire</option>
                                        <option value="Essex">Essex</option>
                                        <option value="Herefordshire">Herefordshire</option>
                                        <option value="Glamorgan">Glamorgan</option>
                                        <option value="London">London</option>
                                        <option value="Wiltshire">Wiltshire</option>
                                    </select>
                                </div>
                                <div className="grid w-full">
                                    <label htmlFor="job-category" className="text-sm lg:text-md uppercase font-medium tracking-widest py-2">Category</label>
                                    <select id="job-category" className="p-4 shadow-special rounded-full  hover:bg-neutral-50 cursor-pointer">
                                        <option value="Industrial">Industrial</option>
                                        <option value="Logistics-transportation">Logistics & Trapnsportation</option>
                                        <option value="Automotive">Automotive</option>
                                        <option value="Engineering">Engineering</option>
                                        <option value="Manufacturing-production">Manufacturing & Production</option>
                                        <option value="Business">Business</option>
                                        <option value="Administration-secretarial">Administration & Secretarial</option>
                                        <option value="Recruitment-hr">Recruitment & HR</option>
                                        <option value="Sales">Sales</option>
                                        <option value="Security-safety">Security & Safety</option>                            
                                    </select>
                                </div>
                                <button type="submit" className="flex justify-between items-center button-85 w-full bg-[#00afaa] hover:bg-[#00a39e] hover:shadow-xl shadow-lg text-white hover:shadow-[#00afa93b] lg:w-96 p-4 rounded-full transition-all">Find jobs<BiSearchAlt className="text-xl"/></button>                                
                            </div>
                                                      
                        </form>
                    </div>
                </div>
                <Image src="/herobg.png" width={1280} height={853} alt="happy-team" className="absolute -bottom-[1.5em] right-1/2 translate-x-1/2 min-w-[1280px] h-auto"/>
            </section>
            </>
    )
}