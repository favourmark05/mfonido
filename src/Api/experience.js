// Tenure data is anchored in observable signals: the projects shown in
// projects.js (Remita 2024, Cygnusspin 2023, SellersMart 2023), the AboutMe
// statement of "over six years in the industry", and the current employer
// inferred from the contact email (Termii). Edit freely as real dates arrive.

export const experience = [
  {
    company: 'Termii',
    url: 'https://termii.com/',
    role: 'Senior Frontend Engineer',
    period: '2025 — Present',
    location: 'Remote',
    summary:
      'Building messaging and authentication tooling used by African businesses to reach customers across SMS, WhatsApp, and voice.',
    highlights: [
      'Lead frontend architecture for the developer-facing console — TypeScript, Vue 3, Nuxt.',
      'Partner with product and design to ship interfaces that scale across high-volume API consumers.',
      'Champion accessibility and design-system patterns across the engineering org.',
    ],
    stack: ['Vue 3', 'Nuxt', 'TypeScript', 'Tailwind'],
  },
  {
    company: 'Remita',
    url: 'https://remita.net/',
    role: 'Frontend Engineer · Developer Advocate',
    period: '2024',
    location: 'Lagos, Nigeria',
    summary:
      'Owned the developer-facing surface of one of West Africa’s largest payment platforms — docs, blog, and integration tooling.',
    highlights: [
      'Designed and shipped the Remita Developer Portal — comprehensive API references, code samples, and onboarding flows.',
      'Built the Remita Blog from the ground up; published deep-dives on payment gateways and the Interbank Transfer API.',
      'Cut time-to-first-integration through clearer authentication walkthroughs and runnable examples.',
    ],
    stack: ['Angular', 'TypeScript', 'Node.js', 'Notion'],
  },
  {
    company: 'Cygnusspin',
    url: 'https://cygnusspin.com/',
    role: 'Frontend Engineer',
    period: '2023',
    location: 'Lagos, Nigeria',
    summary:
      'Delivered the consumer-facing online betting platform — real-time odds, live betting, multiple payment rails.',
    highlights: [
      'Architected the Nuxt + Pinia frontend with a focus on perceived performance under live-data load.',
      'Built a reusable component library on PrimeVue + PrimeFlex to standardise gameplay surfaces.',
      'Implemented intuitive, mobile-first UX for high-frequency interactions like bet slips and balance updates.',
    ],
    stack: ['Nuxt', 'Pinia', 'PrimeVue', 'PrimeFlex'],
  },
  {
    company: 'SellersMart',
    url: 'https://sellersmart.ng/',
    role: 'Frontend Engineer',
    period: '2023',
    location: 'Lagos, Nigeria',
    summary:
      'Shipped the e-commerce storefront powering merchant onboarding and consumer purchases across Nigeria.',
    highlights: [
      'Built catalogue, cart, and checkout flows in Nuxt with Vuex state management.',
      'Translated Figma specs into pixel-faithful, responsive surfaces.',
    ],
    stack: ['Nuxt', 'Vuex', 'Bootstrap'],
  },
  {
    company: 'Scelloo',
    url: 'https://scelloo.com/',
    role: 'Frontend Engineer',
    period: '2022 — 2023',
    location: 'Lagos, Nigeria',
    summary:
      'Contributed to internal HR and people-operations products serving enterprise customers.',
    highlights: [
      'Maintained and extended a Vue/Vuex application surface used daily by HR teams.',
      'Improved component reuse and reduced duplicated form logic across modules.',
    ],
    stack: ['Vue', 'Vuex', 'SCSS'],
  },
  {
    company: 'Croxxtalent',
    url: 'https://croxxtalent.com/',
    role: 'Frontend Engineer',
    period: '2021 — 2022',
    location: 'Lagos, Nigeria',
    summary:
      'Helped build talent-discovery surfaces connecting African professionals to opportunities.',
    highlights: [
      'Implemented candidate and recruiter dashboards with a focus on responsive layouts.',
      'Worked closely with backend engineers on auth, pagination, and search UX.',
    ],
    stack: ['Vue', 'Bootstrap', 'Firebase'],
  },
]
