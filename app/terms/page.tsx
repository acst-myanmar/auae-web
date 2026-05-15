import type { Metadata } from "next";
import Link from "next/link";

const APP_NAME = "Auae";
const OPERATOR_NAME = "ACST Labs";
const CONTACT_EMAIL = "support@acstlabs.com";
const TERMS_URL = "https://auae.acstlabs.com/terms";
const EFFECTIVE_DATE = "May 15, 2026";

const mailTo = `mailto:${CONTACT_EMAIL}`;

export const metadata: Metadata = {
  title: `${APP_NAME} Terms & Conditions | ${OPERATOR_NAME}`,
  description: `Terms and Conditions for ${APP_NAME}, operated by ${OPERATOR_NAME}.`,
  alternates: {
    canonical: TERMS_URL,
  },
  openGraph: {
    title: `${APP_NAME} Terms & Conditions`,
    description: `Terms and Conditions for ${APP_NAME}, operated by ${OPERATOR_NAME}.`,
    url: TERMS_URL,
    type: "website",
  },
};

function Section({
  id,
  title,
  children,
}: Readonly<{
  id: string;
  title: string;
  children: React.ReactNode;
}>) {
  return (
    <section id={id} className="scroll-mt-8 border-t border-neutral-200 pt-10">
      <h2 className="text-2xl font-semibold tracking-tight text-neutral-950">
        {title}
      </h2>
      <div className="mt-4 space-y-4 text-base leading-7 text-neutral-700">
        {children}
      </div>
    </section>
  );
}

export default function TermsPage() {
  return (
    <main className="min-h-screen bg-white">
      <div className="border-b border-neutral-200 bg-brand-soft/50">
        <div className="mx-auto flex max-w-5xl flex-wrap items-center justify-between gap-4 px-5 py-6 md:px-8">
          <Link
            href="/"
            className="text-sm font-semibold text-brand-ink transition hover:text-neutral-950"
          >
            Auae
          </Link>
          <nav
            aria-label="Legal document links"
            className="flex flex-wrap items-center gap-x-5 gap-y-2 text-sm"
          >
            <Link href="/terms/my" className="text-brand-ink underline">
              မြန်မာ
            </Link>
            <Link href="/privacy-policy" className="text-neutral-700 hover:text-brand-ink">
              Privacy Policy
            </Link>
          </nav>
        </div>
      </div>

      <article className="mx-auto max-w-5xl px-5 py-12 md:px-8 md:py-16">
        <header className="max-w-3xl">
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-brand-ink">
            Terms & Conditions
          </p>
          <h1 className="mt-4 text-4xl font-bold tracking-tight text-neutral-950 md:text-5xl">
            {APP_NAME} Terms & Conditions
          </h1>
          <p className="mt-5 text-lg leading-8 text-neutral-700">
            These Terms & Conditions explain the rules for using {APP_NAME}, a
            community app and related services operated by {OPERATOR_NAME}.
          </p>
          <dl className="mt-8 grid gap-3 rounded-lg border border-neutral-200 bg-white p-5 text-sm text-neutral-700 shadow-sm sm:grid-cols-2">
            <div>
              <dt className="font-semibold text-neutral-950">Operator</dt>
              <dd>{OPERATOR_NAME}</dd>
            </div>
            <div>
              <dt className="font-semibold text-neutral-950">Effective date</dt>
              <dd>{EFFECTIVE_DATE}</dd>
            </div>
            <div>
              <dt className="font-semibold text-neutral-950">Terms URL</dt>
              <dd>
                <a className="text-brand-ink underline" href={TERMS_URL}>
                  {TERMS_URL}
                </a>
              </dd>
            </div>
            <div>
              <dt className="font-semibold text-neutral-950">Contact</dt>
              <dd>
                <a className="text-brand-ink underline" href={mailTo}>
                  {CONTACT_EMAIL}
                </a>
              </dd>
            </div>
          </dl>
          <p className="mt-5 text-sm leading-6 text-neutral-600">
            The Burmese version is provided for user convenience. If there is
            any conflict between translations, the English version controls.
            These terms are a strong draft for launch, not a substitute for
            review by a qualified lawyer.
          </p>
        </header>

        <nav
          aria-label="Terms sections"
          className="mt-10 rounded-lg border border-neutral-200 bg-neutral-50 p-5"
        >
          <h2 className="text-sm font-semibold uppercase tracking-[0.16em] text-neutral-600">
            Sections
          </h2>
          <div className="mt-4 grid gap-2 text-sm sm:grid-cols-2">
            {[
              ["acceptance", "Acceptance"],
              ["eligibility", "Eligibility and Accounts"],
              ["community", "Community Rules"],
              ["content", "User Content"],
              ["events", "Events, Listings, and Meetups"],
              ["safety", "Safety and Moderation"],
              ["privacy", "Privacy"],
              ["third-party", "Third-Party Services"],
              ["availability", "Service Changes"],
              ["disclaimers", "Disclaimers and Liability"],
              ["termination", "Termination"],
              ["law", "Governing Terms and Contact"],
            ].map(([href, label]) => (
              <a
                key={href}
                href={`#${href}`}
                className="rounded-md px-3 py-2 text-neutral-700 transition hover:bg-white hover:text-brand-ink"
              >
                {label}
              </a>
            ))}
          </div>
        </nav>

        <div className="mt-12 space-y-12">
          <Section id="acceptance" title="Acceptance of These Terms">
            <p>
              By downloading, accessing, creating an account, or using {APP_NAME},
              you agree to these Terms & Conditions. If you do not agree, do
              not use the service.
            </p>
            <p>
              We may update these terms from time to time. If changes are
              material, we will provide reasonable notice. Your continued use of
              {APP_NAME} after the effective date of updated terms means you
              accept the updated terms.
            </p>
          </Section>

          <Section id="eligibility" title="Eligibility and Accounts">
            <p>
              You must be old enough under applicable law to use online
              community services and to agree to these terms. If you use
              {APP_NAME} on behalf of an organization, you confirm you have
              authority to do so.
            </p>
            <p>
              You are responsible for your account, login credentials, profile,
              and activity. Keep your information accurate, do not impersonate
              others, and notify us if you believe your account has been
              compromised.
            </p>
          </Section>

          <Section id="community" title="Community Rules">
            <p>
              {APP_NAME} is built for Myanmar people living overseas and for
              community connection. You agree not to use the service to post,
              send, promote, or organize content or activity that:
            </p>
            <ul className="list-disc space-y-2 pl-6">
              <li>Is illegal, fraudulent, misleading, or harmful.</li>
              <li>Harasses, threatens, abuses, exploits, or discriminates against others.</li>
              <li>Contains hate speech, sexual exploitation, graphic violence, or non-consensual intimate content.</li>
              <li>Shares private information about another person without permission.</li>
              <li>Infringes intellectual property, privacy, publicity, or other rights.</li>
              <li>Spams, scams, scrapes, disrupts, reverse engineers, or attacks the service.</li>
              <li>Misuses events, listings, chat, reports, or support channels.</li>
            </ul>
          </Section>

          <Section id="content" title="User Content">
            <p>
              You keep ownership of content you create or upload, such as
              profile details, photos, posts, comments, messages, reports,
              events, and listings. You are responsible for having the rights
              and permissions needed to share that content.
            </p>
            <p>
              You give {OPERATOR_NAME} a worldwide, non-exclusive, royalty-free
              license to host, store, reproduce, display, format, transmit,
              moderate, translate, and otherwise use your content as needed to
              operate, protect, improve, and promote {APP_NAME}. This license
              ends when your content is deleted from active systems, except
              where retention is needed for backups, safety, legal compliance,
              moderation, or records of abuse.
            </p>
            <p>
              We may remove, limit, label, or refuse content if we believe it
              violates these terms, creates risk, or may harm users or the
              service.
            </p>
          </Section>

          <Section id="events" title="Events, Listings, and Meetups">
            <p>
              {APP_NAME} may help users discover events, places, jobs, housing,
              community posts, and local activities. Unless we clearly say
              otherwise, user-created events, listings, and meetups are provided
              by users or third parties, not by {OPERATOR_NAME}.
            </p>
            <p>
              Use judgment before meeting people, attending events, applying for
              jobs, renting housing, making payments, or sharing personal
              information. We do not guarantee the accuracy, safety, legality,
              quality, availability, or outcome of user content, events,
              listings, or third-party services.
            </p>
          </Section>

          <Section id="safety" title="Safety, Reports, and Moderation">
            <p>
              We may review reports, investigate activity, remove content,
              restrict features, suspend accounts, terminate accounts, preserve
              records, or contact authorities where we believe it is necessary
              for safety, legal compliance, or service integrity.
            </p>
            <p>
              You can report content, users, or safety concerns in the app or by
              emailing{" "}
              <a className="text-brand-ink underline" href={mailTo}>
                {CONTACT_EMAIL}
              </a>
              .
            </p>
          </Section>

          <Section id="privacy" title="Privacy">
            <p>
              Our Privacy Policy explains how we collect, use, disclose, retain,
              and protect personal information. It is part of these terms and is
              available at{" "}
              <Link className="text-brand-ink underline" href="/privacy-policy">
                /privacy-policy
              </Link>
              .
            </p>
          </Section>

          <Section id="third-party" title="Third-Party Services">
            <p>
              {APP_NAME} may rely on third-party services such as app stores,
              sign-in providers, maps, places, cloud hosting, storage, push
              notifications, email, support, analytics, payments, and device
              platform services. Third-party services may have their own terms
              and privacy policies.
            </p>
          </Section>

          <Section id="availability" title="Service Changes">
            <p>
              We may add, change, limit, suspend, or discontinue features or the
              service at any time. We may also impose usage limits, maintenance
              periods, eligibility rules, or technical requirements.
            </p>
            <p>
              We are not responsible for interruptions, data loss, delays,
              errors, or inability to access the service caused by technical
              issues, user devices, third-party providers, network problems, or
              events outside our reasonable control.
            </p>
          </Section>

          <Section id="disclaimers" title="Disclaimers and Liability">
            <p>
              {APP_NAME} is provided on an &quot;as is&quot; and &quot;as
              available&quot; basis. To the maximum extent allowed by law,{" "}
              {OPERATOR_NAME} disclaims
              warranties of merchantability, fitness for a particular purpose,
              non-infringement, accuracy, availability, and reliability.
            </p>
            <p>
              To the maximum extent allowed by law, {OPERATOR_NAME} will not be
              liable for indirect, incidental, special, consequential,
              exemplary, or punitive damages, or for lost profits, lost data,
              lost goodwill, or damages arising from user content, third-party
              conduct, events, listings, or interactions between users.
            </p>
          </Section>

          <Section id="termination" title="Termination">
            <p>
              You may stop using {APP_NAME} at any time and may request account
              deletion through in-app support or by emailing{" "}
              <a className="text-brand-ink underline" href={mailTo}>
                {CONTACT_EMAIL}
              </a>
              . We may suspend or terminate access if we believe you violated
              these terms, created risk, or used the service in a harmful way.
            </p>
          </Section>

          <Section id="law" title="Governing Terms and Contact">
            <p>
              These terms are intended to apply globally to the extent permitted
              by applicable law. Some regions may provide consumer, privacy, or
              platform rights that cannot be waived by contract.
            </p>
            <p>
              Questions about these terms can be sent to{" "}
              <a className="text-brand-ink underline" href={mailTo}>
                {CONTACT_EMAIL}
              </a>
              .
            </p>
          </Section>
        </div>
      </article>
    </main>
  );
}
