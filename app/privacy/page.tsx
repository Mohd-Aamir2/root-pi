import type { Metadata } from 'next';
import LegalLayout from '@/components/LegalLayout';
import { company } from '@/data/company';

export const metadata: Metadata = { title: 'Privacy policy | Ai Angel' };

export default function PrivacyPage() {
  return (
    <LegalLayout title="Privacy policy" updated={company.updated}>
      <section>
        <h2>Who we are</h2>
        <p>
          This website is run by {company.legalName}, trading as {company.name} ({company.address}). We decide why and how
          your personal data is used, which makes us the data controller. You can reach us at{' '}
          <a href={`mailto:${company.email}`}>{company.email}</a>.
        </p>
      </section>

      <section>
        <h2>What we collect</h2>
        <p>When you send a message through the contact form, we collect:</p>
        <ul>
          <li>your name and email address</li>
          <li>your phone number, if you choose to give it</li>
          <li>the message you write, and the date and time you sent it</li>
        </ul>
        <p className="mt-4">
          Our hosting provider also keeps standard server logs (such as IP address and browser type) to keep the site
          secure and running. We do not use advertising cookies or sell your data.
        </p>
      </section>

      <section>
        <h2>How we use it</h2>
        <ul>
          <li>to reply to your enquiry and discuss your project</li>
          <li>to keep a record of our conversations with you</li>
          <li>to protect the site from spam and misuse</li>
        </ul>
        <p className="mt-4">We do not use your details for marketing unless you ask us to or agree to it.</p>
      </section>

      <section>
        <h2>Who we share it with</h2>
        <p>We use trusted providers to run the site. They process data only for us:</p>
        <ul>
          <li>MongoDB Atlas, to store enquiries (data region: {company.dataRegion})</li>
          <li>Resend, to email us a notification of each enquiry</li>
          <li>our hosting provider, to serve the website</li>
        </ul>
        <p className="mt-4">
          Some of these providers may process data outside your country. We share your data with authorities only when the
          law requires it.
        </p>
      </section>

      <section>
        <h2>How long we keep it</h2>
        <p>
          We keep enquiries for {company.retention}, or longer if we start working together, and then delete them.
        </p>
      </section>

      <section>
        <h2>Your rights</h2>
        <p>You can ask us to:</p>
        <ul>
          <li>tell you what personal data we hold about you and give you a copy</li>
          <li>correct data that is wrong</li>
          <li>delete your data</li>
          <li>stop using your data, where you gave consent and now withdraw it</li>
        </ul>
        <p className="mt-4">
          Email <a href={`mailto:${company.email}`}>{company.email}</a> and we will respond within a reasonable time. If you
          are unhappy with our answer, you may complain to the data protection authority in your country.
        </p>
      </section>

      <section>
        <h2>Security</h2>
        <p>
          We use encrypted connections and restrict access to the database. No system is completely secure, so we cannot
          promise absolute protection.
        </p>
      </section>

      <section>
        <h2>Children</h2>
        <p>This site is for businesses and is not aimed at children. We do not knowingly collect data from anyone under 18.</p>
      </section>

      <section>
        <h2>Changes to this policy</h2>
        <p>If we change this policy, we will update the date at the top of this page.</p>
      </section>

      <section>
        <h2>Contact</h2>
        <p>
          Questions about your data? Write to <a href={`mailto:${company.email}`}>{company.email}</a>.
        </p>
      </section>
    </LegalLayout>
  );
}