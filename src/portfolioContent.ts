export type CaseStudySlug = 'blinkit' | 'ghar-se' | 'the-whole-truth';

export type CaseStudy = {
  slug: CaseStudySlug;
  title: string;
  subtitle?: string;
  summary: string;
  thumbnailUrl?: string;
  externalCaseStudyUrl?: string;
};

export const heroContent = {
  greeting: "Hey, I’m Ankit anand 👋",
  role: 'UX Designer focused on turning confusing experiences into simple, intuitive ones.',
  description:
    'I design for that moment when a user goes from “Why is this so hard?” to “Oh, that makes sense.”',
  primaryCtaLabel: 'View my case studies',
  secondaryCtaLabel: 'Let’s connect',
} as const;

export const contactContent = {
  email: 'Ankitanand812@gmail.com',
  emailLabel: 'Gmail or let’s connect',
} as const;

export const caseStudies: CaseStudy[] = [
  {
    slug: 'the-whole-truth',
    title: 'The Whole Truth',
    subtitle: 'How clear comparisons turned ingredient transparency into confident buying.',
    summary:
      'I clarified ingredient transparency, simplified pricing communication, and reduced cognitive load on the product page. By introducing structured ingredient comparisons and a cleaner pricing hierarchy, the redesign helped users evaluate products faster and purchase with greater confidence.',
    thumbnailUrl:
      '/src/assets/The whole truth.png',
    externalCaseStudyUrl:
      'https://www.figma.com/proto/rpIBy59eLaDgDMAAVBkSBV/Ankitanand_g1126_Igniteproject?node-id=2363-3205&t=1nJPWspIaZF3ohiJ-0&scaling=contain&content-scaling=fixed&page-id=2363%3A3204',
  },
  {
    slug: 'blinkit',
    title: 'Blinkit',
    subtitle: 'Making quick commerce feel truly quick.',
    summary:
      'I redesigned Blinkit’s core shopping flow by simplifying navigation, clarifying product details, and reducing friction across the cart journey. Features like a movable floating cart, clearer bill insights, and transparent expiry indicators improved trust and speed, while Agentic AI helped users make smarter choices, increasing AOV and repeat purchases.',
    thumbnailUrl: '/src/assets/Blinkit.png',
    externalCaseStudyUrl: 'https://www.behance.net/gallery/239455683/Blinkit',
  },
  {
    slug: 'ghar-se',
    title: 'Ghar Se',
    subtitle: 'Because every student deserves food that feels like home.',
    summary:
      'GharSe connects you with local home chefs, offering clear meal details, flexible meal plans, and a quick OTP checkout—all designed in a calm, minimal interface built for trust and comfort.',
    thumbnailUrl: '/src/assets/Ghar se front.png',
    externalCaseStudyUrl: 'https://www.behance.net/gallery/233441389/GharSe-',
  },
];

