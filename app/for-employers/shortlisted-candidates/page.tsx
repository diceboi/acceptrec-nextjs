import ShortlistedCandidateTile from "@/app/components/ShortlistedCandidateTile";
import ShortlistedHero from "@/app/components/Theme Components/ShortlistedHero";


export default function ShortlistedCandidatesPage() {
  return (
    <>
      <ShortlistedHero title={"Shortlisted Candidates"} subtitle={"Every week, we choose a number of candidates with great skills and even better potential to grow in the warehousing, logistics or commercial industries and post their short profiles here. Let us know who sounds like an interesting fit to your team and we will send you their CV free of charge."} classname={"bg-gradient-to-br from-white to-[#00afa917] pb-10 pt-16 lg:pt-0"}/>
      <section className="w-full py-20">
        <div className="grid lg:grid-cols-2 gap-16 w-11/12 lg:w-8/12 m-auto">
          <ShortlistedCandidateTile 
              name={"Chris"} 
              description={"Chris is looking for an Operations Supervisor/Contract support Manager Job in Leeds"} 
              location={"Leeds, LS16"} 
              achievements={"With over 19 years experience within logistics and Warhousing highly motivated and driven individual, with a passion to succeed in all areas of his professional life. Has managed teams of 50+ staff"} 
              skills={"Production/Presentation of Valuations and results. Creating multiple Bills of Lading. Team training & Development"} 
              salary={"£35k+"} 
          />
          <ShortlistedCandidateTile 
              name={"Brendan"} 
              description={"Brendan is looking for a job in Leicester."} 
              location={"Leicester"} 
              achievements={"24 years experience in Logistics, Distribution and Manufacturing."} 
              skills={"Multi-functional Warehouse Op/FLT Driver (Bendi, Reach, CB & clamp truck), Supervisory experience, Worked in goods in/dispatch/stock control."} 
              salary={"£35k+"} 
          />
        </div>
      </section>
    </>
  )
}

