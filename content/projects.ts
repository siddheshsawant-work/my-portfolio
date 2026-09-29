export type Project = {
  index: string;
  title: string;
  lead: string;
  body: string;
  tags: string[];
  category: string[];
  status: string;
};

export const FILTER_TABS = ['All', 'Program Management', 'AI-Assisted Engineering', 'QA & Testing'] as const;

export const projects: Project[] = [
  {
    index: '01',
    title: 'TSO360',
    lead: 'Full-Stack Internal Service Desk Platform',
    body: 'Personally designed, built, and shipped using React/Next.js, PostgreSQL, GCP, Google Workspace SSO. Replaced Jira Service Desk (~$40K/year, 200+ users), now used by 500+ users org-wide with built-in time logging, Snowflake API sync, resourcing dashboards, and analytics.',
    tags: ['React', 'Next.js', 'PostgreSQL', 'GCP', 'Claude', 'Snowflake API', 'Workspace SSO'],
    category: ['AI-Assisted Engineering', 'Program Management'],
    status: 'Live, in production',
  },
  {
    index: '02',
    title: 'Salesforce Dashboard Websites',
    lead: 'Custom Reporting Beyond Native Limits',
    body: 'Custom internal reporting websites built using Claude + Salesforce MCP to pull data beyond native Salesforce reporting/dashboard limits. Deployed on GCP, version-controlled on GitHub.',
    tags: ['React', 'Node.js', 'Salesforce MCP', 'Claude', 'GCP', 'GitHub'],
    category: ['Program Management'],
    status: 'Live, in production',
  },
  {
    index: '03',
    title: 'Healthcheck Application',
    lead: 'Release Management',
    body: "Managed the release cycle for an internal stack health monitoring app that evaluates API usage, security configuration, content modeling, content quality and asset management across customer stacks.",
    tags: ['Release Management', 'Program Management', 'GCP'],
    category: ['Program Management'],
    status: 'Live, in production',
  },
  {
    index: '04',
    title: 'Solution Library',
    lead: 'Reusable Architecture Program',
    body: 'Built and ran a searchable repository of reviewed architectural guides, improving solution consistency across the team and cutting duplicated effort on recurring customer use cases.',
    tags: ['Program Management', 'Technical Documentation', 'Architecture'],
    category: ['Program Management'],
    status: 'Live, in production',
  },
];
