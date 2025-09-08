"use client";
import { useState } from "react";
import { 
  ChevronDown, 
  ChevronUp, 
  HelpCircle, 
  MessageSquare, 
  Shield, 
  Clock,
  Users,
  Zap,
  Brain,
  CheckCircle
} from "lucide-react";

export default function LuhreetechFAQ() {
  const [openItems, setOpenItems] = useState<number[]>([]);

  const toggleItem = (index: number) => {
    setOpenItems(prev => 
      prev.includes(index) 
        ? prev.filter(item => item !== index)
        : [...prev, index]
    );
  };

  const faqCategories = [
    {
      title: "Getting Started",
      icon: Zap,
      color: "from-blue-500 to-blue-600",
      questions: [
        {
          question: "How quickly can I get started with Luhreetech?",
          answer: "You can be up and running in under an hour. Our setup process includes: connecting your tools (2 minutes), customizing workflows (15 minutes), and testing with real scenarios (30 minutes). Most customers are live within 60 minutes of signup."
        },
        {
          question: "Do I need technical expertise to use Luhreetech?",
          answer: "Not at all! Luhreetech is designed for business owners, not developers. Our team handles all the technical setup, customization, and ongoing maintenance. You just need to provide your business information and preferences."
        },
        {
          question: "What information do you need to set up my AI employee?",
          answer: "We need your business name, services offered, typical customer questions, appointment types, and any specific scripts or responses you'd like the AI to use. We'll also need access to your calendar and any CRM systems you want to integrate."
        },
        {
          question: "Can I try Luhreetech before committing?",
          answer: "Yes! We offer a 14-day free trial with full access to all features. No credit card required to start, and you can cancel anytime during the trial period."
        }
      ]
    },
    {
      title: "How It Works",
      icon: Brain,
      color: "from-green-500 to-green-600",
      questions: [
        {
          question: "How does the AI know what to say for my business?",
          answer: "During setup, we analyze your business, existing scripts, and customer interactions to create a customized AI personality. The AI learns your tone, services, pricing, and processes to respond authentically to your customers."
        },
        {
          question: "Is the AI's speech natural and professional?",
          answer: "Absolutely! Our AI uses advanced language models trained on professional business communications. It speaks naturally, asks relevant follow-up questions, and maintains a professional tone that matches your brand."
        },
        {
          question: "What if the AI can't answer a question?",
          answer: "The AI is trained to handle 95% of common inquiries. For complex questions it can't answer, it will politely transfer the call to you or your team, providing a summary of what the customer needs."
        },
        {
          question: "Can the AI handle multiple languages?",
          answer: "Yes! Luhreetech supports over 50 languages and can automatically detect the customer's preferred language. You can also set specific language preferences for different regions or customer segments."
        }
      ]
    },
    {
      title: "Integrations & Setup",
      icon: MessageSquare,
      color: "from-purple-500 to-purple-600",
      questions: [
        {
          question: "What tools can Luhreetech integrate with?",
          answer: "Luhreetech integrates with 100+ popular business tools including Google Calendar, Outlook, Salesforce, HubSpot, Slack, WhatsApp, and most major CRM systems. We're constantly adding new integrations based on customer needs."
        },
        {
          question: "How long does integration setup take?",
          answer: "Most integrations take 2-5 minutes to connect. Our team handles the technical setup, so you just need to authorize the connection. Complex custom integrations may take up to 24 hours."
        },
        {
          question: "Is my data secure when using Luhreetech?",
          answer: "Yes! We use enterprise-grade security with SOC 2 compliance, end-to-end encryption, and secure API connections. Your data is never shared with third parties and is stored in secure, encrypted databases."
        },
        {
          question: "Can I customize the AI's responses?",
          answer: "Absolutely! You can customize greetings, responses, questions, and workflows. You can also set different responses for different types of inquiries or customer segments."
        }
      ]
    },
    {
      title: "Pricing & Plans",
      icon: Users,
      color: "from-orange-500 to-orange-600",
      questions: [
        {
          question: "What's included in each pricing plan?",
          answer: "Starter includes 1 AI employee and basic features. Growth includes 2-3 AI employees with advanced analytics and integrations. Enterprise includes unlimited AI employees, custom development, and dedicated support."
        },
        {
          question: "Are there any setup fees or hidden costs?",
          answer: "No setup fees, no hidden costs! The price you see is what you pay. All plans include setup, training, and ongoing support at no extra charge."
        },
        {
          question: "Can I change plans anytime?",
          answer: "Yes! You can upgrade or downgrade your plan at any time with no penalties. Changes take effect immediately, and we'll prorate any billing differences."
        },
        {
          question: "Do you offer custom pricing for large organizations?",
          answer: "Yes! Our Enterprise plan includes custom pricing based on your specific needs, volume requirements, and integration complexity. Contact our sales team for a custom quote."
        }
      ]
    },
    {
      title: "Support & Maintenance",
      icon: Shield,
      color: "from-teal-500 to-teal-600",
      questions: [
        {
          question: "What kind of support do you provide?",
          answer: "We provide comprehensive support including setup assistance, training, ongoing optimization, and 24/7 technical support. Enterprise customers get a dedicated account manager and priority support."
        },
        {
          question: "How often do you update and improve the AI?",
          answer: "We continuously improve our AI with weekly updates, new features, and performance optimizations. You'll automatically receive these improvements without any action required on your part."
        },
        {
          question: "What happens if there's a technical issue?",
          answer: "We have 99.9% uptime with automatic failover systems. If any issues occur, our team is notified immediately and works to resolve them within minutes. You'll also get real-time status updates."
        },
        {
          question: "Can I get help optimizing my AI's performance?",
          answer: "Yes! Our team regularly reviews your AI's performance and provides optimization recommendations. We can adjust responses, workflows, and integrations to improve results."
        }
      ]
    }
  ];

  return (
    <section className="section relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-brand-surface-lo via-white to-brand-mint/20" />
      
      <div className="container relative z-10">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-brand-mint/50 text-brand-teal text-sm font-medium mb-6">
            <HelpCircle className="w-4 h-4" />
            <span>Frequently Asked Questions</span>
          </div>
          
          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            <span className="text-brand-text-primary">Still Have</span>
            <br />
            <span className="text-gradient">Questions?</span>
          </h2>
          
          <p className="text-xl text-brand-text-secondary max-w-4xl mx-auto leading-relaxed">
            Get answers to the most common questions about Luhreetech. 
            Can't find what you're looking for? Contact our support team for personalized assistance.
          </p>
        </div>

        {/* FAQ Categories */}
        <div className="space-y-8">
          {faqCategories.map((category, categoryIndex) => {
            const Icon = category.icon;
            return (
              <div key={categoryIndex} className="glass-deep card p-8">
                <div className="flex items-center gap-4 mb-8">
                  <div className={`w-12 h-12 rounded-xl bg-gradient-to-r ${category.color} flex items-center justify-center`}>
                    <Icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-brand-text-primary">
                    {category.title}
                  </h3>
                </div>

                <div className="space-y-4">
                  {category.questions.map((item, itemIndex) => {
                    const globalIndex = categoryIndex * 10 + itemIndex;
                    const isOpen = openItems.includes(globalIndex);
                    
                    return (
                      <div key={itemIndex} className="border border-gray-200 rounded-xl overflow-hidden">
                        <button
                          onClick={() => toggleItem(globalIndex)}
                          className="w-full p-6 text-left flex items-center justify-between hover:bg-gray-50 transition-colors duration-200"
                        >
                          <span className="text-lg font-semibold text-brand-text-primary pr-4">
                            {item.question}
                          </span>
                          <div className="flex-shrink-0">
                            {isOpen ? (
                              <ChevronUp className="w-5 h-5 text-brand-teal" />
                            ) : (
                              <ChevronDown className="w-5 h-5 text-brand-text-secondary" />
                            )}
                          </div>
                        </button>
                        
                        {isOpen && (
                          <div className="px-6 pb-6">
                            <div className="text-brand-text-secondary leading-relaxed">
                              {item.answer}
                            </div>
                          </div>
                        )}
                      </div>
                    );
                  })}
                </div>
              </div>
            );
          })}
        </div>

        {/* Contact Support */}
        <div className="glass-deep card p-8 md:p-12 mt-16 text-center">
          <div className="w-16 h-16 mx-auto mb-6 rounded-2xl bg-gradient-to-r from-brand-teal to-brand-accent flex items-center justify-center">
            <MessageSquare className="w-8 h-8 text-white" />
          </div>
          
          <h3 className="text-3xl font-bold text-brand-text-primary mb-4">
            Still Need Help?
          </h3>
          
          <p className="text-lg text-brand-text-secondary mb-8 max-w-2xl mx-auto">
            Our support team is here to help you get the most out of Luhreetech. 
            Get personalized assistance with setup, customization, or any questions you have.
          </p>
          
          <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto mb-8">
            <div className="text-center">
              <div className="w-12 h-12 mx-auto mb-3 rounded-xl bg-blue-100 flex items-center justify-center">
                <Clock className="w-6 h-6 text-blue-600" />
              </div>
              <h4 className="font-semibold text-brand-text-primary mb-1">24/7 Support</h4>
              <p className="text-sm text-brand-text-secondary">Round-the-clock assistance</p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 mx-auto mb-3 rounded-xl bg-green-100 flex items-center justify-center">
                <CheckCircle className="w-6 h-6 text-green-600" />
              </div>
              <h4 className="font-semibold text-brand-text-primary mb-1">Expert Setup</h4>
              <p className="text-sm text-brand-text-secondary">Hands-on implementation help</p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 mx-auto mb-3 rounded-xl bg-purple-100 flex items-center justify-center">
                <Brain className="w-6 h-6 text-purple-600" />
              </div>
              <h4 className="font-semibold text-brand-text-primary mb-1">AI Optimization</h4>
              <p className="text-sm text-brand-text-secondary">Performance tuning and tips</p>
            </div>
          </div>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <button className="btn-primary text-lg px-8 py-4 hover-glow-enhanced">
              <span>Contact Support</span>
              <MessageSquare className="w-5 h-5 ml-2" />
            </button>
            <button className="btn-ghost text-lg px-8 py-4">
              <span>Schedule a Call</span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
