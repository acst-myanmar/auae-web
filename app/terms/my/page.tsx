import type { Metadata } from "next";
import Link from "next/link";

const APP_NAME = "Auae";
const OPERATOR_NAME = "ACST Labs";
const CONTACT_EMAIL = "support@acstlabs.com";
const TERMS_URL = "https://auae.acstlabs.com/terms/my";
const EFFECTIVE_DATE = "၂၀၂၆ မေ ၁၅";

const mailTo = `mailto:${CONTACT_EMAIL}`;

export const metadata: Metadata = {
  title: `${APP_NAME} စည်းကမ်းသတ်မှတ်ချက်များ | ${OPERATOR_NAME}`,
  description: `${APP_NAME} ကို အသုံးပြုရန် စည်းကမ်းသတ်မှတ်ချက်များ။`,
  alternates: {
    canonical: TERMS_URL,
  },
  openGraph: {
    title: `${APP_NAME} စည်းကမ်းသတ်မှတ်ချက်များ`,
    description: `${APP_NAME} ကို အသုံးပြုရန် စည်းကမ်းသတ်မှတ်ချက်များ။`,
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
      <h2 className="font-myanmar text-2xl font-semibold tracking-tight text-neutral-950">
        {title}
      </h2>
      <div className="font-myanmar mt-4 space-y-4 text-base leading-8 text-neutral-700">
        {children}
      </div>
    </section>
  );
}

export default function BurmeseTermsPage() {
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
            <Link href="/terms" className="text-brand-ink underline">
              English
            </Link>
            <Link href="/privacy-policy/my" className="text-neutral-700 hover:text-brand-ink">
              ကိုယ်ရေးအချက်အလက် မူဝါဒ
            </Link>
          </nav>
        </div>
      </div>

      <article className="mx-auto max-w-5xl px-5 py-12 md:px-8 md:py-16">
        <header className="max-w-3xl">
          <p className="font-myanmar text-sm font-semibold uppercase tracking-[0.18em] text-brand-ink">
            စည်းကမ်းသတ်မှတ်ချက်များ
          </p>
          <h1 className="font-myanmar mt-4 text-4xl font-bold tracking-tight text-neutral-950 md:text-5xl">
            {APP_NAME} စည်းကမ်းသတ်မှတ်ချက်များ
          </h1>
          <p className="font-myanmar mt-5 text-lg leading-8 text-neutral-700">
            ဤစည်းကမ်းသတ်မှတ်ချက်များသည် {OPERATOR_NAME} မှ လည်ပတ်သော{" "}
            {APP_NAME} community app၊ website နှင့် ဆက်စပ်ဝန်ဆောင်မှုများကို
            အသုံးပြုရာတွင် လိုက်နာရမည့် စည်းကမ်းများကို ရှင်းပြထားပါသည်။
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
              <dt className="font-semibold text-neutral-950">Terms URL</dt>
              <dd>
                <a className="text-brand-ink underline" href={TERMS_URL}>
                  {TERMS_URL}
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
            ပံ့ပိုးထားခြင်းဖြစ်သည်။ ဘာသာပြန်များအကြား ကွဲလွဲမှုရှိပါက
            အင်္ဂလိပ်ဗားရှင်းကို အဓိကအဖြစ် အသုံးပြုပါမည်။ ဤစာမျက်နှာသည်
            launch အတွက် draft ဖြစ်ပြီး ဥပဒေပညာရှင်၏ စစ်ဆေးမှုကို
            အစားထိုးခြင်းမဟုတ်ပါ။
          </p>
        </header>

        <div className="mt-12 space-y-12">
          <Section id="acceptance" title="ဤစည်းကမ်းများကို လက်ခံခြင်း">
            <p>
              {APP_NAME} ကို download လုပ်ခြင်း၊ ဝင်ရောက်အသုံးပြုခြင်း၊ account
              ဖွင့်ခြင်း သို့မဟုတ် ဝန်ဆောင်မှုကို အသုံးပြုခြင်းအားဖြင့်
              ဤစည်းကမ်းသတ်မှတ်ချက်များကို သင်သဘောတူပါသည်။ သဘောမတူပါက
              ဝန်ဆောင်မှုကို မအသုံးပြုပါနှင့်။
            </p>
            <p>
              ကျွန်ုပ်တို့သည် ဤစည်းကမ်းများကို အချိန်နှင့်အမျှ ပြင်ဆင်နိုင်သည်။
              အရေးကြီးသော ပြောင်းလဲမှုများရှိပါက သင့်လျော်သော အသိပေးမှု
              ပေးမည်ဖြစ်သည်။
            </p>
          </Section>

          <Section id="accounts" title="အသက်၊ အရည်အချင်းနှင့် Account">
            <p>
              Online community ဝန်ဆောင်မှုများကို အသုံးပြုရန် သက်ဆိုင်ရာဥပဒေအရ
              လိုအပ်သော အသက်အရွယ် ပြည့်မီရမည်။ Account၊ login အချက်အလက်၊
              profile နှင့် account မှ ဖြစ်ပေါ်သော လုပ်ဆောင်ချက်များအတွက်
              သင်တာဝန်ရှိပါသည်။
            </p>
            <p>
              အခြားသူအဖြစ် ဟန်ဆောင်ခြင်း၊ မမှန်ကန်သောအချက်အလက်များ ပေးခြင်း၊
              သို့မဟုတ် account လုံခြုံရေးကို ထိခိုက်စေသော လုပ်ရပ်များ
              မပြုလုပ်ရပါ။
            </p>
          </Section>

          <Section id="community" title="Community စည်းကမ်းများ">
            <p>
              {APP_NAME} သည် နိုင်ငံခြားတွင်နေထိုင်သော မြန်မာများအတွက်
              ချိတ်ဆက်နိုင်ရန် တည်ဆောက်ထားသော community app ဖြစ်ပါသည်။
              အောက်ပါအကြောင်းအရာများ သို့မဟုတ် လုပ်ဆောင်ချက်များကို မပြုလုပ်ရပါ။
            </p>
            <ul className="list-disc space-y-2 pl-6">
              <li>ဥပဒေချိုးဖောက်ခြင်း၊ လိမ်လည်ခြင်း၊ မှားယွင်းစေခြင်း သို့မဟုတ် အန္တရာယ်ဖြစ်စေခြင်း။</li>
              <li>အခြားသူများကို ခြိမ်းခြောက်ခြင်း၊ အနှောင့်အယှက်ပေးခြင်း၊ အနိုင်ကျင့်ခြင်း သို့မဟုတ် ခွဲခြားဆက်ဆံခြင်း။</li>
              <li>အမုန်းစကား၊ လိင်ပိုင်းဆိုင်ရာ အလွဲသုံးစားမှု၊ ပြင်းထန်သော အကြမ်းဖက်ပုံရိပ်များ သို့မဟုတ် သဘောတူညီချက်မရှိသော ကိုယ်ရေးကိုယ်တာပုံရိပ်များ။</li>
              <li>အခြားသူ၏ ကိုယ်ရေးအချက်အလက်များကို ခွင့်ပြုချက်မရှိဘဲ မျှဝေခြင်း။</li>
              <li>spam၊ scam၊ scraping၊ system ကို တိုက်ခိုက်ခြင်း သို့မဟုတ် ဝန်ဆောင်မှုကို အနှောင့်အယှက်ဖြစ်စေခြင်း။</li>
            </ul>
          </Section>

          <Section id="content" title="အသုံးပြုသူ Content">
            <p>
              Profile၊ photo၊ post၊ comment၊ message၊ report၊ event နှင့် listing
              စသည့် သင်ဖန်တီး သို့မဟုတ် upload လုပ်သော content များ၏ ပိုင်ဆိုင်မှုကို
              သင်ထိန်းသိမ်းထားပါသည်။ ထို content များကို မျှဝေရန် လိုအပ်သော
              အခွင့်အရေးနှင့် ခွင့်ပြုချက်များ သင့်တွင်ရှိရမည်။
            </p>
            <p>
              {APP_NAME} ကို လည်ပတ်ရန်၊ ကာကွယ်ရန်၊ ပြုပြင်ရန်၊ moderation ပြုလုပ်ရန်
              နှင့် ဝန်ဆောင်မှုကို ပေးနိုင်ရန် သင့် content ကို host၊ store၊ display၊
              format၊ transmit၊ translate သို့မဟုတ် အသုံးပြုနိုင်သော ကမ္ဘာတစ်ဝန်း
              non-exclusive, royalty-free license ကို {OPERATOR_NAME} အား ပေးပါသည်။
            </p>
          </Section>

          <Section id="events" title="Event၊ Listing နှင့် တွေ့ဆုံမှုများ">
            <p>
              {APP_NAME} တွင် event၊ place၊ job၊ housing၊ community post နှင့်
              local activity များကို ရှာဖွေနိုင်ပါသည်။ သီးခြားဖော်ပြထားခြင်းမရှိပါက
              user-created event နှင့် listing များသည် {OPERATOR_NAME} မှ တိုက်ရိုက်
              ပံ့ပိုးထားခြင်းမဟုတ်ပါ။
            </p>
            <p>
              လူများနှင့် တွေ့ဆုံခြင်း၊ event တက်ခြင်း၊ job လျှောက်ခြင်း၊ housing
              ငှားရမ်းခြင်း၊ ငွေပေးချေခြင်း သို့မဟုတ် ကိုယ်ရေးအချက်အလက် မျှဝေခြင်း
              မပြုမီ သတိထားဆုံးဖြတ်ပါ။
            </p>
          </Section>

          <Section id="moderation" title="လုံခြုံရေး၊ Report နှင့် Moderation">
            <p>
              လုံခြုံရေး၊ ဥပဒေလိုက်နာမှု သို့မဟုတ် ဝန်ဆောင်မှု integrity အတွက်
              လိုအပ်သည်ဟု ယုံကြည်ပါက report များကို စစ်ဆေးခြင်း၊ content ဖယ်ရှားခြင်း၊
              feature ကန့်သတ်ခြင်း၊ account suspend သို့မဟုတ် terminate ပြုလုပ်ခြင်း၊
              မှတ်တမ်းထိန်းသိမ်းခြင်းများ ပြုလုပ်နိုင်ပါသည်။
            </p>
            <p>
              Safety concern များကို app ထဲမှ report ပြုလုပ်နိုင်သလို{" "}
              <a className="text-brand-ink underline" href={mailTo}>
                {CONTACT_EMAIL}
              </a>{" "}
              သို့ email ပို့နိုင်ပါသည်။
            </p>
          </Section>

          <Section id="privacy" title="ကိုယ်ရေးအချက်အလက် မူဝါဒ">
            <p>
              ကိုယ်ရေးအချက်အလက်များကို မည်သို့စုဆောင်း၊ အသုံးပြု၊ မျှဝေ၊ သိမ်းဆည်း
              နှင့် ကာကွယ်သည်ကို Privacy Policy တွင် ရှင်းပြထားပါသည်။ မြန်မာဗားရှင်းကို{" "}
              <Link className="text-brand-ink underline" href="/privacy-policy/my">
                /privacy-policy/my
              </Link>{" "}
              တွင် ဖတ်ရှုနိုင်ပါသည်။
            </p>
          </Section>

          <Section id="third-party" title="Third-Party ဝန်ဆောင်မှုများ">
            <p>
              {APP_NAME} သည် app store၊ sign-in provider၊ map/place service၊ cloud
              hosting၊ storage၊ push notification၊ email၊ support၊ analytics နှင့်
              device platform service များကဲ့သို့ third-party ဝန်ဆောင်မှုများကို
              အသုံးပြုနိုင်ပါသည်။ ထိုဝန်ဆောင်မှုများတွင် ကိုယ်ပိုင် terms နှင့်
              privacy policies ရှိနိုင်ပါသည်။
            </p>
          </Section>

          <Section id="availability" title="ဝန်ဆောင်မှုပြောင်းလဲမှုများ">
            <p>
              ကျွန်ုပ်တို့သည် feature များ သို့မဟုတ် ဝန်ဆောင်မှုကို အချိန်မရွေး
              ထည့်သွင်း၊ ပြင်ဆင်၊ ကန့်သတ်၊ ရပ်ဆိုင်း သို့မဟုတ် ဖျက်သိမ်းနိုင်ပါသည်။
            </p>
          </Section>

          <Section id="liability" title="တာဝန်ကန့်သတ်ချက်များ">
            <p>
              {APP_NAME} ကို &quot;as is&quot; နှင့် &quot;as available&quot;
              အခြေအနေဖြင့် ပေးထားပါသည်။ ဥပဒေခွင့်ပြုသမျှ အတိုင်းအတာအတွင်း{" "}
              {OPERATOR_NAME} သည် user content၊
              third-party conduct၊ event၊ listing သို့မဟုတ် user များအကြား
              အပြန်အလှန်ဆက်သွယ်မှုများကြောင့် ဖြစ်ပေါ်သော indirect, incidental,
              special, consequential သို့မဟုတ် punitive damages များအတွက်
              တာဝန်မရှိပါ။
            </p>
          </Section>

          <Section id="termination" title="ရပ်ဆိုင်းခြင်း">
            <p>
              သင်သည် {APP_NAME} ကို အချိန်မရွေး အသုံးမပြုတော့နိုင်ပြီး account
              deletion ကို app support မှတစ်ဆင့် သို့မဟုတ်{" "}
              <a className="text-brand-ink underline" href={mailTo}>
                {CONTACT_EMAIL}
              </a>{" "}
              သို့ email ပို့၍ တောင်းဆိုနိုင်ပါသည်။ ဤစည်းကမ်းများကို ချိုးဖောက်သည်ဟု
              ယုံကြည်ပါက account ကို suspend သို့မဟုတ် terminate ပြုလုပ်နိုင်ပါသည်။
            </p>
          </Section>

          <Section id="contact" title="ဆက်သွယ်ရန်">
            <p>
              ဤစည်းကမ်းများနှင့်ပတ်သက်သော မေးခွန်းများကို{" "}
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
