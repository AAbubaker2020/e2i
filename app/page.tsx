import Link from "next/link"
import Image from "next/image"
import { ArrowRight, ChevronDown } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative w-full h-[80vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="/e2i.png?height=1080&width=1920"
            alt="Indiana University Campus"
            fill
            className="object-cover brightness-[0.7]"
            priority
          />
        </div>
        <div className="container relative z-10 px-4 md:px-6 flex flex-col items-center text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tighter text-white mb-4">
            Experience to Impact
          </h1>
          <p className="text-xl md:text-2xl text-white max-w-3xl mb-8">
            Transforming education through high-impact experiential learning at Indiana University
          </p>
          <Link href="/about">
            <Button className="bg-[#990000] hover:bg-[#7A0000] text-white px-8 py-6 text-lg">
              Learn More <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </Link>
        </div>
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ChevronDown className="h-8 w-8 text-white" />
        </div>
      </section>

      {/* Mission Statement Section */}
      <section className="py-16 bg-[#F7F6F5]">
        <div className="container px-4 md:px-6">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold tracking-tight text-[#333333] mb-6">Our Mission</h2>
            <p className="text-xl text-[#333333] mb-8">
              Experience to Impact provides high-impact experiential learning opportunities that bridge the gap between
              academic knowledge and real-world application. We empower students to solve complex problems through
              interdisciplinary collaboration and data-driven approaches.
            </p>
            <div className="flex justify-center">
              <Link href="/program-structure">
                <Button
                  variant="outline"
                  className="border-[#990000] text-[#990000] hover:bg-[#990000] hover:text-white"
                >
                  Explore Our Program
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Key Components Section */}
      <section className="py-16">
        <div className="container px-4 md:px-6">
          <h2 className="text-3xl font-bold tracking-tight text-center text-[#333333] mb-12">Key Program Components</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Foundations for Impact */}
            <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 border-t-4 border-[#990000]">
              <h3 className="text-xl font-bold text-[#333333] mb-4">Foundations for Impact</h3>
              <p className="text-[#333333]">
                An on-ramp course that introduces students to data-driven problem-solving methodologies and prepares
                them for interdisciplinary collaboration.
              </p>
            </div>

            {/* Core Courses */}
            <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 border-t-4 border-[#990000]">
              <h3 className="text-xl font-bold text-[#333333] mb-4">Core Courses</h3>
              <p className="text-[#333333]">
                Hands-on, interdisciplinary courses including Data Science in Practice and Innovate for Impact,
                featuring real-world applications and industry partnerships.
              </p>
            </div>

            {/* Impact Accelerator */}
            <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 border-t-4 border-[#990000]">
              <h3 className="text-xl font-bold text-[#333333] mb-4">Impact Accelerator</h3>
              <p className="text-[#333333]">
                An off-ramp course that prepares students to apply their skills to high-impact challenges in their
                future careers and communities.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Collaboration Section */}
      <section className="py-16 bg-[#F7F6F5]">
        <div className="container px-4 md:px-6">
          <h2 className="text-3xl font-bold tracking-tight text-center text-[#333333] mb-12">
            Collaborative Initiative
          </h2>
          <div className="flex flex-col md:flex-row items-center justify-center gap-12">
            <div className="text-center">
              <div className="w-48 h-48 mx-auto mb-4 relative">
                <Image
                  src="/luddy.png?height=200&width=200"
                  alt="Luddy School Logo"
                  fill
                  className="object-contain"
                />
              </div>
              <h3 className="text-xl font-bold text-[#333333] mb-2">Luddy School</h3>
              <p className="text-[#333333]">Informatics, Computing, and Engineering</p>
            </div>
            <div className="text-center">
              <div className="w-48 h-48 mx-auto mb-4 relative">
                <Image
                  src="/hls.png?height=200&width=200"
                  alt="Hamilton Lugar School Logo"
                  fill
                  className="object-contain"
                />
              </div>
              <h3 className="text-xl font-bold text-[#333333] mb-2">Hamilton Lugar School</h3>
              <p className="text-[#333333]">Global and International Studies</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-[#990000] text-white">
        <div className="container px-4 md:px-6 text-center">
          <h2 className="text-3xl font-bold tracking-tight mb-6">Ready to Make an Impact?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Join us in transforming education through experiential learning and real-world problem solving.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact">
              <Button className="bg-white text-[#990000] hover:bg-gray-100 px-8">Get Involved</Button>
            </Link>
            <Link href="/impact">
              <Button variant="outline" className="bg-white text-[#990000] hover:bg-gray-100 px-8">
                See Our Impact
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}

