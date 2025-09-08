export interface CaseStudy {
  slug: string
  title: string
  logo: string
  industry: string
  summary: string
  problem: string
  solution: string
  impact: string
  metrics: Array<{
    label: string
    value: string
    trend?: 'up' | 'down' | 'neutral'
  }>
}

export const caseStudies: CaseStudy[] = [
  {
    slug: 'law-firm-automation',
    title: 'Law Firm Saves 20 Hours Weekly with AI Receptionist',
    logo: '⚖️',
    industry: 'Legal',
    summary: 'A mid-size law firm automated intake and scheduling, reducing administrative overhead and improving client response times.',
    problem: 'The firm was spending 20+ hours weekly on phone calls, form processing, and appointment scheduling. Paralegals were handling routine administrative tasks instead of legal work.',
    solution: 'Implemented an AI receptionist that handles initial client calls, processes intake forms, and manages the firm\'s calendar. The AI routes urgent matters to attorneys and schedules consultations automatically.',
    impact: 'Freed up 20 hours weekly for legal work, reduced missed calls by 95%, and improved client satisfaction with faster response times.',
    metrics: [
      { label: 'Hours saved', value: '20/week', trend: 'up' },
      { label: 'Missed calls', value: '↓ 95%', trend: 'down' },
      { label: 'Response time', value: '2 min', trend: 'up' }
    ]
  },
  {
    slug: 'healthcare-scheduling',
    title: 'Medical Practice Cuts No-Shows by 40%',
    logo: '🏥',
    industry: 'Healthcare',
    summary: 'A family practice automated appointment reminders and follow-ups, significantly reducing no-shows and improving patient outcomes.',
    problem: 'The practice had a 25% no-show rate, leading to lost revenue and poor patient care. Staff spent hours calling patients for reminders and rescheduling.',
    solution: 'Deployed an AI system that sends personalized reminders via SMS and email, handles rescheduling requests, and follows up with patients after appointments.',
    impact: 'Reduced no-shows by 40%, increased patient satisfaction scores, and freed up staff time for patient care.',
    metrics: [
      { label: 'No-shows', value: '↓ 40%', trend: 'down' },
      { label: 'Staff time saved', value: '15 hrs/week', trend: 'up' },
      { label: 'Patient satisfaction', value: '4.8/5', trend: 'up' }
    ]
  },
  {
    slug: 'retail-support',
    title: 'E-commerce Company Boosts Support Response 3x',
    logo: '🛍️',
    industry: 'Retail',
    summary: 'An online retailer automated customer support inquiries, handling 70% of questions instantly and improving overall response times.',
    problem: 'Customer support was overwhelmed with routine questions about orders, shipping, and returns. Response times averaged 4 hours, leading to cart abandonment.',
    solution: 'Built an AI support agent that handles common inquiries, tracks orders, and escalates complex issues to human agents. Integrated with their e-commerce platform.',
    impact: 'Reduced average response time from 4 hours to 1.3 hours, handled 70% of inquiries automatically, and increased customer satisfaction scores.',
    metrics: [
      { label: 'Response time', value: '1.3 hrs', trend: 'up' },
      { label: 'Auto-resolution', value: '70%', trend: 'up' },
      { label: 'Support tickets', value: '↓ 45%', trend: 'down' }
    ]
  },
  {
    slug: 'logistics-optimization',
    title: 'Logistics Company Saves $50K Monthly',
    logo: '🚚',
    industry: 'Logistics',
    summary: 'A logistics provider automated route optimization and customer communication, reducing fuel costs and improving delivery accuracy.',
    problem: 'Manual route planning was inefficient, leading to high fuel costs and delayed deliveries. Customer service couldn\'t provide real-time updates.',
    solution: 'Implemented AI-powered route optimization and automated customer notifications. The system learns from delivery patterns and adjusts routes in real-time.',
    impact: 'Reduced fuel costs by 18%, improved on-time delivery to 98%, and enhanced customer satisfaction with real-time tracking updates.',
    metrics: [
      { label: 'Fuel costs', value: '↓ 18%', trend: 'down' },
      { label: 'On-time delivery', value: '98%', trend: 'up' },
      { label: 'Monthly savings', value: '$50K', trend: 'up' }
    ]
  }
]

export function getCaseStudy(slug: string): CaseStudy | undefined {
  return caseStudies.find(study => study.slug === slug)
}

export function getCaseStudiesByIndustry(industry?: string): CaseStudy[] {
  if (!industry) return caseStudies
  return caseStudies.filter(study => study.industry === industry)
}

