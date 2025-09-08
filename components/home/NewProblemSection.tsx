"use client";
import { useState, useEffect } from "react";
import { 
  Phone, 
  Clock, 
  DollarSign, 
  AlertTriangle, 
  TrendingDown, 
  Users,
  X,
  CheckCircle,
  ArrowRight
} from "lucide-react";

export default function NewProblemSection() {
  const [activeProblem, setActiveProblem] = useState(0);
  
  const problems = [
    {
      icon: Phone,
      title: "Missed Calls = Lost Revenue",
      description: "78% of customers buy from the first company that responds. When you miss calls, you miss business.",
      stat: "50% of after-hours calls go unanswered",
      cost: "$2,400/month lost revenue",
      color: "from-red-500 to-red-600",
      bgColor: "bg-red-500/10",
      borderColor: "border-red-500/20"
    },
    {
      icon: DollarSign,
      title: "Receptionist Costs Are Skyrocketing",
      description: "Full-time receptionists cost $2,500-$4,000/month plus benefits, training, and management overhead.",
      stat: "Real cost: $50,000+ per year",
      cost: "$4,200/month total cost",
      color: "from-orange-500 to-orange-600",
      bgColor: "bg-orange-500/10",
      borderColor: "border-orange-500/20"
    },
    {
      icon: Clock,
      title: "Slow Response Times Kill Conversions",
      description: "Responding within an hour is 7x more likely to qualify a lead than waiting longer.",
      stat: "Average response time: 2+ hours",
      cost: "$1,800/month lost opportunities",
      color: "from-yellow-500 to-yellow-600",
      bgColor: "bg-yellow-500/10",
      borderColor: "border-yellow-500/20"
    },
    {
      icon: TrendingDown,
      title: "Manual Processes Don't Scale",
      description: "As your business grows, manual scheduling and intake become bottlenecks that limit growth.",
      stat: "30% of time wasted on admin tasks",
      cost: "$3,600/month in lost productivity",
      color: "from-purple-500 to-purple-600",
      bgColor: "bg-purple-500/10",
      borderColor: "border-purple-500/20"
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveProblem((prev) => (prev + 1) % problems.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="py-20 bg-gradient-to-br from-slate-900 via-red-900/20 to-slate-900 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-red-500/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-orange-500/10 rounded-full blur-3xl animate-pulse delay-1000" />
      </div>

      <div className="container relative z-10">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-red-500/20 border border-red-500/30 text-red-400 text-sm font-medium mb-6">
            <AlertTriangle className="w-4 h-4" />
            <span>The Hidden Cost of Manual Processes</span>
          </div>
          
          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            <span className="text-white">Your Business Is</span>
            <br />
            <span className="bg-gradient-to-r from-red-400 to-orange-400 bg-clip-text text-transparent">
              Bleeding Money
            </span>
          </h2>
          
          <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
            Every missed call, every delayed response, every manual process is costing you thousands of dollars every month. 
            Here's the real cost of not having an AI employee.
          </p>
        </div>

        {/* Problem Cards */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {problems.map((problem, index) => {
            const Icon = problem.icon;
            return (
              <div 
                key={index}
                className={`relative p-8 rounded-2xl border-2 transition-all duration-500 ${
                  activeProblem === index 
                    ? `${problem.bgColor} ${problem.borderColor} scale-105 shadow-2xl` 
                    : 'bg-white/5 border-white/10 hover:bg-white/10'
                }`}
                onMouseEnter={() => setActiveProblem(index)}
              >
                {/* Cost Badge */}
                <div className="absolute -top-4 -right-4 bg-red-500 text-white px-4 py-2 rounded-full text-sm font-bold">
                  {problem.cost}
                </div>

                <div className="flex items-start gap-4">
                  <div className={`w-16 h-16 rounded-2xl bg-gradient-to-r ${problem.color} flex items-center justify-center flex-shrink-0`}>
                    <Icon className="w-8 h-8 text-white" />
                  </div>
                  
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-white mb-3">
                      {problem.title}
                    </h3>
                    
                    <p className="text-gray-300 mb-4 leading-relaxed">
                      {problem.description}
                    </p>
                    
                    <div className="flex items-center gap-2 text-sm text-gray-400">
                      <TrendingDown className="w-4 h-4" />
                      <span>{problem.stat}</span>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Total Cost Calculator */}
        <div className="bg-white/5 backdrop-blur-md border border-white/20 rounded-3xl p-8 md:p-12 mb-16">
          <div className="text-center mb-8">
            <h3 className="text-3xl font-bold text-white mb-4">
              Your Monthly Loss Calculator
            </h3>
            <p className="text-gray-300">
              Add up the real cost of manual processes in your business
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Current Costs */}
            <div>
              <h4 className="text-xl font-semibold text-white mb-6 flex items-center gap-2">
                <X className="w-5 h-5 text-red-400" />
                What You're Losing Every Month
              </h4>
              
              <div className="space-y-4">
                <div className="flex justify-between items-center p-4 bg-red-500/10 border border-red-500/20 rounded-xl">
                  <span className="text-gray-300">Missed calls & lost leads</span>
                  <span className="text-red-400 font-bold">$2,400</span>
                </div>
                <div className="flex justify-between items-center p-4 bg-orange-500/10 border border-orange-500/20 rounded-xl">
                  <span className="text-gray-300">Receptionist salary & benefits</span>
                  <span className="text-orange-400 font-bold">$4,200</span>
                </div>
                <div className="flex justify-between items-center p-4 bg-yellow-500/10 border border-yellow-500/20 rounded-xl">
                  <span className="text-gray-300">Slow response times</span>
                  <span className="text-yellow-400 font-bold">$1,800</span>
                </div>
                <div className="flex justify-between items-center p-4 bg-purple-500/10 border border-purple-500/20 rounded-xl">
                  <span className="text-gray-300">Manual process inefficiency</span>
                  <span className="text-purple-400 font-bold">$3,600</span>
                </div>
              </div>
            </div>

            {/* With AI Employee */}
            <div>
              <h4 className="text-xl font-semibold text-white mb-6 flex items-center gap-2">
                <CheckCircle className="w-5 h-5 text-green-400" />
                With Your AI Employee
              </h4>
              
              <div className="space-y-4">
                <div className="flex justify-between items-center p-4 bg-green-500/10 border border-green-500/20 rounded-xl">
                  <span className="text-gray-300">AI Employee cost</span>
                  <span className="text-green-400 font-bold">$1,000</span>
                </div>
                <div className="flex justify-between items-center p-4 bg-green-500/10 border border-green-500/20 rounded-xl">
                  <span className="text-gray-300">Setup & training</span>
                  <span className="text-green-400 font-bold">$0</span>
                </div>
                <div className="flex justify-between items-center p-4 bg-green-500/10 border border-green-500/20 rounded-xl">
                  <span className="text-gray-300">Management overhead</span>
                  <span className="text-green-400 font-bold">$0</span>
                </div>
                <div className="flex justify-between items-center p-4 bg-green-500/10 border border-green-500/20 rounded-xl">
                  <span className="text-gray-300">Sick days & vacations</span>
                  <span className="text-green-400 font-bold">$0</span>
                </div>
              </div>
            </div>
          </div>

          {/* Total Savings */}
          <div className="mt-8 p-6 bg-gradient-to-r from-green-500/20 to-cyan-500/20 border border-green-500/30 rounded-2xl">
            <div className="text-center">
              <div className="text-sm text-gray-300 mb-2">Your Monthly Savings</div>
              <div className="text-4xl font-bold text-white mb-2">$10,000+</div>
              <div className="text-lg text-green-400 font-semibold">That's $120,000+ per year!</div>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center">
          <p className="text-xl text-gray-300 mb-8">
            Ready to stop losing money and start scaling efficiently?
          </p>
          <button className="group relative px-8 py-4 bg-gradient-to-r from-green-500 to-cyan-600 rounded-xl font-semibold text-white transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-green-500/25">
            <span className="relative z-10 flex items-center gap-2">
              <span>Stop Losing Money - Get Your AI Employee</span>
              <ArrowRight className="w-5 h-5" />
            </span>
            <div className="absolute inset-0 bg-gradient-to-r from-cyan-600 to-green-500 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          </button>
        </div>
      </div>
    </section>
  );
}
