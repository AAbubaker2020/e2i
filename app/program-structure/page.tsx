import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { CheckCircle } from "lucide-react"

export default function ProgramStructurePage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Header Section */}
      <section className="relative w-full h-[40vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="/Program1.png?height=800&width=1920"
            alt="Program Structure Banner"
            fill
            className="object-cover brightness-[0.7]"
            priority
          />
        </div>
        <div className="container relative z-10 px-4 md:px-6">
          <h1 className="text-4xl md:text-5xl font-bold tracking-tighter text-white mb-4">Program Structure</h1>
          <p className="text-xl text-white max-w-3xl">A comprehensive approach to experiential learning and impact</p>
        </div>
      </section>

      {/* Program Overview Section */}
      <section className="py-16">
        <div className="container px-4 md:px-6">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tight text-[#333333] mb-6">Our Three-Component Approach</h2>
            <p className="text-lg text-[#333333]">
              Experience to Impact follows a structured approach designed to build skills progressively, from
              foundational knowledge to real-world application and future impact.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-8">
            {/* Foundations for Impact */}
            <Card className="border-l-4 border-l-[#990000]">
              <CardHeader>
                <CardTitle className="text-2xl text-[#333333]">Foundations for Impact</CardTitle>
                <CardDescription className="text-lg">On-ramp Course</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div className="col-span-2">
                    <p className="text-[#333333] mb-4">
                      This introductory course establishes the foundation for data-driven problem-solving and
                      interdisciplinary collaboration. Students learn key methodologies and frameworks that will be
                      applied throughout the program.
                    </p>
                    <ul className="space-y-2">
                      <li className="flex items-start">
                        <CheckCircle className="h-5 w-5 text-[#990000] mr-2 mt-0.5" />
                        <span>Introduction to data-driven problem-solving methodologies</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="h-5 w-5 text-[#990000] mr-2 mt-0.5" />
                        <span>Frameworks for interdisciplinary collaboration</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="h-5 w-5 text-[#990000] mr-2 mt-0.5" />
                        <span>Ethical considerations in data use and solution development</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="h-5 w-5 text-[#990000] mr-2 mt-0.5" />
                        <span>Case studies of successful interdisciplinary projects</span>
                      </li>
                    </ul>
                  </div>
                  <div className="relative h-[200px] md:h-full rounded-lg overflow-hidden">
                    <Image
                      src="/impact1.png?height=400&width=300"
                      alt="Foundations for Impact"
                      fill
                      className="object-cover"
                    />
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Core Courses */}
            <Card className="border-l-4 border-l-[#990000]">
              <CardHeader>
                <CardTitle className="text-2xl text-[#333333]">Core Courses</CardTitle>
                <CardDescription className="text-lg">Data Science in Practice & Innovate for Impact</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div className="col-span-2">
                    <p className="text-[#333333] mb-4">
                      These hands-on, interdisciplinary courses form the heart of the Experience to Impact program.
                      Students work on real-world projects with industry and public sector partners, applying their
                      skills to address complex challenges.
                    </p>

                    <Tabs defaultValue="data-science" className="w-full">
                      <TabsList className="grid w-full grid-cols-2">
                        <TabsTrigger value="data-science">Data Science in Practice</TabsTrigger>
                        <TabsTrigger value="innovate">Innovate for Impact</TabsTrigger>
                      </TabsList>
                      <TabsContent value="data-science" className="pt-4">
                        <ul className="space-y-2">
                          <li className="flex items-start">
                            <CheckCircle className="h-5 w-5 text-[#990000] mr-2 mt-0.5" />
                            <span>Applied data analysis and visualization techniques</span>
                          </li>
                          <li className="flex items-start">
                            <CheckCircle className="h-5 w-5 text-[#990000] mr-2 mt-0.5" />
                            <span>Real-world data challenges with partner organizations</span>
                          </li>
                          <li className="flex items-start">
                            <CheckCircle className="h-5 w-5 text-[#990000] mr-2 mt-0.5" />
                            <span>Communicating insights to diverse stakeholders</span>
                          </li>
                          <li className="flex items-start">
                            <CheckCircle className="h-5 w-5 text-[#990000] mr-2 mt-0.5" />
                            <span>Ethical data practices and responsible innovation</span>
                          </li>
                        </ul>
                      </TabsContent>
                      <TabsContent value="innovate" className="pt-4">
                        <ul className="space-y-2">
                          <li className="flex items-start">
                            <CheckCircle className="h-5 w-5 text-[#990000] mr-2 mt-0.5" />
                            <span>Human-centered design methodologies</span>
                          </li>
                          <li className="flex items-start">
                            <CheckCircle className="h-5 w-5 text-[#990000] mr-2 mt-0.5" />
                            <span>Collaborative problem-solving with diverse teams</span>
                          </li>
                          <li className="flex items-start">
                            <CheckCircle className="h-5 w-5 text-[#990000] mr-2 mt-0.5" />
                            <span>Prototyping and iterative solution development</span>
                          </li>
                          <li className="flex items-start">
                            <CheckCircle className="h-5 w-5 text-[#990000] mr-2 mt-0.5" />
                            <span>Project management and stakeholder engagement</span>
                          </li>
                        </ul>
                      </TabsContent>
                    </Tabs>
                  </div>
                  <div className="relative h-[200px] md:h-full rounded-lg overflow-hidden">
                    <Image
                      src="/core2.png?height=400&width=300"
                      alt="Core Courses"
                      fill
                      className="object-cover"
                    />
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Impact Accelerator */}
            <Card className="border-l-4 border-l-[#990000]">
              <CardHeader>
                <CardTitle className="text-2xl text-[#333333]">Impact Accelerator</CardTitle>
                <CardDescription className="text-lg">Off-ramp Course</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div className="col-span-2">
                    <p className="text-[#333333] mb-4">
                      This capstone experience prepares students to apply their skills to high-impact challenges in
                      their future careers and communities. Students refine their projects, develop implementation
                      plans, and prepare to carry their work forward beyond the program.
                    </p>
                    <ul className="space-y-2">
                      <li className="flex items-start">
                        <CheckCircle className="h-5 w-5 text-[#990000] mr-2 mt-0.5" />
                        <span>Project refinement and scaling strategies</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="h-5 w-5 text-[#990000] mr-2 mt-0.5" />
                        <span>Implementation planning and resource identification</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="h-5 w-5 text-[#990000] mr-2 mt-0.5" />
                        <span>Measuring and communicating impact</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="h-5 w-5 text-[#990000] mr-2 mt-0.5" />
                        <span>Building networks for continued collaboration</span>
                      </li>
                    </ul>
                  </div>
                  <div className="relative h-[200px] md:h-full rounded-lg overflow-hidden">
                    <Image
                      src="/impact3.png?height=400&width=300"
                      alt="Impact Accelerator"
                      fill
                      className="object-cover"
                    />
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="py-16 bg-[#F7F6F5]">
        <div className="container px-4 md:px-6">
          <h2 className="text-3xl font-bold tracking-tight text-center text-[#333333] mb-12">
            Program Timeline (2010-2027)
          </h2>

          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-[#990000]"></div>

            {/* Timeline Items */}
            <div className="grid grid-cols-1 gap-12">

              {/* 2010 Spring */}
              <div className="relative">
                <div className="flex items-center justify-center mb-4">
                  <div className="bg-[#990000] text-white px-4 py-2 rounded-full z-10 font-bold">Spring 2010</div>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-md ml-0 md:ml-[50%] md:w-[45%] relative">
                  <div className="absolute top-6 left-0 md:left-[-20px] w-4 h-4 bg-[#990000] rounded-full transform md:translate-x-[-50%] hidden md:block"></div>
                  <h3 className="text-xl font-bold text-[#333333] mb-2">DSIP Program founded</h3>
                  <ul className="space-y-1 text-[#333333]">
                    <li>• The program was founded by Dr. David Wild and Kyle Stirling</li>
                  </ul>
                </div>
              </div>

              {/* 2010 Spring */}
              <div className="relative">
                <div className="flex items-center justify-center mb-4">
                  <div className="bg-[#990000] text-white px-4 py-2 rounded-full z-10 font-bold">Fall 2010</div>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-md mr-0 md:mr-[50%] md:w-[45%] relative">
                <div className="absolute top-6 right-0 md:right-[-20px] w-4 h-4 bg-[#990000] rounded-full transform md:translate-x-[50%] hidden md:block"></div>
                <h3 className="text-xl font-bold text-[#333333] mb-2">DSIP Program Launch</h3>
                  <ul className="space-y-1 text-[#333333]">
                    <li>• The first group of DSIP students</li>
                  </ul>
                </div>
              </div>


              {/* 2025 Spring */}
              
              <div className="relative">
                <div className="flex items-center justify-center mb-4">
                  <div className="bg-[#990000] text-white px-4 py-2 rounded-full z-10 font-bold">Spring 2025</div>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-md ml-0 md:ml-[50%] md:w-[45%] relative">
                  <div className="absolute top-6 left-0 md:left-[-20px] w-4 h-4 bg-[#990000] rounded-full transform md:translate-x-[-50%] hidden md:block"></div>
                  <h3 className="text-xl font-bold text-[#333333] mb-2">Program Launch</h3>
                  <ul className="space-y-1 text-[#333333]">
                    <li>• Initial cohort begins Foundations for Impact</li>
                    <li>• Faculty development workshops</li>
                    <li>• Partner organization onboarding</li>
                  </ul>
                </div>
              </div>

              {/* 2025 Fall */}
              <div className="relative">
                <div className="flex items-center justify-center mb-4">
                  <div className="bg-[#990000] text-white px-4 py-2 rounded-full z-10 font-bold">Fall 2025</div>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-md mr-0 md:mr-[50%] md:w-[45%] relative">
                  <div className="absolute top-6 right-0 md:right-[-20px] w-4 h-4 bg-[#990000] rounded-full transform md:translate-x-[50%] hidden md:block"></div>
                  <h3 className="text-xl font-bold text-[#333333] mb-2">Core Courses Begin</h3>
                  <ul className="space-y-1 text-[#333333]">
                    <li>• First Data Science in Practice course</li>
                    <li>• New cohort begins Foundations for Impact</li>
                    <li>• First industry-sponsored projects</li>
                  </ul>
                </div>
              </div>

              {/* 2026 Spring */}
              <div className="relative">
                <div className="flex items-center justify-center mb-4">
                  <div className="bg-[#990000] text-white px-4 py-2 rounded-full z-10 font-bold">Spring 2026</div>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-md ml-0 md:ml-[50%] md:w-[45%] relative">
                  <div className="absolute top-6 left-0 md:left-[-20px] w-4 h-4 bg-[#990000] rounded-full transform md:translate-x-[-50%] hidden md:block"></div>
                  <h3 className="text-xl font-bold text-[#333333] mb-2">Program Expansion</h3>
                  <ul className="space-y-1 text-[#333333]">
                    <li>• First Innovate for Impact course</li>
                    <li>• First Impact Accelerator cohort</li>
                    <li>• Mid-program assessment and refinement</li>
                  </ul>
                </div>
              </div>

              {/* 2026 Fall */}
              <div className="relative">
                <div className="flex items-center justify-center mb-4">
                  <div className="bg-[#990000] text-white px-4 py-2 rounded-full z-10 font-bold">Fall 2026</div>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-md mr-0 md:mr-[50%] md:w-[45%] relative">
                  <div className="absolute top-6 right-0 md:right-[-20px] w-4 h-4 bg-[#990000] rounded-full transform md:translate-x-[50%] hidden md:block"></div>
                  <h3 className="text-xl font-bold text-[#333333] mb-2">Full Implementation</h3>
                  <ul className="space-y-1 text-[#333333]">
                    <li>• All program components running concurrently</li>
                    <li>• Expanded partner network</li>
                    <li>• First program graduates</li>
                  </ul>
                </div>
              </div>

              {/* 2027 Spring */}
              <div className="relative">
                <div className="flex items-center justify-center mb-4">
                  <div className="bg-[#990000] text-white px-4 py-2 rounded-full z-10 font-bold">Spring 2027</div>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-md ml-0 md:ml-[50%] md:w-[45%] relative">
                  <div className="absolute top-6 left-0 md:left-[-20px] w-4 h-4 bg-[#990000] rounded-full transform md:translate-x-[-50%] hidden md:block"></div>
                  <h3 className="text-xl font-bold text-[#333333] mb-2">Program Evaluation</h3>
                  <ul className="space-y-1 text-[#333333]">
                    <li>• Comprehensive program assessment</li>
                    <li>• Alumni tracking and impact measurement</li>
                    <li>• Planning for program scaling</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-[#990000] text-white">
        <div className="container px-4 md:px-6 text-center">
          <h2 className="text-3xl font-bold tracking-tight mb-6">Ready to Join the Experience to Impact Journey?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Applications are now open for students, faculty, and partner organizations.
          </p>
          <Link href="/contact">
            <Button className="bg-white text-[#990000] hover:bg-gray-100 px-8 py-6 text-lg">Apply Now</Button>
          </Link>
        </div>
      </section>
    </div>
  )
}

