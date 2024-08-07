"use client"

import Footer from '@/components/footer/footer';
import Navbar from '@/components/navbar/navbar';
import Link from 'next/link';
import { useState, useEffect } from 'react';

const MortgageCalculator = () => {
  const [homePrice, setHomePrice] = useState(100000);
  const [zipCode, setZipCode] = useState('');
  const [downPaymentPercent, setDownPaymentPercent] = useState(20);
  const [interestRate, setInterestRate] = useState(6.5);
  const [loanLength, setLoanLength] = useState(15);
  const [monthlyPayment, setMonthlyPayment] = useState(0);

  const calculateMonthlyPayment = () => {
    const principal = homePrice - (homePrice * downPaymentPercent / 100);
    const monthlyInterestRate = (interestRate / 100) / 12;
    const numberOfPayments = loanLength * 12;
    const monthlyPayment = principal * monthlyInterestRate / (1 - Math.pow(1 + monthlyInterestRate, -numberOfPayments));
    setMonthlyPayment(monthlyPayment);
  };

  useEffect(() => {
    calculateMonthlyPayment();
  }, [homePrice, downPaymentPercent, interestRate, loanLength]);

  return (
    <>
      <Navbar isWhiteBackground={true}/>
      <section>
      <div className="container pt-36 pl-20 pr-20 mx-auto p-8 bg-[#F0F7F1]">
      <h1 className="text-4xl font-bold mb-8 text-black">Mortgage Calculator</h1>
      <div className='text-black font-sm'>Use our mortgage calculator built directly into it! Get accurate estimates for your monthly mortgage</div>
      <div className='text-black font-sm mb-8'>payments if you will be required to have private mortgage insurance (PMI). Also learn why</div>

      <div className="gap-4 pb-10">
        <div className='flex flex-row'>
          <div>
            <label className="block mb-2 text-black">Home price</label>
            <input 
              type="number" 
              value={homePrice} 
              onChange={(e) => setHomePrice(Number(e.target.value))} 
              className="p-2 border rounded text-black w-60 text-5xl"
            />
          </div>

          <div className='ml-72'>
            <label className="block mb-2 text-black">Monthly payment</label>
            <input 
              type="text" 
              value={`$${monthlyPayment.toFixed(2)}/mo`} 
              readOnly 
              className="p-2 rounded bg-gray-100 text-black w-96 text-5xl"
            />
          </div>

          <button className="bg-[#017848] text-[white] mt-10 ml-44 h-16 px-6 py-5 rounded-md hover:bg-[#004733] hover:text-white transition-colors duration-300">
              Get pre-approved
            </button>
        </div>


        <input 
          type="range" 
          min="50000" 
          max="3000000" 
          value={homePrice} 
          onChange={(e) => setHomePrice(Number(e.target.value))} 
          className="w-full mt-12 h-1  accent-green-700"
        />


        <div className='mt-8 flex flex-row'>
          <div className='rounded-lg h-16 w-72'>
            <label className="block mb-2 text-[#8F9491] text-sm">ZIP code</label>
            <input 
              type="number" 
              value={zipCode} 
              onChange={(e) => setZipCode(e.target.value)} 
              className="w-full p-2 border rounded text-black h-12" 
            />
          </div>
          <div className='ml-10 w-72'>
            <label className="block mb-2 text-[#8F9491] text-sm">Down payment</label>
            <input 
              type="number" 
              value={(homePrice * downPaymentPercent / 100).toFixed(2)} 
              className="w-full p-2 rounded bg-gray-100 text-black h-12"
            />
            <div className="flex items-center mt-2">
              <input 
                type="range" 
                min="0" 
                max="100" 
                value={downPaymentPercent} 
                onChange={(e) => setDownPaymentPercent(Number(e.target.value))} 
                className="w-full h-1 accent-green-700"
              />
              <span className="ml-2 text-black">{downPaymentPercent}%</span>
            </div>
          </div>
          <div className='ml-10 w-72'>
            <label className="block mb-2 text-[#8F9491]">Interest rate</label>
            <input 
              type="number" 
              step="0.01" 
              value={interestRate} 
              onChange={(e) => setInterestRate(Number(e.target.value))} 
              className="w-full p-2 border rounded text-black h-12"
            />
          </div>
          <div className='ml-10 w-72'>
            <label className="block mb-2 text-[#8F9491]">Length of loan</label>
            <select 
              value={loanLength} 
              onChange={(e) => setLoanLength(Number(e.target.value))} 
              className="w-full p-2 border rounded text-black h-12"
            >
              <option value="30">30 years</option>
              <option value="20">20 years</option>
              <option value="15">15 years</option>
            </select>
          </div>
        </div>
      </div>
    </div>
      </section>

      <section className='bg-white px-20 pt-16'>
        <div>
          <div className='text-3xl font-semibold text-black mb-10'>How does a mortgage calculator help me?</div>
          <div className='text-sm text-[#8F9491] mb-10'>When deciding how much house you can afford, one of the most important pieces to determine is whether a home will fit into your monthly budget. A mortgage calculator helps you understand the monthly cost of a home. And ours will allow you to enter different down payments and interest rates to help determine what is affordable for you.</div>
        </div>
        <hr/>
      </section>

      <section className='bg-white px-20 pt-16'>
        <div>
          <div className='text-3xl font-semibold text-black mb-10'>How much monthly mortgage payment can I afford?</div>
          <div className='text-sm text-[#8F9491] mb-3'>Lenders determine how much you can afford on a monthly housing payment by calculating your debt-to-income ratio (DTI). The maximum DTI you can have in order to qualify for most mortgage loans is often between 45-50%, with your anticipated housing costs included.</div>
          <div className='text-sm text-[#8F9491] mb-10'>Your DTI is the balance between your income and your debt. It helps lenders understand how safe or risky it is for them to approve your loan. A DTI ratio represents how much of your gross monthly income is spoken for by creditors, and how much of it is left over to you as disposable income. It’s most commonly written as a percentage. For example, if you pay half your monthly income in debt payments, you would have a DTI of 50%.</div>
        </div>
        <hr/>
      </section>

      <section className='bg-white px-20 pt-16'>
        <div>
          <div className='text-3xl font-semibold text-black mb-10'>How to calculate monthly mortgage payments?</div>
          <div className='text-sm text-[#8F9491] mb-10'>Your monthly mortgage payment includes loan principal and interest, property taxes, homeowners insurance, and mortgage insurance (PMI), if applicable. While not typically included in your mortgage payment, homeowners also pay monthly utilities and sometimes pay homeowners association (HOA) fees, so it’s a good idea to factor these into your monthly budget. This mortgage calculator factors in all these typical monthly costs so you can really crunch the numbers.</div>
        </div>
        <hr/>
      </section>

      <section className='bg-white px-20 pt-16'>
        <div>
          <div className='text-3xl font-semibold text-black mb-10'>More resources</div>
          <div className='flex flex-row'>
            <div className='border-2 text-black h-48 text-xl px-6 py-12 rounded-lg w-96'>Get pre-approved to see how much you can borrow</div>
            <div className='border-2 text-black h-48 text-xl px-6 py-12 rounded-lg w-96 ml-12'>See today’s rates in your area</div>
            <div className='border-2 text-black h-48 text-xl px-6 py-12 rounded-lg w-96 ml-12'>Find out your max homebuying budget</div>
          </div>
          <div className='text-xs text-[#8F9491] mb-10 mt-9'>*See Better Real Estate discount terms and conditions.**The average lifetime savings estimate is based on a comparison of the Freddie Mac Primary Mortgage Market Survey’s (PMMS) 30-year fixed-rate mortgage product with Better Mortgage’s own offered rate for a comparable mortgage product between Jan ‘20 - Dec ‘20. PMMS is based on conventional, conforming fully-amortizing home purchase loans for borrowers with a loan-to-value of 80 percent and with excellent credit. Better Mortgage’s offered rate is based on pricing output for a 30-year fixed-rate mortgage product with a 30-day lock period for a single-family, owner-occupied residential property and a borrower with excellent (760 FICO) credit and a loan-to-value ratio of 80 percent. Individual savings could vary based on current market rates, property type, loan amount, loan-to-value, credit score, debt-to-income ratio and other variables.</div>
        </div>
        <hr/>
      </section>

      <Footer />
    </>
  );
};

export default MortgageCalculator;
