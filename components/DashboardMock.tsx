'use client'

export function DashboardMock() {
  return (
    <div className="bg-white/80 backdrop-blur-xl rounded-3xl p-6 space-y-6 border border-white/30 shadow-soft">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div className="space-y-1">
          <div className="text-sm font-medium text-theme-text">Agent Performance</div>
          <div className="text-xs text-theme-muted">Last 24 hours</div>
        </div>
        <div className="w-3 h-3 bg-green-500 rounded-full"></div>
      </div>
      
      {/* Stats Grid */}
      <div className="grid grid-cols-2 gap-4">
        <div className="space-y-1">
          <div className="text-2xl font-bold text-theme-text">247</div>
          <div className="text-xs text-theme-muted">Tickets processed</div>
        </div>
        <div className="space-y-1">
          <div className="text-2xl font-bold text-theme-text">94%</div>
          <div className="text-xs text-theme-muted">Accuracy rate</div>
        </div>
      </div>
      
      {/* Mini Chart */}
      <div className="space-y-2">
        <div className="text-xs text-theme-muted">Response time trend</div>
        <div className="flex items-end gap-1 h-12">
          {[3, 5, 2, 4, 6, 3, 2].map((height, index) => (
            <div
              key={index}
              className="flex-1 bg-gradient-to-t from-theme-primary/60 to-theme-primary/20 rounded-sm"
              style={{ height: `${height * 8}px` }}
            ></div>
          ))}
        </div>
      </div>
      
      {/* Recent Activity */}
      <div className="space-y-2">
        <div className="text-xs text-theme-muted">Recent activity</div>
        <div className="space-y-1">
          {[
            { text: "Email processed", time: "2m ago", status: "success" },
            { text: "Report generated", time: "5m ago", status: "success" },
            { text: "Ticket escalated", time: "8m ago", status: "warning" }
          ].map((item, index) => (
            <div key={index} className="flex items-center justify-between text-xs">
              <span className="text-theme-text">{item.text}</span>
              <span className="text-theme-muted">{item.time}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
