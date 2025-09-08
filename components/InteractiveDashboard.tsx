'use client';
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Phone, 
  Mail, 
  Calendar, 
  Users, 
  TrendingUp, 
  Clock, 
  CheckCircle, 
  AlertCircle,
  Activity,
  BarChart3,
  PieChart,
  Zap
} from 'lucide-react';

// Mock data generators for real-time feel
const generateCallData = () => ({
  total: Math.floor(Math.random() * 50) + 20,
  answered: Math.floor(Math.random() * 45) + 15,
  missed: Math.floor(Math.random() * 5) + 1,
  avgResponseTime: Math.floor(Math.random() * 30) + 5
});

const generateEmailData = () => ({
  processed: Math.floor(Math.random() * 200) + 100,
  pending: Math.floor(Math.random() * 20) + 5,
  scheduled: Math.floor(Math.random() * 50) + 10,
  responseRate: Math.floor(Math.random() * 20) + 80
});

const generateLeadData = () => ({
  generated: Math.floor(Math.random() * 30) + 10,
  qualified: Math.floor(Math.random() * 25) + 8,
  converted: Math.floor(Math.random() * 15) + 3,
  pipeline: Math.floor(Math.random() * 100) + 50
});

const generateTaskData = () => ({
  completed: Math.floor(Math.random() * 100) + 50,
  inProgress: Math.floor(Math.random() * 20) + 5,
  pending: Math.floor(Math.random() * 15) + 3,
  efficiency: Math.floor(Math.random() * 15) + 85
});

interface DashboardCardProps {
  title: string;
  icon: React.ComponentType<any>;
  data: any;
  color: string;
  delay?: number;
}

function DashboardCard({ title, icon: Icon, data, color, delay = 0 }: DashboardCardProps) {
  const [isHovered, setIsHovered] = useState(false);
  
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay }}
      whileHover={{ scale: 1.02, y: -5 }}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      className="glass-deep hover-lift-enhanced glass-shimmer p-6 relative overflow-hidden"
    >
      {/* Animated background gradient */}
      <motion.div
        className="absolute inset-0 opacity-10"
        animate={{
          background: isHovered 
            ? `linear-gradient(135deg, ${color}20, ${color}40)`
            : `linear-gradient(135deg, ${color}10, ${color}20)`
        }}
        transition={{ duration: 0.3 }}
      />
      
      <div className="relative z-10">
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-3">
            <div className={`p-2 rounded-lg bg-gradient-to-r ${color}20 ${color}40`}>
              <Icon className={`w-5 h-5 ${color}600`} />
            </div>
            <h3 className="font-semibold text-slate-800">{title}</h3>
          </div>
          <motion.div
            animate={{ rotate: isHovered ? 360 : 0 }}
            transition={{ duration: 0.5 }}
          >
            <Activity className="w-4 h-4 text-slate-500" />
          </motion.div>
        </div>
        
        <div className="space-y-3">
          {Object.entries(data).map(([key, value], index) => (
            <motion.div
              key={key}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.3, delay: delay + index * 0.1 }}
              className="flex items-center justify-between"
            >
              <span className="text-sm text-slate-600 capitalize">
                {key.replace(/([A-Z])/g, ' $1').trim()}
              </span>
              <motion.span
                key={String(value)}
                initial={{ scale: 0.8 }}
                animate={{ scale: 1 }}
                className="font-semibold text-slate-800"
              >
                {typeof value === 'number' ? value.toLocaleString() : String(value)}
                {key.includes('Rate') || key.includes('efficiency') ? '%' : ''}
                {key.includes('Time') ? 's' : ''}
              </motion.span>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.div>
  );
}

interface LiveActivityProps {
  activities: Array<{
    id: string;
    type: 'call' | 'email' | 'lead' | 'task';
    message: string;
    timestamp: Date;
    status: 'success' | 'warning' | 'info';
  }>;
}

function LiveActivity({ activities }: LiveActivityProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.3 }}
      className="glass-deep hover-lift-enhanced glass-pulse p-6"
    >
      <div className="flex items-center gap-3 mb-4">
        <div className="p-2 rounded-lg bg-gradient-to-r from-emerald-20 to-emerald-40">
          <Zap className="w-5 h-5 text-emerald-600" />
        </div>
        <h3 className="font-semibold text-slate-800">Live Activity</h3>
        <div className="flex items-center gap-1">
          <div className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse" />
          <span className="text-xs text-slate-500">Live</span>
        </div>
      </div>
      
      <div className="space-y-3 max-h-64 overflow-y-auto">
        <AnimatePresence>
          {activities.map((activity, index) => (
            <motion.div
              key={activity.id}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 20 }}
              transition={{ duration: 0.3, delay: index * 0.1 }}
              className="flex items-start gap-3 p-3 rounded-lg bg-slate-50/50"
            >
              <div className={`p-1 rounded-full ${
                activity.status === 'success' ? 'bg-emerald-100' :
                activity.status === 'warning' ? 'bg-yellow-100' :
                'bg-blue-100'
              }`}>
                {activity.status === 'success' ? (
                  <CheckCircle className="w-3 h-3 text-emerald-600" />
                ) : activity.status === 'warning' ? (
                  <AlertCircle className="w-3 h-3 text-yellow-600" />
                ) : (
                  <Activity className="w-3 h-3 text-blue-600" />
                )}
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-sm text-slate-700">{activity.message}</p>
                <p className="text-xs text-slate-500 mt-1">
                  {activity.timestamp.toLocaleTimeString()}
                </p>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>
    </motion.div>
  );
}

interface PerformanceChartProps {
  data: Array<{ time: string; value: number; label: string }>;
}

function PerformanceChart({ data }: PerformanceChartProps) {
  const maxValue = Math.max(...data.map(d => d.value));
  
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.4 }}
      className="glass-deep hover-lift-enhanced glass-pulse p-6"
    >
      <div className="flex items-center gap-3 mb-6">
        <div className="p-2 rounded-lg bg-gradient-to-r from-blue-20 to-blue-40">
          <BarChart3 className="w-5 h-5 text-blue-600" />
        </div>
        <h3 className="font-semibold text-slate-800">Performance Trends</h3>
      </div>
      
      <div className="space-y-4">
        {data.map((item, index) => (
          <motion.div
            key={item.time}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.3, delay: 0.5 + index * 0.1 }}
            className="space-y-2"
          >
            <div className="flex items-center justify-between text-sm">
              <span className="text-slate-600">{item.label}</span>
              <span className="font-semibold text-slate-800">{item.value}%</span>
            </div>
            <div className="w-full bg-slate-200 rounded-full h-2">
              <motion.div
                initial={{ width: 0 }}
                animate={{ width: `${(item.value / maxValue) * 100}%` }}
                transition={{ duration: 1, delay: 0.6 + index * 0.1 }}
                className="h-2 bg-gradient-to-r from-blue-500 to-blue-600 rounded-full"
              />
            </div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
}

export default function InteractiveDashboard() {
  const [callData, setCallData] = useState(generateCallData());
  const [emailData, setEmailData] = useState(generateEmailData());
  const [leadData, setLeadData] = useState(generateLeadData());
  const [taskData, setTaskData] = useState(generateTaskData());
  const [activities, setActivities] = useState([
    {
      id: '1',
      type: 'call' as const,
      message: 'AI Receptionist handled 3 new calls',
      timestamp: new Date(Date.now() - 2 * 60 * 1000),
      status: 'success' as const
    },
    {
      id: '2',
      type: 'email' as const,
      message: 'Email assistant processed 12 new messages',
      timestamp: new Date(Date.now() - 5 * 60 * 1000),
      status: 'success' as const
    },
    {
      id: '3',
      type: 'lead' as const,
      message: 'Lead-gen bot found 5 qualified prospects',
      timestamp: new Date(Date.now() - 8 * 60 * 1000),
      status: 'info' as const
    },
    {
      id: '4',
      type: 'task' as const,
      message: 'Automation workflow completed 8 scheduled tasks',
      timestamp: new Date(Date.now() - 12 * 60 * 1000),
      status: 'success' as const
    }
  ]);

  const performanceData = [
    { time: '9:00', value: 85, label: 'Call Answer Rate' },
    { time: '10:00', value: 92, label: 'Email Response Time' },
    { time: '11:00', value: 78, label: 'Lead Qualification' },
    { time: '12:00', value: 96, label: 'Task Completion' }
  ];

  // Update data every 10 seconds for real-time feel
  useEffect(() => {
    const interval = setInterval(() => {
      setCallData(generateCallData());
      setEmailData(generateEmailData());
      setLeadData(generateLeadData());
      setTaskData(generateTaskData());
      
      // Add new activity
      const newActivity = {
        id: Date.now().toString(),
        type: ['call', 'email', 'lead', 'task'][Math.floor(Math.random() * 4)] as any,
        message: `AI system processed ${Math.floor(Math.random() * 10) + 1} new items`,
        timestamp: new Date(),
        status: 'success' as const
      };
      
      setActivities(prev => [newActivity, ...prev.slice(0, 4)]);
    }, 10000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="section">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-slate-800 mb-4">
            Live Dashboard
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Real-time monitoring of your AI digital employees. Watch them work 24/7 to grow your business.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <DashboardCard
            title="AI Receptionist"
            icon={Phone}
            data={callData}
            color="from-blue-500 to-blue-600"
            delay={0}
          />
          <DashboardCard
            title="Email Assistant"
            icon={Mail}
            data={emailData}
            color="from-emerald-500 to-emerald-600"
            delay={0.1}
          />
          <DashboardCard
            title="Lead-Gen Bot"
            icon={Users}
            data={leadData}
            color="from-purple-500 to-purple-600"
            delay={0.2}
          />
          <DashboardCard
            title="Task Automation"
            icon={CheckCircle}
            data={taskData}
            color="from-orange-500 to-orange-600"
            delay={0.3}
          />
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          <LiveActivity activities={activities} />
          <PerformanceChart data={performanceData} />
        </div>
      </div>
    </section>
  );
}
