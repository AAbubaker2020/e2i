import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function AboutPage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Header Section */}
      <section className="relative w-full h-[40vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="/about.png?height=800&width=1920"
            alt="Indiana University Campus"
            fill
            className="object-cover brightness-[0.7]"
            priority
          />
        </div>
        <div className="container relative z-10 px-4 md:px-6">
          <h1 className="text-4xl md:text-5xl font-bold tracking-tighter text-white mb-4">
            About Experience to Impact
          </h1>
          <p className="text-xl text-white max-w-3xl">
            Bridging academia, industry, and public sector impact through experiential learning
          </p>
        </div>
      </section>

      {/* Program Overview Section */}
      <section className="py-16">
        <div className="container px-4 md:px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold tracking-tight text-[#333333] mb-6">Program Overview</h2>
              <p className="text-lg text-[#333333] mb-4">
                Experience to Impact is a groundbreaking initiative at Indiana University designed to scale experiential
                learning opportunities across disciplines. Our program emphasizes interdisciplinary collaboration,
                data-driven problem-solving, and real-world application.
              </p>
              <p className="text-lg text-[#333333] mb-4">
                Through structured courses and hands-on projects, students develop the skills needed to address complex
                challenges in today&apos;s rapidly changing world. By working directly with industry partners and public
                sector organizations, students gain invaluable experience while making meaningful contributions to real
                problems.
              </p>
              <p className="text-lg text-[#333333]">
                The initiative bridges the gap between academic theory and practical application, preparing students for
                impactful careers while fostering innovation and collaboration across disciplines.
              </p>
            </div>
            <div className="relative h-[400px] rounded-lg overflow-hidden shadow-xl">
              <Image
                src="/about2.png?height=800&width=600"
                alt="Students collaborating on a project"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Vision and Mission Section */}
      <section className="py-16 bg-[#F7F6F5]">
        <div className="container px-4 md:px-6">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold tracking-tight text-[#333333] mb-6">Our Vision & Mission</h2>
            <div className="mb-8 p-6 bg-white rounded-lg shadow-md">
              <h3 className="text-xl font-bold text-[#990000] mb-3">Vision</h3>
              <p className="text-lg text-[#333333]">
                To transform higher education by making high-impact experiential learning accessible to all students,
                preparing them to solve complex global challenges.
              </p>
            </div>
            <div className="p-6 bg-white rounded-lg shadow-md">
              <h3 className="text-xl font-bold text-[#990000] mb-3">Mission</h3>
              <p className="text-lg text-[#333333]">
                We provide structured, scalable experiential learning opportunities that bridge disciplinary boundaries,
                connect students with real-world challenges, and develop the skills needed for impactful careers and
                citizenship.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Collaboration Details Section */}
      <section className="py-16">
        <div className="container px-4 md:px-6">
          <h2 className="text-3xl font-bold tracking-tight text-center text-[#333333] mb-12">Collaborative Partners</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {/* Luddy School */}
            <div className="bg-white p-8 rounded-lg shadow-md border border-gray-200">
              <div className="flex flex-col sm:flex-row items-center gap-6 mb-6">
                <div className="w-32 h-32 relative flex-shrink-0">
                  <Image
                    src="/luddy_about.jpg?height=200&width=200"
                    alt="Luddy School Logo"
                    fill
                    className="object-contain"
                  />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-[#333333] mb-2">
                    Luddy School of Informatics, Computing, and Engineering
                  </h3>
                  <p className="text-[#333333]">
                    Bringing expertise in data science, computing, and technological innovation
                  </p>
                </div>
              </div>
              <p className="text-[#333333]">
                The Luddy School contributes cutting-edge technical knowledge and methodologies, enabling students to
                leverage data science, artificial intelligence, and computing solutions to address complex problems.
                Faculty from the Luddy School guide students in developing technical skills while emphasizing ethical
                considerations and human-centered design.
              </p>
            </div>

            {/* Hamilton Lugar School */}
            <div className="bg-white p-8 rounded-lg shadow-md border border-gray-200">
              <div className="flex flex-col sm:flex-row items-center gap-6 mb-6">
                <div className="w-32 h-32 relative flex-shrink-0">
                  <Image
                    src="/hls.png?height=200&width=200"
                    alt="Hamilton Lugar School Logo"
                    fill
                    className="object-contain"
                  />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-[#333333] mb-2">
                    Hamilton Lugar School of Global and International Studies
                  </h3>
                  <p className="text-[#333333]">Providing global context and policy expertise</p>
                </div>
              </div>
              <p className="text-[#333333]">
                The Hamilton Lugar School brings critical global perspectives and policy expertise to the initiative.
                Their faculty help students understand the broader societal, cultural, and geopolitical contexts of the
                challenges they address. This collaboration ensures that technical solutions are culturally appropriate,
                ethically sound, and aligned with international best practices.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-[#990000] text-white">
        <div className="container px-4 md:px-6 text-center">
          <h2 className="text-3xl font-bold tracking-tight mb-6">Join the Experience to Impact Initiative</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Discover how you can participate as a student, faculty member, or industry partner.
          </p>
          <Link href="/contact">
            <Button className="bg-white text-[#990000] hover:bg-gray-100 px-8 py-6 text-lg">Get Involved Today</Button>
          </Link>
        </div>
      </section>
    </div>
  )
}

