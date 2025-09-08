"use client";
import { useState, useEffect } from "react";
import { 
  BarChart3, 
  TrendingUp, 
  Users, 
  Phone, 
  MessageSquare, 
  Calendar,
  Clock,
  CheckCircle,
  AlertCircle,
  Star,
  ArrowUp,
  ArrowDown,
  Activity,
  Zap,
  Target,
  Award
} from "lucide-react";

export default function DashboardShowcase() {
  const [activeMetric, setActiveMetric] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  const metrics = [
    {
      title: "Calls Answered",
      value: "247",
      change: "+18%",
      trend: "up",
      icon: Phone,
      color: "from-blue-500 to-blue-600"
    },
    {
      title: "Response Time",
      value: "0.8s",
      change: "-23%",
      trend: "down",
      icon: Clock,
      color: "from-green-500 to-green-600"
    },
    {
      title: "Appointments Booked",
      value: "89",
      change: "+31%",
      trend: "up",
      icon: Calendar,
      color: "from-purple-500 to-purple-600"
    },
    {
      title: "Customer Satisfaction",
      value: "98%",
      change: "+5%",
      trend: "up",
      icon: Star,
      color: "from-orange-500 to-orange-600"
    }
  ];

  const recentActivities = [
    {
      type: "call",
      customer: "Sarah Johnson",
      action: "Scheduled consultation",
      time: "2 minutes ago",
      status: "completed",
      icon: Phone
    },
    {
      type: "chat",
      customer: "Mike Rodriguez",
      action: "Qualified lead",
      time: "5 minutes ago",
      status: "completed",
      icon: MessageSquare
    },
    {
      type: "email",
      customer: "Emily Chen",
      action: "Follow-up sent",
      time: "8 minutes ago",
      status: "completed",
      icon: MessageSquare
    },
    {
      type: "call",
      customer: "David Park",
      action: "Appointment confirmed",
      time: "12 minutes ago",
      status: "completed",
      icon: CheckCircle
    }
  ];

  const performanceData = [
    { day: "Mon", calls: 45, appointments: 12, satisfaction: 96 },
    { day: "Tue", calls: 52, appointments: 18, satisfaction: 98 },
    { day: "Wed", calls: 38, appointments: 15, satisfaction: 97 },
    { day: "Thu", calls: 61, appointments: 22, satisfaction: 99 },
    { day: "Fri", calls: 48, appointments: 16, satisfaction: 98 },
    { day: "Sat", calls: 23, appointments: 8, satisfaction: 97 },
    { day: "Sun", calls: 18, appointments: 5, satisfaction: 96 }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveMetric((prev) => (prev + 1) % metrics.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="section relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-brand-surface-lo via-white to-brand-mint/20" />
      
      <div className="container relative z-10">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-brand-mint/50 text-brand-teal text-sm font-medium mb-6">
            <BarChart3 className="w-4 h-4" />
            <span>Your Command Center</span>
          </div>
          
          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            <span className="text-brand-text-primary">Monitor Your AI</span>
            <br />
            <span className="text-gradient">Employee Performance</span>
          </h2>
          
          <p className="text-xl text-brand-text-secondary max-w-4xl mx-auto leading-relaxed">
            Track real-time metrics, monitor customer interactions, and optimize your AI employee's performance 
            with our comprehensive dashboard. See exactly how your business is growing.
          </p>
        </div>

        {/* Dashboard Mockup */}
        <div className="glass-deep card p-8 md:p-12 mb-16">
          {/* Dashboard Header */}
          <div className="flex items-center justify-between mb-8">
            <div>
              <h3 className="text-2xl font-bold text-brand-text-primary">Luhreetech Dashboard</h3>
              <p className="text-brand-text-secondary">Real-time performance metrics</p>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 rounded-full bg-green-500 animate-pulse" />
              <span className="text-sm text-green-600 font-medium">Live</span>
            </div>
          </div>

          {/* Key Metrics */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-8">
            {metrics.map((metric, index) => {
              const Icon = metric.icon;
              return (
                <div
                  key={index}
                  className={`glass card p-6 text-center transition-all duration-500 ${
                    activeMetric === index ? 'glass-pulse scale-105 ring-2 ring-brand-teal/20' : ''
                  }`}
                >
                  <div className={`w-12 h-12 mx-auto mb-3 rounded-xl bg-gradient-to-r ${metric.color} flex items-center justify-center`}>
                    <Icon className="w-6 h-6 text-white" />
                  </div>
                  <div className="text-2xl font-bold text-brand-text-primary mb-1">
                    {metric.value}
                  </div>
                  <div className="text-sm text-brand-text-secondary mb-2">
                    {metric.title}
                  </div>
                  <div className={`flex items-center justify-center gap-1 text-sm font-medium ${
                    metric.trend === 'up' ? 'text-green-600' : 'text-red-600'
                  }`}>
                    {metric.trend === 'up' ? (
                      <ArrowUp className="w-3 h-3" />
                    ) : (
                      <ArrowDown className="w-3 h-3" />
                    )}
                    <span>{metric.change}</span>
                  </div>
                </div>
              );
            })}
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {/* Performance Chart */}
            <div className="lg:col-span-2">
              <div className="glass card p-6">
                <div className="flex items-center justify-between mb-6">
                  <h4 className="text-lg font-semibold text-brand-text-primary">Weekly Performance</h4>
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-blue-500" />
                    <span className="text-sm text-brand-text-secondary">Calls</span>
                    <div className="w-2 h-2 rounded-full bg-green-500 ml-4" />
                    <span className="text-sm text-brand-text-secondary">Appointments</span>
                  </div>
                </div>
                
                <div className="space-y-4">
                  {performanceData.map((day, index) => (
                    <div key={index} className="flex items-center gap-4">
                      <div className="w-12 text-sm font-medium text-brand-text-secondary">
                        {day.day}
                      </div>
                      <div className="flex-1 flex items-center gap-2">
                        <div className="flex-1 bg-gray-200 rounded-full h-2">
                          <div 
                            className="bg-blue-500 h-2 rounded-full transition-all duration-1000"
                            style={{ width: `${(day.calls / 70) * 100}%` }}
                          />
                        </div>
                        <span className="text-sm text-brand-text-secondary w-8">
                          {day.calls}
                        </span>
                      </div>
                      <div className="flex-1 flex items-center gap-2">
                        <div className="flex-1 bg-gray-200 rounded-full h-2">
                          <div 
                            className="bg-green-500 h-2 rounded-full transition-all duration-1000"
                            style={{ width: `${(day.appointments / 25) * 100}%` }}
                          />
                        </div>
                        <span className="text-sm text-brand-text-secondary w-8">
                          {day.appointments}
                        </span>
                      </div>
                      <div className="w-12 text-sm text-brand-text-secondary text-right">
                        {day.satisfaction}%
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Recent Activity */}
            <div>
              <div className="glass card p-6">
                <h4 className="text-lg font-semibold text-brand-text-primary mb-6">Recent Activity</h4>
                <div className="space-y-4">
                  {recentActivities.map((activity, index) => {
                    const Icon = activity.icon;
                    return (
                      <div key={index} className="flex items-center gap-3">
                        <div className="w-8 h-8 rounded-full bg-brand-mint/50 flex items-center justify-center">
                          <Icon className="w-4 h-4 text-brand-teal" />
                        </div>
                        <div className="flex-1">
                          <div className="text-sm font-medium text-brand-text-primary">
                            {activity.customer}
                          </div>
                          <div className="text-xs text-brand-text-secondary">
                            {activity.action}
                          </div>
                        </div>
                        <div className="text-xs text-brand-text-secondary">
                          {activity.time}
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Dashboard Features */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          <div className="glass card p-6 text-center">
            <div className="w-12 h-12 mx-auto mb-4 rounded-xl bg-gradient-to-r from-blue-500 to-blue-600 flex items-center justify-center">
              <Activity className="w-6 h-6 text-white" />
            </div>
            <h3 className="text-lg font-semibold text-brand-text-primary mb-2">
              Real-time Monitoring
            </h3>
            <p className="text-sm text-brand-text-secondary">
              Track live performance metrics and customer interactions as they happen.
            </p>
          </div>

          <div className="glass card p-6 text-center">
            <div className="w-12 h-12 mx-auto mb-4 rounded-xl bg-gradient-to-r from-green-500 to-green-600 flex items-center justify-center">
              <Target className="w-6 h-6 text-white" />
            </div>
            <h3 className="text-lg font-semibold text-brand-text-primary mb-2">
              Performance Analytics
            </h3>
            <p className="text-sm text-brand-text-secondary">
              Detailed insights into conversion rates, response times, and customer satisfaction.
            </p>
          </div>

          <div className="glass card p-6 text-center">
            <div className="w-12 h-12 mx-auto mb-4 rounded-xl bg-gradient-to-r from-purple-500 to-purple-600 flex items-center justify-center">
              <Award className="w-6 h-6 text-white" />
            </div>
            <h3 className="text-lg font-semibold text-brand-text-primary mb-2">
              Optimization Tips
            </h3>
            <p className="text-sm text-brand-text-secondary">
              Get AI-powered recommendations to improve your customer experience and conversion rates.
            </p>
          </div>
        </div>

        {/* Sample Metrics */}
        <div className="glass-deep card p-8 md:p-12 mb-16">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold text-brand-text-primary mb-4">
              This Month's Performance
            </h3>
            <p className="text-brand-text-secondary">
              See the impact of your AI employee on your business metrics
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="text-3xl font-bold text-brand-text-primary mb-1">1,247</div>
              <div className="text-sm text-brand-text-secondary mb-2">Calls Answered</div>
              <div className="text-xs text-green-600 font-medium">+23% vs last month</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-brand-text-primary mb-1">0.8s</div>
              <div className="text-sm text-brand-text-secondary mb-2">Avg Response Time</div>
              <div className="text-xs text-green-600 font-medium">-45% vs last month</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-brand-text-primary mb-1">89</div>
              <div className="text-sm text-brand-text-secondary mb-2">Appointments Booked</div>
              <div className="text-xs text-green-600 font-medium">+31% vs last month</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-brand-text-primary mb-1">98%</div>
              <div className="text-sm text-brand-text-secondary mb-2">Customer Satisfaction</div>
              <div className="text-xs text-green-600 font-medium">+5% vs last month</div>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center">
          <p className="text-lg text-brand-text-secondary mb-6">
            Ready to see these results for your business?
          </p>
          <button className="btn-primary text-lg px-8 py-4 hover-glow-enhanced">
            <span>Access Your Dashboard</span>
            <ArrowUp className="w-5 h-5 ml-2" />
          </button>
        </div>
      </div>
    </section>
  );
}
