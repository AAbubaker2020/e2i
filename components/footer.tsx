import Link from "next/link"

export default function Footer() {
  return (
    <footer className="w-full border-t bg-[#EXACT_COLOR] py-6">

      <div className="container px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
        <div className="space-y-4">
          <div className="flex items-center space-x-2">
            <img src="/iu_logo.png" alt="IU Logo" className="h-8 w-8" />
            <h3 className="text-lg font-bold text-[#990000]">Experience to Impact</h3>
          </div>
          <p className="text-sm text-[#333333]">
            Transforming education through high-impact experiential learning at Indiana University
          </p>
        </div>



          



          

          <div>
            <h4 className="text-sm font-bold text-[#333333] mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-sm text-[#333333] hover:text-[#990000]">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-sm text-[#333333] hover:text-[#990000]">
                  About
                </Link>
              </li>
              <li>
                <Link href="/program-structure" className="text-sm text-[#333333] hover:text-[#990000]">
                  Program Structure
                </Link>
              </li>
              <li>
                <Link href="/impact" className="text-sm text-[#333333] hover:text-[#990000]">
                  Impact
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-sm text-[#333333] hover:text-[#990000]">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-bold text-[#333333] mb-4">Resources</h4>
            <ul className="space-y-2">
              <li>
                <Link href="#" className="text-sm text-[#333333] hover:text-[#990000]">
                  Student Resources
                </Link>
              </li>
              <li>
                <Link href="#" className="text-sm text-[#333333] hover:text-[#990000]">
                  Faculty Resources
                </Link>
              </li>
              <li>
                <Link href="#" className="text-sm text-[#333333] hover:text-[#990000]">
                  Partner Resources
                </Link>
              </li>
              <li>
                <Link href="#" className="text-sm text-[#333333] hover:text-[#990000]">
                  News & Events
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-bold text-[#333333] mb-4">Contact</h4>
            <address className="not-italic">
              <p className="text-sm text-[#333333]">Indiana University</p>
              <p className="text-sm text-[#333333]">107 S Indiana Ave</p>
              <p className="text-sm text-[#333333]">Bloomington, IN 47405</p>
              <p className="text-sm text-[#333333] mt-2">impact@indiana.edu</p>
              <p className="text-sm text-[#333333]">(812) 555-1234</p>
            </address>
          </div>
        </div>

        <div className="mt-8 border-t pt-6 flex flex-col md:flex-row justify-between items-center">
          <p className="text-xs text-[#333333]">
            &copy; {new Date().getFullYear()} Experience to Impact, Indiana University. All rights reserved.
          </p>
          <div className="flex gap-4 mt-4 md:mt-0">
            <Link href="#" className="text-xs text-[#333333] hover:text-[#990000]">
              Privacy Policy
            </Link>
            <Link href="#" className="text-xs text-[#333333] hover:text-[#990000]">
              Terms of Use
            </Link>
            <Link href="#" className="text-xs text-[#333333] hover:text-[#990000]">
              Accessibility
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}

