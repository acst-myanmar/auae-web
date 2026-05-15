import type { Metadata } from "next";
import Link from "next/link";

const APP_NAME = "Auae";
const OPERATOR_NAME = "ACST Labs";
const CONTACT_EMAIL = "support@acstlabs.com";
const POLICY_URL = "https://auae.acstlabs.com/privacy-policy";
const EFFECTIVE_DATE = "May 15, 2026";

const mailTo = `mailto:${CONTACT_EMAIL}`;

const dataSafetyRows = [
  {
    category: "Account and authentication",
    examples: "Name, email address, phone number, sign-in provider identifiers, account ID, authentication records.",
    purpose: "Create and secure accounts, authenticate users, prevent abuse, provide support, and maintain the service.",
    sharing: "Service providers that host, secure, authenticate, or support the service.",
  },
  {
    category: "Profile and community details",
    examples: "Display name, profile photo, bio, interests, language preferences, optional demographic or community information users choose to add.",
    purpose: "Show profiles, personalize community features, help users discover relevant people, posts, chats, and events.",
    sharing: "Other users according to app features and privacy settings; service providers that host and deliver content.",
  },
  {
    category: "Photos, media, posts, comments, events, and listings",
    examples: "Uploaded images, captions, posts, comments, event details, housing or job-related posts, reactions, and related metadata.",
    purpose: "Publish and operate community content, moderation, safety, troubleshooting, and feature improvement.",
    sharing: "Other users when content is posted or shared; hosting, storage, CDN, moderation, and support providers.",
  },
  {
    category: "Messages and support communications",
    examples: "Chat messages, group messages, support tickets, reports, feedback, email messages, and attachments users provide.",
    purpose: "Deliver messaging, respond to support requests, investigate reports, enforce rules, and improve safety.",
    sharing: "Message recipients; support, moderation, hosting, and infrastructure providers.",
  },
  {
    category: "Location information",
    examples: "Approximate location, user-selected city or area, and precise/current location if the user grants permission for location-dependent features.",
    purpose: "Show nearby events, places, listings, local content, maps, safety features, and location-based recommendations.",
    sharing: "Map and location service providers when those features are used; other users only where a feature intentionally displays location-related content.",
  },
  {
    category: "Notifications and device identifiers",
    examples: "Push notification tokens, platform notification identifiers, device type, operating system, app version, language, and notification preferences.",
    purpose: "Send requested notifications, maintain preferences, diagnose delivery issues, and protect the service.",
    sharing: "Push notification, mobile platform, analytics, and infrastructure providers.",
  },
  {
    category: "Usage, diagnostics, and technical logs",
    examples: "IP address, timestamps, session events, crash or error logs, browser/app diagnostics, security logs, and general usage activity.",
    purpose: "Operate, secure, debug, measure, improve, and protect the service from spam, fraud, and abuse.",
    sharing: "Hosting, analytics, security, monitoring, and infrastructure providers.",
  },
];

const providers = [
  "Supabase for database, authentication, storage-related services, and backend infrastructure.",
  "Cloudflare R2 and CDN services for file storage, media delivery, security, and performance.",
  "Google Maps and Google Places for maps, places, location search, and location-dependent features.",
  "Firebase and other Google services for app infrastructure, analytics, diagnostics, messaging, or platform integrations where used.",
  "Expo push notification services for routing push notifications to Apple and Google platform notification systems.",
  "Apple and Google platform services for app distribution, sign-in, payments or subscriptions where enabled, crash diagnostics, push notifications, and operating-system features.",
  "Email, support, moderation, security, and customer-service providers that help us respond to requests, reports, and safety issues.",
];

const userControls = [
  "Update optional profile fields in the app.",
  "Choose what to post, upload, message, or share with other users.",
  "Use device settings to manage access to photos, media, camera, notifications, and location.",
  "Turn off push notifications in the app or through device settings.",
  "Request help, correction, export, deletion, or account closure through Auae support or by email.",
];

export const metadata: Metadata = {
  title: `${APP_NAME} Privacy Policy | ${OPERATOR_NAME}`,
  description: `Privacy Policy for ${APP_NAME}, operated by ${OPERATOR_NAME}. Learn what data Auae collects, how it is used, shared, retained, and how to contact support.`,
  alternates: {
    canonical: POLICY_URL,
  },
  openGraph: {
    title: `${APP_NAME} Privacy Policy`,
    description: `Privacy Policy for ${APP_NAME}, operated by ${OPERATOR_NAME}.`,
    url: POLICY_URL,
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

export default function PrivacyPolicyPage() {
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
            <Link href="/privacy-policy/my" className="text-brand-ink underline">
              မြန်မာ
            </Link>
            <Link href="/terms" className="text-neutral-700 hover:text-brand-ink">
              Terms & Conditions
            </Link>
          </nav>
        </div>
      </div>

      <article className="mx-auto max-w-5xl px-5 py-12 md:px-8 md:py-16">
        <header className="max-w-3xl">
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-brand-ink">
            Privacy Policy
          </p>
          <h1 className="mt-4 text-4xl font-bold tracking-tight text-neutral-950 md:text-5xl">
            {APP_NAME} Privacy Policy
          </h1>
          <p className="mt-5 text-lg leading-8 text-neutral-700">
            This Privacy Policy explains how {OPERATOR_NAME} collects, uses,
            discloses, retains, and protects personal information when you use{" "}
            {APP_NAME}, our mobile app, website, and related services.
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
              <dt className="font-semibold text-neutral-950">Policy URL</dt>
              <dd>
                <a className="text-brand-ink underline" href={POLICY_URL}>
                  {POLICY_URL}
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
            This policy is written in plain language for app store review and
            user transparency. It is not a substitute for advice from a
            qualified privacy lawyer. The Burmese version is provided for user
            convenience. If there is any conflict between translations, the
            English version controls.
          </p>
        </header>

        <nav
          aria-label="Privacy policy sections"
          className="mt-10 rounded-lg border border-neutral-200 bg-neutral-50 p-5"
        >
          <h2 className="text-sm font-semibold uppercase tracking-[0.16em] text-neutral-600">
            Sections
          </h2>
          <div className="mt-4 grid gap-2 text-sm sm:grid-cols-2">
            {[
              ["summary", "Data Safety / App Privacy Summary"],
              ["collection", "Information We Collect"],
              ["use", "How We Use Information"],
              ["sharing", "Sharing and Disclosure"],
              ["providers", "Service Providers"],
              ["retention", "Retention"],
              ["security", "Security"],
              ["transfers", "International Transfers"],
              ["controls", "User Controls and Deletion"],
              ["children", "Children's Privacy"],
              ["rights", "Regional Privacy Rights"],
              ["changes", "Changes and Contact"],
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
          <Section id="summary" title="Data Safety / App Privacy Summary">
            <p>
              The exact information available to {APP_NAME} depends on your
              choices, app activity, settings, and permissions. For example,
              photos, notifications, location, camera, and optional profile
              fields are only available when you provide them or allow the
              relevant permission.
            </p>
            <div className="overflow-x-auto rounded-lg border border-neutral-200">
              <table className="min-w-[880px] divide-y divide-neutral-200 text-left text-sm">
                <thead className="bg-neutral-50 text-neutral-950">
                  <tr>
                    <th scope="col" className="px-4 py-3 font-semibold">
                      Data category
                    </th>
                    <th scope="col" className="px-4 py-3 font-semibold">
                      Examples
                    </th>
                    <th scope="col" className="px-4 py-3 font-semibold">
                      Main purposes
                    </th>
                    <th scope="col" className="px-4 py-3 font-semibold">
                      Sharing summary
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-neutral-200 bg-white">
                  {dataSafetyRows.map((row) => (
                    <tr key={row.category}>
                      <th
                        scope="row"
                        className="px-4 py-4 align-top font-semibold text-neutral-950"
                      >
                        {row.category}
                      </th>
                      <td className="px-4 py-4 align-top text-neutral-700">
                        {row.examples}
                      </td>
                      <td className="px-4 py-4 align-top text-neutral-700">
                        {row.purpose}
                      </td>
                      <td className="px-4 py-4 align-top text-neutral-700">
                        {row.sharing}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p>
              This table is intended to help keep Apple App Privacy labels and
              Google Play Data Safety answers consistent with this policy. Store
              disclosures should still be checked against the final app
              behavior before submission.
            </p>
          </Section>

          <Section id="collection" title="Information We Collect">
            <p>
              We collect information you provide directly, information created
              through your use of {APP_NAME}, information from your device or
              app permissions, and information from service providers that help
              us operate the service.
            </p>
            <p>
              This may include account and authentication data, profile details,
              uploaded photos and media, posts, comments, event activity,
              listings, reactions, chat messages, support tickets, reports,
              location-related information, push notification tokens, device and
              app data, IP address, diagnostics, crash data, and technical logs.
            </p>
            <p>
              Some features may ask for access to photos, media, camera,
              notifications, contacts, or location. You can decline permissions,
              but some app features may not work without the information they
              need.
            </p>
          </Section>

          <Section id="use" title="How We Use Information">
            <p>We use personal information to:</p>
            <ul className="list-disc space-y-2 pl-6">
              <li>Provide, maintain, personalize, and improve {APP_NAME}.</li>
              <li>Create accounts, authenticate users, and protect access.</li>
              <li>Publish posts, profiles, events, listings, media, and messages.</li>
              <li>Show local, location-dependent, or permission-based features.</li>
              <li>Send service, safety, support, and push notifications.</li>
              <li>Respond to support tickets, reports, appeals, and feedback.</li>
              <li>Moderate content, enforce policies, and investigate misuse.</li>
              <li>Debug, analyze performance, prevent spam, fraud, and abuse.</li>
              <li>Comply with legal, regulatory, platform, and safety obligations.</li>
            </ul>
          </Section>

          <Section id="sharing" title="Sharing and Disclosure">
            <p>
              We do not sell personal information in the ordinary meaning of
              selling a user list for money. We may share information in the
              limited ways described in this policy.
            </p>
            <ul className="list-disc space-y-2 pl-6">
              <li>
                <strong>With other users:</strong> Information you choose to
                post, message, upload, or add to public or shared areas may be
                visible to other users according to the feature and settings.
              </li>
              <li>
                <strong>With service providers:</strong> We use trusted vendors
                for hosting, storage, authentication, maps, push notifications,
                analytics, security, support, moderation, email, and technical
                operations.
              </li>
              <li>
                <strong>For safety and legal reasons:</strong> We may disclose
                information to comply with law, enforce terms, protect users,
                investigate abuse, or respond to lawful requests.
              </li>
              <li>
                <strong>Business transfers:</strong> If {APP_NAME} or{" "}
                {OPERATOR_NAME} is involved in a merger, acquisition,
                financing, restructuring, or asset transfer, information may be
                transferred as part of that transaction, subject to appropriate
                protections.
              </li>
            </ul>
          </Section>

          <Section id="providers" title="Service Providers">
            <p>
              Depending on the feature, region, platform, and current
              implementation, we may use the following types of third-party
              services:
            </p>
            <ul className="list-disc space-y-2 pl-6">
              {providers.map((provider) => (
                <li key={provider}>{provider}</li>
              ))}
            </ul>
            <p>
              These providers may process personal information for us or receive
              information directly from your device when their tools are used.
              Their processing is governed by their own terms, privacy policies,
              and our agreements with them where applicable.
            </p>
          </Section>

          <Section id="retention" title="Retention">
            <p>
              We retain personal information for as long as reasonably needed to
              provide {APP_NAME}, maintain accounts, deliver community features,
              resolve disputes, enforce terms, protect users, comply with legal
              obligations, and maintain security records.
            </p>
            <p>
              User-posted content, messages, support records, reports, backups,
              logs, and moderation records may have different retention periods.
              Deleted content may remain for a limited time in backups, audit
              logs, safety systems, legal holds, or records needed to prevent
              abuse.
            </p>
          </Section>

          <Section id="security" title="Security">
            <p>
              We use reasonable administrative, technical, and organizational
              safeguards designed to protect personal information, including
              access controls, authentication, encryption in transit where
              supported, monitoring, logging, and provider security features.
            </p>
            <p>
              No online service can guarantee absolute security. You are
              responsible for keeping your account credentials safe and for
              using care when sharing information with other users.
            </p>
          </Section>

          <Section id="transfers" title="International Transfers">
            <p>
              {APP_NAME} is intended for a global app-store audience, including
              users connected to the Myanmar community in Japan. We and our
              service providers may process and store information in Japan, the
              United States, and other countries where we or our providers
              operate.
            </p>
            <p>
              Privacy laws in those countries may differ from the laws where you
              live. Where required, we rely on appropriate safeguards or lawful
              transfer mechanisms for cross-border processing.
            </p>
          </Section>

          <Section id="controls" title="User Controls and Account/Data Deletion">
            <p>You can control some information directly:</p>
            <ul className="list-disc space-y-2 pl-6">
              {userControls.map((control) => (
                <li key={control}>{control}</li>
              ))}
            </ul>
            <p>
              You may request account or data deletion through {APP_NAME}{" "}
              support in the app or by emailing{" "}
              <a className="text-brand-ink underline" href={mailTo}>
                {CONTACT_EMAIL}
              </a>
              . Please include enough information for us to identify your
              account. We may need to verify your request before deleting,
              exporting, or changing account information.
            </p>
            <p>
              We will respond to deletion requests as required by applicable
              law. Some information may be retained where necessary for security,
              fraud prevention, legal compliance, dispute resolution, backups,
              or to protect the rights and safety of users and the service.
            </p>
          </Section>

          <Section id="children" title="Children's Privacy">
            <p>
              {APP_NAME} is not intended for children under the age required by
              applicable law to use online community services without parental
              consent. We do not knowingly collect personal information from
              children where parental consent is required.
            </p>
            <p>
              If you believe a child has provided personal information to{" "}
              {APP_NAME} without the required consent, contact us at{" "}
              <a className="text-brand-ink underline" href={mailTo}>
                {CONTACT_EMAIL}
              </a>
              , and we will take appropriate steps.
            </p>
          </Section>

          <Section id="rights" title="Regional Privacy Rights">
            <p>
              Depending on where you live, you may have rights under privacy
              laws such as the GDPR, UK GDPR, California CCPA/CPRA, Japan APPI,
              or similar laws. These rights may include access, correction,
              deletion, portability, restriction, objection, withdrawal of
              consent, appeal, or the right to complain to a regulator.
            </p>
            <p>
              To exercise privacy rights, contact us at{" "}
              <a className="text-brand-ink underline" href={mailTo}>
                {CONTACT_EMAIL}
              </a>
              . We may ask for information needed to verify your identity,
              locate your account, understand your request, and respond within
              the timeframe required by law.
            </p>
            <p>
              We do not discriminate against users for exercising privacy rights.
              Some requests may be limited by legal exceptions, safety needs,
              free-expression considerations, or technical limitations.
            </p>
          </Section>

          <Section id="changes" title="Changes and Contact">
            <p>
              We may update this Privacy Policy from time to time. If changes
              are material, we will provide notice in a reasonable way, such as
              through the app, the website, or email where appropriate. The
              effective date above shows when this policy version took effect.
            </p>
            <p>
              Questions, privacy requests, support requests, reports, and
              account or data deletion requests can be sent to{" "}
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
