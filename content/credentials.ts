export type Education = {
  period: string;
  degree: string;
  institution: string;
  description?: string;
};

export type Certification = {
  name: string;
  issuer: string;
  date: string;
};

export const education: Education[] = [
  {
    period: 'Jan 2022 – Jan 2024',
    degree: 'MBA in Information Technology & Systems Management',
    institution: 'NMIMS CDOE',
    description:
      'Completed while working full-time as Team Lead and then Associate QA Manager at Contentstack. Focus on IT strategy, systems management and business administration.',
  },
  {
    period: 'Aug 2008 – Jun 2012',
    degree: 'Bachelor of Engineering in Information Technology',
    institution: "G.H. Raisoni Society's College of Engineering and Management, Pune",
  },
  {
    period: 'Aug 2005 – Jun 2008',
    degree: 'Diploma in Information Technology',
    institution: 'Shri Bhagubhai Mafatlal Polytechnic, Mumbai',
  },
];

export const certifications: Certification[] = [
  { name: 'Contentstack Developer Certification', issuer: 'Contentstack', date: 'Dec 2025' },
  { name: 'Data & Insights Practitioner Certification', issuer: 'Contentstack', date: 'Sep 2025' },
  { name: 'Managing Project Stakeholders', issuer: 'LinkedIn Learning', date: 'Nov 2025' },
  { name: 'Generative AI Overview for Project Managers', issuer: 'PMI', date: 'Jul 2025' },
  { name: 'Generative AI Foundations', issuer: 'upGrad', date: 'Oct 2025' },
  { name: 'ISTQB® Certified Tester – AI Testing', issuer: 'ISTQB', date: 'Feb 2025' },
  { name: 'ISTQB® Foundation Level', issuer: 'ISTQB', date: 'Jan 2025' },
  { name: 'Playwright Automation Framework', issuer: 'Udemy', date: 'Jul 2024' },
];
