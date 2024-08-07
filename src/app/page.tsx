import Card from "@/components/card/card";
import Footer from "@/components/footer/footer";
import Navbar from "@/components/navbar/navbar";
import Link from "next/link";

export default function Home() {
  return (
    <div>
      <Navbar />
      <section 
        id="landing" 
        className="relative bg-[#004733] flex items-center justify-between min-h-[860px] px-8"
      >
        {/* Button on the left */}
        <div className="relative z-10 mt-72 ml-64">
          <Link href="/start">
            <button className="bg-[#1ee07f] text-[#004733] font-bold px-6 py-3 h-16 w-56 rounded-full hover:bg-[#004733] hover:text-white transition-colors duration-300">
              Start my approval
            </button>
          </Link>
          <div className="mx-7 text-sm mt-3">
            3 min | No credit impact
          </div>
        </div>

        {/* Main content */}
        <div className="absolute z-10 text-center mx-80">
          <p className="text-9xl font-bold text-[#1ee07f]">Mortgages</p>
          <p className="text-9xl font-bold text-[#1ee07f] mb-72">made simple</p>
        </div>

        {/* Additional text on the right */}
        <div className="relative z-10 text-right text-white mt-72 mr-64">
          <img 
            src="review.png"
            className="h-auto w-52"
          />
          <p className="text-sm">4.6 Stars | 3177 Google Reviews</p>
        </div>

        {/* Image at the bottom */}
        <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2">
          <img 
            src="hand.webp" 
            alt="Background Image"
            className="w-[450px] h-auto" // Adjust size as needed
          />
        </div>
      </section>

      <section id="qa" className="min-h-screen pt-32 pb-32 bg-white flex">
        {/* Left portion with Card component */}
        <div className="flex-1 flex items-center justify-center">
          <Card />
        </div>
        {/* Right portion with a button */}
        <div className="flex-1 flex flex-col items-start justify-center">
          <div className="text-8xl text-[#292B29]">Find out why</div>
          <div className="text-8xl text-[#292B29]">we're better.</div>
          <Link href="about-us">
            <button className="bg-[#004733] text-[white] px-6 py-3 mt-8 h-16 w-56 rounded-full hover:bg-[#017848] hover:text-white transition-colors duration-300">
              See all our stories
            </button>
          </Link>
          <div className="text-black mt-4">  
            <a className="font-bold">Trustpilot </a>
            Excellent 4.3 out of 5
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}