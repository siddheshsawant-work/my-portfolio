export type Skill = {
  num: string;
  name: string;
  detail: string;
  bullets: string[];
};

export const skills: Skill[] = [
  {
    num: '01',
    name: 'QA & Test Leadership',
    detail:
      '13+ years in quality engineering and QA leadership, including leading a team of 11 engineers across 50+ customer-facing releases. Program management has run in parallel for the last 3 years, not after — the quality rigour goes into everything I deliver.',
    bullets: [
      'Team leadership and performance management',
      'Test strategy and planning',
      'Manual QA best practices',
      'SEO, load and performance testing',
      'Automation: Selenium, Appium, Playwright, Robot Framework',
      'API testing with Postman',
      'Incident and escalation management',
      'Release sign-off and gating',
      'ISTQB certified: Foundation + AI Testing',
    ],
  },
  {
    num: '02',
    name: 'Program Management',
    detail:
      'Managing multiple concurrent programs from kickoff through delivery: product, engineering, sales, solutions architects and customers, all at the same time. Structured but pragmatic: clear owners, visible status, fast decisions.',
    bullets: [
      'Agile & SDLC-based delivery',
      'Stakeholder & executive alignment',
      'Roadmap and capacity planning',
      'Release management and sign-off ownership',
      'KPI tracking and reporting',
      'Resourcing and forward planning',
    ],
  },
  {
    num: '03',
    name: 'AI-Augmented Development',
    detail:
      'I scope, design, build and ship full-stack applications and AI-driven tools with an AI-assisted workflow: database design, backend APIs, frontend UI, authentication and cloud deployment. Not prototypes. Production software used by real teams daily — including a model-agnostic AI image-generation engine with a custom prompt framework and built-in IP-safety constraints.',
    bullets: [
      'React & Next.js',
      'Node.js server-side scripting',
      'PostgreSQL design and management',
      'GitHub: branching, secure coding, CI/CD-ready',
      'Claude + MCP: vibe coding and data workflows',
      'GitHub Copilot in the QA automation workflow',
      'GenAI-driven data workflows and custom tooling',
      'Google Cloud Platform',
      'Google Workspace SSO',
    ],
  },
  {
    num: '04',
    name: 'Salesforce',
    detail:
      'Hands-on inside Salesforce building reports and dashboards that give sales, revenue and product teams real visibility, and using Claude + Salesforce MCP to go past what native tooling allows.',
    bullets: [
      'Reporting & dashboards: sales, revenue, product deals',
      'Customer and account data management',
      'Salesforce MCP integration via Claude',
    ],
  },
  {
    num: '05',
    name: 'Cloud & Platforms',
    detail:
      'Shipping and running internal software on managed cloud, wired into the data the business already trusts.',
    bullets: [
      'GCP: app hosting and deployment pipelines',
      'Snowflake API: hourly sync for live accounts and deals',
      'Contentstack: 5 years, incl. Marketplace app QA and developer certification',
    ],
  },
  {
    num: '06',
    name: 'Operations',
    detail:
      'The operational backbone behind every program: structured processes, clean data and reporting that gives leadership confidence in what has been delivered and what is coming next.',
    bullets: [
      'Customer onboarding',
      'Customer package and account tracking',
      'Records maintenance and reporting',
      'Requirement-based reporting for planning and resourcing',
    ],
  },
];
