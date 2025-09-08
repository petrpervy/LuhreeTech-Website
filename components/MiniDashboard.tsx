'use client';
import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Phone, Mail, Users, CheckCircle, TrendingUp, Activity } from 'lucide-react';

interface MiniDashboardProps {
  title: string;
  icon: React.ComponentType<any>;
  metrics: {
    primary: { value: number; label: string; trend: 'up' | 'down' | 'stable' };
    secondary: { value: number; label: string }[];
  };
  color: string;
  delay?: number;
}

function MiniDashboard({ title, icon: Icon, metrics, color, delay = 0 }: MiniDashboardProps) {
  const [isHovered, setIsHovered] = useState(false);
  const [animatedValue, setAnimatedValue] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => {
      setAnimatedValue(metrics.primary.value);
    }, delay * 1000 + 500);
    return () => clearTimeout(timer);
  }, [metrics.primary.value, delay]);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay }}
      whileHover={{ scale: 1.05, y: -5 }}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      className="glass-liquid glass-glow glass-ripple hover-lift-enhanced glass-shimmer p-6 h-full relative overflow-hidden"
    >
      {/* Animated background */}
      <motion.div
        className="absolute inset-0 opacity-5"
        animate={{
          background: isHovered 
            ? `linear-gradient(135deg, ${color}40, ${color}60)`
            : `linear-gradient(135deg, ${color}20, ${color}40)`
        }}
        transition={{ duration: 0.3 }}
      />
      
      <div className="relative z-10">
        <div className="flex items-center gap-3 mb-4">
          <motion.div
            animate={{ rotate: isHovered ? 360 : 0 }}
            transition={{ duration: 0.5 }}
            className={`p-2 rounded-lg bg-gradient-to-r ${color}20 ${color}40`}
          >
            <Icon className={`w-5 h-5 ${color}600`} />
          </motion.div>
          <h3 className="font-semibold text-slate-800">{title}</h3>
        </div>
        
        <div className="space-y-4">
          {/* Primary metric */}
          <div className="text-center">
            <motion.div
              className="text-3xl font-bold text-slate-800"
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.5, delay: delay + 0.2 }}
            >
              {animatedValue.toLocaleString()}
            </motion.div>
            <div className="text-sm text-slate-600">{metrics.primary.label}</div>
            <motion.div
              className={`flex items-center justify-center gap-1 mt-1 text-xs ${
                metrics.primary.trend === 'up' ? 'text-emerald-600' :
                metrics.primary.trend === 'down' ? 'text-red-600' :
                'text-slate-500'
              }`}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.3, delay: delay + 0.4 }}
            >
              <TrendingUp className={`w-3 h-3 ${
                metrics.primary.trend === 'down' ? 'rotate-180' : ''
              }`} />
              {metrics.primary.trend === 'up' ? '+12%' : 
               metrics.primary.trend === 'down' ? '-3%' : '0%'}
            </motion.div>
          </div>
          
          {/* Secondary metrics */}
          <div className="space-y-2">
            {metrics.secondary.map((metric, index) => (
              <motion.div
                key={metric.label}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.3, delay: delay + 0.3 + index * 0.1 }}
                className="flex items-center justify-between text-sm"
              >
                <span className="text-slate-600">{metric.label}</span>
                <span className="font-semibold text-slate-800">{metric.value}</span>
              </motion.div>
            ))}
          </div>
          
          {/* Activity indicator */}
          <motion.div
            className="flex items-center gap-2 text-xs text-slate-500"
            animate={{ opacity: isHovered ? 1 : 0.7 }}
          >
            <Activity className="w-3 h-3" />
            <span>Ready to deploy</span>
            <motion.div
              className="w-2 h-2 bg-emerald-500 rounded-full"
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
            />
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
}

export default function MiniDashboardGrid() {
  const dashboards = [
    {
      title: "AI Receptionist",
      icon: Phone,
      metrics: {
        primary: { value: 0, label: "Calls Handled", trend: 'stable' as const },
        secondary: [
          { value: 0, label: "Answer Rate %" },
          { value: 0, label: "Avg Response (s)" },
          { value: 0, label: "Appointments Set" }
        ]
      },
      color: "from-blue-500 to-blue-600"
    },
    {
      title: "Email Assistant", 
      icon: Mail,
      metrics: {
        primary: { value: 0, label: "Emails Processed", trend: 'stable' as const },
        secondary: [
          { value: 0, label: "Auto-Response %" },
          { value: 0, label: "Meetings Scheduled" },
          { value: 0, label: "Follow-ups Sent" }
        ]
      },
      color: "from-emerald-500 to-emerald-600"
    },
    {
      title: "Lead-Gen Bot",
      icon: Users,
      metrics: {
        primary: { value: 0, label: "New Leads", trend: 'stable' as const },
        secondary: [
          { value: 0, label: "Qualification %" },
          { value: 0, label: "Hot Prospects" },
          { value: 0, label: "CSV Exports" }
        ]
      },
      color: "from-purple-500 to-purple-600"
    },
    {
      title: "Task Automation",
      icon: CheckCircle,
      metrics: {
        primary: { value: 0, label: "Tasks Completed", trend: 'stable' as const },
        secondary: [
          { value: 0, label: "Success Rate %" },
          { value: 0, label: "Errors Fixed" },
          { value: 0, label: "Workflows Active" }
        ]
      },
      color: "from-orange-500 to-orange-600"
    }
  ];

  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
      {dashboards.map((dashboard, index) => (
        <MiniDashboard
          key={dashboard.title}
          title={dashboard.title}
          icon={dashboard.icon}
          metrics={dashboard.metrics}
          color={dashboard.color}
          delay={index * 0.1}
        />
      ))}
    </div>
  );
}
