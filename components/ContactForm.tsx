'use client';

import { useState } from 'react';
import Link from 'next/link';

type Status = 'idle' | 'sent' | 'error';

export default function ContactForm() {
  const [status, setStatus] = useState<Status>('idle');

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = Object.fromEntries(new FormData(form).entries());

    // Optimistic UI: show the thank-you message at once, send in the background.
    setStatus('sent');
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });
      if (!res.ok) throw new Error('Request failed');
      form.reset();
    } catch {
      setStatus('error');
    }
  }

  if (status === 'sent') {
    return (
      <div role="status" className="rounded-3xl bg-white p-8 text-ink">
        <p className="text-2xl font-extrabold">Thanks, we got your message.</p>
        <p className="mt-2 text-ink/70">We will reply within one working day.</p>
      </div>
    );
  }

  const field =
    'w-full rounded-xl border border-line bg-white px-4 py-3 text-ink placeholder:text-ink/50 focus-visible:outline-iris';

  return (
    <form onSubmit={onSubmit} className="space-y-4 rounded-3xl bg-white p-6 text-ink md:p-8">
      <div>
        <label htmlFor="name" className="mb-1 block text-sm font-semibold">Your name</label>
        <input id="name" name="name" required minLength={2} autoComplete="name" className={field} />
      </div>
      <div className="grid gap-4 sm:grid-cols-2">
        <div>
          <label htmlFor="email" className="mb-1 block text-sm font-semibold">Work email</label>
          <input id="email" name="email" type="email" required autoComplete="email" className={field} />
        </div>
        <div>
          <label htmlFor="phone" className="mb-1 block text-sm font-semibold">Phone (optional)</label>
          <input id="phone" name="phone" type="tel" autoComplete="tel" className={field} />
        </div>
      </div>
      <div>
        <label htmlFor="message" className="mb-1 block text-sm font-semibold">What do you want to build?</label>
        <textarea id="message" name="message" required minLength={10} rows={4} className={field} />
      </div>
      {/* Honeypot: hidden from people, filled by bots */}
      <input name="website" tabIndex={-1} autoComplete="off" className="hidden" aria-hidden />

      <p className="text-sm text-ink/70">
        By sending this message you agree to our{' '}
        <Link href="/privacy" className="font-semibold text-iris underline">privacy policy</Link>.
      </p>

      {status === 'error' && (
        <p role="alert" className="text-sm font-semibold text-red-700">
          We could not send your message. Please try again or email us directly.
        </p>
      )}
      <button type="submit" className="w-full rounded-full bg-iris px-6 py-3 font-semibold text-white hover:bg-ink">
        Send message
      </button>
    </form>
  );
}