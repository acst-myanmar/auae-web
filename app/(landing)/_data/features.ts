export type Feature = {
  id: string;
  titleEn: string;
  titleMy: string;
  descEn: string;
  descMy: string;
  /** Path under /public. If null, renders a numbered placeholder. */
  screenshot: string | null;
  /** Tailwind gradient classes used by the placeholder fallback. */
  gradient: string;
};

export const features: Feature[] = [
  {
    id: "events",
    titleEn: "Events",
    titleMy: "ဖိတ်ကြားပွဲများ",
    descEn:
      "Discover Myanmar meetups, food nights, and festivals across Japan.",
    descMy:
      "ဂျပန်တစ်နိုင်ငံလုံးက မြန်မာ Meetup, အစားအသောက် ညပွဲနဲ့ ပွဲတော်များ ရှာဖွေပါ။",
    screenshot: null,
    gradient: "from-[#5A67D8] to-[#7F8DEA]",
  },
  {
    id: "chats",
    titleEn: "Group Chats",
    titleMy: "အုပ်စုစကားဝိုင်း",
    descEn: "City-based rooms for Tokyo, Osaka, Nagoya and more.",
    descMy: "Tokyo, Osaka, Nagoya စသည့် မြို့အလိုက် အုပ်စုခန်းများ။",
    screenshot: null,
    gradient: "from-[#4C51BF] to-[#5A67D8]",
  },
  {
    id: "jobs",
    titleEn: "Jobs",
    titleMy: "အလုပ်အကိုင်",
    descEn: "Part-time, baito, and full-time roles shared by the community.",
    descMy:
      "အချိန်ပိုင်း၊ baito နှင့် အချိန်ပြည့် အလုပ်များကို Community မှ မျှဝေပါသည်။",
    screenshot: null,
    gradient: "from-[#FFD700] to-[#FFB347]",
  },
  {
    id: "marketplace",
    titleEn: "Marketplace",
    titleMy: "ဈေးကွက်",
    descEn:
      "Buy and sell second-hand items with fellow Myanmar in Japan.",
    descMy:
      "ဂျပန်ရောက် မြန်မာအချင်းချင်း ပစ္စည်းအသုံးပြုပြီးသား များ ရောင်းဝယ်ပါ။",
    screenshot: null,
    gradient: "from-[#5A67D8] to-[#FFD700]",
  },
  {
    id: "housing",
    titleEn: "Housing",
    titleMy: "နေအိမ်",
    descEn: "Find roommates, share-houses, and apartment leads.",
    descMy: "အခန်းဖော်၊ Share house နှင့် တိုက်ခန်း သတင်းများ ရှာဖွေပါ။",
    screenshot: null,
    gradient: "from-[#7F8DEA] to-[#5A67D8]",
  },
  {
    id: "translate",
    titleEn: "Translate",
    titleMy: "ဘာသာပြန်",
    descEn: "Quick JP↔MY↔EN helper for daily life and paperwork.",
    descMy:
      "နေ့စဉ်လူနေမှုနှင့် စာရွက်စာတမ်းအတွက် JP↔MY↔EN အမြန် ဘာသာပြန် အကူအညီ။",
    screenshot: null,
    gradient: "from-[#FFD700] to-[#5A67D8]",
  },
  {
    id: "tips",
    titleEn: "Visa & Tips",
    titleMy: "ဗီဇာ နှင့် အကြံပြုချက်",
    descEn: "Curated visa, tax, and immigration guidance.",
    descMy: "ဗီဇာ၊ အခွန်နှင့် လူဝင်မှုကြီးကြပ်ရေးဆိုင်ရာ အသုံးဝင်သော အကြံပြုချက်များ။",
    screenshot: null,
    gradient: "from-[#4C51BF] to-[#7F8DEA]",
  },
  {
    id: "friends",
    titleEn: "Friends",
    titleMy: "သူငယ်ချင်းများ",
    descEn: "Connect by city, school, or workplace.",
    descMy: "မြို့၊ ကျောင်း သို့မဟုတ် အလုပ်ခွင်အလိုက် ချိတ်ဆက်ပါ။",
    screenshot: null,
    gradient: "from-[#FFB347] to-[#FFD700]",
  },
];
