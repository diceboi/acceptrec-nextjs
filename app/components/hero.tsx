import Logocarousel from "./logocarousel"
import {BiSearchAlt} from 'react-icons/bi'

export default function Hero() {
    return(
        <>
            <section className="flex flex-col w-full h-[90vh] overflow-hidden bg-neutral-100">
                <div id="jobsearch" className="flex flex-col justify-evenly w-10/12 lg:w-8/12 mx-auto p-4 lg:p-2 z-10">
                    <div id="hero-title" className="flex flex-col gap-4 lg:pt-32 w-full justify-center items-center ">
                        <h1 className="hero-title text-6xl lg:text-8xl font-black tracking-tighter text-center">Looking for job?</h1>
                        <div className="flex flex-col gap-2 justify-between items-center py-8">
                            <p className="text-sm lg:text-lg font-medium tracking-widest uppercase text-center">find the best in your region</p>
                            {/*<GoogleReviewsWidget apiKey="AIzaSyDKNg9kVl8dYp43BWI7CE5VOGGl4ZhhBYs" placeId="ChIJFdvKHaJgd0gR6jNAd4xRYJk" />*/}
                            
                        </div>
                        
                    </div>
                    <div id="job-filter" className="flex gap-4 py-4 w-full justify-center items-center">
                        <form className="flex flex-col items-center w-full gap-8">
                            <div className="flex flex-col justify-between lg:flex-row w-full items-center lg:items-end gap-2">
                                <div className="grid w-full">
                                    <label className="text-sm lg:text-md uppercase font-medium tracking-widest py-2">Region</label>
                                    <select id="job-region" className="p-4 shadow-sm rounded-full hover:bg-neutral-50">
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
                                    <select id="job-category" className="p-4 shadow-sm rounded-full  hover:bg-neutral-50">
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
                                <div className="grid w-full">
                                    <label htmlFor="job-type" className="text-sm lg:text-md uppercase font-medium tracking-widest py-2">Type</label>
                                    <select id="job-type" className="p-4 shadow-sm rounded-full  hover:bg-neutral-50">
                                        <option value="fulltime">Full time</option>
                                        <option value="parttime">Part time</option>                                                            
                                    </select>
                                </div>
                                <div className="grid w-full">
                                    <label htmlFor="contract-type" className="text-sm lg:text-md uppercase font-medium tracking-widest py-2">Contract type</label>
                                    <select id="contract-type" className="p-4 shadow-sm rounded-full  hover:bg-neutral-50">
                                        <option value="Temporary-permanent">Temporary (Going to be permanent)</option>
                                        <option value="Temporary">Temporary</option>
                                        <option value="Permanent">Permanent</option>                                                           
                                    </select>
                                </div>
                            </div>
                            <button type="submit" className="flex justify-between items-center button-85 w-full bg-[#00afaa] hover:bg-[#00a39e] hover:shadow-xl shadow-lg text-white hover:shadow-[#00afa93b] lg:w-52 p-4 rounded-full transition-all">Find jobs<BiSearchAlt className="text-xl"/></button>
                           
                        </form>
                    </div>
                    <Logocarousel/>
                    
                </div>
            </section>
            </>
    )
}