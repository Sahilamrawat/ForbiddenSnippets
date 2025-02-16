import React from 'react';
import Navheader from './Navheader';
import Footer from './Footer';

function TermsAndCondition() {
  return (
    <>
      <Navheader />
      <div className="p-8 max-w-4xl mx-auto text-[#2E5077]">
        <h1 className="text-4xl font-bold mb-6 text-center">Terms and Conditions</h1>
        
        {/** Sections **/}
        {[
          {
            title: "Eligibility & Registration",
            points: [
              "Users must be at least 18 years old and legally capable of entering financial agreements.",
              "Users must provide accurate personal and financial details, including bank account information and tax records.",
              "Each user must have at least two linked bank accounts, including the salary account."
            ]
          },
          {
            title: "Pool Creation & Contributions",
            points: [
              "Only verified users can create or join a pool.",
              "Contributions to the pool are voluntary and non-refundable.",
              "Interest rates on borrowed amounts will be determined based on predefined slabs."
            ]
          },
          {
            title: "Borrowing & Repayment",
            points: [
              "Borrowers are assigned a priority level based on their transaction history and profile.",
              "Loan amounts are subject to availability in the pool and borrower eligibility.",
              "Repayments must be made within the agreed deadline, failing which auto-deduction will occur from the linked bank account."
            ]
          },
          {
            title: "Fraud Prevention & Accountability",
            points: [
              "Users engaging in fraudulent activities will be permanently banned.",
              "If a user defaults on repayment, auto-deduction from linked accounts will be enforced.",
              "The platform is not responsible for disputes between contributors and borrowers."
            ]
          },
          {
            title: "Data Privacy & Security",
            points: [
              "All user data, including financial records, will be securely stored and not shared with third parties without consent.",
              "Users are responsible for maintaining the confidentiality of their login credentials."
            ]
          },
          {
            title: "Risk & Liability",
            points: [
              "The platform acts only as a facilitator and is not liable for losses due to non-repayment or misuse of funds.",
              "Users acknowledge that participation in a pool involves financial risk."
            ]
          },
          {
            title: "Termination & Modifications",
            points: [
              "The platform reserves the right to modify terms, suspend accounts, or terminate access in case of policy violations.",
              "Users will be notified of any significant changes to these terms."
            ]
          }
        ].map((section, index) => (
          <section key={index} className="mb-6">
            <h2 className="text-2xl font-semibold mb-3">{section.title}</h2>
            <ul className="list-disc list-inside space-y-2">
              {section.points.map((point, i) => (
                <li key={i}>{point}</li>
              ))}
            </ul>
          </section>
        ))}
        
        {/** Agreement Notice **/}
        <p className="text-center font-semibold mt-8 text-lg">
          By using the platform, users agree to abide by these terms and conditions.
        </p>
      </div>
      <Footer />
    </>
  );
}

export default TermsAndCondition;
