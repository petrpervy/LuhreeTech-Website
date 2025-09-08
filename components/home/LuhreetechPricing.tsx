"use client";
import { Button } from "../ui/Button";
import { 
  Check, 
  Star, 
  ArrowRight, 
  Phone, 
  Users, 
  Shield, 
  Zap,
  Headphones,
  Crown
} from "lucide-react";
import { useState } from "react";

export default function LuhreetechPricing() {
  const [isAnnual, setIsAnnual] = useState(false);

  const plans = [
    {
      name: "Starter",
      description: "Perfect for solo practitioners and small businesses",
      monthlyPrice: 500,
      annualPrice: 5000,
      icon: Phone,
      color: "from-blue-500 to-blue-600",
      bgColor: "bg-blue-50",
      textColor: "text-blue-600",
      popular: false,
      features: [
        "1 AI Receptionist",
        "Basic call & web chat handling",
        "Appointment scheduling",
        "Basic CRM integration",
        "Email follow-ups",
        "Shared support",
        "Standard response time",
        "Basic analytics"
      ],
      limitations: [
        "Single department only",
        "Limited customizations",
        "Standard business hours support"
      ]
    },
    {
      name: "Growth",
      description: "Ideal for growing businesses with multiple processes",
      monthlyPrice: 1500,
      annualPrice: 15000,
      icon: Users,
      color: "from-brand-teal to-brand-accent",
      bgColor: "bg-brand-mint/50",
      textColor: "text-brand-teal",
      popular: true,
      features: [
        "2-3 AI Employees",
        "Multi-channel communication",
        "Advanced appointment scheduling",
        "Full CRM integration",
        "Custom workflows",
        "Priority support",
        "Advanced analytics dashboard",
        "Custom integrations",
        "Lead qualification",
        "Follow-up automation"
      ],
      limitations: [
        "Up to 3 departments",
        "Standard SLA"
      ]
    },
    {
      name: "Enterprise",
      description: "For large firms requiring advanced automation",
      monthlyPrice: 3500,
      annualPrice: 35000,
      icon: Crown,
      color: "from-purple-500 to-purple-600",
      bgColor: "bg-purple-50",
      textColor: "text-purple-600",
      popular: false,
      features: [
        "Unlimited AI Employees",
        "Multi-agent systems",
        "Full workflow customization",
        "Advanced integrations",
        "Dedicated account manager",
        "24/7 priority support",
        "Custom AI training",
        "Advanced reporting",
        "SLA uptime guarantees",
        "White-label options",
        "API access",
        "Custom development"
      ],
      limitations: []
    }
  ];

  const savings = {
    starter: { monthly: 0, annual: 1000 },
    growth: { monthly: 0, annual: 3000 },
    enterprise: { monthly: 0, annual: 7000 }
  };

  return (
    <section className="section relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-brand-surface-lo via-white to-brand-mint/20" />
      
      <div className="container relative z-10">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-brand-mint/50 text-brand-teal text-sm font-medium mb-6">
            <Star className="w-4 h-4" />
            <span>Simple Pricing for Any Size</span>
          </div>
          
          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            <span className="text-brand-text-primary">Plans for Every</span>
            <br />
            <span className="text-gradient">Business</span>
          </h2>
          
          <p className="text-xl text-brand-text-secondary max-w-3xl mx-auto leading-relaxed mb-8">
            Choose the plan that fits your business needs. All plans include setup, training, 
            and ongoing support. No hidden fees, no long-term contracts.
          </p>

          {/* Annual/Monthly Toggle */}
          <div className="flex items-center justify-center gap-4 mb-8">
            <span className={`text-sm font-medium ${!isAnnual ? 'text-brand-text-primary' : 'text-brand-text-secondary'}`}>
              Monthly
            </span>
            <button
              onClick={() => setIsAnnual(!isAnnual)}
              className={`relative w-14 h-7 rounded-full transition-colors duration-300 ${
                isAnnual ? 'bg-brand-teal' : 'bg-gray-300'
              }`}
            >
              <div
                className={`absolute top-1 left-1 w-5 h-5 bg-white rounded-full transition-transform duration-300 ${
                  isAnnual ? 'transform translate-x-7' : ''
                }`}
              />
            </button>
            <span className={`text-sm font-medium ${isAnnual ? 'text-brand-text-primary' : 'text-brand-text-secondary'}`}>
              Annual
            </span>
            {isAnnual && (
              <div className="inline-flex items-center gap-1 px-2 py-1 rounded-full bg-green-100 text-green-700 text-xs font-medium">
                <span>Save 17%</span>
              </div>
            )}
          </div>
        </div>

        {/* Pricing Cards */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {plans.map((plan, index) => {
            const Icon = plan.icon;
            const price = isAnnual ? plan.annualPrice : plan.monthlyPrice;
            const savingsAmount = isAnnual ? savings[plan.name.toLowerCase() as keyof typeof savings]?.annual : 0;
            
            return (
              <div
                key={plan.name}
                className={`glass card p-8 relative transition-all duration-300 hover:scale-105 ${
                  plan.popular 
                    ? 'ring-2 ring-brand-teal/20 glass-pulse scale-105' 
                    : 'hover:glass-crystal'
                }`}
              >
                {/* Popular Badge */}
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <div className="inline-flex items-center gap-1 px-4 py-2 rounded-full bg-gradient-to-r from-brand-teal to-brand-accent text-white text-sm font-medium">
                      <Star className="w-4 h-4 fill-current" />
                      <span>Most Popular</span>
                    </div>
                  </div>
                )}

                {/* Plan Header */}
                <div className="text-center mb-8">
                  <div className={`w-16 h-16 mx-auto mb-4 rounded-2xl bg-gradient-to-r ${plan.color} flex items-center justify-center`}>
                    <Icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-brand-text-primary mb-2">
                    {plan.name}
                  </h3>
                  <p className="text-brand-text-secondary mb-4">
                    {plan.description}
                  </p>
                  
                  {/* Pricing */}
                  <div className="mb-4">
                    <div className="flex items-baseline justify-center gap-2">
                      <span className="text-4xl font-bold text-brand-text-primary">
                        ${isAnnual ? Math.floor(price / 12) : price}
                      </span>
                      <span className="text-brand-text-secondary">
                        /{isAnnual ? 'month' : 'month'}
                      </span>
                    </div>
                    {isAnnual && (
                      <div className="text-sm text-green-600 font-medium">
                        Save ${savingsAmount}/year
                      </div>
                    )}
                    {isAnnual && (
                      <div className="text-sm text-brand-text-secondary">
                        Billed annually (${price}/year)
                      </div>
                    )}
                  </div>
                </div>

                {/* Features */}
                <div className="space-y-4 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-center gap-3">
                      <div className="w-5 h-5 rounded-full bg-green-100 flex items-center justify-center flex-shrink-0">
                        <Check className="w-3 h-3 text-green-600" />
                      </div>
                      <span className="text-brand-text-secondary text-sm">
                        {feature}
                      </span>
                    </div>
                  ))}
                </div>

                {/* Limitations */}
                {plan.limitations.length > 0 && (
                  <div className="mb-8">
                    <div className="text-xs text-brand-text-secondary mb-2 font-medium">
                      Limitations:
                    </div>
                    <div className="space-y-2">
                      {plan.limitations.map((limitation, limitIndex) => (
                        <div key={limitIndex} className="flex items-center gap-2">
                          <div className="w-1 h-1 rounded-full bg-gray-400" />
                          <span className="text-xs text-brand-text-secondary">
                            {limitation}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* CTA Button */}
                <Button
                  className={`w-full ${
                    plan.popular 
                      ? 'btn-primary hover-glow-enhanced' 
                      : 'btn-secondary'
                  }`}
                >
                  {plan.name === 'Enterprise' ? 'Contact Sales' : 'Start Free Trial'}
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Button>

                {/* Additional Info */}
                <div className="text-center mt-4">
                  <div className="text-xs text-brand-text-secondary">
                    {plan.name === 'Enterprise' ? 'Custom pricing available' : '14-day free trial, cancel anytime'}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Comparison Table */}
        <div className="glass-deep card p-8 md:p-12 mb-16">
          <h3 className="text-2xl font-bold text-brand-text-primary text-center mb-8">
            Compare All Features
          </h3>
          
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-gray-200">
                  <th className="text-left py-4 px-4 font-semibold text-brand-text-primary">Features</th>
                  <th className="text-center py-4 px-4 font-semibold text-brand-text-primary">Starter</th>
                  <th className="text-center py-4 px-4 font-semibold text-brand-text-primary">Growth</th>
                  <th className="text-center py-4 px-4 font-semibold text-brand-text-primary">Enterprise</th>
                </tr>
              </thead>
              <tbody className="text-sm">
                <tr className="border-b border-gray-100">
                  <td className="py-4 px-4 text-brand-text-secondary">AI Employees</td>
                  <td className="text-center py-4 px-4">1</td>
                  <td className="text-center py-4 px-4">2-3</td>
                  <td className="text-center py-4 px-4">Unlimited</td>
                </tr>
                <tr className="border-b border-gray-100">
                  <td className="py-4 px-4 text-brand-text-secondary">Call Handling</td>
                  <td className="text-center py-4 px-4">✓</td>
                  <td className="text-center py-4 px-4">✓</td>
                  <td className="text-center py-4 px-4">✓</td>
                </tr>
                <tr className="border-b border-gray-100">
                  <td className="py-4 px-4 text-brand-text-secondary">Web Chat</td>
                  <td className="text-center py-4 px-4">✓</td>
                  <td className="text-center py-4 px-4">✓</td>
                  <td className="text-center py-4 px-4">✓</td>
                </tr>
                <tr className="border-b border-gray-100">
                  <td className="py-4 px-4 text-brand-text-secondary">Advanced Analytics</td>
                  <td className="text-center py-4 px-4">-</td>
                  <td className="text-center py-4 px-4">✓</td>
                  <td className="text-center py-4 px-4">✓</td>
                </tr>
                <tr className="border-b border-gray-100">
                  <td className="py-4 px-4 text-brand-text-secondary">Custom Integrations</td>
                  <td className="text-center py-4 px-4">-</td>
                  <td className="text-center py-4 px-4">✓</td>
                  <td className="text-center py-4 px-4">✓</td>
                </tr>
                <tr className="border-b border-gray-100">
                  <td className="py-4 px-4 text-brand-text-secondary">Dedicated Support</td>
                  <td className="text-center py-4 px-4">-</td>
                  <td className="text-center py-4 px-4">-</td>
                  <td className="text-center py-4 px-4">✓</td>
                </tr>
                <tr>
                  <td className="py-4 px-4 text-brand-text-secondary">SLA Guarantee</td>
                  <td className="text-center py-4 px-4">-</td>
                  <td className="text-center py-4 px-4">-</td>
                  <td className="text-center py-4 px-4">✓</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* FAQ Section */}
        <div className="text-center mb-12">
          <h3 className="text-2xl font-bold text-brand-text-primary mb-4">
            Frequently Asked Questions
          </h3>
          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            <div className="text-left">
              <h4 className="font-semibold text-brand-text-primary mb-2">
                Is there a setup fee?
              </h4>
              <p className="text-sm text-brand-text-secondary">
                No setup fees. We handle all configuration and training at no extra cost.
              </p>
            </div>
            <div className="text-left">
              <h4 className="font-semibold text-brand-text-primary mb-2">
                Can I change plans anytime?
              </h4>
              <p className="text-sm text-brand-text-secondary">
                Yes, you can upgrade or downgrade your plan at any time with no penalties.
              </p>
            </div>
            <div className="text-left">
              <h4 className="font-semibold text-brand-text-primary mb-2">
                What's included in the free trial?
              </h4>
              <p className="text-sm text-brand-text-secondary">
                Full access to all features for 14 days. No credit card required to start.
              </p>
            </div>
            <div className="text-left">
              <h4 className="font-semibold text-brand-text-primary mb-2">
                Do you offer custom pricing?
              </h4>
              <p className="text-sm text-brand-text-secondary">
                Yes, Enterprise plans include custom pricing based on your specific needs.
              </p>
            </div>
          </div>
        </div>

        {/* Final CTA */}
        <div className="text-center">
          <p className="text-lg text-brand-text-secondary mb-6">
            Ready to transform your business with AI employees?
          </p>
          <Button className="btn-primary text-lg px-8 py-4 hover-glow-enhanced">
            <span>Start Your Free Trial</span>
            <ArrowRight className="w-5 h-5 ml-2" />
          </Button>
          <div className="text-sm text-brand-text-secondary mt-4">
            No credit card required • 14-day free trial • Cancel anytime
          </div>
        </div>
      </div>
    </section>
  );
}
