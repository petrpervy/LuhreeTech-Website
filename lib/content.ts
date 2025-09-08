import yaml from 'js-yaml'

// Types for the site specification
export interface NavItem {
  label: string
  href: string
  key: string
}

export interface NavPreview {
  title: string
  blurb: string
  bullets: string[]
  cta: {
    label: string
    href: string
  }
}

export interface SiteSpec {
  brand: {
    name: string
    tagline: string
    one_liner: string
    voice: string[]
  }
  nav: {
    items: NavItem[]
    cta: {
      label: string
      href: string
    }
  }
  nav_previews: Record<string, NavPreview>
  footer: {
    columns: Array<{
      title: string
      links: Array<{
        label: string
        href: string
        note?: string
      }>
    }>
    disclaimer: string
  }
  pages: Record<string, any>
}

// For now, we'll use the fallback data directly
// In a production setup, you'd want to load this from a CMS or API
const siteSpec: SiteSpec = getFallbackSiteSpec()

export function loadSiteSpec(): SiteSpec {
  return siteSpec
}

export async function getSiteSpec(): Promise<SiteSpec> {
  return loadSiteSpec()
}

function getFallbackSiteSpec(): SiteSpec {
  return {
    brand: {
      name: "Luhreetech",
      tagline: "Digital employees for modern businesses",
      one_liner: "We design, deploy, and manage AI automations that work like staff—so you save on labor and scale operations.",
      voice: ["confident", "modern", "helpful", "plain-English", "no jargon"]
    },
    nav: {
      items: [
        { label: "Features", href: "/features", key: "features" },
        { label: "Pricing", href: "/pricing", key: "pricing" },
        { label: "ROI Calculator", href: "/calculator", key: "calculator" },
        { label: "Case Studies", href: "/case-studies", key: "case-studies" },
        { label: "About", href: "/about", key: "about" },
        { label: "Contact", href: "/contact", key: "contact" }
      ],
      cta: { label: "Start Free Audit", href: "/contact#book" }
    },
    nav_previews: {
      features: {
        title: "Features",
        blurb: "Digital employees that answer, schedule, follow up, and report—without sick days.",
        bullets: ["AI Receptionist", "Scheduling & Reminders", "Lead Intake & Triage", "Follow-ups & Reporting"],
        cta: { label: "Explore features", href: "/features" }
      },
      pricing: {
        title: "Pricing",
        blurb: "Simple tiers. Month-to-month. On-prem available for compliance.",
        bullets: ["Starter / Pro / On-Prem", "Comparison Table", "FAQ"],
        cta: { label: "See plans", href: "/pricing" }
      },
      "case-studies": {
        title: "Case Studies",
        blurb: "Real outcomes across law, medical, and logistics.",
        bullets: ["Faster Intake", "No-show Reduction", "Lead Response ↑"],
        cta: { label: "See results", href: "/case-studies" }
      },
      about: {
        title: "About",
        blurb: "Our mission, process, and values. Reliable delivery, zero hassle.",
        bullets: ["Our Process", "Values", "Team"],
        cta: { label: "Learn more", href: "/about" }
      },
      contact: {
        title: "Contact",
        blurb: "Book a free audit or send a note—no pressure.",
        bullets: ["Book Audit", "Contact Form", "Email"],
        cta: { label: "Start free audit", href: "/contact#book" }
      }
    },
    footer: {
      columns: [
        {
          title: "Company",
          links: [
            { label: "About", href: "/about" },
            { label: "Case Studies", href: "/case-studies" },
            { label: "Careers", href: "/about#careers", note: "coming soon" }
          ]
        },
        {
          title: "Product",
          links: [
            { label: "Features", href: "/features" },
            { label: "Pricing", href: "/pricing" },
            { label: "Solutions for Law Firms", href: "/solutions/law-firms" }
          ]
        },
        {
          title: "Resources",
          links: [
            { label: "ROI Calculator", href: "/calculator" },
            { label: "Demo", href: "/demo" },
            { label: "Privacy", href: "/privacy" }
          ]
        },
        {
          title: "Get in touch",
          links: [
            { label: "Contact", href: "/contact" },
            { label: "Start Free Audit", href: "/contact#book" }
          ]
        }
      ],
      disclaimer: `© ${new Date().getFullYear()} Luhreetech. Not a law firm or medical provider. Results vary by business.`
    },
    pages: {
      features: {
        hero: {
          title: "Offload reception, scheduling & follow-ups",
          subtitle: "From first call to final follow-up, your digital employees handle it—calmly and consistently."
        },
        narrative: [
          {
            key: "babysitting-tools",
            claim: "You're babysitting tools instead of running the business",
            answer: "Let digital employees move work forward automatically",
            body: [
              "Routine calls, intake, and scheduling shouldn't need manual nudges. We route, collect context, and book—without hand-holding.",
              "Complex cases escalate to your team with clean notes and next steps."
            ],
            so_what: [
              "3× faster first response",
              "Cleaner records in your CRM",
              "Less back-and-forth"
            ],
            image: "/images/feat-intake.png"
          },
          {
            key: "hours-on-scheduling",
            claim: "You lose hours to scheduling and reminders",
            answer: "Two-way calendars with confirmations and smart reschedules",
            body: [
              "Reads/writes Google/Microsoft calendars, applies buffers, and confirms by SMS/email.",
              "No-show risk drops with timed reminders and easy reschedule links."
            ],
            so_what: [
              "−20–40% no-shows",
              "Cleaner calendars",
              "Fewer last-minute gaps"
            ],
            image: "/images/feat-scheduler.png"
          },
          {
            key: "after-hours",
            claim: "Leads go cold after hours",
            answer: "Always-on receptionist that qualifies and books",
            body: [
              "Answers, qualifies, routes, and books consults—even when your front desk is closed.",
              "Edge cases escalate to a human instantly."
            ],
            so_what: [
              "24/7 coverage",
              "More booked consults",
              "No missed calls"
            ],
            image: "/images/feat-receptionist.png"
          }
        ],
        proof_band: {
          items: [
            { value: "3×", label: "Faster first response" },
            { value: "−20–40%", label: "Fewer no-shows" },
            { value: "30–60%", label: "Front-desk workload ↓" }
          ]
        },
        tabs: [
          {
            key: "receptionist",
            title: "AI Receptionist",
            body: "Answers, qualifies, routes, and books appointments. Escalates complex callers to a human.",
            outcomes: ["First-response in seconds","Better call routing","Higher booked rate"]
          },
          {
            key: "scheduler",
            title: "Scheduling & Reminders",
            body: "Two-way calendar reads/writes, confirmations, reschedules, and reminder logic.",
            outcomes: ["Fewer no-shows","Cleaner calendars","Less back-and-forth"]
          },
          {
            key: "intake",
            title: "Lead Intake & Triage",
            body: "Collects context, tags urgency, and opens CRM/ticket records with clean data.",
            outcomes: ["Complete records","Priority handling","Faster handoffs"]
          },
          {
            key: "followups",
            title: "Follow-ups & Reporting",
            body: "Automated check-ins, payment nudges, and weekly performance summaries.",
            outcomes: ["Higher conversion","Recovered revenue","Clear visibility"]
          }
        ],
        deep_dive_rows: [
          {
            key: "receptionist",
            h: "AI Receptionist — never miss a lead",
            p: "Answers, qualifies, routes, and books—escalates edge cases to humans.",
            bullets: ["Natural conversation","Qualification rules","Live transfer / voicemail","After-hours coverage"]
          },
          {
            key: "scheduler",
            h: "Smart Scheduler — fewer no-shows",
            p: "Two-way calendar sync, confirmations, reschedules, and reminder logic.",
            bullets: ["Google/Microsoft","SMS & email reminders","Smart rescheduling","Buffer rules"]
          },
          {
            key: "intake",
            h: "Intake & Triage — cleaner data in your CRM",
            p: "Collects context, tags urgency, opens ticket/CRM with structured fields.",
            bullets: ["Validation","Priority tags","Owner assignment","HIPAA-friendly mode"]
          }
        ],
        integrations_cloud: ["Google Calendar","Microsoft 365","HubSpot","Pipedrive","Airtable","Slack","Twilio","Stripe"],
        proof_kpis: [
          { value: "3×", label: "Faster first response" },
          { value: "−20–40%", label: "No-show rate" },
          { value: "30–60%", label: "Front-desk workload ↓" }
        ],
        security: {
          bullets: [
            "On-prem LLM option for sensitive environments",
            "Least-privilege access and audit logs",
            "Data residency by request",
            "Encrypted in transit and at rest"
          ]
        },
        seo_note: "Ranges are illustrative; results vary by volume/industry.",
        faq: {
          items: [
            {
              q: "How long to go live?",
              a: "Most launches in 1–2 weeks after the audit, depending on integrations."
            },
            {
              q: "Will it sound robotic?",
              a: "We tune voice/tone to your brand and add rules for tricky scenarios."
            },
            {
              q: "What if it's wrong?",
              a: "Guardrails + escalation paths + continuous monitoring keep quality high."
            }
          ]
        }
      }
    }
  }
}

// Helper functions for common data access
export function getNavItems(): NavItem[] {
  return loadSiteSpec().nav.items
}

export function getNavPreview(key: string): NavPreview | undefined {
  return loadSiteSpec().nav_previews[key]
}

export function getNavCta() {
  return loadSiteSpec().nav.cta
}

export function getFooterData() {
  return loadSiteSpec().footer
}

export function getPageData(pageKey: string) {
  return loadSiteSpec().pages[pageKey]
}

export function getBrandData() {
  return loadSiteSpec().brand
}
