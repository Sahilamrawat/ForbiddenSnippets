import React from 'react';
import Navheader from './Navheader';
function TermsAndCondition() {
  return (
    <>
    <Navheader />
    <div className="p-6 max-w-4xl mx-auto text-[#2E5077]">
      <h1 className="text-3xl font-bold mb-4 text-center">Terms and Conditions</h1>

      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-2">Eligibility & Registration</h2>
        <ul className="list-disc list-inside space-y-2">
          <li>Users must be at least 18 years old and legally capable of entering financial agreements.</li>
          <li>Users must provide accurate personal and financial details, including bank account information and tax records.</li>
          <li>Each user must have at least two linked bank accounts, including the salary account.</li>
        </ul>
      </section>

      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-2">Pool Creation & Contributions</h2>
        <ul className="list-disc list-inside space-y-2">
          <li>Only verified users can create or join a pool.</li>
          <li>Contributions to the pool are voluntary and non-refundable.</li>
          <li>Interest rates on borrowed amounts will be determined based on predefined slabs.</li>
        </ul>
      </section>

      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-2">Borrowing & Repayment</h2>
        <ul className="list-disc list-inside space-y-2">
          <li>Borrowers are assigned a priority level based on their transaction history and profile.</li>
          <li>Loan amounts are subject to availability in the pool and borrower eligibility.</li>
          <li>Repayments must be made within the agreed deadline, failing which auto-deduction will occur from the linked bank account.</li>
        </ul>
      </section>

      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-2">Fraud Prevention & Accountability</h2>
        <ul className="list-disc list-inside space-y-2">
          <li>Users engaging in fraudulent activities will be permanently banned.</li>
          <li>If a user defaults on repayment, auto-deduction from linked accounts will be enforced.</li>
          <li>The platform is not responsible for disputes between contributors and borrowers.</li>
        </ul>
      </section>

      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-2">Data Privacy & Security</h2>
        <ul className="list-disc list-inside space-y-2">
          <li>All user data, including financial records, will be securely stored and not shared with third parties without consent.</li>
          <li>Users are responsible for maintaining the confidentiality of their login credentials.</li>
        </ul>
      </section>

      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-2">Risk & Liability</h2>
        <ul className="list-disc list-inside space-y-2">
          <li>The platform acts only as a facilitator and is not liable for losses due to non-repayment or misuse of funds.</li>
          <li>Users acknowledge that participation in a pool involves financial risk.</li>
        </ul>
      </section>

      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-2">Termination & Modifications</h2>
        <ul className="list-disc list-inside space-y-2">
          <li>The platform reserves the right to modify terms, suspend accounts, or terminate access in case of policy violations.</li>
          <li>Users will be notified of any significant changes to these terms.</li>
        </ul>
      </section>

      <p className="text-center font-semibold mt-6">
        By using the platform, users agree to abide by these terms and conditions.
      </p>
    </div>
    </>
  );
}

export default TermsAndCondition;
