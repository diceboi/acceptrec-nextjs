import Image from 'next/image'

interface Props {
  title: string;
  text: string;
}

export default function CaseStudies({ title, text }: Props) {
  return (
    <section className="relative py-20 bg-white">
      <div className='flex flex-col w-11/12 lg:w-8/12 gap-40 m-auto'>
        
        {/* Page 1: Client and Candidate Success Stories */}
        <div className="bg-white flex flex-col">
          <div className="grid md:grid-cols-2 gap-12 items-center flex-1">
            {/* Left Content */}
            <div className="flex flex-col justify-center space-y-6">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-[#312252] leading-tight">
                Client and Candidate<br />Success Stories
              </h1>
              <p className="text-base md:text-lg text-gray-700 leading-relaxed">
                Our success stories are what we&apos;re most proud of. We value our clients and candidates deeply, ensuring operations run smoothly whilst supporting workers to progress from the shop floor to management roles.
              </p>
            </div>
            
            {/* Right Image */}
            <div className="relative h-[400px] md:h-[500px] lg:h-[600px] rounded-lg overflow-hidden">
              <Image 
                src="/case-studies/8.webp" 
                alt="Team celebrating success" 
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>

        {/* Page 2: 0 - 70 in 7 Days */}
        <div className="bg-white flex flex-col">
          <div className="grid md:grid-cols-2 gap-12 flex-1">
            {/* Left Content */}
            <div className="flex flex-col justify-between">
              <div className="space-y-8">
                <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-[#312252]">
                  0 – 70 in 7 Days
                </h2>
                
                {/* Challenge and Response Section */}
                <div className="grid sm:grid-cols-2 gap-8">
                  {/* The Challenge */}
                  <div>
                    <h3 className="text-xl font-bold text-[#312252] mb-4">The Challenge</h3>
                    <ul className="space-y-3 text-sm md:text-base text-gray-700">
                      <li className="flex gap-2">
                        <span className="text-[#312252] mt-1">•</span>
                        <span>A leading logistics and parcel services company needed 5 night-shift workers with extremely short notice.</span>
                      </li>
                      <li className="flex gap-2">
                        <span className="text-[#312252] mt-1">•</span>
                        <span>The key challenge was building a reliable workforce almost overnight.</span>
                      </li>
                    </ul>
                  </div>
                  
                  {/* Our Response */}
                  <div>
                    <h3 className="text-xl font-bold text-[#312252] mb-4">Our Response</h3>
                    <ul className="space-y-3 text-sm md:text-base text-gray-700">
                      <li className="flex gap-2">
                        <span className="text-[#312252] mt-1">•</span>
                        <span>Successfully placed 55 temporary staff within 3 days.</span>
                      </li>
                      <li className="flex gap-2">
                        <span className="text-[#312252] mt-1">•</span>
                        <span>Expanded to 70 workers in place by the end of the week.</span>
                      </li>
                      <li className="flex gap-2">
                        <span className="text-[#312252] mt-1">•</span>
                        <span>Both Leicester and Coventry teams provided on-site presence for every shift.</span>
                      </li>
                      <li className="flex gap-2">
                        <span className="text-[#312252] mt-1">•</span>
                        <span>On-site presence included weekend shifts, working around the clock.</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              
              {/* Statistics */}
              <div className="grid grid-cols-3 gap-4 md:gap-8 mt-12">
                {/* Stat 1 */}
                <div className="text-center">
                  <div className="text-3xl md:text-4xl lg:text-5xl font-black text-[#00afaa] mb-2">
                    97.77%
                  </div>
                  <div className="text-xs md:text-sm font-semibold text-[#00afaa] mb-1">
                    Attendance Rate
                  </div>
                  <div className="text-xs text-gray-600">
                    Exceptional reliability across all shifts
                  </div>
                </div>
                
                {/* Stat 2 */}
                <div className="text-center">
                  <div className="text-3xl md:text-4xl lg:text-5xl font-black text-[#00afaa] mb-2">
                    100
                  </div>
                  <div className="text-xs md:text-sm font-semibold text-[#00afaa] mb-1">
                    New Starters
                  </div>
                  <div className="text-xs text-gray-600">
                    Processed onto payroll within 3 weeks
                  </div>
                </div>
                
                {/* Stat 3 */}
                <div className="text-center">
                  <div className="text-3xl md:text-4xl lg:text-5xl font-black text-[#00afaa] mb-2">
                    2
                  </div>
                  <div className="text-xs md:text-sm font-semibold text-[#00afaa] mb-1">
                    Preferred Agency
                  </div>
                  <div className="text-xs text-gray-600">
                    Selected by 2nd October
                  </div>
                </div>
              </div>
            </div>
            
            {/* Right Image */}
            <div className="relative h-[400px] md:h-full min-h-[500px] rounded-lg overflow-hidden">
              <Image 
                src="/case-studies/11.webp" 
                alt="Warehouse logistics operation" 
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>

        {/* Page 3: Conversation to On-Site */}
        <div className="bg-white flex flex-col">
          <div className="grid md:grid-cols-2 gap-12 flex-1">
            {/* Left Content */}
            <div className="flex flex-col justify-between">
              <div className="space-y-8">
                <h2 className="text-4xl md:text-5xl font-black text-[#312252]">
                  Conversation to On-Site:
                </h2>
                
                <p className="text-sm md:text-base text-gray-700 leading-relaxed">
                  A leading construction company, partnered with Accept Recruitment as their sole recruitment partner from the very beginning. As operations grew, they trialled other agencies including Best Connection, Frontline, Thorn Baker, and Senior Salmon.
                </p>

                {/* Timeline */}
                <div className="space-y-6 relative">
                  {/* Vertical line */}
                  <div className="absolute left-[17px] top-8 bottom-8 w-0.5 bg-[#00afaa]"></div>
                  
                  {/* Step 1 */}
                  <div className="flex gap-4 relative">
                    <div className="flex-shrink-0 w-9 h-9 bg-[#00afaa] text-white font-black rounded flex items-center justify-center z-10">
                      1
                    </div>
                    <div>
                      <h4 className="font-bold text-[#312252] mb-1">Week of 21st July</h4>
                      <p className="text-sm text-gray-600">Took on larger on-site role, supplying 41 workers per day</p>
                    </div>
                  </div>

                  {/* Step 2 */}
                  <div className="flex gap-4 relative">
                    <div className="flex-shrink-0 w-9 h-9 bg-[#00afaa] text-white font-black rounded flex items-center justify-center z-10">
                      2
                    </div>
                    <div>
                      <h4 className="font-bold text-[#312252] mb-1">10 Weeks Later</h4>
                      <p className="text-sm text-gray-600">Doubled supply to 83 workers per day</p>
                    </div>
                  </div>

                  {/* Step 3 */}
                  <div className="flex gap-4 relative">
                    <div className="flex-shrink-0 w-9 h-9 bg-[#00afaa] text-white font-black rounded flex items-center justify-center z-10">
                      3
                    </div>
                    <div>
                      <h4 className="font-bold text-[#312252] mb-1">Final Result</h4>
                      <p className="text-sm text-gray-600">Secured place on their PSL for permanent roles.</p>
                    </div>
                  </div>
                </div>

                {/* Purple boxes */}
                <div className="space-y-4 mt-8">
                  <div className="bg-[#312252] text-white p-6 rounded-lg">
                    <h4 className="font-black text-xl mb-2">90+ New Starters</h4>
                    <p className="text-sm">With only 31 leavers managed smoothly</p>
                  </div>
                  <div className="bg-[#312252] text-white p-6 rounded-lg">
                    <h4 className="font-black text-xl mb-2">10 Permanent Transfers</h4>
                    <p className="text-sm">Workers successfully moved to permanent contracts</p>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Right Image */}
            <div className="relative h-[400px] md:h-full min-h-[500px] rounded-lg overflow-hidden">
              <Image 
                src="/case-studies/4.webp" 
                alt="Construction site workers" 
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>

        {/* Page 4: 60 Starters in Just 2 Weeks */}
        <div className="bg-white flex flex-col">
          <div className="grid md:grid-cols-2 gap-12 flex-1">
            {/* Left Content */}
            <div className="flex flex-col justify-center">
              <div className="space-y-8">
                <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-[#312252]">
                  60 Starters in Just 2 Weeks
                </h2>
                
                <p className="text-sm md:text-base text-gray-700 leading-relaxed">
                  A leading warehousing and distribution company needed large-scale warehouse recruitment at speed, with approval to begin on 21st November 2019. The challenge involved fluctuating weekly demands, sudden pauses, and mid-week changes to starter volumes.
                </p>

                {/* Numbered list */}
                <div className="space-y-6">
                  {/* Item 01 */}
                  <div className="border-l-4 border-[#00afaa] pl-6">
                    <div className="text-xs font-semibold text-[#00afaa] mb-2">01</div>
                    <h4 className="font-bold text-[#312252] text-lg mb-2">Rapid Mobilisation</h4>
                    <p className="text-sm text-gray-700">Introduced 20 new starters in the first weekend alone</p>
                  </div>

                  {/* Item 02 */}
                  <div className="border-l-4 border-[#00afaa] pl-6">
                    <div className="text-xs font-semibold text-[#00afaa] mb-2">02</div>
                    <h4 className="font-bold text-[#312252] text-lg mb-2">On-Site Presence</h4>
                    <p className="text-sm text-gray-700">Leicester team handled inductions and supported workers through first shifts</p>
                  </div>

                  {/* Item 03 */}
                  <div className="border-l-4 border-[#00afaa] pl-6">
                    <div className="text-xs font-semibold text-[#00afaa] mb-2">03</div>
                    <h4 className="font-bold text-[#312252] text-lg mb-2">Flexible Response</h4>
                    <p className="text-sm text-gray-700">Managed sudden pauses and reductions whilst maintaining service quality</p>
                  </div>

                  {/* Item 04 */}
                  <div className="border-l-4 border-[#00afaa] pl-6">
                    <div className="text-xs font-semibold text-[#00afaa] mb-2">04</div>
                    <h4 className="font-bold text-[#312252] text-lg mb-2">Consistent Delivery</h4>
                    <p className="text-sm text-gray-700">Supplied 15-20 workers daily, achieving 65% site coverage</p>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Right Image */}
            <div className="relative h-[400px] md:h-full min-h-[500px] rounded-lg overflow-hidden">
              <Image 
                src="/case-studies/5.webp" 
                alt="Large warehouse facility" 
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>

        {/* Page 5: Candidate Success Stories Hero */}
        <div className="bg-white flex flex-col">
          <div className="grid md:grid-cols-2 gap-12 items-center flex-1">
            {/* Left Content */}
            <div className="flex flex-col justify-center space-y-6">
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-black text-[#312252] leading-tight">
                Candidate Success Stories
              </h1>
              <p className="text-base md:text-lg text-gray-600 leading-relaxed">
                Nothing makes us prouder than seeing workers progress through their roles, from the shop floor all the way up to helping manage operations.
              </p>
            </div>
            
            {/* Right Image */}
            <div className="relative h-[400px] md:h-[500px] lg:h-[600px] rounded-lg overflow-hidden">
              <Image 
                src="/case-studies/13.webp" 
                alt="Employee celebrating promotion" 
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>

        {/* Page 6: Candidate Profiles */}
        <div className="bg-white flex flex-col">
          <h2 className="text-3xl md:text-4xl font-black text-[#312252] mb-12">
            Candidate Success Stories
          </h2>
          
          <div className="grid md:grid-cols-3 gap-8 md:gap-12">
            {/* Profile 1: Gina */}
            <div className="flex flex-col items-center text-center space-y-4">
              <div className="relative w-48 h-48 md:w-56 md:h-56 rounded-full overflow-hidden">
                <Image 
                  src="/case-studies/1.webp" 
                  alt="Gina - Team Leader" 
                  fill
                  className="object-cover"
                />
              </div>
              <h3 className="font-bold text-lg text-[#312252]">Gina – Team Leader, Dispatch</h3>
              <p className="text-sm text-gray-700">
                Started as a picker and quickly promoted to Team Leader. Improved picking efficiency and dispatch performance, now involved in developing systems across the Distribution Centre.
              </p>
            </div>

            {/* Profile 2: Dharmesh */}
            <div className="flex flex-col items-center text-center space-y-4">
              <div className="relative w-48 h-48 md:w-56 md:h-56 rounded-full overflow-hidden">
                <Image 
                  src="/case-studies/2.webp" 
                  alt="Dharmesh - Planning Department" 
                  fill
                  className="object-cover"
                />
              </div>
              <h3 className="font-bold text-lg text-[#312252]">Dharmesh – Planning Department</h3>
              <p className="text-sm text-gray-700">
                One of our longest-standing placements. Progressed from picker to planning support with exceptional Excel skills. Offered permanent contract for consistent performance and contribution.
              </p>
            </div>

            {/* Profile 3: Sarah */}
            <div className="flex flex-col items-center text-center space-y-4">
              <div className="relative w-48 h-48 md:w-56 md:h-56 rounded-full overflow-hidden">
                <Image 
                  src="/case-studies/3.webp" 
                  alt="Sarah - PM Team Leader" 
                  fill
                  className="object-cover"
                />
              </div>
              <h3 className="font-bold text-lg text-[#312252]">Sarah – PM Team Leader</h3>
              <p className="text-sm text-gray-700">
                Began as a picker on PM shift, known for accuracy and teamwork. Promoted to Team Leader, now leads the PM picking team and trains new starters.
              </p>
            </div>
          </div>
        </div>

        {/* Page 7: Driving Success - Jacob Barry */}
        <div className="bg-white flex flex-col">
          <div className="grid md:grid-cols-2 gap-12 flex-1">
            {/* Left Content */}
            <div className="flex flex-col justify-center">
              <div className="space-y-6">
                <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-[#312252]">
                  Driving Success: Jacob Barry
                </h2>
                
                <p className="text-sm md:text-base text-gray-700 leading-relaxed">
                  Jacob Barry has become an invaluable member of the team at a national aggregates transport and materials-movement company, earning high praise for his flexibility, professionalism, and dedication. Always ready to step up where needed, Jacob seamlessly supports multiple sites with a great attitude.
                </p>

                {/* Quote */}
                <blockquote className="border-l-4 border-[#312252] pl-6 py-4 italic text-gray-700 text-sm md:text-base">
                  &quot;Even during challenging periods when driver numbers had to be reduced across the operation, Jacob&apos;s exceptional work ethic stood out. His commitment made such a positive impact that he was one of the few retained.&quot;
                </blockquote>

                <p className="text-sm md:text-base text-gray-700 leading-relaxed">
                  Jacob&apos;s adaptability and professionalism perfectly reflect our partnership values and the standards we strive for with every placement.
                </p>
              </div>
            </div>
            
            {/* Right Image */}
            <div className="relative h-[400px] md:h-full min-h-[500px] rounded-lg overflow-hidden">
              <Image 
                src="/case-studies/6.webp" 
                alt="Jacob Barry - Driver" 
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>

        {/* Page 8: A Perfect Fit - Lee Payne */}
        <div className="bg-white flex flex-col">
          <div className="grid md:grid-cols-2 gap-12 flex-1">
            {/* Left Image */}
            <div className="relative h-[400px] md:h-full min-h-[500px] rounded-lg overflow-hidden">
              <Image 
                src="/case-studies/12.webp" 
                alt="Lee Payne - Driver" 
                fill
                className="object-cover"
              />
            </div>

            {/* Right Content */}
            <div className="flex flex-col justify-center">
              <div className="space-y-6">
                <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-[#312252]">
                  A Perfect Fit: Lee Payne
                </h2>
                
                {/* Info boxes with green border */}
                <div className="space-y-4">
                  {/* Box 1 */}
                  <div className="border-4 border-[#00afaa] p-6 rounded-lg">
                    <h4 className="font-bold text-lg text-[#312252] mb-2">First Placement & Professionalism</h4>
                    <p className="text-sm text-gray-700">
                      Lee was our very first placement when we partnered with a leading timber and building materials supplier in early 2023. From day one, he demonstrated exceptional professionalism, arriving 15 minutes early for every shift and maintaining a spotless delivery record.
                    </p>
                  </div>

                  {/* Box 2 */}
                  <div className="border-4 border-[#00afaa] p-6 rounded-lg">
                    <h4 className="font-bold text-lg text-[#312252] mb-2">Efficiency & Customer Relations</h4>
                    <p className="text-sm text-gray-700">
                      His route efficiency improved by 20% within the first month, consistently completing 12-15 deliveries per day across the Midlands region. Known for his demeanour and problem-solving skills, Lee built strong relationships with regular customers at construction sites.
                    </p>
                  </div>

                  {/* Box 3 */}
                  <div className="border-4 border-[#00afaa] p-6 rounded-lg">
                    <h4 className="font-bold text-lg text-[#312252] mb-2">Outstanding Impact & Recognition</h4>
                    <p className="text-sm text-gray-700">
                      During one delivery to a major housing development, the site manager was so impressed with Lee&apos;s professionalism, attention to safety protocols, and helpful attitude that they contacted our agency directly requesting &quot;another driver just like Lee&quot;. Lee&apos;s ability to handle complex deliveries, including navigating tight construction sites and coordinating with site teams, made him an invaluable asset.
                    </p>
                  </div>

                  {/* Box 4 */}
                  <div className="border-4 border-[#00afaa] p-6 rounded-lg">
                    <h4 className="font-bold text-lg text-[#312252] mb-2">Preferred Driver Status</h4>
                    <p className="text-sm text-gray-700">
                      After 8 months, the client offered Lee a permanent position, but he chose to remain with our agency to maintain flexibility whilst continuing to be their preferred driver. Lee&apos;s positive attitude, reliability, and commitment to excellence have made him feel like a true part of the company family, demonstrating the quality standards we deliver with every placement.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Page 9: From Picker to Supervisor - Michalina */}
        <div className="bg-white flex flex-col">
          {/* Top Banner Image */}
          <div className="relative h-32 md:h-40 w-full rounded-lg overflow-hidden mb-12">
            <Image 
              src="/case-studies/10.webp" 
              alt="Construction site" 
              fill
              className="object-cover"
            />
          </div>

          <div className="space-y-8">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-[#312252]">
              From Picker to Supervisor: Michalina
            </h2>
            
            <p className="text-base md:text-lg text-gray-700 leading-relaxed">
              Michalina joined a leading construction company through our agency as a picker and quickly made a strong impression with her hard work, reliability, and great attitude.
            </p>

            {/* Three numbered boxes */}
            <div className="grid md:grid-cols-3 gap-6 mt-8">
              {/* Box 1 */}
              <div className="border-4 border-[#00afaa] p-6 rounded-lg relative">
                <div className="absolute -top-5 left-6 w-10 h-10 bg-[#00afaa] text-white font-black rounded-full flex items-center justify-center text-lg">
                  1
                </div>
                <h4 className="font-bold text-lg text-[#312252] mb-2 mt-4">Week 1: Agency Picker</h4>
                <p className="text-sm text-gray-700">
                  Started as a picker, immediately impressing the Production Manager
                </p>
              </div>

              {/* Box 2 */}
              <div className="border-4 border-[#00afaa] p-6 rounded-lg relative">
                <div className="absolute -top-5 left-6 w-10 h-10 bg-[#00afaa] text-white font-black rounded-full flex items-center justify-center text-lg">
                  2
                </div>
                <h4 className="font-bold text-lg text-[#312252] mb-2 mt-4">Week 8: Permanent Contract</h4>
                <p className="text-sm text-gray-700">
                  Offered permanent position, brought forklift skills to production and yard operations
                </p>
              </div>

              {/* Box 3 */}
              <div className="border-4 border-[#00afaa] p-6 rounded-lg relative">
                <div className="absolute -top-5 left-6 w-10 h-10 bg-[#00afaa] text-white font-black rounded-full flex items-center justify-center text-lg">
                  3
                </div>
                <h4 className="font-bold text-lg text-[#312252] mb-2 mt-4">Promotion: Supervisor</h4>
                <p className="text-sm text-gray-700">
                  Now runs her own department, managing a team of 10 with excellent stock knowledge and supportive leadership
                </p>
              </div>
            </div>

            <p className="text-base md:text-lg text-gray-700 leading-relaxed mt-8">
              Michalina has become a real asset to the team and a great example of how quickly talent and dedication can shine through.
            </p>
          </div>
        </div>

        {/* Page 10: From Warehouse to Leadership - Alex */}
        <div className="bg-white flex flex-col">
          <div className="grid md:grid-cols-2 gap-12 flex-1">
            {/* Left Content */}
            <div className="flex flex-col justify-center">
              <div className="space-y-8">
                <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-[#312252]">
                  From Warehouse to Leadership: Alex
                </h2>
                
                <p className="text-sm md:text-base text-gray-700 leading-relaxed">
                  Alex&apos;s journey at his employer, supported by Accept Recruitment, showcases dedication and rapid progression from warehouse operations to a leadership role.
                </p>

                {/* Progress sections with green bars */}
                <div className="space-y-6">
                  {/* Section 1 */}
                  <div>
                    <div className="h-1 bg-[#00afaa] w-full mb-3"></div>
                    <h4 className="font-bold text-lg text-[#312252] mb-2">Entry as Warehouse Operative</h4>
                    <p className="text-sm text-gray-700">
                      Started with the company via Accept Recruitment, quickly adapting to warehouse operations and team environment.
                    </p>
                  </div>

                  {/* Section 2 */}
                  <div>
                    <div className="h-1 bg-[#00afaa] w-full mb-3"></div>
                    <h4 className="font-bold text-lg text-[#312252] mb-2">Transition to Admin Role</h4>
                    <p className="text-sm text-gray-700">
                      Gained confidence and valuable experience, leading to a job in administration within the company.
                    </p>
                  </div>

                  {/* Section 3 */}
                  <div>
                    <div className="h-1 bg-[#00afaa] w-full mb-3"></div>
                    <h4 className="font-bold text-lg text-[#312252] mb-2">Promotion to Team Leader</h4>
                    <p className="text-sm text-gray-700">
                      Offered full-time Warehouse Team Leader role, a proud step towards continued growth and team contribution.
                    </p>
                  </div>
                </div>

                <p className="text-sm md:text-base text-gray-700 leading-relaxed">
                  Alex&apos;s story is a testament to the growth opportunities at the company and the effective support provided by Accept Recruitment.
                </p>
              </div>
            </div>
            
            {/* Right Image */}
            <div className="relative h-[400px] md:h-full min-h-[500px] rounded-lg overflow-hidden">
              <Image 
                src="/case-studies/9.webp" 
                alt="Alex - Team Leader" 
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>

        {/* Page 11: Thank You */}
        <div className="bg-white flex flex-col justify-center items-start">
          <div className="max-w-4xl">
            <h1 className="text-6xl md:text-7xl lg:text-8xl font-black text-[#312252] mb-12">
              Thank You
            </h1>
            
            <div className="space-y-6">
              <p className="text-lg md:text-xl text-gray-700 leading-relaxed">
                Our clients&apos; successes demonstrate our commitment and capabilities. We are eager to bring the same dedicated support to your business.
              </p>
              
              <p className="text-lg md:text-xl text-gray-700 leading-relaxed">
                Let&apos;s discuss how we can partner to achieve your operational goals. We look forward to hearing from you.
              </p>
            </div>
          </div>
        </div>

      </div>
    </section>
  )
}
