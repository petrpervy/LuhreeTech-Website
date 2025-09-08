"use client";
import { useState, useEffect } from "react";
import { 
  Calendar, 
  Mail, 
  Phone, 
  Database, 
  Zap, 
  Shield,
  CheckCircle,
  ArrowRight,
  Plug,
  Settings,
  Users,
  BarChart3,
  MessageSquare,
  Clock
} from "lucide-react";

export default function IntegrationSection() {
  const [activeIntegration, setActiveIntegration] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  const integrations = [
    {
      category: "Calendar & Scheduling",
      icon: Calendar,
      color: "from-blue-500 to-blue-600",
      tools: [
        { name: "Google Calendar", logo: "📅", connected: true },
        { name: "Outlook", logo: "📧", connected: true },
        { name: "Calendly", logo: "⏰", connected: true },
        { name: "Acuity Scheduling", logo: "📋", connected: false }
      ],
      description: "Seamlessly book appointments directly into your existing calendar system with automatic conflict detection and time zone handling."
    },
    {
      category: "Communication",
      icon: MessageSquare,
      color: "from-green-500 to-green-600",
      tools: [
        { name: "Slack", logo: "💬", connected: true },
        { name: "Microsoft Teams", logo: "👥", connected: true },
        { name: "WhatsApp Business", logo: "📱", connected: true },
        { name: "SMS", logo: "📲", connected: true }
      ],
      description: "Connect with your team through your preferred communication channels. Get instant notifications and updates."
    },
    {
      category: "CRM & Sales",
      icon: Users,
      color: "from-purple-500 to-purple-600",
      tools: [
        { name: "Salesforce", logo: "☁️", connected: true },
        { name: "HubSpot", logo: "🎯", connected: true },
        { name: "Pipedrive", logo: "📊", connected: true },
        { name: "Clio (Legal)", logo: "⚖️", connected: true }
      ],
      description: "Automatically log all interactions, update lead status, and sync customer data across your CRM platform."
    },
    {
      category: "Analytics & Reporting",
      icon: BarChart3,
      color: "from-orange-500 to-orange-600",
      tools: [
        { name: "Google Analytics", logo: "📈", connected: true },
        { name: "Mixpanel", logo: "🔍", connected: true },
        { name: "Tableau", logo: "📊", connected: false },
        { name: "Power BI", logo: "💡", connected: false }
      ],
      description: "Track performance metrics, conversion rates, and customer satisfaction with detailed analytics and reporting."
    }
  ];

  const setupSteps = [
    {
      step: 1,
      title: "Connect Your Tools",
      description: "Link your existing calendar, CRM, and communication tools with one-click integrations.",
      icon: Plug,
      duration: "2 minutes"
    },
    {
      step: 2,
      title: "Customize Workflows",
      description: "Configure your AI employee's responses, routing rules, and business processes.",
      icon: Settings,
      duration: "15 minutes"
    },
    {
      step: 3,
      title: "Test & Launch",
      description: "Run test scenarios and go live with your AI employee handling real customer interactions.",
      icon: CheckCircle,
      duration: "30 minutes"
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIntegration((prev) => (prev + 1) % integrations.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="section relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-brand-surface-lo via-white to-brand-mint/20" />
      
      <div className="container relative z-10">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-brand-mint/50 text-brand-teal text-sm font-medium mb-6">
            <Zap className="w-4 h-4" />
            <span>Seamless Integration</span>
          </div>
          
          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            <span className="text-brand-text-primary">Works with Your</span>
            <br />
            <span className="text-gradient">Existing Tools</span>
          </h2>
          
          <p className="text-xl text-brand-text-secondary max-w-4xl mx-auto leading-relaxed">
            Luhreetech integrates seamlessly with the tools you already use. 
            No complex setup, no data migration headaches – just connect and go.
          </p>
        </div>

        {/* Integration Categories */}
        <div className="mb-16">
          <div className="flex flex-wrap justify-center gap-4 mb-8">
            {integrations.map((integration, index) => {
              const Icon = integration.icon;
              return (
                <button
                  key={index}
                  onClick={() => setActiveIntegration(index)}
                  className={`flex items-center gap-3 px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                    activeIntegration === index
                      ? `bg-gradient-to-r ${integration.color} text-white shadow-lg scale-105`
                      : `glass text-brand-text-secondary hover:glass-crystal hover:text-brand-text-primary`
                  }`}
                >
                  <Icon className="w-5 h-5" />
                  <span>{integration.category}</span>
                </button>
              );
            })}
          </div>

          {/* Active Integration Details */}
          <div className="glass-deep card p-8 md:p-12">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              {/* Left Side - Integration Info */}
              <div>
                <div className="flex items-center gap-4 mb-6">
                  <div className={`w-16 h-16 rounded-2xl bg-gradient-to-r ${integrations[activeIntegration].color} flex items-center justify-center`}>
                    {(() => {
                      const Icon = integrations[activeIntegration].icon;
                      return <Icon className="w-8 h-8 text-white" />;
                    })()}
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-brand-text-primary">
                      {integrations[activeIntegration].category}
                    </h3>
                    <p className="text-brand-text-secondary">
                      Connect your favorite tools
                    </p>
                  </div>
                </div>

                <p className="text-lg text-brand-text-secondary mb-8 leading-relaxed">
                  {integrations[activeIntegration].description}
                </p>

                {/* Tools Grid */}
                <div className="grid grid-cols-2 gap-4">
                  {integrations[activeIntegration].tools.map((tool, index) => (
                    <div
                      key={index}
                      className={`glass card p-4 flex items-center gap-3 transition-all duration-300 ${
                        tool.connected ? 'ring-2 ring-green-200' : 'opacity-60'
                      }`}
                    >
                      <div className="text-2xl">{tool.logo}</div>
                      <div className="flex-1">
                        <div className="font-medium text-brand-text-primary text-sm">
                          {tool.name}
                        </div>
                        <div className="flex items-center gap-1">
                          {tool.connected ? (
                            <>
                              <CheckCircle className="w-3 h-3 text-green-500" />
                              <span className="text-xs text-green-600">Connected</span>
                            </>
                          ) : (
                            <>
                              <Clock className="w-3 h-3 text-gray-400" />
                              <span className="text-xs text-gray-500">Coming Soon</span>
                            </>
                          )}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Right Side - Visual Integration Flow */}
              <div className="space-y-6">
                {/* Integration Flow Diagram */}
                <div className="glass card p-6">
                  <h4 className="font-semibold text-brand-text-primary mb-4 text-center">
                    How It Works
                  </h4>
                  <div className="space-y-4">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-full bg-brand-teal text-white text-xs font-bold flex items-center justify-center">1</div>
                      <div className="flex-1">
                        <div className="text-sm font-medium text-brand-text-primary">Customer contacts you</div>
                        <div className="text-xs text-brand-text-secondary">Via phone, chat, or email</div>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-full bg-brand-teal text-white text-xs font-bold flex items-center justify-center">2</div>
                      <div className="flex-1">
                        <div className="text-sm font-medium text-brand-text-primary">AI processes request</div>
                        <div className="text-xs text-brand-text-secondary">Understands intent and context</div>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-full bg-brand-teal text-white text-xs font-bold flex items-center justify-center">3</div>
                      <div className="flex-1">
                        <div className="text-sm font-medium text-brand-text-primary">Updates your tools</div>
                        <div className="text-xs text-brand-text-secondary">Calendar, CRM, notifications</div>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-full bg-green-500 text-white text-xs font-bold flex items-center justify-center">✓</div>
                      <div className="flex-1">
                        <div className="text-sm font-medium text-brand-text-primary">Task completed</div>
                        <div className="text-xs text-brand-text-secondary">Customer satisfied, data synced</div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Security Badge */}
                <div className="glass card p-6 text-center">
                  <div className="w-12 h-12 mx-auto mb-3 rounded-xl bg-green-100 flex items-center justify-center">
                    <Shield className="w-6 h-6 text-green-600" />
                  </div>
                  <h4 className="font-semibold text-brand-text-primary mb-2">Enterprise Security</h4>
                  <p className="text-sm text-brand-text-secondary">
                    SOC 2 compliant with end-to-end encryption and secure API connections.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Setup Process */}
        <div className="glass-deep card p-8 md:p-12 mb-16">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-brand-text-primary mb-4">
              Setup in Minutes, Not Months
            </h3>
            <p className="text-lg text-brand-text-secondary max-w-2xl mx-auto">
              Get your AI employee up and running in under an hour with our streamlined setup process.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {setupSteps.map((step, index) => {
              const Icon = step.icon;
              return (
                <div key={index} className="text-center">
                  <div className="w-16 h-16 mx-auto mb-6 rounded-2xl bg-gradient-to-r from-brand-teal to-brand-accent flex items-center justify-center">
                    <Icon className="w-8 h-8 text-white" />
                  </div>
                  <div className="text-2xl font-bold text-brand-text-primary mb-2">
                    Step {step.step}
                  </div>
                  <h4 className="text-xl font-semibold text-brand-text-primary mb-3">
                    {step.title}
                  </h4>
                  <p className="text-brand-text-secondary mb-4 leading-relaxed">
                    {step.description}
                  </p>
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-mint/50 text-sm font-medium text-brand-teal">
                    <Clock className="w-3 h-3" />
                    <span>{step.duration}</span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Popular Integrations */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-brand-text-primary text-center mb-8">
            Popular Integrations
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6">
            {[
              { name: "Google Calendar", logo: "📅" },
              { name: "Salesforce", logo: "☁️" },
              { name: "Slack", logo: "💬" },
              { name: "HubSpot", logo: "🎯" },
              { name: "Outlook", logo: "📧" },
              { name: "WhatsApp", logo: "📱" },
              { name: "Calendly", logo: "⏰" },
              { name: "Pipedrive", logo: "📊" },
              { name: "Clio", logo: "⚖️" },
              { name: "Teams", logo: "👥" },
              { name: "Zapier", logo: "⚡" },
              { name: "Mailchimp", logo: "📬" }
            ].map((integration, index) => (
              <div key={index} className="glass card p-4 text-center hover-lift group">
                <div className="text-3xl mb-2 group-hover:scale-110 transition-transform duration-300">
                  {integration.logo}
                </div>
                <div className="text-sm font-medium text-brand-text-primary">
                  {integration.name}
                </div>
                <div className="flex items-center justify-center gap-1 mt-1">
                  <CheckCircle className="w-3 h-3 text-green-500" />
                  <span className="text-xs text-green-600">Ready</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="text-center">
          <p className="text-lg text-brand-text-secondary mb-6">
            Ready to connect your tools and automate your workflow?
          </p>
          <button className="btn-primary text-lg px-8 py-4 hover-glow-enhanced">
            <span>Start Integration Setup</span>
            <ArrowRight className="w-5 h-5 ml-2" />
          </button>
        </div>
      </div>
    </section>
  );
}
