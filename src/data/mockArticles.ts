import { Article } from '../types';

export const MOCK_ARTICLES: Article[] = [
  {
    id: 'art-1',
    title: 'Shanto Praises Pacers as Tigers Gear Up for Crucial Test Campaign',
    banglaTitle: 'শান্ত পেসারদের প্রশংসা করলেন, টেস্ট সিরিজের জোর প্রস্তুতি টাইগারদের',
    slug: 'shanto-praises-pacers-tigers-test-campaign',
    excerpt:
      'Bangladesh captain Najmul Hossain Shanto highlighted the relentless pace battery following a grueling warm-up session in Mirpur ahead of the upcoming fixtures.',
    content: `MIRPUR — Bangladesh captain Najmul Hossain Shanto expressed immense confidence in the national side's pace unit during a press briefing following an intensive training session at the Sher-e-Bangla National Cricket Stadium on Monday afternoon.

The pace lineup, spearheaded by Taskin Ahmed, Hasan Mahmud, and Shoriful Islam, bowled with blistering pace and immaculate discipline during the red-ball simulation. With the pitch offering brisk carry, the fast bowlers tested both the top-order batsmen and reserves with probing lengths.

"Our fast bowling group has evolved remarkably over the past two seasons," Shanto noted. "They are no longer just supporting cast members in home conditions; they are actively hunting wickets in the opening spells and keeping the pressure unyielding."

The team management has placed specific emphasis on reverse swing fitness and sustaining long third spells in humid subcontinent conditions. With crucial ICC World Test Championship points at stake, the Tigers appear determined to turn home turf advantage into decisive series victories.`,
    image: {
      url: 'https://images.unsplash.com/photo-1540747913346-19e32dc3e97e?auto=format&fit=crop&w=1200&q=80',
      caption: 'Bangladesh national team squad during nets session at SBNCS, Mirpur.',
      alt: 'Cricket practice in stadium',
    },
    category: 'Bangladesh Cricket',
    sport: 'cricket',
    author: {
      id: 'auth-1',
      name: 'Rashedul Islam',
      banglaName: 'রাশেদুল ইসলাম',
      role: 'Senior Cricket Correspondent',
      avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=150&q=80',
    },
    publishedAt: '2026-09-22T06:30:00Z',
    updatedAt: '2026-09-22T07:15:00Z',
    featured: true,
    breaking: true,
    trending: true,
    tags: ['Bangladesh Cricket', 'BCB', 'Najmul Hossain Shanto', 'Test Cricket', 'Tigers'],
    readTimeMinutes: 4,
  },
  {
    id: 'art-2',
    title: 'BPL 2026 Season Draft: Franchise Strategies Shift Toward Local Fast Bowlers',
    banglaTitle: 'বিপিএল ২০২৬ ড্রাফট: ফ্র্যাঞ্চাইজিগুলোর নজর এবার দেশীয় পেসারদের দিকে',
    slug: 'bpl-2026-season-draft-franchise-strategies-local-pacers',
    excerpt:
      'With franchise scouts targeting high-impact domestic performers, local pacers and hard-hitting finishers dominated the early rounds of the Bangladesh Premier League draft.',
    content: `DHAKA — The Bangladesh Premier League (BPL) governing council convened with franchise representatives this morning to finalize player retention ceilings and draft dynamics for the forthcoming 2026 edition.

Unlike previous auctions where overseas top-order batsmen drained major portions of the purse, franchises demonstrated an acute strategic pivot toward homegrown fast bowlers and lower-order power hitters capable of clearing boundary ropes in death overs.

Analysts observe that the rigorous domestic T20 tournaments over the winter have generated a deep pool of quicks capable of consistently hitting 138-142 km/h. Franchises acknowledge that four overs of domestic seam bowling often determine the outcome on sporting pitches at Chattogram and Sylhet.`,
    image: {
      url: 'https://images.unsplash.com/photo-1531415074868-036b1c57e3b0?auto=format&fit=crop&w=1200&q=80',
      caption: 'Cricket floodlights at dusk before an evening BPL fixture.',
      alt: 'Cricket stadium under floodlights',
    },
    category: 'BPL',
    sport: 'cricket',
    author: {
      id: 'auth-2',
      name: 'Tanvir Ahmed',
      banglaName: 'তানভীর আহমেদ',
      role: 'Domestic Cricket Analyst',
      avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=150&q=80',
    },
    publishedAt: '2026-09-22T05:00:00Z',
    featured: false,
    breaking: false,
    trending: true,
    tags: ['BPL', 'T20', 'Domestic Cricket', 'Dhaka'],
    readTimeMinutes: 3,
  },
  {
    id: 'art-3',
    title: 'Bangladesh Football Team Announces 26-Man Preliminary Camp for Asian Cup Qualifiers',
    banglaTitle: 'এশিয়ান কাপ বাছাইয়ে ২৬ সদস্যের প্রাথমিক ক্যাম্প ঘোষণা বাফুফের',
    slug: 'bangladesh-football-team-26-man-preliminary-camp-asian-cup-qualifiers',
    excerpt:
      'Head coach Javier Cabrera has named a dynamic 26-man preliminary squad blending seasoned Bashundhara Kings stars with emerging youth prospects.',
    content: `DHAKA — The Bangladesh Football Federation (BFF) announced the preliminary 26-man roster on Tuesday morning for the crucial AFC Asian Cup Qualification group phase fixtures.

The Spanish head coach Javier Cabrera reiterated that tactical discipline, transitions through midfield, and defensive solidity in away ties will be the cornerstone of Bangladesh's game plan. The squad features nine players from reigning league champions Bashundhara Kings, alongside vibrant attacking sparks from Abahani Limited Dhaka and Mohammedan SC.

"We have seen consistent physical conditioning and positional maturity in the domestic league," Cabrera stated in a media release. "Our squad needs to stay resilient against physically imposing sides, maintain our shape without the ball, and capitalize on set-piece opportunities."

The residential training camp kicks off in Dhaka on Thursday before moving to the Kings Arena for specialized tactical drills.`,
    image: {
      url: 'https://images.unsplash.com/photo-1508098682722-e99c43a406b2?auto=format&fit=crop&w=1200&q=80',
      caption: 'Training session at the Kings Arena pitch under floodlights.',
      alt: 'Football pitch under stadium lights',
    },
    category: 'Bangladesh Football',
    sport: 'football',
    author: {
      id: 'auth-3',
      name: 'Fahim Morshed',
      banglaName: 'ফাহিম মোর্শেদ',
      role: 'Football Desk Lead',
      avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=150&q=80',
    },
    publishedAt: '2026-09-22T04:15:00Z',
    featured: true,
    breaking: true,
    trending: true,
    tags: ['Bangladesh Football', 'BFF', 'Asian Cup', 'Javier Cabrera', 'Bashundhara Kings'],
    readTimeMinutes: 5,
  },
  {
    id: 'art-4',
    title: 'Tactical Analysis: How Premier League Midfields Are Countering the High Press',
    banglaTitle: 'কৌশলগত বিশ্লেষণ: প্রিমিয়ার লিগে হাই-প্রেসের বিরুদ্ধে মিডফিল্ডের রূপান্তর',
    slug: 'tactical-analysis-premier-league-midfields-countering-high-press',
    excerpt:
      'A deep tactical dive into how inverted fullbacks and double-pivot distributors are dismantling aggressive Gegenpressing systems this season.',
    content: `LONDON — Over the past three seasons, full-pitch man-to-man pressing dominated top-tier football across Europe. However, this season's tactical evolutions demonstrate a noticeable resurgence of patient vertical baiting.

By employing agile deep-lying pivots who can absorb physical pressure with their backs to goal, modern tacticians are enticing pressing fronts forward before triggering rapid three-pass breaks into acres of vacated space behind the opposition's midfield line.

We analyze the positional heat maps and passing networks of European title contenders to evaluate how third-man runs and disguised line-breaking passes have transformed transitional play.`,
    image: {
      url: 'https://images.unsplash.com/photo-1489944440615-453fc2b6a9a9?auto=format&fit=crop&w=1200&q=80',
      caption: 'Football stadium full of spectators during a high-stakes match.',
      alt: 'Football stadium full of cheering crowd',
    },
    category: 'Analysis',
    sport: 'football',
    author: {
      id: 'auth-3',
      name: 'Fahim Morshed',
      banglaName: 'ফাহিম মোর্শেদ',
      role: 'Football Desk Lead',
    },
    publishedAt: '2026-09-21T18:45:00Z',
    featured: false,
    breaking: false,
    trending: false,
    tags: ['Premier League', 'Tactical Analysis', 'European Football'],
    readTimeMinutes: 6,
  },
  {
    id: 'art-5',
    title: 'ICC World Test Championship: Subcontinent Teams Face Decisive Overseas Tests',
    banglaTitle: 'আইসিসি টেস্ট চ্যাম্পিয়নশিপ: উপমহাদেশের দলগুলোর জন্য অগ্নিপরীক্ষা',
    slug: 'icc-wtc-subcontinent-teams-decisive-overseas-tests',
    excerpt:
      'With the points table tightly contested, upcoming series in seaming conditions will determine the finalists for the showpiece Lord’s fixture.',
    content: `DUBAI — The International Cricket Council (ICC) has issued the updated World Test Championship standings, showing narrow margins separating the top four contenders.

For both Bangladesh and neighboring subcontinental sides, the upcoming cycle tests their batting resilience against the swinging Duke and Kookaburra balls. Technical adjustments in backfoot play, leaving deliveries outside the off-stump, and slip-catching reliability will prove vital factors as teams travel abroad.`,
    image: {
      url: 'https://images.unsplash.com/photo-1540747913346-19e32dc3e97e?auto=format&fit=crop&w=1200&q=80',
      caption: 'Red cricket ball and bails on the pitch.',
      alt: 'Red cricket ball on pitch',
    },
    category: 'ICC',
    sport: 'cricket',
    author: {
      id: 'auth-1',
      name: 'Rashedul Islam',
      banglaName: 'রাশেদুল ইসলাম',
      role: 'Senior Cricket Correspondent',
    },
    publishedAt: '2026-09-21T14:20:00Z',
    featured: false,
    breaking: false,
    trending: true,
    tags: ['ICC', 'World Test Championship', 'Test Cricket'],
    readTimeMinutes: 4,
  },
  {
    id: 'art-6',
    title: 'Champions League Showdown: European Heavyweights Clash in Quarter-Final Draw',
    banglaTitle: 'চ্যাম্পিয়ন্স লিগ কোয়ার্টার ফাইনাল ড্র: মুখোমুখি ইউরোপের পরাশক্তিরা',
    slug: 'champions-league-showdown-quarter-final-draw',
    excerpt:
      'The UEFA Champions League quarter-final draw has set up blockbuster encounters featuring tactical masterminds and prolific attacking trios.',
    content: `NYON — UEFA headquarters hosted the Champions League quarter-final draw today, delivering heavyweight clashes that promise tactical intrigue and historic rivalries.

The matches are scheduled for mid-April, with home-and-away legs requiring tactical discipline, squad rotation management, and clinical precision in front of goal.`,
    image: {
      url: 'https://images.unsplash.com/photo-1518091043644-c1d4457512c6?auto=format&fit=crop&w=1200&q=80',
      caption: 'European football night under electric stadium lights.',
      alt: 'European football stadium illuminated at night',
    },
    category: 'Champions League',
    sport: 'football',
    author: {
      id: 'auth-3',
      name: 'Fahim Morshed',
      banglaName: 'ফাহিম মোর্শেদ',
      role: 'Football Desk Lead',
    },
    publishedAt: '2026-09-21T11:00:00Z',
    featured: false,
    breaking: false,
    trending: true,
    tags: ['Champions League', 'UEFA', 'European Football'],
    readTimeMinutes: 3,
  },
];
