export type CodeItem = {
  name: string;
  purpose: string;
  tag: string;
  marker: string;
  href: string;
};

export type CodeGroup = {
  label: string;
  blurb: string;
  items: CodeItem[];
};

const placeholder = (tag: string): CodeItem => ({
  name: 'repo-name',
  purpose: 'One line on what it does and why you built it.',
  tag,
  marker: '→',
  href: '#code',
});

export const codeGroups: CodeGroup[] = [
  {
    label: 'Repositories',
    blurb: 'Production and side projects — full-stack apps, dashboards and internal tooling.',
    items: [placeholder('Next.js'), placeholder('React'), placeholder('Node.js')],
  },
  {
    label: 'Claude Skills, MCP & Automation',
    blurb:
      'Packaged Claude skills, MCP servers and integrations, prompt workflows, automation scripts and agents I built to speed up delivery.',
    items: [placeholder('Claude Skill'), placeholder('MCP Server'), placeholder('Automation')],
  },
];

export const githubUrl = '#code';
