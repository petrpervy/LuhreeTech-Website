import { CheckCircle, Clock, Zap, Shield, Brain, Settings } from "lucide-react"

type StatusType = "completed" | "in-progress" | "planned"

const roadmap = [
  {
    phase: "P1",
    title: "Operator Hardened",
    status: "completed",
    description: "Core operator with logs, testkit, and reliable execution",
    icon: CheckCircle,
    features: ["Reliable task execution", "Comprehensive logging", "Test framework"]
  },
  {
    phase: "P2", 
    title: "Orchestrator with Plan DSL",
    status: "in-progress",
    description: "Advanced orchestration with plan generation and prospect management",
    icon: Brain,
    features: ["Plan DSL", "Prospect CSV generation", "Scale automation"]
  },
  {
    phase: "P3",
    title: "Worker Capabilities", 
    status: "planned",
    description: "Enhanced worker with summarization, extraction, and safe codegen",
    icon: Zap,
    features: ["Email summarization", "Contact extraction", "Safe code generation"]
  },
  {
    phase: "P4",
    title: "Planner Generation",
    status: "planned", 
    description: "AI planner that generates execution plans from business goals",
    icon: Settings,
    features: ["Goal-based planning", "Automatic plan generation", "Optimization"]
  },
  {
    phase: "P5",
    title: "Supervisor Policy",
    status: "planned",
    description: "Policy enforcement and safety supervision for autonomous operations",
    icon: Shield,
    features: ["Policy enforcement", "Safety supervision", "Compliance monitoring"]
  },
  {
    phase: "P6",
    title: "Full Autonomy",
    status: "planned",
    description: "Complete autonomous operation with CRM integration",
    icon: CheckCircle,
    features: ["Full autonomy", "CRM integration", "Self-optimization"]
  }
]

function RoadmapCard({ item }: { item: typeof roadmap[0] }) {
  const Icon = item.icon
  const statusColors: Record<StatusType, string> = {
    completed: "text-emerald-600 bg-emerald-50",
    "in-progress": "text-blue-600 bg-blue-50",
    planned: "text-gray-500 bg-gray-50"
  }

  return (
    <div className="glass card hover-lift h-full p-6">
      <div className="flex items-center gap-3 mb-4">
        <div className={`p-2 rounded-lg ${statusColors[item.status as StatusType]}`}>
          <Icon className="w-5 h-5" />
        </div>
        <div>
          <div className="font-semibold text-gray-900">{item.phase}</div>
          <div className="text-sm text-gray-600 capitalize">{item.status.replace('-', ' ')}</div>
        </div>
      </div>
      
      <h3 className="text-lg font-semibold text-gray-900 mb-2">{item.title}</h3>
      <p className="text-gray-600 mb-4 text-sm">{item.description}</p>
      
      <ul className="space-y-1">
        {item.features.map((feature, index) => (
          <li key={index} className="text-sm text-gray-600 flex items-center gap-2">
            <div className="w-1 h-1 rounded-full bg-gray-400"></div>
            {feature}
          </li>
        ))}
      </ul>
    </div>
  )
}

export default function Architecture() {
  return (
    <section className="section">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Technical Architecture</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Built on a robust foundation with a clear roadmap to full autonomy. 
            Our architecture scales from simple automation to intelligent digital employees.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {roadmap.map((item, index) => (
            <RoadmapCard key={index} item={item} />
          ))}
        </div>
        
        <div className="mt-12 text-center">
          <div className="glass card p-8 max-w-4xl mx-auto">
            <h3 className="text-2xl font-semibold text-gray-900 mb-4">Current Infrastructure</h3>
            <div className="grid md:grid-cols-2 gap-6 text-left">
              <div>
                <h4 className="font-semibold text-gray-900 mb-2">Business Agent Repo (Windows)</h4>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• Operator (hands) - Task execution</li>
                  <li>• Runner (executor) - Process management</li>
                  <li>• Orchestrator (brain) - Workflow coordination</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-gray-900 mb-2">Mac Prototypes</h4>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• Advanced AI employee with perception</li>
                  <li>• Memory and context management</li>
                  <li>• Error recovery and learning</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
