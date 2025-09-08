"use client";
import { useState, useEffect } from "react";
import { 
  Phone, 
  MessageSquare, 
  Calendar, 
  Mail, 
  Users, 
  CheckCircle,
  ArrowRight,
  Play,
  Pause,
  RotateCcw,
  Clock,
  Zap,
  Shield,
  Brain,
  BarChart3
} from "lucide-react";

export default function FeaturesWorkflowSection() {
  const [activeWorkflow, setActiveWorkflow] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentStep, setCurrentStep] = useState(0);

  const workflows = [
    {
      id: "incoming-call",
      title: "Incoming Call Handling",
      description: "How your AI receptionist handles incoming calls professionally",
      icon: Phone,
      color: "from-blue-500 to-blue-600",
      steps: [
        { 
          action: "Phone rings", 
          description: "Customer calls your business number",
          icon: Phone,
          duration: 2000
        },
        { 
          action: "AI answers instantly", 
          description: "AI greets caller professionally within 1 second",
          icon: Brain,
          duration: 3000
        },
        { 
          action: "Qualifies inquiry", 
          description: "Asks relevant questions to understand needs",
          icon: MessageSquare,
          duration: 4000
        },
        { 
          action: "Schedules appointment", 
          description: "Books meeting directly in your calendar",
          icon: Calendar,
          duration: 3000
        },
        { 
          action: "Sends confirmation", 
          description: "Follows up with email and SMS confirmation",
          icon: Mail,
          duration: 2000
        }
      ]
    },
    {
      id: "web-chat",
      title: "Web Chat Support",
      description: "24/7 website chat handling with instant responses",
      icon: MessageSquare,
      color: "from-green-500 to-green-600",
      steps: [
        { 
          action: "Visitor starts chat", 
          description: "Customer initiates conversation on your website",
          icon: MessageSquare,
          duration: 2000
        },
        { 
          action: "AI responds immediately", 
          description: "Instant response with personalized greeting",
          icon: Zap,
          duration: 1000
        },
        { 
          action: "Gathers information", 
          description: "Collects details about their inquiry or needs",
          icon: Users,
          duration: 3000
        },
        { 
          action: "Provides solutions", 
          description: "Offers relevant information or schedules consultation",
          icon: CheckCircle,
          duration: 3000
        },
        { 
          action: "Hands off to human", 
          description: "Transfers complex inquiries to your team seamlessly",
          icon: ArrowRight,
          duration: 2000
        }
      ]
    },
    {
      id: "lead-qualification",
      title: "Lead Qualification",
      description: "Intelligent lead scoring and qualification process",
      icon: Users,
      color: "from-purple-500 to-purple-600",
      steps: [
        { 
          action: "Lead inquiry received", 
          description: "New prospect contacts your business",
          icon: Users,
          duration: 2000
        },
        { 
          action: "AI asks qualifying questions", 
          description: "Gathers budget, timeline, and decision-making info",
          icon: MessageSquare,
          duration: 4000
        },
        { 
          action: "Scores lead quality", 
          description: "Evaluates lead based on your criteria",
          icon: BarChart3,
          duration: 2000
        },
        { 
          action: "Routes to appropriate team", 
          description: "Sends high-quality leads to sales team",
          icon: ArrowRight,
          duration: 2000
        },
        { 
          action: "Updates CRM", 
          description: "Automatically logs all interaction details",
          icon: Shield,
          duration: 2000
        }
      ]
    }
  ];

  const features = [
    {
      icon: Phone,
      title: "Answer Calls & Inquiries",
      description: "Handles phone calls, web chats, and texts with natural conversation flow and dynamic information.",
      stats: "24/7 availability",
      color: "from-blue-500 to-blue-600"
    },
    {
      icon: Users,
      title: "Qualify Leads",
      description: "Asks the right questions to gauge lead quality and routes high-value prospects to your team.",
      stats: "98% accuracy rate",
      color: "from-green-500 to-green-600"
    },
    {
      icon: Calendar,
      title: "Schedule Appointments",
      description: "Accesses your calendar to book meetings and appointments on the spot with automatic confirmations.",
      stats: "Instant booking",
      color: "from-purple-500 to-purple-600"
    },
    {
      icon: Mail,
      title: "Follow-ups & Reminders",
      description: "Sends personalized follow-up emails and texts to ensure no one falls through the cracks.",
      stats: "100% follow-up rate",
      color: "from-orange-500 to-orange-600"
    }
  ];

  useEffect(() => {
    let interval: NodeJS.Timeout;
    if (isPlaying && currentStep < workflows[activeWorkflow].steps.length - 1) {
      interval = setInterval(() => {
        setCurrentStep(prev => prev + 1);
      }, workflows[activeWorkflow].steps[currentStep].duration);
    } else if (currentStep >= workflows[activeWorkflow].steps.length - 1) {
      setIsPlaying(false);
    }
    return () => clearInterval(interval);
  }, [isPlaying, currentStep, activeWorkflow]);

  const handlePlay = () => {
    if (currentStep >= workflows[activeWorkflow].steps.length - 1) {
      setCurrentStep(0);
    }
    setIsPlaying(!isPlaying);
  };

  const handleReset = () => {
    setIsPlaying(false);
    setCurrentStep(0);
  };

  return (
    <section className="section relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-brand-surface-lo via-white to-brand-mint/20" />
      
      <div className="container relative z-10">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-brand-mint/50 text-brand-teal text-sm font-medium mb-6">
            <Brain className="w-4 h-4" />
            <span>Features & Workflows</span>
          </div>
          
          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            <span className="text-brand-text-primary">See Your AI Employee</span>
            <br />
            <span className="text-gradient">In Action</span>
          </h2>
          
          <p className="text-xl text-brand-text-secondary max-w-4xl mx-auto leading-relaxed">
            Watch how your AI receptionist handles real business scenarios. 
            From answering calls to qualifying leads, see the complete workflow in action.
          </p>
        </div>

        {/* Workflow Selector */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {workflows.map((workflow, index) => {
            const Icon = workflow.icon;
            return (
              <button
                key={workflow.id}
                onClick={() => {
                  setActiveWorkflow(index);
                  setCurrentStep(0);
                  setIsPlaying(false);
                }}
                className={`flex items-center gap-3 px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                  activeWorkflow === index
                    ? `bg-gradient-to-r ${workflow.color} text-white shadow-lg scale-105`
                    : `glass text-brand-text-secondary hover:glass-crystal hover:text-brand-text-primary`
                }`}
              >
                <Icon className="w-5 h-5" />
                <span>{workflow.title}</span>
              </button>
            );
          })}
        </div>

        {/* Interactive Workflow Demo */}
        <div className="glass-deep card p-8 md:p-12 mb-16">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Side - Workflow Steps */}
            <div>
              <div className="flex items-center gap-4 mb-8">
                <div className={`w-16 h-16 rounded-2xl bg-gradient-to-r ${workflows[activeWorkflow].color} flex items-center justify-center`}>
                  {(() => {
                    const Icon = workflows[activeWorkflow].icon;
                    return <Icon className="w-8 h-8 text-white" />;
                  })()}
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-brand-text-primary">
                    {workflows[activeWorkflow].title}
                  </h3>
                  <p className="text-brand-text-secondary">
                    {workflows[activeWorkflow].description}
                  </p>
                </div>
              </div>

              {/* Controls */}
              <div className="flex items-center gap-4 mb-8">
                <button
                  onClick={handlePlay}
                  className={`w-12 h-12 rounded-full flex items-center justify-center transition-all duration-300 ${
                    isPlaying 
                      ? 'bg-red-500 hover:bg-red-600 text-white' 
                      : 'bg-brand-teal hover:bg-brand-accent text-white'
                  }`}
                >
                  {isPlaying ? <Pause className="w-5 h-5" /> : <Play className="w-5 h-5" />}
                </button>
                <button
                  onClick={handleReset}
                  className="w-12 h-12 rounded-full bg-gray-200 hover:bg-gray-300 text-gray-600 flex items-center justify-center transition-all duration-300"
                >
                  <RotateCcw className="w-5 h-5" />
                </button>
                <div className="text-sm text-brand-text-secondary">
                  Step {currentStep + 1} of {workflows[activeWorkflow].steps.length}
                </div>
              </div>

              {/* Steps */}
              <div className="space-y-4">
                {workflows[activeWorkflow].steps.map((step, index) => {
                  const StepIcon = step.icon;
                  return (
                    <div
                      key={index}
                      className={`flex items-center gap-4 p-4 rounded-xl transition-all duration-500 ${
                        index <= currentStep
                          ? 'glass-crystal scale-105'
                          : 'glass opacity-60'
                      }`}
                    >
                      <div className={`w-10 h-10 rounded-full flex items-center justify-center ${
                        index < currentStep 
                          ? 'bg-green-500 text-white' 
                          : index === currentStep 
                            ? `bg-gradient-to-r ${workflows[activeWorkflow].color} text-white animate-pulse`
                            : 'bg-gray-200 text-gray-500'
                      }`}>
                        {index < currentStep ? (
                          <CheckCircle className="w-5 h-5" />
                        ) : (
                          <StepIcon className="w-5 h-5" />
                        )}
                      </div>
                      <div className="flex-1">
                        <div className="font-semibold text-brand-text-primary">
                          {step.action}
                        </div>
                        <div className="text-sm text-brand-text-secondary">
                          {step.description}
                        </div>
                      </div>
                      {index === currentStep && isPlaying && (
                        <div className="w-2 h-2 rounded-full bg-brand-teal animate-pulse" />
                      )}
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Right Side - Visual Demo */}
            <div className="space-y-6">
              {/* Demo Interface */}
              <div className="glass card p-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-3 h-3 rounded-full bg-red-500" />
                  <div className="w-3 h-3 rounded-full bg-yellow-500" />
                  <div className="w-3 h-3 rounded-full bg-green-500" />
                  <div className="text-sm text-brand-text-secondary ml-2">AI Receptionist Demo</div>
                </div>
                
                <div className="bg-gray-50 rounded-lg p-4 min-h-[200px]">
                  {currentStep < workflows[activeWorkflow].steps.length ? (
                    <div className="space-y-3">
                      <div className="flex items-start gap-3">
                        <div className="w-8 h-8 rounded-full bg-brand-teal flex items-center justify-center">
                          <Brain className="w-4 h-4 text-white" />
                        </div>
                        <div className="bg-white rounded-lg p-3 shadow-sm">
                          <div className="text-sm text-brand-text-primary">
                            {workflows[activeWorkflow].steps[currentStep].description}
                          </div>
                        </div>
                      </div>
                      
                      {currentStep > 0 && (
                        <div className="flex items-start gap-3">
                          <div className="w-8 h-8 rounded-full bg-gray-300 flex items-center justify-center">
                            <Users className="w-4 h-4 text-gray-600" />
                          </div>
                          <div className="bg-gray-100 rounded-lg p-3">
                            <div className="text-sm text-gray-600">
                              Customer response...
                            </div>
                          </div>
                        </div>
                      )}
                    </div>
                  ) : (
                    <div className="flex items-center justify-center h-full">
                      <div className="text-center">
                        <CheckCircle className="w-12 h-12 text-green-500 mx-auto mb-2" />
                        <div className="text-sm text-brand-text-primary font-medium">
                          Workflow Complete!
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-2 gap-4">
                <div className="glass card p-4 text-center">
                  <div className="text-2xl font-bold text-brand-text-primary mb-1">
                    &lt; 1s
                  </div>
                  <div className="text-xs text-brand-text-secondary">Response Time</div>
                </div>
                <div className="glass card p-4 text-center">
                  <div className="text-2xl font-bold text-brand-text-primary mb-1">
                    24/7
                  </div>
                  <div className="text-xs text-brand-text-secondary">Availability</div>
                </div>
                <div className="glass card p-4 text-center">
                  <div className="text-2xl font-bold text-brand-text-primary mb-1">
                    98%
                  </div>
                  <div className="text-xs text-brand-text-secondary">Accuracy</div>
                </div>
                <div className="glass card p-4 text-center">
                  <div className="text-2xl font-bold text-brand-text-primary mb-1">
                    100%
                  </div>
                  <div className="text-xs text-brand-text-secondary">Follow-up</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Core Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div key={index} className="glass card hover-lift-enhanced p-6 text-center group">
                <div className={`w-16 h-16 mx-auto mb-4 rounded-2xl bg-gradient-to-r ${feature.color} flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                  <Icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-brand-text-primary mb-2">
                  {feature.title}
                </h3>
                <p className="text-sm text-brand-text-secondary mb-3 leading-relaxed">
                  {feature.description}
                </p>
                <div className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-brand-mint/50 text-xs font-medium text-brand-teal">
                  <Zap className="w-3 h-3" />
                  <span>{feature.stats}</span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Interactive Demo CTA */}
        <div className="glass-deep card p-8 md:p-12 text-center">
          <div className="w-16 h-16 mx-auto mb-6 rounded-2xl bg-gradient-to-r from-brand-teal to-brand-accent flex items-center justify-center">
            <Play className="w-8 h-8 text-white" />
          </div>
          
          <h3 className="text-3xl font-bold text-brand-text-primary mb-4">
            Try It Yourself
          </h3>
          
          <p className="text-lg text-brand-text-secondary mb-8 max-w-2xl mx-auto">
            Experience how your AI employee will handle real customer interactions. 
            Book a live demo to see Luhreetech in action with your specific use case.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <button className="btn-primary text-lg px-8 py-4 hover-glow-enhanced">
              <span>Book Live Demo</span>
              <ArrowRight className="w-5 h-5 ml-2" />
            </button>
            <button className="btn-ghost text-lg px-8 py-4">
              <span>Watch Video Demo</span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
