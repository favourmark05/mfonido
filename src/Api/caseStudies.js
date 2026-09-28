// Case studies extend src/Api/projects.js with deeper narrative — problem,
// approach, decisions, outcomes. Indexed by `slug` so /case/:slug routes.

export const caseStudies = {
  'remita-developer': {
    slug: 'remita-developer',
    title: 'Remita Developer Portal',
    company: 'Remita',
    year: '2024',
    role: 'Frontend Engineer · Developer Advocate',
    url: 'https://developers.remita.net/',
    linkText: 'developers.remita.net',
    headline:
      'Rebuilding the developer surface for one of West Africa’s largest payment platforms.',
    summary:
      'Remita powers a substantial share of digital payments across West Africa. The developer-facing surface — documentation, references, examples — is where every integration begins. We rebuilt it from the ground up to meet the bar that fintech integrators expect.',
    stack: ['Angular', 'TypeScript', 'Node.js', 'Notion'],
    sections: [
      {
        kind: 'block',
        heading: 'The problem',
        body: 'Integration teams were bouncing between fragmented PDFs, stale wiki pages, and human escalations to ship a single payment flow. Time-to-first-integration was measured in weeks, not days.',
      },
      {
        kind: 'block',
        heading: 'Approach',
        body: 'We treated the portal as a product with developer personas, not a documentation dump. Information architecture first, then a design system that could express references, runnable samples, and conceptual guides with a shared visual grammar.',
      },
      {
        kind: 'list',
        heading: 'Key decisions',
        items: [
          'Angular + TypeScript for long-term maintainability across Remita’s engineering org.',
          'Content sourced from Notion to give product writers an editorial workflow without engineering bottlenecks.',
          'Authentication walkthroughs rebuilt as branching, copy-pasteable flows — not paragraphs.',
          'A consistent reference layout: endpoint, request, response, errors — every page, no exceptions.',
        ],
      },
      {
        kind: 'block',
        heading: 'Outcome',
        body: 'A developer surface integrators actually want to land on. Faster onboarding, fewer support escalations, and a publishing pipeline product can drive without engineering tickets.',
      },
    ],
  },

  mdbeautyparlour: {
    slug: 'mdbeautyparlour',
    title: 'MD Beauty Parlour',
    company: 'MD Beauty Parlour',
    year: '2026',
    role: 'Full Stack Engineer',
    url: 'https://mdbeautyparlour.com/',
    linkText: 'mdbeautyparlour.com',
    headline: 'A full salon operating system — booking, scheduling, POS, and the back office that runs it.',
    summary:
      'MD Beauty Parlour needed more than a booking form — a system to run the salon floor day to day: live availability, chair and room scheduling, point-of-sale, inventory, staff access, and the financial reporting behind all of it. I built the whole thing, public booking flow through admin backend, solo.',
    stack: ['Nuxt 4', 'Vue 3', 'Firebase', 'Firestore', 'Tailwind CSS', 'Netlify'],
    sections: [
      {
        kind: 'block',
        heading: 'The problem',
        body: 'Bookings were tracked over phone calls and DMs, chairs and treatment rooms were scheduled from memory, and sales were rung up with nothing tying inventory, promotions, and receipts together. There was no single system connecting what clients saw to what actually happened on the salon floor.',
      },
      {
        kind: 'block',
        heading: 'Approach',
        body: 'Nuxt 4 and Vue 3 power both the public storefront and a role-gated admin app, with Firebase and Firestore as the real-time backend for availability, bookings, and staff access. A Nitro API layer handles the logic that shouldn’t live in the client: slot availability, transactional POS sales, staff access changes, and a scheduled job that expires stale bookings and opens up completed ones for review.',
      },
      {
        kind: 'list',
        heading: 'Key decisions',
        items: [
          'Guest-code booking instead of accounts — clients book and check status by confirmation code, no login required.',
          'Nitro API routes for availability and POS sale creation, so slot logic and inventory/gift-card/promo math run server-side and transactionally, not in the client.',
          'A role-gated admin (admin/staff) covering the full operation — appointments, chair/room scheduling with overdue detection, POS with promo and gift-card support, CRM, staff and stylist management, finance (invoices, expenses, commissions), and an audit-logged activity trail.',
          'Firestore security rules scoped across roughly twenty collections, plus seed and maintenance scripts for safely resetting catalog and launch data between environments.',
          'Payments recorded manually through POS rather than wiring up a payment gateway or SMS provider before the business needed one — scope held to what was actually load-bearing.',
        ],
      },
      {
        kind: 'block',
        heading: 'Outcome',
        body: 'A system that runs the whole salon, not just its booking form — the front desk takes bookings and payments, the back office runs reports and manages staff access, and the public site stays fast and simple for the client booking a haircut.',
      },
    ],
  },

  pixplore: {
    slug: 'pixplore',
    title: 'PixPlore',
    company: 'Personal',
    year: '2025',
    role: 'Designer · Engineer',
    url: 'https://thepixplore.netlify.app/',
    linkText: 'thepixplore.netlify.app',
    headline: 'A focused, fast image-search experience on top of the Unsplash API.',
    summary:
      'A study in restraint: how minimal a search-and-download experience can get while staying delightful. Built solo, end to end.',
    stack: ['Vue 3', 'Pinia', 'Vite', 'SCSS', 'Unsplash API'],
    sections: [
      {
        kind: 'block',
        heading: 'The problem',
        body: 'Most image-search UIs over-index on filters and chrome. The user wants results — fast — and a frictionless path from "I see it" to "I have it".',
      },
      {
        kind: 'block',
        heading: 'Approach',
        body: 'Composition-API-first Vue with a Pinia store handling pagination and request lifecycles. Skeletons, never spinners. Every interaction has a sub-200ms perceived response.',
      },
      {
        kind: 'list',
        heading: 'Key decisions',
        items: [
          'Pinia over local refs to keep search state shareable across views.',
          'Vite + Netlify for instant deploys and edge caching.',
          'SCSS modules for typography and spacing tokens, kept tiny and explicit.',
          'Aggressive image-quality negotiation: ship the smallest variant the viewport demands.',
        ],
      },
      {
        kind: 'block',
        heading: 'Outcome',
        body: 'A small, sharp consumer experience — and a reference for clean Vue 3 patterns I lean on in client work.',
      },
    ],
  },

  sellersmart: {
    slug: 'sellersmart',
    title: 'SellersMart E-commerce',
    company: 'Sellers Mart',
    year: '2023',
    role: 'Frontend Engineer',
    url: 'https://sellersmart.ng/',
    linkText: 'sellersmart.ng',
    headline: 'A multi-vendor storefront built to handle catalog scale without buckling.',
    summary:
      'SellersMart needed a storefront that could carry a wide multi-category catalog — from arts and crafts to electronics — without every category page turning into its own bespoke build.',
    stack: ['Nuxt', 'Vuex', 'Bootstrap'],
    sections: [
      {
        kind: 'block',
        heading: 'The problem',
        body: 'A growing multi-vendor catalog meant new categories and promotions were shipping constantly. The existing approach hard-coded layout per category, so every addition meant new markup and new bugs.',
      },
      {
        kind: 'block',
        heading: 'Approach',
        body: 'Nuxt for routing and SEO-friendly rendering, Vuex for shared cart and session state across storefront and checkout, Bootstrap as a fast, consistent base layer for grids, cards, and forms across every category page.',
      },
      {
        kind: 'list',
        heading: 'Key decisions',
        items: [
          'One data-driven category template instead of bespoke markup per category.',
          'Vuex as the single source of truth for cart state shared across storefront, cart, and checkout views.',
          'Bootstrap grid utilities for rapid, consistent catalog and promo-banner layouts.',
          'Server-rendered category and product pages via Nuxt for indexable, fast first paint.',
        ],
      },
      {
        kind: 'block',
        heading: 'Outcome',
        body: 'A storefront that scales by adding data, not code — new categories and campaigns ship without touching the template layer.',
      },
    ],
  },

  cygnusspin: {
    slug: 'cygnusspin',
    title: 'Cygnusspin Online Betting Platform',
    company: 'Cygnusspin',
    year: '2023',
    role: 'Frontend Engineer',
    url: 'http://online.cygnusspin.com/',
    linkText: 'online.cygnusspin.com',
    headline: 'A real-time betting surface engineered for live data under load.',
    summary:
      'Live odds, multi-market bet slips, real-time balance updates — every interaction sits on top of streaming data, and every millisecond of UI lag erodes user trust.',
    stack: ['Nuxt', 'Pinia', 'PrimeVue', 'PrimeFlex'],
    sections: [
      {
        kind: 'block',
        heading: 'The problem',
        body: 'Online betting interfaces fail in two ways: stale data and laggy interactions. We needed to ship one that felt taut on mobile, fast on a feature laptop, and confident under live event load.',
      },
      {
        kind: 'block',
        heading: 'Approach',
        body: 'Nuxt for routing and SSR, Pinia for fine-grained reactive stores, PrimeVue + PrimeFlex for a base layer we could extend without reinventing primitives. Streaming odds piped through a thin store layer with explicit invalidation.',
      },
      {
        kind: 'list',
        heading: 'Key decisions',
        items: [
          'Mobile-first surfaces — bet slip and balance pinned to thumb-reach zones.',
          'Optimistic UI for low-risk interactions; explicit confirmation for irreversible ones.',
          'Reusable card components for sports, casino, and virtual surfaces — one grammar, three faces.',
          'Strict separation between read-models (odds, fixtures) and write-paths (bets) to avoid race conditions.',
        ],
      },
      {
        kind: 'block',
        heading: 'Outcome',
        body: 'A platform that holds together under live-event load and a component system the team can extend without re-deriving conventions.',
      },
    ],
  },
}

export const featuredCaseStudies = ['mdbeautyparlour', 'sellersmart', 'cygnusspin']
