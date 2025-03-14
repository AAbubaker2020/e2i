"use client"

import type React from "react"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Textarea } from "@/components/ui/textarea"
import { useToast } from "@/hooks/use-toast"
import { sendEmail } from "@/app/actions"
import { CheckCircle, Loader2 } from "lucide-react"

export default function ContactPage() {
  const { toast } = useToast()
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [formSubmitted, setFormSubmitted] = useState(false)

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault()
    setIsSubmitting(true)

    const formData = new FormData(event.currentTarget)
    const name = formData.get("name") as string
    const email = formData.get("email") as string
    const subject = formData.get("subject") as string
    const message = formData.get("message") as string

    try {
      await sendEmail({ name, email, subject, message });
      setFormSubmitted(true);
      toast({
        title: "Message Sent",
        description: "Thank you for your message. We'll get back to you soon.",
      });
    } catch (error) {
      console.error("Email sending error:", error); // ✅ Logs the error to the console
      toast({
        title: "Error",
        description: "There was a problem sending your message. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
    
  }

  return (
    <div className="flex flex-col min-h-screen">
      {/* Header Section */}
      <section className="relative w-full h-[40vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="/contact.png?height=800&width=1920"
            alt="Contact Banner"
            fill
            className="object-cover brightness-[0.7]"
            priority
          />
        </div>
        <div className="container relative z-10 px-4 md:px-6">
          <h1 className="text-4xl md:text-5xl font-bold tracking-tighter text-white mb-4">Get Involved</h1>
          <p className="text-xl text-white max-w-3xl">
            Join the Experience to Impact initiative as a student, faculty member, or partner
          </p>
        </div>
      </section>

      {/* Engagement Options Section */}
      <section className="py-16">
        <div className="container px-4 md:px-6">
          <h2 className="text-3xl font-bold tracking-tight text-center text-[#333333] mb-12">
            Engagement Opportunities
          </h2>

          <Tabs defaultValue="students" className="w-full">
            <TabsList className="grid w-full grid-cols-1 md:grid-cols-3 mb-8">
              <TabsTrigger value="students">For Students</TabsTrigger>
              <TabsTrigger value="faculty">For Faculty</TabsTrigger>
              <TabsTrigger value="partners">For Partners</TabsTrigger>
            </TabsList>

            <TabsContent value="students">
              <Card>
                <CardHeader>
                  <CardTitle>Student Opportunities</CardTitle>
                  <CardDescription>Develop skills and make an impact through experiential learning</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div>
                      <h3 className="text-xl font-bold text-[#333333] mb-4">How to Participate</h3>
                      <ul className="space-y-4">
                        <li className="flex items-start">
                          <CheckCircle className="h-5 w-5 text-[#990000] mr-2 mt-0.5" />
                          <div>
                            <p className="font-bold">Enroll in Courses</p>
                            <p className="text-[#333333]">
                              Register for Foundations for Impact, Core Courses, or Impact Accelerator through the
                              course registration system.
                            </p>
                          </div>
                        </li>
                        <li className="flex items-start">
                          <CheckCircle className="h-5 w-5 text-[#990000] mr-2 mt-0.5" />
                          <div>
                            <p className="font-bold">Join Project Teams</p>
                            <p className="text-[#333333]">
                              Apply to join specific project teams working with partner organizations on real-world
                              challenges.
                            </p>
                          </div>
                        </li>
                        <li className="flex items-start">
                          <CheckCircle className="h-5 w-5 text-[#990000] mr-2 mt-0.5" />
                          <div>
                            <p className="font-bold">Attend Events</p>
                            <p className="text-[#333333]">
                              Participate in workshops, hackathons, and showcase events throughout the academic year.
                            </p>
                          </div>
                        </li>
                      </ul>
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-[#333333] mb-4">Benefits for Students</h3>
                      <ul className="space-y-4">
                        <li className="flex items-start">
                          <CheckCircle className="h-5 w-5 text-[#990000] mr-2 mt-0.5" />
                          <div>
                            <p className="font-bold">Real-World Experience</p>
                            <p className="text-[#333333]">
                              Work on actual projects with partner organizations, building your portfolio and resume.
                            </p>
                          </div>
                        </li>
                        <li className="flex items-start">
                          <CheckCircle className="h-5 w-5 text-[#990000] mr-2 mt-0.5" />
                          <div>
                            <p className="font-bold">Interdisciplinary Collaboration</p>
                            <p className="text-[#333333]">
                              Develop teamwork skills by collaborating with students from diverse academic backgrounds.
                            </p>
                          </div>
                        </li>
                        <li className="flex items-start">
                          <CheckCircle className="h-5 w-5 text-[#990000] mr-2 mt-0.5" />
                          <div>
                            <p className="font-bold">Professional Network</p>
                            <p className="text-[#333333]">
                              Build connections with industry professionals, faculty mentors, and like-minded peers.
                            </p>
                          </div>
                        </li>
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="faculty">
              <Card>
                <CardHeader>
                  <CardTitle>Faculty Opportunities</CardTitle>
                  <CardDescription>Integrate experiential learning into your teaching and research</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div>
                      <h3 className="text-xl font-bold text-[#333333] mb-4">How to Participate</h3>
                      <ul className="space-y-4">
                        <li className="flex items-start">
                          <CheckCircle className="h-5 w-5 text-[#990000] mr-2 mt-0.5" />
                          <div>
                            <p className="font-bold">Teach Program Courses</p>
                            <p className="text-[#333333]">
                              Apply to teach or co-teach courses within the Experience to Impact curriculum.
                            </p>
                          </div>
                        </li>
                        <li className="flex items-start">
                          <CheckCircle className="h-5 w-5 text-[#990000] mr-2 mt-0.5" />
                          <div>
                            <p className="font-bold">Serve as Project Mentor</p>
                            <p className="text-[#333333]">
                              Guide student teams working on projects related to your area of expertise.
                            </p>
                          </div>
                        </li>
                        <li className="flex items-start">
                          <CheckCircle className="h-5 w-5 text-[#990000] mr-2 mt-0.5" />
                          <div>
                            <p className="font-bold">Develop New Courses</p>
                            <p className="text-[#333333]">
                              Propose and develop new experiential learning courses that align with program goals.
                            </p>
                          </div>
                        </li>
                      </ul>
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-[#333333] mb-4">Benefits for Faculty</h3>
                      <ul className="space-y-4">
                        <li className="flex items-start">
                          <CheckCircle className="h-5 w-5 text-[#990000] mr-2 mt-0.5" />
                          <div>
                            <p className="font-bold">Enhanced Teaching Impact</p>
                            <p className="text-[#333333]">
                              Increase student engagement and learning outcomes through experiential methods.
                            </p>
                          </div>
                        </li>
                        <li className="flex items-start">
                          <CheckCircle className="h-5 w-5 text-[#990000] mr-2 mt-0.5" />
                          <div>
                            <p className="font-bold">Research Opportunities</p>
                            <p className="text-[#333333]">
                              Connect your research interests with real-world applications and potential funding
                              sources.
                            </p>
                          </div>
                        </li>
                        <li className="flex items-start">
                          <CheckCircle className="h-5 w-5 text-[#990000] mr-2 mt-0.5" />
                          <div>
                            <p className="font-bold">Professional Development</p>
                            <p className="text-[#333333]">
                              Participate in workshops and training on experiential teaching methods and
                              interdisciplinary collaboration.
                            </p>
                          </div>
                        </li>
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="partners">
              <Card>
                <CardHeader>
                  <CardTitle>Partner Opportunities</CardTitle>
                  <CardDescription>
                    Collaborate with talented students and faculty to address your organization&apos;s challenges
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div>
                      <h3 className="text-xl font-bold text-[#333333] mb-4">How to Participate</h3>
                      <ul className="space-y-4">
                        <li className="flex items-start">
                          <CheckCircle className="h-5 w-5 text-[#990000] mr-2 mt-0.5" />
                          <div>
                            <p className="font-bold">Sponsor a Project</p>
                            <p className="text-[#333333]">
                              Propose a challenge or problem for student teams to address through a semester-long
                              project.
                            </p>
                          </div>
                        </li>
                        <li className="flex items-start">
                          <CheckCircle className="h-5 w-5 text-[#990000] mr-2 mt-0.5" />
                          <div>
                            <p className="font-bold">Provide Mentorship</p>
                            <p className="text-[#333333]">
                              Assign staff members to serve as industry mentors for student teams working on your
                              projects.
                            </p>
                          </div>
                        </li>
                        <li className="flex items-start">
                          <CheckCircle className="h-5 w-5 text-[#990000] mr-2 mt-0.5" />
                          <div>
                            <p className="font-bold">Host Site Visits</p>
                            <p className="text-[#333333]">
                              Welcome students to your organization for site visits, providing context for their project
                              work.
                            </p>
                          </div>
                        </li>
                      </ul>
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-[#333333] mb-4">Benefits for Partners</h3>
                      <ul className="space-y-4">
                        <li className="flex items-start">
                          <CheckCircle className="h-5 w-5 text-[#990000] mr-2 mt-0.5" />
                          <div>
                            <p className="font-bold">Fresh Perspectives</p>
                            <p className="text-[#333333]">
                              Gain innovative solutions to real challenges from interdisciplinary student teams.
                            </p>
                          </div>
                        </li>
                        <li className="flex items-start">
                          <CheckCircle className="h-5 w-5 text-[#990000] mr-2 mt-0.5" />
                          <div>
                            <p className="font-bold">Talent Pipeline</p>
                            <p className="text-[#333333]">
                              Connect with potential future employees and evaluate their skills in a project-based
                              context.
                            </p>
                          </div>
                        </li>
                        <li className="flex items-start">
                          <CheckCircle className="h-5 w-5 text-[#990000] mr-2 mt-0.5" />
                          <div>
                            <p className="font-bold">Faculty Expertise</p>
                            <p className="text-[#333333]">
                              Access specialized knowledge and research capabilities of Indiana University faculty.
                            </p>
                          </div>
                        </li>
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="py-16 bg-[#F7F6F5]">
        <div className="container px-4 md:px-6">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold tracking-tight text-center text-[#333333] mb-12">Contact Us</h2>

            {formSubmitted ? (
              <Card className="border-[#990000]">
                <CardContent className="pt-6">
                  <div className="flex flex-col items-center text-center p-6">
                    <div className="w-16 h-16 bg-[#990000]/10 rounded-full flex items-center justify-center mb-4">
                      <CheckCircle className="h-8 w-8 text-[#990000]" />
                    </div>
                    <h3 className="text-2xl font-bold text-[#333333] mb-2">Thank You!</h3>
                    <p className="text-[#333333] mb-6">
                      Your message has been sent successfully. We&apos;ll get back to you as soon as possible.
                    </p>
                    <Button
                      onClick={() => setFormSubmitted(false)}
                      className="bg-[#990000] hover:bg-[#7A0000] text-white"
                    >
                      Send Another Message
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ) : (
              <Card>
                <CardContent className="pt-6">
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="name">
                          Name <span className="text-[#990000]">*</span>
                        </Label>
                        <Input id="name" name="name" placeholder="Your name" required />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="email">
                          Email <span className="text-[#990000]">*</span>
                        </Label>
                        <Input id="email" name="email" type="email" placeholder="Your email address" required />
                      </div>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="subject">Subject</Label>
                      <Input id="subject" name="subject" placeholder="What is this regarding?" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="message">
                        Message <span className="text-[#990000]">*</span>
                      </Label>
                      <Textarea id="message" name="message" placeholder="Your message" rows={6} required />
                    </div>
                    <div className="text-sm text-[#666666]">
                      <p>
                        Fields marked with <span className="text-[#990000]">*</span> are required
                      </p>
                    </div>
                    <Button
                      type="submit"
                      className="w-full bg-[#990000] hover:bg-[#7A0000] text-white"
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? (
                        <>
                          <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                          Sending...
                        </>
                      ) : (
                        "Send Message"
                      )}
                    </Button>
                  </form>
                </CardContent>
              </Card>
            )}
          </div>
        </div>
      </section>

      {/* Location Section */}
      <section className="py-16">
        <div className="container px-4 md:px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div>
              <h2 className="text-3xl font-bold tracking-tight text-[#333333] mb-6">Visit Us</h2>
              <div className="space-y-4">
                <div>
                  <h3 className="text-xl font-bold text-[#333333]">Experience to Impact</h3>
                  <p className="text-[#333333]">Indiana University</p>
                  <p className="text-[#333333]">107 S Indiana Ave</p>
                  <p className="text-[#333333]">Bloomington, IN 47405</p>
                </div>
                <div>
                  <p className="text-[#333333]">
                    <span className="font-bold">Email:</span> impact@indiana.edu
                  </p>
                  <p className="text-[#333333]">
                    <span className="font-bold">Phone:</span> (812) 555-1234
                  </p>
                </div>
                <div className="pt-2">
                  <Link href="https://maps.google.com" target="_blank" rel="noopener noreferrer">
                    <Button
                      variant="outline"
                      className="border-[#990000] text-[#990000] hover:bg-[#990000] hover:text-white"
                    >
                      Get Directions
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
            <div className="h-[400px] rounded-lg overflow-hidden border border-gray-200">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3093.3454348048985!2d-86.52748492394734!3d39.16839637139633!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x886c66c3b5eb032b%3A0x19f8771f1b7f8d4d!2sIndiana%20University%20Bloomington!5e0!3m2!1sen!2sus!4v1710343404037!5m2!1sen!2sus"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
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
            <Link href="/program-structure">
              <Button className="bg-white text-[#990000] hover:bg-gray-100 px-8">Explore Our Program</Button>
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

