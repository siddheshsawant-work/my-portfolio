export type Skill = {
  num: string;
  name: string;
  detail: string;
  bullets: string[];
};

export const skills: Skill[] = [
  {
    num: '01',
    name: 'Program & Project Management',
    detail:
      'Managing multiple concurrent programs from kickoff through delivery — product, engineering, sales, solutions architects and customers, all at the same time. Structured but pragmatic: clear owners, visible status, fast decisions.',
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
    num: '02',
    name: 'Development — Vibe Coding with Claude',
    detail:
      'I scope, design, build, test and ship full-stack applications with an AI-assisted workflow: database design, backend APIs, frontend UI, authentication and cloud deployment. Not prototypes — production software used by real teams daily.',
    bullets: [
      'React & Next.js',
      'Node.js server-side scripting',
      'PostgreSQL design and management',
      'GitHub — branching, secure coding, CI/CD-ready',
      'Google Cloud Platform',
      'Google Workspace SSO',
    ],
  },
  {
    num: '03',
    name: 'Salesforce',
    detail:
      'Hands-on inside Salesforce building reports and dashboards that give sales, revenue and product teams real visibility — and using Claude + Salesforce MCP to go past what native tooling allows.',
    bullets: [
      'Reporting & dashboards — sales, revenue, product deals',
      'Customer and account data management',
      'Salesforce MCP integration via Claude',
    ],
  },
  {
    num: '04',
    name: 'Cloud & Platforms',
    detail:
      'Shipping and running internal software on managed cloud, wired into the data the business already trusts.',
    bullets: [
      'GCP — app hosting and deployment pipelines',
      'Snowflake API — hourly sync for live accounts and deals',
      'Contentstack — 5 years, incl. Marketplace app QA and developer certification',
    ],
  },
  {
    num: '05',
    name: 'AI-Assisted Engineering',
    detail:
      'AI is part of the delivery toolchain, not a demo. I use it to build, to move data, and to close gaps a platform leaves open.',
    bullets: [
      'Claude — primary tool for vibe coding and data workflows',
      'MCP — connecting Claude to Salesforce and internal sources',
      'GitHub Copilot in the QA automation workflow',
      'GenAI-driven data workflows and custom tooling',
    ],
  },
  {
    num: '06',
    name: 'QA & Test Leadership',
    detail:
      'A decade building and leading QA teams before program management. I know what good quality engineering looks like, and that rigour goes into everything I run now.',
    bullets: [
      'Team leadership and performance management',
      'Test strategy and planning',
      'Automation — Selenium, Appium, Playwright, Robot Framework',
      'API testing with Postman',
      'Incident and escalation management',
      'Release sign-off and gating',
      'ISTQB certified — Foundation + AI Testing',
    ],
  },
  {
    num: '07',
    name: 'Operations',
    detail:
      'The unglamorous layer that keeps programs honest: accurate records, and reporting people can plan against.',
    bullets: [
      'Customer onboarding',
      'Customer package and account tracking',
      'Records maintenance and reporting',
      'Requirement-based reporting for planning and resourcing',
    ],
  },
];
