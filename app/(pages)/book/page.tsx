export const metadata = { title: 'Book an AI Audit' }

export default function BookPage() {
  return (
    <section className="max-w-3xl space-y-4">
      <h1 className="text-4xl font-semibold text-theme-text">Book an AI Audit</h1>
      <p className="text-theme-muted">Pick a time that works. We’ll review your workflows and send a one-page plan.</p>
      <ul className="text-theme-muted list-disc pl-5">
        <li>15–30 minutes</li>
        <li>We identify quick wins and next steps</li>
        <li>No hard sell</li>
      </ul>
      <div className="rounded-3xl overflow-hidden border" style={{borderColor:'#E7DFD3'}}>
        <iframe title="Scheduling" src="https://cal.com/embed" className="w-full h-[720px] bg-white" />
      </div>
      <p className="text-sm text-theme-muted">Prefer email? <a className="underline text-theme-link" href="/contact">Contact us</a>.</p>
    </section>
  )
}


