export type Program = {
  name: string;
  body: string;
  bullets: string[];
};

export type Role = {
  title: string;
  period: string;
  body: string;
  bullets: string[];
};

export type HistoryEntry = {
  company: string;
  title: string;
  period: string;
  body: string;
};

export const programs: Program[] = [
  {
    name: 'TSO360: Internal Service Desk Platform',
    body: "A full-stack internal service desk I personally designed, built and shipped between May and August 2026. It replaced Contentstack's paid Jira Service Desk and Atlassian Tempo setup, capped at 200 licensed users and roughly $40K a year, with an unlimited-seat platform now used by 500+ people org-wide. React, Next.js and PostgreSQL on GCP with Google Workspace SSO, built using a vibe coding workflow with Claude.",
    bullets: [
      'Jira-equivalent ticketing: forms, statuses, priorities, assignments',
      'Built-in time logging, replacing the separate Tempo add-on',
      'Full migration of historical tickets, comments, attachments and time logs',
      'Snowflake API hourly sync: live accounts and deals linkable to tickets',
      'Per-account and per-deal views of resource time and package consumption',
      'Resourcing dashboard with past, current and forward-planning views',
      'Configurable analytics: date ranges, charts and cross-functional dashboards',
    ],
  },
  {
    name: 'Custom Salesforce Dashboard Websites',
    body: "Salesforce's native reporting has real limits, especially across objects. I used Claude with Salesforce MCP to pull data programmatically and built internal dashboard websites in React and Node.js that surface exactly what the team needs, the way the team needs it. Code on GitHub, deployed on GCP, standard secure development practices.",
    bullets: [],
  },
  {
    name: 'Salesforce Reporting & Dashboards',
    body: 'Built and maintained a suite of reports and dashboards covering sales pipeline, revenue tracking and product deal performance, used by sales, CSM and leadership for planning and decisions.',
    bullets: [],
  },
  {
    name: 'Salesforce Data Management',
    body: 'Owned the quality, structure and completeness of customer and account data in Salesforce, improving hygiene, filling gaps, and making sure the right data was there for resourcing and planning conversations.',
    bullets: [],
  },
  {
    name: 'Internal Advisory Boards',
    body: 'Ran a structured IAB program bringing product feature teams together with field teams (sales, solutions architects, customer success) to align on upcoming releases, surface quality concerns early, and get real-world customer feedback into the product before it shipped.',
    bullets: [],
  },
  {
    name: 'Healthcheck App',
    body: "Managed the release cycle for an internal application that evaluates the health of a customer's Contentstack stack: API usage, security configuration, content modeling, content quality and asset management. Coordinated engineering and field teams so releases landed on time, stable and well-communicated.",
    bullets: [],
  },
  {
    name: 'Solution Library',
    body: 'A reviewed, searchable repository of architectural guides for common use cases. New use cases got a guide scoped, drafted, reviewed and published; recurring ones could reuse a vetted guide instead of starting over. More consistency across the team, far less duplicated effort.',
    bullets: [],
  },
  {
    name: 'Complex Customer Engagements',
    body: 'A portfolio of accounts with technically complex use cases needing direct product and engineering involvement. I was the bridge between customer needs, internal teams and delivery, keeping complex implementations moving with clarity and accountability.',
    bullets: [],
  },
];

export const roles: Role[] = [
  {
    title: 'Associate QA Manager',
    period: 'Mar 2024 – Jul 2025',
    body: 'Continued managing the QA team while progressively taking on more: project manager for select customer accounts from early 2024, program manager for internal initiatives from Feb 2025.',
    bullets: [
      'Introduced a dedicated QA freeze: after code freeze the team shifted entirely to building and hardening automation ahead of release',
      'Drove AI tooling adoption in QA: expanded Playwright coverage, brought in GitHub Copilot, formalised AI testing practice via ISTQB AI Testing',
      'Owned QA strategy across multiple concurrent product releases',
      'Managed hiring and performance reviews',
      'Led QA on customer-facing projects with tight deadlines: escalation handling, incident management, release sign-off',
    ],
  },
  {
    title: 'Team Lead, QA',
    period: 'Mar 2022 – Feb 2024',
    body: 'Led the QA team responsible for Contentstack Marketplace apps, the ecosystem of third-party connectors, extensions and tools that plug into the CMS.',
    bullets: [
      'Introduced QA involvement at the requirements stage, before code: clearer requirements, less late rework, better coverage, faster cadence',
      'Final release gatekeeper: verified every Marketplace release in dev against real customer use cases before clearing it',
    ],
  },
  {
    title: 'Senior Engineer II, QA',
    period: 'Oct 2021 – Mar 2022',
    body: "Joined during the transition of Raw Engineering's QA org into the newly independent Contentstack entity. Led QA execution for customer-facing projects and guided the team through the transition.",
    bullets: [],
  },
];

export const history: HistoryEntry[] = [
  {
    company: 'Raw Engineering',
    title: 'Senior QA Engineer',
    period: 'Mar 2019 – Sep 2021',
    body: 'A digital transformation services company working in headless CMS strategy, custom web and mobile development, and modern micro-service stacks. Led QA for customer engagements while mentoring junior engineers, taking on lead responsibilities before the formal title arrived with the Contentstack transition.',
  },
  {
    company: 'Bombay Shirt Company',
    title: 'Senior QA Engineer',
    period: 'Jun 2018 – Feb 2019',
    body: 'Led QA for bombayshirts.com, a bespoke e-commerce platform with customer-driven customization (fabric, fit, personalization), custom shirt ordering and an integrated payment gateway. A nine-month engagement building the platform from scratch with the engineering team.',
  },
  {
    company: 'Raw Engineering',
    title: 'QA Engineer',
    period: 'Mar 2014 – Jun 2018',
    body: 'Functional, mobile (iOS and Android) and API testing across a wide range of client projects, including automated mobile testing with Selenium and Appium for clients such as VMware and HP. Also where I first worked on the Built.io Contentstack CMS, which later spun out as Contentstack Inc.',
  },
  {
    company: 'Testriq QA Lab, LLP',
    title: 'QA Engineer',
    period: 'Nov 2012 – Mar 2014',
    body: 'Where I started. Prepared and executed test cases for Android and web applications, including cross-browser and compatibility testing. The foundation in functional testing, defect reporting and test documentation I have built on ever since.',
  },
];
