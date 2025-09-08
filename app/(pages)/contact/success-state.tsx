export function SuccessNote({ message }: { message?: string }) {
  return (
    <div className="text-sm text-emerald-300">{message || 'Thanks! We’ll get back within 24h.'}</div>
  )
}


