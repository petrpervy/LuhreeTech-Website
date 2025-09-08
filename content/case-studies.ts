export type Study = {
  slug: string;
  title: string;
  industry: 'Healthcare' | 'Logistics' | 'Retail' | 'Agency' | 'Legal' | 'Services';
  problem: string;
  solution: string;
  metrics: { label: string; delta: string; direction: 'up'|'down' }[]; // e.g. {label:'No-shows', delta:'-28%', direction:'down'}
  quote?: { text: string; author: string; role?: string };
  resultsSummary: string; // short subtitle
};

export const CASE_STUDIES: Study[] = [
  {
    slug: 'dental-intake-speed',
    title: 'Dental Clinic: never miss a patient call',
    industry: 'Healthcare',
    problem: 'Patients waiting too long for callbacks; missed after-hours intake.',
    solution: 'AI receptionist + intake + scheduling with SMS confirmations.',
    metrics: [
      { label:'Lead response time', delta:'3× faster', direction:'up' },
      { label:'No-shows', delta:'-22%', direction:'down' },
      { label:'Front-desk workload', delta:'-35%', direction:'down' },
    ],
    quote: { text:'We no longer miss a single patient call.', author:'Practice Manager' },
    resultsSummary: 'Faster intake, fewer no-shows, happier front desk.'
  },
  {
    slug: 'logistics-dispatch',
    title: 'Logistics: faster dispatch updates',
    industry: 'Logistics',
    problem: 'Status calls/emails overwhelmed ops; slow handoffs.',
    solution: 'Automated status replies + triage + daily reporting.',
    metrics: [
      { label:'Response time', delta:'4× faster', direction:'up' },
      { label:'Ops time', delta:'-40%', direction:'down' },
      { label:'Data errors', delta:'-18%', direction:'down' },
    ],
    quote: { text:'Ops finally breathes again.', author:'Operations Lead' },
    resultsSummary: 'Quieter phones, cleaner reports, faster handoffs.'
  },
  {
    slug: 'retail-inventory',
    title: 'Retail: automated inventory updates',
    industry: 'Retail',
    problem: 'Manual inventory tracking led to stockouts and overstock.',
    solution: 'AI inventory monitoring + automated reorder alerts + supplier coordination.',
    metrics: [
      { label:'Stockout incidents', delta:'-45%', direction:'down' },
      { label:'Inventory accuracy', delta:'+92%', direction:'up' },
      { label:'Reorder time', delta:'-60%', direction:'down' },
    ],
    quote: { text:'Never run out of bestsellers again.', author:'Store Manager' },
    resultsSummary: 'Better stock levels, fewer stockouts, happier customers.'
  },
  {
    slug: 'agency-lead-qualification',
    title: 'Marketing Agency: smarter lead qualification',
    industry: 'Agency',
    problem: 'Qualifying leads manually was time-consuming and inconsistent.',
    solution: 'AI lead scoring + automated follow-up sequences + CRM integration.',
    metrics: [
      { label:'Qualified leads', delta:'+65%', direction:'up' },
      { label:'Qualification time', delta:'-70%', direction:'down' },
      { label:'Conversion rate', delta:'+28%', direction:'up' },
    ],
    quote: { text:'Our team focuses on closing, not qualifying.', author:'Sales Director' },
    resultsSummary: 'More qualified leads, faster qualification, higher conversions.'
  },
  {
    slug: 'law-firm-intake',
    title: 'Law Firm: streamlined client intake',
    industry: 'Legal',
    problem: 'Initial consultations took too long; client information was scattered.',
    solution: 'AI intake forms + document collection + calendar scheduling.',
    metrics: [
      { label:'Intake time', delta:'-50%', direction:'down' },
      { label:'Client satisfaction', delta:'+40%', direction:'up' },
      { label:'Follow-up completion', delta:'+85%', direction:'up' },
    ],
    quote: { text:'Clients love the streamlined process.', author:'Managing Partner' },
    resultsSummary: 'Faster intake, happier clients, better case preparation.'
  },
  {
    slug: 'consulting-scheduling',
    title: 'Consulting: automated scheduling & follow-ups',
    industry: 'Services',
    problem: 'Scheduling conflicts and missed follow-ups hurt client relationships.',
    solution: 'Smart calendar sync + automated reminders + follow-up sequences.',
    metrics: [
      { label:'Scheduling conflicts', delta:'-80%', direction:'down' },
      { label:'Client retention', delta:'+35%', direction:'up' },
      { label:'Follow-up rate', delta:'+90%', direction:'up' },
    ],
    quote: { text:'Our calendar runs itself now.', author:'Practice Manager' },
    resultsSummary: 'Fewer conflicts, better retention, consistent follow-ups.'
  }
];


