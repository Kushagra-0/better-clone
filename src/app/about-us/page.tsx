"use client"

import Navbar from "@/components/navbar/navbar";
import { useState } from "react";

import Timeline from '@mui/lab/Timeline';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineDot from '@mui/lab/TimelineDot';
import Footer from "@/components/footer/footer";
import Link from "next/link";

export default function About() {
  const [showVideo, setShowVideo] = useState(false);

  return (
    <div>
      <Navbar isWhiteBackground={true} />
      <section 
        className="min-h-[500px] flex items-center justify-center bg-white text-center p-8"
      >
        <div>
          <h1 className="text-3xl font-bold mb-4 text-[#017848] mt-80">Our mission</h1>
          <p className="text-5xl text-[#292B29] font-semibold mt-8">
            We're making homeownership simpler, faster — 
          </p>
          <p className="text-5xl text-[#292B29] font-semibold">
            and most importantly, more accessible for all
          </p>
          <p className="text-5xl text-[#292B29] font-semibold">
            Americans.
          </p>
        </div>
      </section>

      <section className="min-h-[650px] flex items-center justify-center bg-white p-8">
        <div className="flex flex-col md:flex-row w-full max-w-6xl">
          {/* Left portion */}
          <div className="flex-1 p-4">
            <p className="text-3xl mb-5 text-[#292B29] font-semibold">
              The status quo is broken
            </p>
            <p className="text-sm mb-7 text-[#292B29]">
              The traditional processes around homeownership are opaque and stressful. Fees aren’t transparent and some are simply outrageous in size. Traditional mortgage lending is rife with unnecessary fees and slow, painful processes. It’s a system set up to benefit insiders — not you. Better.com CEO, Vishal Garg, set out to change that.
            </p>
            <button className="bg-[#017848] text-[white] h-16 px-6 py-5 rounded-md hover:bg-[#004733] hover:text-white transition-colors duration-300">
              Read Vishal's story
            </button>
          </div>

          {/* Right portion */}
          <div className="flex-1 p-4 flex items-center justify-center">
            {!showVideo ? (
              <img 
                src="video.jpg" 
                alt="Video Thumbnail" 
                className="cursor-pointer w-full h-auto max-w-sm"
                onClick={() => setShowVideo(true)}
              />
            ) : (
              <div className="relative w-full h-0 pb-[56.25%]">
                <iframe 
                  className="absolute top-0 left-0 w-full h-full" 
                  src="https://www.youtube.com/embed/1KjYlLBM9j4?si=IC7efMfBMBZgVQ_X"
                  title="YouTube video player" 
                  frameBorder="0" 
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                  allowFullScreen
                ></iframe>
              </div>
            )}
          </div>
        </div>
      </section>


      <section className="bg-[#017848] text-white p-8 min-h-6 py-20">
        <div className="max-w-6xl mx-auto flex flex-col items-start justify-center">
          <h1 className="text-4xl font-bold mb-4">How we're changing things</h1>
          <div className="text-md mb-4">
            Homeownership is a huge part of our economy. Housing overall is a $33 trillion business, and mortgages account for $15 trillion. Yet home finance operates in the same way it has for decades — through opaque systems and expensive intermediaries whose interests are misaligned with consumers’.
          </div>
          <div className="text-lg">
            That's why Better.com is redefining the homeownership process from the ground up. We're using technology to make it faster and more efficient, and humans to help make it friendly and enjoyable.
          </div>
        </div>
      </section>

      <section className="items-center justify-center bg-white text-center p-8 pt-40">
      <h1 className="text-4xl text-[#292B29] font-bold mb-20">Company timeline</h1>
          <Timeline position="alternate-reverse">

          <TimelineItem>
            <TimelineSeparator>
                <p className="bg-[#017848] w-28 rounded-full py-2 font-bold text-xl"> 
                  2014
                </p>
              <TimelineConnector />
            </TimelineSeparator>
            <TimelineContent>
            </TimelineContent>
          </TimelineItem>

          <TimelineItem>
            <TimelineSeparator>
              <TimelineConnector />
            </TimelineSeparator>
            <TimelineContent>
            </TimelineContent>
          </TimelineItem>

          <TimelineItem>
            <TimelineSeparator>
              <TimelineConnector />
            </TimelineSeparator>
            <TimelineContent>
              <div className="text-[#292B29] bg-[#DFE0DC] p-10 w-96 ml-72 mb-20">
                After Vishal Garg's first attempt to purchase his own dream home, he quickly realized that the homebuying process is unnecessarily broken. This inspired him to found a technology-first company led by engineers and data experts with the mission of digitizing and automating home finance to make it cheaper, easier, and faster for all.
              </div>
            </TimelineContent>
          </TimelineItem>

          <TimelineItem>
            <TimelineSeparator>
                <p className="bg-[#017848] w-28 rounded-full py-2 font-bold text-xl"> 
                  2015
                </p>
              <TimelineConnector />
            </TimelineSeparator>
            <TimelineContent>
            </TimelineContent>
          </TimelineItem>

          <TimelineItem>
            <TimelineSeparator>
              <TimelineConnector />
            </TimelineSeparator>
            <TimelineContent>
            </TimelineContent>
          </TimelineItem>

          <TimelineItem>
            <TimelineSeparator>
              <TimelineConnector />
            </TimelineSeparator>
            <TimelineContent>
              <div className="text-[#292B29] bg-[#DFE0DC] p-10 w-96 mr-72 mb-20">
                Better Mortgage funds its first mortgage loan entirely online (without a single phone call!).
              </div>
            </TimelineContent>
          </TimelineItem>

          <TimelineItem>
            <TimelineSeparator>
                <p className="bg-[#017848] w-28 rounded-full py-2 font-bold text-xl"> 
                  2016
                </p>
              <TimelineConnector />
            </TimelineSeparator>
            <TimelineContent>
            </TimelineContent>
          </TimelineItem>

          <TimelineItem>
            <TimelineSeparator>
              <TimelineConnector />
            </TimelineSeparator>
            <TimelineContent>
            </TimelineContent>
          </TimelineItem>

          <TimelineItem>
            <TimelineSeparator>
              <TimelineConnector />
            </TimelineSeparator>
            <TimelineContent>
              <div className="text-[#292B29] bg-[#DFE0DC] p-10 w-96 ml-72 mb-20">
                Better Mortgage becomes a Fannie Mae approved seller + servicer and establishes relationships with top mortgage investors.
              </div>
            </TimelineContent>
          </TimelineItem>

          <TimelineItem>
            <TimelineSeparator>
                <p className="bg-[#017848] w-28 rounded-full py-2 font-bold text-xl"> 
                  2017
                </p>
              <TimelineConnector />
            </TimelineSeparator>
            <TimelineContent>
            </TimelineContent>
          </TimelineItem>

          <TimelineItem>
            <TimelineSeparator>
              <TimelineConnector />
            </TimelineSeparator>
            <TimelineContent>
            </TimelineContent>
          </TimelineItem>

          <TimelineItem>
            <TimelineSeparator>
              <TimelineConnector />
            </TimelineSeparator>
            <TimelineContent>
              <div className="text-[#292B29] bg-[#DFE0DC] p-10 w-96 mr-72 mb-20">
                Better expands into the real estate market with Better Real Estate.
              </div>
            </TimelineContent>
          </TimelineItem>

          <TimelineItem>
            <TimelineSeparator>
                <p className="bg-[#017848] w-28 rounded-full py-2 font-bold text-xl"> 
                  2018
                </p>
              <TimelineConnector />
            </TimelineSeparator>
            <TimelineContent>
            </TimelineContent>
          </TimelineItem>

          <TimelineItem>
            <TimelineSeparator>
              <TimelineConnector />
            </TimelineSeparator>
            <TimelineContent>
            </TimelineContent>
          </TimelineItem>

          <TimelineItem>
            <TimelineSeparator>
              <TimelineConnector />
            </TimelineSeparator>
            <TimelineContent>
              <div className="text-[#292B29] bg-[#DFE0DC] p-10 w-96 ml-72 mb-20">
                Better Mortgage partners with Ally Bank to build Ally powered by Better.
              </div>
            </TimelineContent>
          </TimelineItem>

        <TimelineItem>
            <TimelineSeparator>
                <p className="bg-[#017848] w-28 rounded-full py-2 font-bold text-xl"> 
                  2019
                </p>
              <TimelineConnector />
            </TimelineSeparator>
            <TimelineContent>
            </TimelineContent>
          </TimelineItem>

          <TimelineItem>
            <TimelineSeparator>
              <TimelineConnector />
            </TimelineSeparator>
            <TimelineContent>
            </TimelineContent>
          </TimelineItem>

          <TimelineItem>
            <TimelineSeparator>
              <TimelineConnector />
            </TimelineSeparator>
            <TimelineContent>
              <div className="text-[#292B29] bg-[#DFE0DC] p-10 w-96 mr-72 mb-20">
              Better Mortgage launches its pilot partnership with American Express to deliver a seamless homebuying experience to AMEX customers.
              </div>
            </TimelineContent>
          </TimelineItem>

          <TimelineItem>
            <TimelineSeparator>
                <p className="bg-[#017848] w-28 rounded-full py-2 font-bold text-xl"> 
                  2021
                </p>
              <TimelineConnector />
            </TimelineSeparator>
            <TimelineContent>
            </TimelineContent>
          </TimelineItem>

          <TimelineItem>
            <TimelineSeparator>
              <TimelineConnector />
            </TimelineSeparator>
            <TimelineContent>
            </TimelineContent>
          </TimelineItem>

          <TimelineItem>
            <TimelineSeparator>
              <TimelineConnector />
            </TimelineSeparator>
            <TimelineContent>
              <div className="text-[#292B29] bg-[#DFE0DC] p-10 w-96 ml-72 mb-20">
                Better acquires Trussle — The UK's most innovative online mortgage broker.
              </div>
            </TimelineContent>
          </TimelineItem>

          <TimelineItem>
            <TimelineSeparator>
                <p className="bg-[#017848] w-28 rounded-full py-2 font-bold text-xl"> 
                  2022
                </p>
              <TimelineConnector />
            </TimelineSeparator>
            <TimelineContent>
            </TimelineContent>
          </TimelineItem>

          <TimelineItem>
            <TimelineSeparator>
              <TimelineConnector />
            </TimelineSeparator>
            <TimelineContent>
            </TimelineContent>
          </TimelineItem>

          <TimelineItem>
            <TimelineSeparator>
              <TimelineConnector />
            </TimelineSeparator>
            <TimelineContent>
              <div className="text-[#292B29] bg-[#DFE0DC] p-10 2-96 mr-72 mb-20">
              Better Mortgage becomes the first fintech to fund $100B home loans entirely online.
              </div>
            </TimelineContent>
          </TimelineItem>

          <TimelineItem>
            <TimelineSeparator>
                <p className="bg-[#017848] w-28 rounded-full py-2 font-bold text-xl"> 
                  2023
                </p>
              <TimelineConnector />
            </TimelineSeparator>
            <TimelineContent>
            </TimelineContent>
          </TimelineItem>

          <TimelineItem>
            <TimelineSeparator>
              <TimelineConnector />
            </TimelineSeparator>
            <TimelineContent>
            </TimelineContent>
          </TimelineItem>

          <TimelineItem>
            <TimelineSeparator>
              <TimelineConnector />
            </TimelineSeparator>
            <TimelineContent>
              <div className="text-[#292B29] bg-[#DFE0DC] p-10 w-96 ml-72">
              Better Mortgage launches One Day Mortgage¹: The first offering to customers to go from application to full mortgage Commitment Letter within 24 hours vs. typical industry process of 30+ days.
              </div>
            </TimelineContent>
          </TimelineItem>

          <TimelineItem>
            <TimelineSeparator>
              <TimelineConnector />
            </TimelineSeparator>
            <TimelineContent>
              <div className="text-[#292B29] bg-[#DFE0DC] p-10 w-96 mr-72">
              Better Mortgage launches the fully digital 3-day HELOC².
              </div>
            </TimelineContent>
          </TimelineItem>

          <TimelineItem>
            <TimelineSeparator>
              <TimelineConnector />
            </TimelineSeparator>
            <TimelineContent>
              <div className="text-[#292B29] bg-[#DFE0DC] p-10 w-96 ml-72 mb-20">
              Better Mortgage launches One Day Verified Approval Letter.
              </div>
            </TimelineContent>
          </TimelineItem>

          <TimelineItem>
            <TimelineSeparator>
                <p className="bg-[#017848] w-28 rounded-full py-2 font-bold text-xl"> 
                  Today
                </p>
              <TimelineConnector />
            </TimelineSeparator>
            <TimelineContent>
            </TimelineContent>
          </TimelineItem>

          <TimelineItem>
            <TimelineSeparator>
              <TimelineConnector />
            </TimelineSeparator>
            <TimelineContent>
            </TimelineContent>
          </TimelineItem>

          <TimelineItem>
            <TimelineSeparator>
              <TimelineConnector />
            </TimelineSeparator>
            <TimelineContent>
              <div className="text-[#292B29] bg-[#DFE0DC] p-10 2-96 mr-72 mb-20">
              You become part of the story by joining tens of thousands of happy Better Mortgage borrowers.
              <Link href="/start">
                <p className="bg-[#017848] text-[white] h-12 w-36 mt-7 rounded-md hover:bg-[#004733] hover:text-white transition-colors duration-300 py-2 px-4 font-bold text-xl">
                  Get started
                </p>
              </Link>
              </div>
            </TimelineContent>
          </TimelineItem>

        </Timeline>
        
      </section>

      <Footer />
    </div>
  );
}