import type { Metadata } from 'next';
import Link from 'next/link';
import LegalLayout from '@/components/LegalLayout';
import { company } from '@/data/company';

export const metadata: Metadata = { title: 'Terms of service | Ai Angel' };

export default function TermsPage() {
  return (
    <LegalLayout title="Terms of service" updated={company.updated}>
      <section>
        <h2>About these terms</h2>
        <p>
          These terms cover your use of this website, run by {company.legalName}, trading as {company.name}. By using the
          site, you agree to them. If you do not agree, please do not use it.
        </p>
      </section>

      <section>
        <h2>Our services</h2>
        <p>
          The website describes the kinds of work we do. It is not an offer. Any project we do for you is covered by a
          separate written agreement that sets out scope, price, timeline and ownership of the work.
        </p>
      </section>

      <section>
        <h2>Using the site</h2>
        <p>You agree not to:</p>
        <ul>
          <li>use the site in a way that breaks the law</li>
          <li>send spam, malware or false information through the contact form</li>
          <li>try to disrupt, scrape at scale, or gain unauthorised access to the site or its systems</li>
        </ul>
      </section>

      <section>
        <h2>Intellectual property</h2>
        <p>
          The text, design, logo and code on this site belong to {company.name} or its licensors. You may view and share
          pages for personal or business reference, but you may not copy or reuse them without our written permission.
        </p>
      </section>

      <section>
        <h2>Information on the site</h2>
        <p>
          We work to keep the content accurate, but we provide it as it is, without any promise that it is complete or
          up to date. Examples of projects and results are illustrations, and your results may differ.
        </p>
      </section>

      <section>
        <h2>Limit of liability</h2>
        <p>
          To the extent the law allows, we are not liable for any loss that comes from using this website or relying on its
          content. Nothing in these terms limits liability that the law does not allow us to limit.
        </p>
      </section>

      <section>
        <h2>Links to other sites</h2>
        <p>The site may link to other websites. We do not control them and are not responsible for their content or policies.</p>
      </section>

      <section>
        <h2>Your data</h2>
        <p>
          How we handle personal data is explained in our <Link href="/privacy">privacy policy</Link>.
        </p>
      </section>

      <section>
        <h2>Governing law</h2>
        <p>
          These terms are governed by the laws of India. Any dispute will be handled by the courts of {company.jurisdiction}.
        </p>
      </section>

      <section>
        <h2>Changes</h2>
        <p>We may update these terms. The date at the top shows when they last changed. Continuing to use the site means you accept the updated terms.</p>
      </section>

      <section>
        <h2>Contact</h2>
        <p>
          Questions? Write to <a href={`mailto:${company.email}`}>{company.email}</a>.
        </p>
      </section>
    </LegalLayout>
  );
}