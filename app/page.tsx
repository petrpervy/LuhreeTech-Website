export default function Home() {
  return (
    <div style={{ 
      minHeight: '100vh', 
      display: 'flex', 
      alignItems: 'center', 
      justifyContent: 'center',
      backgroundColor: '#f0f9ff',
      fontFamily: 'system-ui, sans-serif'
    }}>
      <div style={{ textAlign: 'center', padding: '2rem' }}>
        <h1 style={{ fontSize: '3rem', color: '#1e40af', marginBottom: '1rem' }}>
          🎉 SUCCESS! 🎉
        </h1>
        <p style={{ fontSize: '1.5rem', color: '#374151', marginBottom: '2rem' }}>
          Luhreetech Website is Live!
        </p>
        <div style={{ 
          backgroundColor: 'white', 
          padding: '2rem', 
          borderRadius: '0.5rem',
          boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)'
        }}>
          <p style={{ fontSize: '1.2rem', color: '#6b7280' }}>
            AI Automations Done For You
          </p>
        </div>
      </div>
    </div>
  )
}