'use client';
import { motion } from 'framer-motion';
import { CalendarCheck2, PhoneCall, Gauge, TrendingUp, Users, Clock } from 'lucide-react';
import { AreaChart, Area, ResponsiveContainer, Tooltip } from 'recharts';

// Real-time data will be populated when system is active
const chartData = Array.from({length: 7}).map((_,i)=>({
  day: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'][i],
  activity: 0 // Will show real data when system is running
}));

export default function HeroInteractiveDashboard() {
  return (
    <motion.div
      initial={{opacity:0, y:20}} 
      animate={{opacity:1, y:0}}
      transition={{duration:.6, ease:"easeOut"}}
      className="glass-liquid glass-glow glass-ripple glass-float p-8 md:p-12"
    >
      <div className="grid md:grid-cols-3 gap-8">
        {/* Pipeline Flow */}
        <div className="glass-crystal glass-glow glass-ripple card hover-lift-enhanced glass-pulse">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-10 h-10 rounded-xl flex items-center justify-center" style={{background: 'linear-gradient(135deg, var(--brand-orange) 0%, var(--brand-cta) 100%)'}}>
              <PhoneCall className="w-5 h-5 text-white"/>
            </div>
            <div>
              <h3 className="font-semibold" style={{color: 'var(--brand-ink)'}}>Today's Flow</h3>
              <p className="text-sm" style={{color: 'var(--brand-gray)'}}>Live pipeline status</p>
            </div>
          </div>
          
          <div className="space-y-4">
            <div className="flex items-center gap-3 text-sm">
              <span className="font-medium" style={{color: 'var(--brand-gray)'}}>Calls</span>
              <div className="flex-1 h-2 rounded-full bg-gray-200">
                <div className="h-2 rounded-full w-3/4" style={{background: 'linear-gradient(135deg, var(--brand-orange) 0%, var(--brand-cta) 100%)'}}></div>
              </div>
              <span className="font-semibold" style={{color: 'var(--brand-ink)'}}>Live</span>
            </div>
            
            <div className="flex items-center gap-3 text-sm">
              <span className="font-medium" style={{color: 'var(--brand-gray)'}}>Intake</span>
              <div className="flex-1 h-2 rounded-full bg-gray-200">
                <div className="h-2 rounded-full w-1/2" style={{background: 'linear-gradient(135deg, var(--brand-teal) 0%, var(--brand-lime) 100%)'}}></div>
              </div>
              <span className="font-semibold" style={{color: 'var(--brand-ink)'}}>Active</span>
            </div>
            
            <div className="flex items-center gap-3 text-sm">
              <span className="font-medium" style={{color: 'var(--brand-gray)'}}>Booked</span>
              <div className="flex-1 h-2 rounded-full bg-gray-200">
                <div className="h-2 rounded-full w-2/3" style={{background: 'linear-gradient(135deg, var(--brand-orange) 0%, var(--brand-cta) 100%)'}}></div>
              </div>
              <span className="font-semibold" style={{color: 'var(--brand-ink)'}}>Ready</span>
            </div>
          </div>
          
          <div className="mt-4 pt-4 border-t border-gray-200">
            <div className="flex items-center justify-between text-xs" style={{color: 'var(--brand-gray)'}}>
              <span>Real-time monitoring</span>
              <div className="flex items-center gap-1">
                <div className="w-2 h-2 rounded-full bg-green-500"></div>
                <span>Active</span>
              </div>
            </div>
          </div>
        </div>

        {/* Performance Chart */}
        <div className="glass card hover-lift md:col-span-2">
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl flex items-center justify-center" style={{background: 'linear-gradient(135deg, var(--brand-teal) 0%, var(--brand-lime) 100%)'}}>
                <TrendingUp className="w-5 h-5 text-white"/>
              </div>
              <div>
                <h3 className="font-semibold" style={{color: 'var(--brand-ink)'}}>Performance Overview</h3>
                <p className="text-sm" style={{color: 'var(--brand-gray)'}}>Real-time activity monitoring</p>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <Gauge className="w-4 h-4" style={{color: 'var(--brand-gray)'}}/>
              <span className="text-xs px-3 py-1 rounded-full glass" style={{color: 'var(--brand-ink)'}}>Live</span>
            </div>
          </div>
          
          <div className="h-48 relative">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={chartData}>
                <defs>
                  <linearGradient id="bookingsFill" x1="0" x2="0" y1="0" y2="1">
                    <stop offset="0%" stopColor="var(--brand-orange)" stopOpacity={0.3}/>
                    <stop offset="100%" stopColor="var(--brand-orange)" stopOpacity={0.05}/>
                  </linearGradient>
                  <linearGradient id="callsFill" x1="0" x2="0" y1="0" y2="1">
                    <stop offset="0%" stopColor="var(--brand-teal)" stopOpacity={0.3}/>
                    <stop offset="100%" stopColor="var(--brand-teal)" stopOpacity={0.05}/>
                  </linearGradient>
                </defs>
                <Tooltip
                  contentStyle={{
                    backgroundColor: 'rgba(255,255,255,0.95)',
                    backdropFilter: 'blur(10px)',
                    border: '1px solid rgba(0,0,0,0.1)',
                    borderRadius: '12px',
                    color: '#1f2937',
                    fontSize: '14px'
                  }}
                  itemStyle={{ color: '#1f2937' }}
                />
                <Area 
                  dataKey="activity" 
                  type="monotone" 
                  stroke="var(--brand-orange)" 
                  strokeWidth={3} 
                  fillOpacity={0.2} 
                  fill="url(#bookingsFill)" 
                />
              </AreaChart>
            </ResponsiveContainer>
          </div>
          
          <div className="flex items-center justify-between mt-4 pt-4 border-t border-gray-200">
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-full" style={{backgroundColor: 'var(--brand-orange)'}}></div>
                <span className="text-sm" style={{color: 'var(--brand-gray)'}}>Activity</span>
              </div>
            </div>
            <div className="text-sm" style={{color: 'var(--brand-gray)'}}>
              Real-time updates
            </div>
          </div>
        </div>

        {/* Key Metrics */}
        <div className="space-y-6">
          <div className="glass-crystal glass-glow glass-ripple card hover-lift-enhanced glass-pulse">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-r from-amber-500 to-orange-600 flex items-center justify-center">
                <CalendarCheck2 className="w-5 h-5 text-white"/>
              </div>
              <div>
                <h4 className="font-semibold text-gray-900">Next Scheduled</h4>
                <p className="text-sm text-gray-500">Upcoming appointment</p>
              </div>
            </div>
            <div className="text-2xl font-bold text-gray-900 mb-2">Tue 3:00 PM</div>
            <div className="text-sm text-gray-600">Confirmation & reminder automated</div>
            <div className="mt-3 h-1.5 rounded-full bg-gray-200 overflow-hidden">
              <div className="h-full bg-gradient-to-r from-amber-500 to-orange-600 w-3/4"></div>
            </div>
          </div>

          <div className="glass-crystal glass-glow glass-ripple card hover-lift-enhanced glass-pulse">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-r from-rose-500 to-pink-600 flex items-center justify-center">
                <Clock className="w-5 h-5 text-white"/>
              </div>
              <div>
                <h4 className="font-semibold text-gray-900">Response Time</h4>
                <p className="text-sm text-gray-500">Average handling</p>
              </div>
            </div>
            <div className="text-2xl font-bold text-gray-900 mb-2">Instant</div>
            <div className="text-sm text-gray-600">Voicemail → SMS follow-up</div>
            <div className="mt-3 h-1.5 rounded-full bg-gray-200 overflow-hidden">
              <div className="h-full bg-gradient-to-r from-rose-500 to-pink-600 w-full"></div>
            </div>
          </div>

          <div className="glass-crystal glass-glow glass-ripple card hover-lift-enhanced glass-pulse">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-r from-purple-500 to-indigo-600 flex items-center justify-center">
                <Users className="w-5 h-5 text-white"/>
              </div>
              <div>
                <h4 className="font-semibold text-gray-900">On Autopilot</h4>
                <p className="text-sm text-gray-500">Automated processes</p>
              </div>
            </div>
            <div className="text-2xl font-bold text-gray-900 mb-2">85%</div>
            <div className="text-sm text-gray-600">Most intake & scheduling</div>
            <div className="mt-3 h-1.5 rounded-full bg-gray-200 overflow-hidden">
              <div className="h-full bg-gradient-to-r from-purple-500 to-indigo-600 w-4/5"></div>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}