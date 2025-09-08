"use client";
import { useState } from "react";
import { 
  Scale, 
  Megaphone, 
  Wrench, 
  Stethoscope, 
  Building, 
  Briefcase,
  CheckCircle,
  Clock,
  Users,
  Phone
} from "lucide-react";

export default function IndustrySection() {
  const [activeIndustry, setActiveIndustry] = useState(0);

  const industries = [
    {
      id: "law-firms",
      name: "Law Firms",
      icon: Scale,
      color: "from-blue-500 to-blue-600",
      bgColor: "bg-blue-50",
      textColor: "text-blue-600",
      description: "Handle intake calls for new clients, collect case details, schedule consults, and respect client confidentiality.",
      features: [
        "Client intake and case qualification",
        "Appointment scheduling for consultations",
        "Confidential information handling",
        "Follow-up on case status",
        "Integration with legal case management systems"
      ],
      testimonial: "Our call volume doubled and we never miss an inquiry now. The AI handles client intake better than our previous receptionist.",
      author: "John Doe, Esq.",
      company: "Smith & Associates Law"
    },
    {
      id: "marketing-agencies",
      name: "Marketing Agencies",
      icon: Megaphone,
      color: "from-purple-500 to-purple-600",
      bgColor: "bg-purple-50",
      textColor: "text-purple-600",
      description: "Qualify leads, schedule strategy calls, handle client inquiries, and manage project intake.",
      features: [
        "Lead qualification and scoring",
        "Strategy call scheduling",
        "Client project intake",
        "Campaign inquiry handling",
        "Integration with CRM and project management tools"
      ],
      testimonial: "We've seen a 40% increase in qualified leads since implementing Luhreetech. The AI asks the right questions every time.",
      author: "Sarah Johnson",
      company: "Creative Marketing Solutions"
    },
    {
      id: "home-services",
      name: "Home Services",
      icon: Wrench,
      color: "from-orange-500 to-orange-600",
      bgColor: "bg-orange-50",
      textColor: "text-orange-600",
      description: "Field service request calls 24/7, book appointments, provide basic quotes, and handle emergency calls.",
      features: [
        "24/7 service request handling",
        "Emergency call routing",
        "Appointment scheduling",
        "Basic quote generation",
        "Customer service follow-up"
      ],
      testimonial: "Never miss another service call. Our AI books appointments even at 2 AM and our customers love the instant response.",
      author: "Mike Rodriguez",
      company: "Premier Home Services"
    },
    {
      id: "medical-dental",
      name: "Medical & Dental",
      icon: Stethoscope,
      color: "from-green-500 to-green-600",
      bgColor: "bg-green-50",
      textColor: "text-green-600",
      description: "Schedule appointments, handle patient inquiries, manage insurance verification, and maintain HIPAA compliance.",
      features: [
        "Patient appointment scheduling",
        "Insurance verification",
        "HIPAA-compliant communication",
        "Prescription refill requests",
        "Integration with medical records systems"
      ],
      testimonial: "Our patients appreciate the 24/7 availability for scheduling. The AI handles everything professionally and securely.",
      author: "Dr. Emily Chen",
      company: "Family Medical Center"
    },
    {
      id: "consultancies",
      name: "Consultancies",
      icon: Briefcase,
      color: "from-indigo-500 to-indigo-600",
      bgColor: "bg-indigo-50",
      textColor: "text-indigo-600",
      description: "Qualify prospects, schedule discovery calls, handle client inquiries, and manage project intake.",
      features: [
        "Prospect qualification",
        "Discovery call scheduling",
        "Client inquiry management",
        "Project scope discussions",
        "Integration with consulting tools"
      ],
      testimonial: "The AI perfectly captures our consulting process. It qualifies leads and schedules calls exactly how we would.",
      author: "David Park",
      company: "Strategic Consulting Group"
    },
    {
      id: "real-estate",
      name: "Real Estate",
      icon: Building,
      color: "from-teal-500 to-teal-600",
      bgColor: "bg-teal-50",
      textColor: "text-teal-600",
      description: "Handle property inquiries, schedule showings, qualify buyers, and manage lead follow-up.",
      features: [
        "Property inquiry handling",
        "Showing appointment scheduling",
        "Buyer qualification",
        "Lead nurturing and follow-up",
        "Integration with MLS and CRM systems"
      ],
      testimonial: "Our AI never misses a lead and always follows up. It's like having a top-performing agent working 24/7.",
      author: "Lisa Thompson",
      company: "Elite Real Estate Group"
    }
  ];

  return (
    <section className="section relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-brand-surface-lo via-white to-brand-mint/30" />
      
      <div className="container relative z-10">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-brand-mint/50 text-brand-teal text-sm font-medium mb-6">
            <Users className="w-4 h-4" />
            <span>Built for Your Industry</span>
          </div>
          
          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            <span className="text-brand-text-primary">Tailored Solutions</span>
            <br />
            <span className="text-gradient">For Every Business</span>
          </h2>
          
          <p className="text-xl text-brand-text-secondary max-w-4xl mx-auto leading-relaxed">
            Luhreetech adapts to your industry's specific needs, workflows, and compliance requirements. 
            Each AI employee is customized to speak your language and handle your unique processes.
          </p>
        </div>

        {/* Industry Tabs */}
        <div className="mb-12">
          <div className="flex flex-wrap justify-center gap-3 mb-8">
            {industries.map((industry, index) => {
              const Icon = industry.icon;
              return (
                <button
                  key={industry.id}
                  onClick={() => setActiveIndustry(index)}
                  className={`flex items-center gap-2 px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                    activeIndustry === index
                      ? `bg-gradient-to-r ${industry.color} text-white shadow-lg scale-105`
                      : `glass text-brand-text-secondary hover:glass-crystal hover:text-brand-text-primary`
                  }`}
                >
                  <Icon className="w-4 h-4" />
                  <span>{industry.name}</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Active Industry Content */}
        <div className="glass-deep card p-8 md:p-12">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Side - Industry Info */}
            <div>
              <div className="flex items-center gap-4 mb-6">
                <div className={`w-16 h-16 rounded-2xl bg-gradient-to-r ${industries[activeIndustry].color} flex items-center justify-center`}>
                  {(() => {
                    const Icon = industries[activeIndustry].icon;
                    return <Icon className="w-8 h-8 text-white" />;
                  })()}
                </div>
                <div>
                  <h3 className="text-3xl font-bold text-brand-text-primary">
                    {industries[activeIndustry].name}
                  </h3>
                  <p className="text-brand-text-secondary">
                    Customized AI solutions for your industry
                  </p>
                </div>
              </div>

              <p className="text-lg text-brand-text-secondary mb-8 leading-relaxed">
                {industries[activeIndustry].description}
              </p>

              <div className="space-y-4 mb-8">
                {industries[activeIndustry].features.map((feature, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <div className="w-6 h-6 rounded-full bg-green-100 flex items-center justify-center flex-shrink-0">
                      <CheckCircle className="w-4 h-4 text-green-600" />
                    </div>
                    <span className="text-brand-text-secondary">{feature}</span>
                  </div>
                ))}
              </div>

              {/* Testimonial */}
              <div className={`${industries[activeIndustry].bgColor} p-6 rounded-2xl`}>
                <div className="flex items-center gap-2 mb-3">
                  <div className="flex">
                    {[...Array(5)].map((_, i) => (
                      <div key={i} className="w-4 h-4 text-yellow-400 fill-current">
                        ★
                      </div>
                    ))}
                  </div>
                  <span className="text-sm font-medium text-brand-text-secondary">5.0</span>
                </div>
                <blockquote className="text-brand-text-primary font-medium mb-3">
                  "{industries[activeIndustry].testimonial}"
                </blockquote>
                <div className="text-sm text-brand-text-secondary">
                  <div className="font-semibold">{industries[activeIndustry].author}</div>
                  <div>{industries[activeIndustry].company}</div>
                </div>
              </div>
            </div>

            {/* Right Side - Visual/Stats */}
            <div className="space-y-6">
              {/* Key Metrics */}
              <div className="grid grid-cols-2 gap-4">
                <div className="glass card p-6 text-center">
                  <div className="w-12 h-12 mx-auto mb-3 rounded-xl bg-gradient-to-r from-brand-teal to-brand-accent flex items-center justify-center">
                    <Phone className="w-6 h-6 text-white" />
                  </div>
                  <div className="text-2xl font-bold text-brand-text-primary mb-1">24/7</div>
                  <div className="text-sm text-brand-text-secondary">Call Handling</div>
                </div>
                <div className="glass card p-6 text-center">
                  <div className="w-12 h-12 mx-auto mb-3 rounded-xl bg-gradient-to-r from-brand-teal to-brand-accent flex items-center justify-center">
                    <Clock className="w-6 h-6 text-white" />
                  </div>
                  <div className="text-2xl font-bold text-brand-text-primary mb-1">&lt; 1min</div>
                  <div className="text-sm text-brand-text-secondary">Response Time</div>
                </div>
                <div className="glass card p-6 text-center">
                  <div className="w-12 h-12 mx-auto mb-3 rounded-xl bg-gradient-to-r from-brand-teal to-brand-accent flex items-center justify-center">
                    <Users className="w-6 h-6 text-white" />
                  </div>
                  <div className="text-2xl font-bold text-brand-text-primary mb-1">98%</div>
                  <div className="text-sm text-brand-text-secondary">Satisfaction</div>
                </div>
                <div className="glass card p-6 text-center">
                  <div className="w-12 h-12 mx-auto mb-3 rounded-xl bg-gradient-to-r from-brand-teal to-brand-accent flex items-center justify-center">
                    <CheckCircle className="w-6 h-6 text-white" />
                  </div>
                  <div className="text-2xl font-bold text-brand-text-primary mb-1">100%</div>
                  <div className="text-sm text-brand-text-secondary">Compliance</div>
                </div>
              </div>

              {/* Industry-Specific Workflow */}
              <div className="glass card p-6">
                <h4 className="font-semibold text-brand-text-primary mb-4">
                  Typical {industries[activeIndustry].name} Workflow
                </h4>
                <div className="space-y-3">
                  <div className="flex items-center gap-3">
                    <div className="w-6 h-6 rounded-full bg-brand-teal text-white text-xs font-bold flex items-center justify-center">1</div>
                    <span className="text-sm text-brand-text-secondary">Customer inquiry received</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-6 h-6 rounded-full bg-brand-teal text-white text-xs font-bold flex items-center justify-center">2</div>
                    <span className="text-sm text-brand-text-secondary">AI qualifies and gathers information</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-6 h-6 rounded-full bg-brand-teal text-white text-xs font-bold flex items-center justify-center">3</div>
                    <span className="text-sm text-brand-text-secondary">Appointment scheduled automatically</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-6 h-6 rounded-full bg-brand-teal text-white text-xs font-bold flex items-center justify-center">4</div>
                    <span className="text-sm text-brand-text-secondary">Follow-up and confirmation sent</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <p className="text-lg text-brand-text-secondary mb-6">
            Ready to see how Luhreetech works for your industry?
          </p>
          <button className="btn-primary text-lg px-8 py-4 hover-glow-enhanced">
            Get Industry-Specific Demo
          </button>
        </div>
      </div>
    </section>
  );
}
