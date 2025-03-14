"use client"

import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { ChevronLeft, ChevronRight, Quote } from "lucide-react"
import { useState } from "react"

export default function ImpactPage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Header Section */}
      <section className="relative w-full h-[40vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="/banner-impact.png?height=800&width=1920"
            alt="Impact Banner"
            fill
            className="object-cover brightness-[0.7]"
            priority
          />
        </div>
        <div className="container relative z-10 px-4 md:px-6">
          <h1 className="text-4xl md:text-5xl font-bold tracking-tighter text-white mb-4">Impact & Success Stories</h1>
          <p className="text-xl text-white max-w-3xl">Real-world outcomes from our experiential learning initiatives</p>
        </div>
      </section>

      {/* Impact Overview Section */}
      <section className="py-16">
        <div className="container px-4 md:px-6">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tight text-[#333333] mb-6">Our Impact</h2>
            <p className="text-lg text-[#333333]">
              Experience to Impact creates meaningful change through collaborative projects that address real-world
              challenges. Our students work directly with organizations to develop innovative solutions while gaining
              valuable skills and experience.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="text-center p-6">
              <div className="text-4xl font-bold text-[#990000] mb-2">25+</div>
              <p className="text-lg text-[#333333]">Partner Organizations</p>
            </Card>
            <Card className="text-center p-6">
              <div className="text-4xl font-bold text-[#990000] mb-2">1000+</div>
              <p className="text-lg text-[#333333]">Students Impacted</p>
            </Card>
            <Card className="text-center p-6">
              <div className="text-4xl font-bold text-[#990000] mb-2">40+</div>
              <p className="text-lg text-[#333333]">Completed Projects</p>
            </Card>
          </div>
        </div>
      </section>

      {/* Case Studies Section */}
      <section className="py-16 bg-[#F7F6F5]">
        <div className="container px-4 md:px-6">
          <h2 className="text-3xl font-bold tracking-tight text-center text-[#333333] mb-12">Featured Case Studies</h2>

          <Tabs defaultValue="coast-guard" className="w-full">
            <TabsList className="grid w-full grid-cols-2 md:grid-cols-4 mb-8">
              <TabsTrigger value="coast-guard">US Coast Guard</TabsTrigger>
              <TabsTrigger value="army">US Army</TabsTrigger>
              <TabsTrigger value="foundation">IU Foundation</TabsTrigger>
              <TabsTrigger value="crane">Crane Naval Base</TabsTrigger>
            </TabsList>

            <TabsContent value="coast-guard">
              <Card>
                <CardContent className="p-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div className="relative h-[300px] rounded-lg overflow-hidden">
                      <Image
                        src="/IU-Coral-Sea_iu.png?height=600&width=800"
                        alt="US Coast Guard Project"
                        fill
                        className="object-contain-cover"
                      />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-[#333333] mb-4">Data-Driven Maritime Safety</h3>
                      <p className="text-[#333333] mb-4">
                        Students collaborated with the US Coast Guard to develop a data analytics platform that
                        identifies high-risk areas for maritime incidents. By analyzing historical data and
                        environmental factors, the team created predictive models that help allocate resources more
                        effectively.
                      </p>
                      <div className="bg-white p-4 border-l-4 border-[#990000] mb-4">
                        <p className="italic text-[#333333]">
                          "The students brought fresh perspectives and technical skills that helped us reimagine our
                          approach to maritime safety. Their work has directly influenced our resource allocation
                          strategy."
                        </p>
                        <p className="font-bold text-[#333333] mt-2">— Commander Sarah Johnson, US Coast Guard</p>
                      </div>
                      <div className="flex flex-wrap gap-2">
                        <span className="bg-[#990000]/10 text-[#990000] px-3 py-1 rounded-full text-sm">
                          Data Analytics
                        </span>
                        <span className="bg-[#990000]/10 text-[#990000] px-3 py-1 rounded-full text-sm">
                          Predictive Modeling
                        </span>
                        <span className="bg-[#990000]/10 text-[#990000] px-3 py-1 rounded-full text-sm">
                          Resource Optimization
                        </span>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="army">
              <Card>
                <CardContent className="p-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div className="relative h-[300px] rounded-lg overflow-hidden">
                      <Image
                        src="/IU-Army_iu.png?height=600&width=800 "
                        alt="US Army Project"
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-[#333333] mb-4">Supply Chain Optimization</h3>
                      <p className="text-[#333333] mb-4">
                        A multidisciplinary student team worked with the US Army to streamline logistics operations. By
                        applying data science and operations research techniques, they developed a system that reduced
                        delivery times by 30% and cut costs by 15%.
                      </p>
                      <div className="bg-white p-4 border-l-4 border-[#990000] mb-4">
                        <p className="italic text-[#333333]">
                          "The innovative approach these students brought to our logistics challenges has transformed
                          our operations. Their solution combines technical sophistication with practical
                          implementation."
                        </p>
                        <p className="font-bold text-[#333333] mt-2">
                          — Colonel Robert Martinez, US Army Logistics Command
                        </p>
                      </div>
                      <div className="flex flex-wrap gap-2">
                        <span className="bg-[#990000]/10 text-[#990000] px-3 py-1 rounded-full text-sm">
                          Supply Chain
                        </span>
                        <span className="bg-[#990000]/10 text-[#990000] px-3 py-1 rounded-full text-sm">Logistics</span>
                        <span className="bg-[#990000]/10 text-[#990000] px-3 py-1 rounded-full text-sm">
                          Cost Reduction
                        </span>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="foundation">
              <Card>
                <CardContent className="p-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div className="relative h-[300px] rounded-lg overflow-hidden">
                      <Image
                        src="/IU_Foundation.png?height=600&width=800"
                        alt="IU Foundation Project"
                        fill
                        className="object-contain-cover"
                      />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-[#333333] mb-4">Donor Engagement Platform</h3>
                      <p className="text-[#333333] mb-4">
                        Students created a data-driven donor engagement platform for the IU Foundation that personalizes
                        outreach and identifies high-potential donors. The system increased donor retention by 25% and
                        improved fundraising efficiency.
                      </p>
                      <div className="bg-white p-4 border-l-4 border-[#990000] mb-4">
                        <p className="italic text-[#333333]">
                          "The students combined technical expertise with a deep understanding of donor psychology.
                          Their solution has revolutionized how we engage with our supporters."
                        </p>
                        <p className="font-bold text-[#333333] mt-2">
                          — Jennifer Williams, Director of Development, IU Foundation
                        </p>
                      </div>
                      <div className="flex flex-wrap gap-2">
                        <span className="bg-[#990000]/10 text-[#990000] px-3 py-1 rounded-full text-sm">
                          Donor Relations
                        </span>
                        <span className="bg-[#990000]/10 text-[#990000] px-3 py-1 rounded-full text-sm">
                          Personalization
                        </span>
                        <span className="bg-[#990000]/10 text-[#990000] px-3 py-1 rounded-full text-sm">
                          Fundraising
                        </span>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="crane">
              <Card>
                <CardContent className="p-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div className="relative h-[300px] rounded-lg overflow-hidden">
                      <Image
                        src="/Naval.png?height=600&width=800"
                        alt="Crane Naval Base Project"
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-[#333333] mb-4">Predictive Maintenance System</h3>
                      <p className="text-[#333333] mb-4">
                        A team of students developed a predictive maintenance system for Crane Naval Base that uses
                        machine learning to identify potential equipment failures before they occur. The system reduced
                        downtime by 40% and maintenance costs by 25%.
                      </p>
                      <div className="bg-white p-4 border-l-4 border-[#990000] mb-4">
                        <p className="italic text-[#333333]">
                          "The predictive maintenance solution developed by these students has significantly improved
                          our operational efficiency. Their ability to translate complex data into actionable insights
                          is impressive."
                        </p>
                        <p className="font-bold text-[#333333] mt-2">
                          — Dr. Michael Chen, Technical Director, Crane Naval Base
                        </p>
                      </div>
                      <div className="flex flex-wrap gap-2">
                        <span className="bg-[#990000]/10 text-[#990000] px-3 py-1 rounded-full text-sm">
                          Machine Learning
                        </span>
                        <span className="bg-[#990000]/10 text-[#990000] px-3 py-1 rounded-full text-sm">
                          Predictive Maintenance
                        </span>
                        <span className="bg-[#990000]/10 text-[#990000] px-3 py-1 rounded-full text-sm">
                          Cost Reduction
                        </span>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16">
        <div className="container px-4 md:px-6">
          <h2 className="text-3xl font-bold tracking-tight text-center text-[#333333] mb-12">Testimonials</h2>

          <TestimonialCarousel />
        </div>
      </section>

      {/* Media Gallery Section */}
<section className="py-16 bg-white">
  <div className="container px-4 md:px-6">
    <h2 className="text-4xl font-extrabold tracking-tight text-center text-gray-900 mb-12">
      Impact Gallery
    </h2>

    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
      {[
        { src: "/Microbiome.png?height=700&width=500", title: "Microbiome Data" },
        { src: "/Philanthropic.png?height=700&width=500", title: "Exploring US Philanthropic Giving Networks" },
        { src: "/Disconnection.png?height=500&width=500", title: "Utilities Disconnection Dashboard" },
        { src: "/EDD-Map.png?height=500&width=500", title: "Generating Economic Development Administration Reports for Regional Economic Development Districts" },
        { src: "/Carbon.png?height=500&width=500", title: "Carbon Footprint Analysis" },
        { src: "/Encyclopedia.png?height=500&width=500", title: "The Online Encyclopedia of Integer Sequences" },
      ].map((image, index) => (
        <div 
          key={index} 
          className="group flex flex-col items-center p-6 rounded-2xl shadow-lg border border-gray-200 bg-white hover:shadow-2xl transition-all duration-300 hover:scale-[1.03]">
          
          {/* Image Box with Hover Zoom Effect */}
          <div className="relative h-[250px] w-[280px] rounded-lg overflow-hidden shadow-md border border-gray-300 group-hover:border-gray-400 transition-all duration-300">
            <Image
              src={image.src}
              alt={image.title}
              fill
              className="object-cover-contain group-hover:scale-110 transition-transform duration-500 ease-out"
            />
          </div>

          {/* Title Below Image, Inside the Card */}
          <p className="mt-5 text-center text-xl font-semibold text-gray-900 group-hover:text-gray-700 transition-colors duration-300">
            {image.title}
          </p>
        </div>
      ))}
    </div>
  </div>
</section>





      {/* CTA Section */}
      <section className="py-16 bg-[#990000] text-white">
        <div className="container px-4 md:px-6 text-center">
          <h2 className="text-3xl font-bold tracking-tight mb-6">Be Part of Our Impact Story</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Join us as a student, faculty member, or partner organization and contribute to meaningful change.
          </p>
          <Link href="/contact">
            <Button className="bg-white text-[#990000] hover:bg-gray-100 px-8 py-6 text-lg">Get Involved</Button>
          </Link>
        </div>
      </section>
    </div>
  )
}

function TestimonialCarousel() {
  const [activeIndex, setActiveIndex] = useState(0)

  const testimonials = [
    {
      quote:
        "The Experience to Impact program transformed my approach to problem-solving. Working with real organizations on meaningful challenges gave me skills and confidence I couldn't have gained in a traditional classroom.",
      name: "Student Name",
      role: "Student, Class of 2024",
      image: "/man1.png?height=200&width=200",
    },
    {
      quote:
        "As a faculty member, I've seen firsthand how this program bridges the gap between theory and practice. Students develop a deeper understanding of course concepts when they apply them to real-world problems.",
      name: "Dr. Instructor Name",
      role: "Associate Professor, Luddy School",
      image: "/girl1.png?height=200&width=200",
    },
    {
      quote:
        "Partnering with Experience to Impact gave us access to fresh perspectives and innovative solutions. The students' work exceeded our expectations and has made a lasting impact on our operations.",
      name: "Employee Name",
      role: "Director of Innovation, Lab of Innovation",
      image: "/man2.png?height=200&width=200",
    },
  ]

  const nextTestimonial = () => {
    setActiveIndex((prevIndex) => (prevIndex + 1) % testimonials.length)
  }

  const prevTestimonial = () => {
    setActiveIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length)
  }

  return (
    <div className="relative">
      <Card className="border-none shadow-lg">
        <CardContent className="p-8">
          <div className="flex flex-col md:flex-row items-center gap-8">
            <div className="w-32 h-32 relative flex-shrink-0 rounded-full overflow-hidden">
              <Image
                src={testimonials[activeIndex].image || "/placeholder.svg"}
                alt={testimonials[activeIndex].name}
                fill
                className="object-cover"
              />
            </div>
            <div>
              <div className="mb-4">
                <Quote className="h-8 w-8 text-[#990000] opacity-50" />
              </div>
              <p className="text-lg italic text-[#333333] mb-6">{testimonials[activeIndex].quote}</p>
              <div>
                <p className="font-bold text-[#333333]">{testimonials[activeIndex].name}</p>
                <p className="text-[#666666]">{testimonials[activeIndex].role}</p>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      <div className="flex justify-center mt-6 gap-2">
        <Button variant="outline" size="icon" className="rounded-full" onClick={prevTestimonial}>
          <ChevronLeft className="h-4 w-4" />
          <span className="sr-only">Previous testimonial</span>
        </Button>
        {testimonials.map((_, index) => (
          <Button
            key={index}
            variant="outline"
            size="icon"
            className={`w-3 h-3 rounded-full p-0 ${index === activeIndex ? "bg-[#990000] border-[#990000]" : "bg-transparent"}`}
            onClick={() => setActiveIndex(index)}
          >
            <span className="sr-only">Go to testimonial {index + 1}</span>
          </Button>
        ))}
        <Button variant="outline" size="icon" className="rounded-full" onClick={nextTestimonial}>
          <ChevronRight className="h-4 w-4" />
          <span className="sr-only">Next testimonial</span>
        </Button>
      </div>
    </div>
  )
}

