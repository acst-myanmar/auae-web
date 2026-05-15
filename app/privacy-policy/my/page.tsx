import type { Metadata } from "next";
import Link from "next/link";

const APP_NAME = "Auae";
const OPERATOR_NAME = "ACST Labs";
const CONTACT_EMAIL = "support@acstlabs.com";
const POLICY_URL = "https://auae.acstlabs.com/privacy-policy/my";
const EFFECTIVE_DATE = "၂၀၂၆ မေ ၁၅";

const mailTo = `mailto:${CONTACT_EMAIL}`;

const dataSafetyRows = [
  {
    category: "Account နှင့် login အချက်အလက်",
    examples: "နာမည်၊ email၊ phone number၊ sign-in provider ID၊ account ID၊ authentication records။",
    purpose: "Account ဖန်တီးရန်၊ login လုံခြုံရေး၊ abuse ကာကွယ်ရေး၊ support ပေးရန်။",
    sharing: "Hosting၊ authentication၊ security နှင့် support ဝန်ဆောင်မှုပေးသူများ။",
  },
  {
    category: "Profile နှင့် community အချက်အလက်",
    examples: "Display name၊ profile photo၊ bio၊ interests၊ language preferences နှင့် optional profile fields။",
    purpose: "Profile ပြရန်၊ user များ၊ post၊ chat၊ event နှင့် local content များကို သက်ဆိုင်ရာအလိုက် ပြရန်။",
    sharing: "App feature နှင့် privacy setting အလိုက် အခြား user များ၊ hosting/CDN provider များ။",
  },
  {
    category: "Photo၊ media၊ post၊ comment၊ event နှင့် listing",
    examples: "Upload လုပ်သော image၊ caption၊ post၊ comment၊ event detail၊ housing/job post၊ reaction နှင့် related metadata။",
    purpose: "Community content ပြသရန်၊ moderation၊ safety၊ troubleshooting နှင့် feature improvement အတွက်။",
    sharing: "Content မျှဝေသောနေရာများတွင် အခြား user များ၊ storage/CDN/moderation/support provider များ။",
  },
  {
    category: "Message နှင့် support communication",
    examples: "Chat message၊ group message၊ support ticket၊ report၊ feedback၊ email message နှင့် attachment။",
    purpose: "Messaging ပေးရန်၊ support ဖြေကြားရန်၊ report စစ်ဆေးရန်၊ policy enforce ပြုလုပ်ရန်။",
    sharing: "Message လက်ခံသူများ၊ support၊ moderation၊ hosting provider များ။",
  },
  {
    category: "Location information",
    examples: "Approximate location၊ user ရွေးထားသော city/area၊ permission ပေးပါက precise/current location။",
    purpose: "Nearby event၊ place၊ listing၊ map၊ safety feature နှင့် location-based recommendation ပြရန်။",
    sharing: "Map/location provider များ၊ feature အလိုက် location-related content မြင်နိုင်သော အခြား user များ။",
  },
  {
    category: "Notification နှင့် device information",
    examples: "Push token၊ platform notification ID၊ device type၊ operating system၊ app version၊ language နှင့် notification preference။",
    purpose: "Notification ပို့ရန်၊ preference ထိန်းသိမ်းရန်၊ delivery issue စစ်ရန်၊ service လုံခြုံရေး။",
    sharing: "Push notification၊ mobile platform၊ analytics နှင့် infrastructure provider များ။",
  },
  {
    category: "Usage၊ diagnostic နှင့် technical logs",
    examples: "IP address၊ timestamp၊ session event၊ crash/error log၊ browser/app diagnostic၊ security log။",
    purpose: "Operate၊ secure၊ debug၊ measure၊ improve နှင့် spam/fraud/abuse ကာကွယ်ရန်။",
    sharing: "Hosting၊ analytics၊ security၊ monitoring နှင့် infrastructure provider များ။",
  },
];

export const metadata: Metadata = {
  title: `${APP_NAME} ကိုယ်ရေးအချက်အလက် မူဝါဒ | ${OPERATOR_NAME}`,
  description: `${APP_NAME} ၏ ကိုယ်ရေးအချက်အလက် မူဝါဒ။`,
  alternates: {
    canonical: POLICY_URL,
  },
  openGraph: {
    title: `${APP_NAME} ကိုယ်ရေးအချက်အလက် မူဝါဒ`,
    description: `${APP_NAME} ၏ ကိုယ်ရေးအချက်အလက် မူဝါဒ။`,
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
      <h2 className="font-myanmar text-2xl font-semibold tracking-tight text-neutral-950">
        {title}
      </h2>
      <div className="font-myanmar mt-4 space-y-4 text-base leading-8 text-neutral-700">
        {children}
      </div>
    </section>
  );
}

export default function BurmesePrivacyPolicyPage() {
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
            <Link href="/privacy-policy" className="text-brand-ink underline">
              English
            </Link>
            <Link href="/terms/my" className="text-neutral-700 hover:text-brand-ink">
              စည်းကမ်းသတ်မှတ်ချက်များ
            </Link>
          </nav>
        </div>
      </div>

      <article className="mx-auto max-w-5xl px-5 py-12 md:px-8 md:py-16">
        <header className="max-w-3xl">
          <p className="font-myanmar text-sm font-semibold uppercase tracking-[0.18em] text-brand-ink">
            ကိုယ်ရေးအချက်အလက် မူဝါဒ
          </p>
          <h1 className="font-myanmar mt-4 text-4xl font-bold tracking-tight text-neutral-950 md:text-5xl">
            {APP_NAME} ကိုယ်ရေးအချက်အလက် မူဝါဒ
          </h1>
          <p className="font-myanmar mt-5 text-lg leading-8 text-neutral-700">
            ဤ Privacy Policy သည် {OPERATOR_NAME} မှ လည်ပတ်သော {APP_NAME} mobile
            app၊ website နှင့် ဆက်စပ်ဝန်ဆောင်မှုများကို အသုံးပြုသောအခါ
            ကိုယ်ရေးအချက်အလက်များကို မည်သို့စုဆောင်း၊ အသုံးပြု၊ မျှဝေ၊ သိမ်းဆည်း
            နှင့် ကာကွယ်သည်ကို ရှင်းပြထားပါသည်။
          </p>
          <dl className="font-myanmar mt-8 grid gap-3 rounded-lg border border-neutral-200 bg-white p-5 text-sm text-neutral-700 shadow-sm sm:grid-cols-2">
            <div>
              <dt className="font-semibold text-neutral-950">လည်ပတ်သူ</dt>
              <dd>{OPERATOR_NAME}</dd>
            </div>
            <div>
              <dt className="font-semibold text-neutral-950">စတင်အသက်ဝင်သည့်နေ့</dt>
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
              <dt className="font-semibold text-neutral-950">ဆက်သွယ်ရန်</dt>
              <dd>
                <a className="text-brand-ink underline" href={mailTo}>
                  {CONTACT_EMAIL}
                </a>
              </dd>
            </div>
          </dl>
          <p className="font-myanmar mt-5 text-sm leading-7 text-neutral-600">
            ဤမြန်မာဘာသာပြန်သည် အသုံးပြုသူများ လွယ်ကူစွာ ဖတ်ရှုနိုင်ရန်
            ပံ့ပိုးထားခြင်းဖြစ်သည်။ App Store နှင့် Google Play submission
            အတွက် အင်္ဂလိပ်ဗားရှင်းကို အဓိကအသုံးပြုရန် အကြံပြုပါသည်။
            ဘာသာပြန်များအကြား ကွဲလွဲမှုရှိပါက အင်္ဂလိပ်ဗားရှင်းကို
            အဓိကအဖြစ် အသုံးပြုပါမည်။
          </p>
        </header>

        <div className="mt-12 space-y-12">
          <Section id="summary" title="Data Safety / App Privacy အကျဉ်းချုပ်">
            <p>
              {APP_NAME} တွင် ရရှိနိုင်သော data သည် သင့်ရွေးချယ်မှု၊ app
              အသုံးပြုမှု၊ setting နှင့် permission များပေါ် မူတည်ပါသည်။
              ဥပမာ photo၊ notification၊ location၊ camera နှင့် optional profile
              field များသည် သင်ပေးသောအခါ သို့မဟုတ် permission ခွင့်ပြုသောအခါသာ
              ရရှိနိုင်ပါသည်။
            </p>
            <div className="overflow-x-auto rounded-lg border border-neutral-200">
              <table className="min-w-[880px] divide-y divide-neutral-200 text-left text-sm">
                <thead className="bg-neutral-50 text-neutral-950">
                  <tr>
                    <th scope="col" className="px-4 py-3 font-semibold">
                      Data အမျိုးအစား
                    </th>
                    <th scope="col" className="px-4 py-3 font-semibold">
                      ဥပမာ
                    </th>
                    <th scope="col" className="px-4 py-3 font-semibold">
                      အသုံးပြုရသည့် ရည်ရွယ်ချက်
                    </th>
                    <th scope="col" className="px-4 py-3 font-semibold">
                      မျှဝေမှု အကျဉ်းချုပ်
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
          </Section>

          <Section id="collection" title="ကျွန်ုပ်တို့ စုဆောင်းနိုင်သော အချက်အလက်များ">
            <p>
              သင်တိုက်ရိုက်ပေးသောအချက်အလက်များ၊ {APP_NAME} အသုံးပြုရာမှ
              ဖြစ်ပေါ်သောအချက်အလက်များ၊ device/app permission များမှရသော
              အချက်အလက်များ နှင့် ဝန်ဆောင်မှုပေးသူများမှ ပံ့ပိုးသော
              အချက်အလက်များကို စုဆောင်းနိုင်ပါသည်။
            </p>
            <p>
              ၎င်းတွင် account နှင့် authentication data၊ profile detail၊ upload
              လုပ်သော photo/media၊ post၊ comment၊ event activity၊ listing၊
              reaction၊ chat message၊ support ticket၊ report၊ location-related
              information၊ push notification token၊ device/app data၊ IP address၊
              diagnostic၊ crash data နှင့် technical log များ ပါဝင်နိုင်ပါသည်။
            </p>
          </Section>

          <Section id="use" title="အချက်အလက်များကို အသုံးပြုရသည့် အကြောင်းရင်းများ">
            <p>ကိုယ်ရေးအချက်အလက်များကို အောက်ပါအကြောင်းများအတွက် အသုံးပြုပါသည်။</p>
            <ul className="list-disc space-y-2 pl-6">
              <li>{APP_NAME} ကို ပေးရန်၊ ထိန်းသိမ်းရန်၊ personalize ပြုလုပ်ရန် နှင့် တိုးတက်စေရန်။</li>
              <li>Account ဖန်တီးရန်၊ user authentication နှင့် account လုံခြုံရေးအတွက်။</li>
              <li>Profile၊ post၊ event၊ listing၊ media နှင့် message များကို ပြသပေးရန်။</li>
              <li>Location-dependent feature၊ local content နှင့် notification များ ပေးရန်။</li>
              <li>Support ticket၊ report၊ appeal နှင့် feedback များကို ဖြေရှင်းရန်။</li>
              <li>Content moderation၊ policy enforcement၊ spam/fraud/abuse ကာကွယ်ရန်။</li>
              <li>ဥပဒေ၊ platform rule နှင့် safety obligation များကို လိုက်နာရန်။</li>
            </ul>
          </Section>

          <Section id="sharing" title="မျှဝေမှုနှင့် Disclosure">
            <p>
              ကျွန်ုပ်တို့သည် user list ကို ငွေဖြင့်ရောင်းချခြင်းကဲ့သို့သော
              အဓိပ္ပါယ်ဖြင့် ကိုယ်ရေးအချက်အလက်များကို မရောင်းပါ။ သို့သော်
              ဤမူဝါဒတွင် ဖော်ပြထားသော ကန့်သတ်ထားသည့် အခြေအနေများတွင်
              အချက်အလက်များကို မျှဝေနိုင်ပါသည်။
            </p>
            <ul className="list-disc space-y-2 pl-6">
              <li>သင် post၊ message၊ upload သို့မဟုတ် public/shared area တွင် မျှဝေသောအချက်အလက်များကို feature နှင့် setting အလိုက် အခြား user များ မြင်နိုင်ပါသည်။</li>
              <li>Hosting၊ storage၊ authentication၊ map၊ push notification၊ analytics၊ security၊ support၊ moderation၊ email နှင့် technical operation provider များနှင့် မျှဝေနိုင်ပါသည်။</li>
              <li>ဥပဒေလိုက်နာရန်၊ terms enforce ပြုလုပ်ရန်၊ user များကို ကာကွယ်ရန်၊ abuse စစ်ဆေးရန် သို့မဟုတ် lawful request များကို တုံ့ပြန်ရန် မျှဝေနိုင်ပါသည်။</li>
            </ul>
          </Section>

          <Section id="providers" title="Third-Party / Service Provider များ">
            <p>
              Feature၊ region၊ platform နှင့် implementation ပေါ်မူတည်၍ Supabase၊
              Cloudflare R2/CDN၊ Google Maps/Places၊ Firebase သို့မဟုတ် အခြား
              Google services၊ Expo push notification services၊ Apple/Google
              platform services နှင့် email/support/moderation/security provider
              များကို အသုံးပြုနိုင်ပါသည်။
            </p>
            <p>
              ထို provider များသည် ကျွန်ုပ်တို့အတွက် data ကို process ပြုလုပ်နိုင်
              သို့မဟုတ် ၎င်းတို့၏ tool များကို အသုံးပြုသောအခါ သင့် device မှ
              အချက်အလက်များကို တိုက်ရိုက်ရရှိနိုင်ပါသည်။
            </p>
          </Section>

          <Section id="retention" title="သိမ်းဆည်းကာလ">
            <p>
              {APP_NAME} ကို ပေးရန်၊ account ထိန်းသိမ်းရန်၊ community feature
              များ ပေးရန်၊ dispute ဖြေရှင်းရန်၊ terms enforce ပြုလုပ်ရန်၊ user
              များကို ကာကွယ်ရန်၊ ဥပဒေလိုက်နာရန် နှင့် security record
              ထိန်းသိမ်းရန် လိုအပ်သမျှ ကာလအထိ ကိုယ်ရေးအချက်အလက်များကို
              သိမ်းဆည်းနိုင်ပါသည်။
            </p>
            <p>
              ဖျက်ထားသော content များသည် backup၊ audit log၊ safety system၊ legal
              hold သို့မဟုတ် abuse ကာကွယ်ရန်လိုအပ်သော record များတွင်
              ကန့်သတ်ကာလအတွင်း ကျန်ရှိနိုင်ပါသည်။
            </p>
          </Section>

          <Section id="security" title="လုံခြုံရေး">
            <p>
              ကိုယ်ရေးအချက်အလက်များကို ကာကွယ်ရန် access control၊ authentication၊
              encryption in transit ရနိုင်သမျှ၊ monitoring၊ logging နှင့် provider
              security feature များကဲ့သို့ သင့်လျော်သော administrative၊ technical
              နှင့် organizational safeguard များ အသုံးပြုပါသည်။
            </p>
            <p>
              Online service တစ်ခုအနေဖြင့် လုံးဝ ၁၀၀% လုံခြုံမှုကို အာမခံ၍
              မရနိုင်ပါ။ သင့် account credential များကို လုံခြုံစွာ ထိန်းသိမ်းရန်
              သင်တာဝန်ရှိပါသည်။
            </p>
          </Section>

          <Section id="transfers" title="နိုင်ငံတကာ Data Transfer">
            <p>
              {APP_NAME} သည် Japan ရှိ Myanmar community အပါအဝင် global app-store
              audience အတွက် ရည်ရွယ်ထားပါသည်။ ကျွန်ုပ်တို့နှင့် service provider
              များသည် Japan၊ United States နှင့် provider များ လည်ပတ်သော အခြား
              နိုင်ငံများတွင် data ကို process သို့မဟုတ် store ပြုလုပ်နိုင်ပါသည်။
            </p>
          </Section>

          <Section id="controls" title="User Control နှင့် Account/Data ဖျက်ရန်">
            <p>
              သင်သည် optional profile field များကို ပြင်ဆင်နိုင်ပြီး photo၊ media၊
              camera၊ notification နှင့် location permission များကို device setting
              မှ ထိန်းချုပ်နိုင်ပါသည်။ Push notification ကို app သို့မဟုတ် device
              setting မှ ပိတ်နိုင်ပါသည်။
            </p>
            <p>
              Account သို့မဟုတ် data deletion ကို {APP_NAME} support ထဲမှ
              တောင်းဆိုနိုင်သလို{" "}
              <a className="text-brand-ink underline" href={mailTo}>
                {CONTACT_EMAIL}
              </a>{" "}
              သို့ email ပို့၍လည်း တောင်းဆိုနိုင်ပါသည်။ သင့် account ကို
              ဖော်ထုတ်နိုင်ရန် လိုအပ်သော အချက်အလက်များ ထည့်ပေးပါ။ Request ကို
              လုပ်ဆောင်မီ identity verification လိုအပ်နိုင်ပါသည်။
            </p>
          </Section>

          <Section id="children" title="ကလေးသူငယ်များ၏ ကိုယ်ရေးအချက်အလက်">
            <p>
              {APP_NAME} သည် သက်ဆိုင်ရာဥပဒေအရ မိဘခွင့်ပြုချက်မရှိဘဲ online
              community service အသုံးပြုရန် မသင့်လျော်သော အသက်အရွယ်အောက်
              ကလေးများအတွက် ရည်ရွယ်ထားခြင်းမဟုတ်ပါ။
            </p>
            <p>
              ကလေးတစ်ဦးက လိုအပ်သော ခွင့်ပြုချက်မရှိဘဲ personal information
              ပေးထားသည်ဟု ယုံကြည်ပါက{" "}
              <a className="text-brand-ink underline" href={mailTo}>
                {CONTACT_EMAIL}
              </a>{" "}
              သို့ ဆက်သွယ်ပါ။
            </p>
          </Section>

          <Section id="rights" title="ဒေသအလိုက် Privacy Rights">
            <p>
              သင်နေထိုင်သော နေရာပေါ်မူတည်၍ GDPR၊ UK GDPR၊ California CCPA/CPRA၊
              Japan APPI သို့မဟုတ် အလားတူ privacy law များအရ access၊ correction၊
              deletion၊ portability၊ restriction၊ objection၊ consent withdrawal၊
              appeal သို့မဟုတ် regulator ထံ complaint တင်နိုင်သော အခွင့်အရေးများ
              ရှိနိုင်ပါသည်။
            </p>
            <p>
              Privacy right များကို အသုံးပြုလိုပါက{" "}
              <a className="text-brand-ink underline" href={mailTo}>
                {CONTACT_EMAIL}
              </a>{" "}
              သို့ ဆက်သွယ်ပါ။
            </p>
          </Section>

          <Section id="changes" title="ပြောင်းလဲမှုများနှင့် ဆက်သွယ်ရန်">
            <p>
              ဤ Privacy Policy ကို အချိန်နှင့်အမျှ ပြင်ဆင်နိုင်ပါသည်။ အရေးကြီးသော
              ပြောင်းလဲမှုများရှိပါက app၊ website သို့မဟုတ် email မှတစ်ဆင့်
              သင့်လျော်သော အသိပေးမှု ပေးနိုင်ပါသည်။
            </p>
            <p>
              မေးခွန်းများ၊ privacy request များ၊ support request များ၊ report
              များ နှင့် account/data deletion request များကို{" "}
              <a className="text-brand-ink underline" href={mailTo}>
                {CONTACT_EMAIL}
              </a>{" "}
              သို့ ပို့နိုင်ပါသည်။
            </p>
          </Section>
        </div>
      </article>
    </main>
  );
}
