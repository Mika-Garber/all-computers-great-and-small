export interface ColumnArticle {
  title: string;
  url: string;
  date: string;
}

export interface ColumnPublication {
  name: string;
  description: string;
  authorUrl: string;
  articles: ColumnArticle[];
}

export const columnsIntro =
  'Theresa writes about technology for local readers — from everyday computer tips to staying safe online. Browse her columns below.';

function parseColumnDate(date: string): number {
  const parsed = Date.parse(date);
  return Number.isNaN(parsed) ? 0 : parsed;
}

export function sortArticlesByDateDesc(articles: ColumnArticle[]): ColumnArticle[] {
  return [...articles].sort((a, b) => parseColumnDate(b.date) - parseColumnDate(a.date));
}

export const columnPublications: ColumnPublication[] = [
  {
    name: 'The Marblehead Independent',
    description:
      'Computers 101 and All Computers Great and Small — Theresa’s ongoing column for the Marblehead Independent.',
    authorUrl: 'https://www.marbleheadindependent.com/author/theresa/',
    articles: [
      {
        title: 'COMPUTER 101: Making sure your address book is NOT an open book',
        url: 'https://www.marbleheadindependent.com/computer-101-making-sure-your-address-book-is-not-an-open-book/',
        date: 'June 8, 2026',
      },
      {
        title: "The most dangerous button on the Internet: 'Allow notifications'",
        url: 'https://www.marbleheadindependent.com/the-most-dangerous-button-on-the-internet-allow-notifications/',
        date: 'April 17, 2026',
      },
      {
        title: 'Rhythm & Clues',
        url: 'https://www.marbleheadindependent.com/rhythm-clues/',
        date: 'April 17, 2026',
      },
      {
        title: 'COMPUTERS 101: Once upon a time in online safety',
        url: 'https://www.marbleheadindependent.com/computers-101-once-upon-a-time-in-online-safety/',
        date: 'March 12, 2026',
      },
      {
        title: "COMPUTER 101: Who's backing up your backups?",
        url: 'https://www.marbleheadindependent.com/computer-101-whos-backing-up-your-backups/',
        date: 'February 7, 2026',
      },
      {
        title: 'COMPUTERS 101: Clouds in my coffee',
        url: 'https://www.marbleheadindependent.com/computers-101-clouds-in-my-coffee/',
        date: 'January 24, 2026',
      },
      {
        title: 'Computers 101: Saved … but where?',
        url: 'https://www.marbleheadindependent.com/computers-101-saved-but-where/',
        date: 'December 27, 2025',
      },
      {
        title: 'Computers 101: Time for a brief PSA',
        url: 'https://www.marbleheadindependent.com/computers-101-time-for-a-brief-psa/',
        date: 'December 10, 2025',
      },
      {
        title: 'Computers 101: Thinking inside the box',
        url: 'https://www.marbleheadindependent.com/computers-101-thinking-inside-the-box/',
        date: 'November 21, 2025',
      },
      // TODO: Confirm with Theresa — is this community event post intended for the tech columns page?
      {
        title: 'Knitters Boutique Sale & Holiday Open House',
        url: 'https://www.marbleheadindependent.com/knitters-boutique-sale-holiday-open-house/',
        date: 'November 21, 2025',
      },
      {
        title: 'COMPUTERS 101: New column aims to make tech less intimidating',
        url: 'https://www.marbleheadindependent.com/computers-101-new-column-aims-to-make-tech-less-intimidating/',
        date: 'October 29, 2025',
      },
    ],
  },
  {
    name: 'Marblehead Beacon',
    description: 'Earlier columns from the Marblehead Beacon.',
    authorUrl: 'https://marbleheadbeacon.com/all-computers-great-and-small-tech-help-column-young-and-old',
    articles: [
      {
        title: 'Artificial intelligence. Huh. Yeah. What is it good for?',
        url: 'https://marbleheadbeacon.com/artificial-intelligence-huh-yeah-what-it-good',
        date: 'April 10, 2023',
      },
      {
        title: 'All Computers Great and Small: A Tech Help Column for the Young and Old',
        url: 'https://marbleheadbeacon.com/all-computers-great-and-small-tech-help-column-young-and-old',
        date: 'February 20, 2023',
      },
    ],
  },
];
