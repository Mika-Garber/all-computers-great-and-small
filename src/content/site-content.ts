export interface ServicePillar {
  title: string;
  description: string;
  path: string;
}

export interface TutoringTopic {
  title: string;
  description: string;
}

export const homeIntro = {
  headline: 'Welcome to Your Tech Solution!',
  paragraphs: [
    'Do you feel overwhelmed by the technology around you? You’ve been told you need a cell phone, an iPad, or a laptop, but now that you have them, how do you make the most of these devices?',
    'Let’s unlock their full potential together! Your cell phone can be your trusted companion, your tablet can do more than just play solitaire, and your computer can simplify tasks like filing taxes.',
    'I’m here to be your tech liaison, helping you navigate and connect with your devices so you feel empowered and confident.',
    'Reach out via phone call, text, or email to set up a complimentary consultation. Whether you know exactly what you want to learn or need help figuring it out, I’m here to guide you every step of the way!',
  ],
  tagline: 'Computer tutor for seniors, families and computer users of all levels.',
  capabilities: [
    'Any device: Mac, PC, tablet, cell phone',
    'Any app: e-mail, facebook, Word, Excel',
  ],
};

export interface Testimonial {
  quote: string;
  author: string;
}

export const testimonials: Testimonial[] = [
  {
    quote:
      'Theresa has really transformed my computer skills. She is professional and so easy to work with. I refer to her as my technology therapist. She has saved me so much time and frustration on various projects!',
    author: 'Christina Ferri',
  },
  {
    quote:
      'I highly recommend Theresa for all of your computer needs! She is extremely knowledgeable, flexible, and friendly. Anytime my small business needs help she jumps right in and solves our tech problems. 10/10 would recommend!',
    author: 'Jessica Brown',
  },
  {
    quote:
      'Theresa has provided our company with the finest service for several years. Her technical knowledge and ability to solve problems and create solutions quickly are unmatched.',
    author: 'Carl',
  },
  {
    quote:
      "Theresa's technological expertise is incredible. Not only is she an expert, but she is able to impart her knowledge in an easy to understand manner. She has much patience in dealing with those of us who have less experience in these areas.",
    author: 'Jody Bucci',
  },
  {
    quote:
      "You've hit the jackpot if your path crosses with Theresa's! She is truly a whiz and it's a treat to see her brain operate on the rare occasion when she is stumped. Patient, creative, humble, as well as humorous and lovely to boot.",
    author: 'Laurie',
  },
];

export const servicePillars: ServicePillar[] = [
  {
    title: 'Custom Tech Support',
    description:
      'One-on-one tutoring tailored to your goals — at your home, by phone, or over video chat. Pricing starts at $80/hour with a free initial consultation.',
    path: '/services',
  },
  {
    title: 'Photo & Video Services',
    description:
      'Restore damaged photos, digitize slides and negatives, and convert home videos into formats you can share for generations.',
    path: '/photo-and-video',
  },
  {
    title: 'Technical Services',
    description:
      'Battery replacement, document creation, and custom slideshows for graduations, anniversaries, memorials, and more.',
    path: '/technical-services',
  },
];

export const servicesIntro = {
  quote:
    '“Ask not what you can do for your computer — ask what your computer can do for you.”',
  quoteAttribution: '— Me, about you and your computer',
  intro:
    'We’re happy to start with a free phone consultation. This gives us a chance to talk through your needs, answer any initial questions you may have, and get a better understanding of how we can help.',
  sessionNote:
    'Many clients like to come up with a list of questions that we go through one hour at a time. We can meet at your house or at a venue of your choosing.',
  remoteNote: 'Not local? We can work together via phone or video chat.',
  travelNote:
    'For clients within a 10 mile (approximately 30 minute, round-trip) radius, there is no charge for house calls. There is a small travel fee for clients outside of local range, depending on time/day — or we can arrange a phone or video call.',
};

export const tutoringTopics: TutoringTopic[] = [
  {
    title: 'Basic computer literacy',
    description:
      'We can start wherever your level of computer knowledge begins, and go as far as you wish to go.',
  },
  {
    title: 'Create a webpage',
    description:
      'Share a favorite topic with the world or showcase a small business. We can build a simple site together or guide you toward something more complex.',
  },
  {
    title: 'Send photos',
    description:
      'Post on Facebook, send to friends, make albums, or send favorites to CVS, Walgreens, Staples, or online print services.',
  },
  {
    title: 'Book a car',
    description: 'Learn how to use a ride share service like Uber to book a ride from and to virtually anywhere.',
  },
  {
    title: 'Let your computer be your travel agent',
    description:
      'Research destinations, read reviews, find flights, and book hotels, car rentals, and airport rides.',
  },
  {
    title: 'Master your email',
    description:
      'Get your inbox under control and make email a productive tool instead of a cornucopia of junk mail.',
  },
  {
    title: 'Become a Microsoft Office expert',
    description:
      'Increase your knowledge of Word, Excel, PowerPoint, and Outlook based on your interests and needs.',
  },
  {
    title: 'Learn spreadsheets',
    description:
      'Create budgets, mailing lists, and calculations — plus explore Google Sheets as a free alternative.',
  },
  {
    title: 'Word Processing',
    description:
      'Write stories, create flyers, edit photos, update resumes, and print labels — or learn Google Docs.',
  },
  {
    title: 'Ordering groceries online with delivery',
    description: 'Put together a shopping list and process orders for delivery to yourself or others.',
  },
  {
    title: 'Streaming services versus cable television',
    description:
      'Compare what you pay for cable and internet versus internet plus streaming services.',
  },
  {
    title: 'Max out your devices',
    description:
      'Find long-lost friends, play songs for free, explore social media, and discover what your phone or tablet can really do.',
  },
];

export interface HowItWorksStep {
  title: string;
  description: string;
}

export const howItWorksSteps: HowItWorksStep[] = [
  {
    title: 'Reach out for a free consultation',
    description:
      'Call, text, or send a message. Theresa will listen to your questions and learn what you want to accomplish.',
  },
  {
    title: 'Plan your session together',
    description:
      'Whether you have a list of topics or need help figuring out where to start, you will agree on a comfortable pace and format.',
  },
  {
    title: 'Learn at your own speed',
    description:
      'Meet in your home, by phone, or over video chat. Sessions are one-on-one, patient, and tailored to your devices and goals.',
  },
  {
    title: 'Come back anytime',
    description:
      'Technology keeps changing — Theresa is here for follow-up help, new questions, and ongoing support when you need it.',
  },
];

export interface TrustHighlight {
  title: string;
  description: string;
}

export const trustHighlights: TrustHighlight[] = [
  {
    title: 'Free consultation',
    description: 'Start with a no-pressure phone call to discuss your needs.',
  },
  {
    title: 'Patient one-on-one help',
    description: 'Personal attention at your pace — never rushed or jargon-heavy.',
  },
  {
    title: 'North Shore local',
    description: 'Based on the North Shore of Massachusetts with in-home visits nearby.',
  },
  {
    title: '30+ years experience',
    description: 'Decades of tutoring, teaching, and hands-on tech support.',
  },
  {
    title: 'Phone, video & in-home',
    description: 'Flexible support wherever you are most comfortable.',
  },
];

export const aboutContent = {
  headline: 'Theresa Milewski',
  subheadline: 'Your local computer tutor',
  tagline: 'Ready to come to your level and teach you what you want to learn.',
  paragraphs: [
    'Welcome to All Computers Great and Small, where we believe technology should empower you! Are you feeling overwhelmed by the devices around you? Whether it’s your cell phone, iPad, or laptop, we’re here to help you master them all.',
    'With over 30 years of experience in computer tutoring, including a background as a college professor and tech support specialist, I have a genuine passion for helping people of all ages and skill levels navigate technology with confidence. I pride myself on being patient and approachable, ensuring you feel comfortable every step of the way.',
    'Let’s turn your devices into valuable tools that enhance your daily life! I offer free consultations to discuss your needs and interests, whether you’re looking to learn how to manage your tech better or troubleshoot specific issues. Together, we can unlock the full potential of your devices.',
    'Feel free to reach out via call, text, or email to get started. I also volunteer at the Marblehead Abbot Public Library and the Swampscott Senior Center — both wonderful facilities with the friendliest staff and many great activities.',
  ],
};


export const technicalServicesContent = {
  services: [
    {
      title: 'Battery Replacement',
      description:
        'Does your laptop or cell phone work fine but no longer holds a charge? Replacing the battery is a simple and affordable way to breathe new life into your device — often at a fraction of the cost of buying new.',
      note: 'We use high-quality replacement batteries from trusted third-party vendors who support the “right to repair” movement.',
    },
    {
      title: 'Document Creation',
      description:
        'Need help with a presentation, mail merge, or complex document but short on time or know-how? Whether it’s PowerPoint, spreadsheets, formatting issues, or a customized mail merge, we can get it done quickly and professionally.',
      note: 'If you’d like to learn how to do it yourself next time, we’re happy to walk you through the process after the project is complete.',
    },
    {
      title: 'Slideshow Creation',
      description:
        'Whether you’re honoring a graduate, celebrating an anniversary, remembering a loved one, or marking any meaningful milestone, a personalized photo slideshow is a beautiful and heartfelt way to tell a story.',
      note: 'We handle timing, transitions, music, and formatting — so you can focus on being present.',
    },
  ],
  disclaimer:
    'By requesting a battery replacement, you acknowledge that we use high-quality third-party batteries selected for compatibility. Performance and lifespan may vary slightly from OEM batteries. We stand behind our work and will work with you to resolve any concerns promptly.',
};
