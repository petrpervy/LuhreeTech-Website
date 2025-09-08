"use client"
import { useState } from "react"
import { Calendar, Clock, User, Mail, Building, Phone, MessageSquare } from "lucide-react"

export default function DemoPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    phone: "",
    businessType: "",
    message: ""
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission
    console.log("Demo request:", formData)
    alert("Demo request submitted! We'll contact you within 24 hours.")
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              Book Your <span className="bg-gradient-to-r from-brand-orange to-brand-orangeDeep bg-clip-text text-transparent">Demo</span>
            </h1>
            <p className="text-xl text-white/70 max-w-3xl mx-auto">
              See how digital employees can transform your SMB. Get a personalized demo 
              showing AI receptionist, lead generation, and automation workflows.
            </p>
        </div>
        
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Demo Form */}
            <div className="glass p-8">
              <h2 className="text-2xl font-semibold text-white mb-6">Schedule Your Demo</h2>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-white/80 mb-2">
                      <User className="w-4 h-4 inline mr-2" />
                      Full Name *
                    </label>
                    <input
                      type="text"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-brand-orange/50"
                      placeholder="John Smith"
                    />
        </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-white/80 mb-2">
                      <Mail className="w-4 h-4 inline mr-2" />
                      Email *
                    </label>
                    <input
                      type="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-brand-orange/50"
                      placeholder="john@company.com"
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-white/80 mb-2">
                      <Building className="w-4 h-4 inline mr-2" />
                      Company *
                    </label>
                    <input
                      type="text"
                      name="company"
                      required
                      value={formData.company}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-brand-orange/50"
                      placeholder="Your Company"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-white/80 mb-2">
                      <Phone className="w-4 h-4 inline mr-2" />
                      Phone
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-brand-orange/50"
                      placeholder="(555) 123-4567"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-white/80 mb-2">
                    Business Type *
                  </label>
                  <select
                    name="businessType"
                    required
                    value={formData.businessType}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white focus:outline-none focus:ring-2 focus:ring-brand-orange/50"
                  >
                    <option value="">Select your business type</option>
                    <option value="law-firm">Law Firm</option>
                    <option value="agency">Marketing Agency</option>
                    <option value="home-services">Home Services</option>
                    <option value="medical">Medical/Dental Office</option>
                    <option value="other">Other</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-white/80 mb-2">
                    <MessageSquare className="w-4 h-4 inline mr-2" />
                    Tell us about your needs
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={4}
                    className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-brand-orange/50"
                    placeholder="What specific challenges are you facing? What would you like to see in the demo?"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full btn-primary hover-glow text-lg py-4"
                >
                  Book Demo
                </button>
              </form>
            </div>

            {/* Demo Details */}
            <div className="space-y-8">
              <div className="glass p-8">
                <h3 className="text-xl font-semibold text-white mb-4">What to Expect</h3>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3 text-white/80">
                    <Calendar className="w-5 h-5 mt-0.5 text-brand-orange" />
                    <span>30-minute personalized demo</span>
                  </li>
                  <li className="flex items-start gap-3 text-white/80">
                    <Clock className="w-5 h-5 mt-0.5 text-brand-orange" />
                    <span>Live AI receptionist demonstration</span>
                  </li>
                  <li className="flex items-start gap-3 text-white/80">
                    <User className="w-5 h-5 mt-0.5 text-brand-orange" />
                    <span>Lead generation bot showcase</span>
                  </li>
                  <li className="flex items-start gap-3 text-white/80">
                    <MessageSquare className="w-5 h-5 mt-0.5 text-brand-orange" />
                    <span>Email automation workflows</span>
                  </li>
                </ul>
              </div>

              <div className="glass p-8">
                <h3 className="text-xl font-semibold text-white mb-4">Demo Schedule</h3>
                <div className="space-y-3 text-white/80">
                  <div className="flex justify-between">
                    <span>Monday - Friday</span>
                    <span>9:00 AM - 6:00 PM EST</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Response Time</span>
                    <span>Within 24 hours</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Duration</span>
                    <span>30 minutes</span>
                  </div>
                </div>
              </div>

              <div className="glass p-8">
                <h3 className="text-xl font-semibold text-white mb-4">Ready to Get Started?</h3>
                <p className="text-white/70 mb-4">
                  Our team will contact you within 24 hours to schedule your personalized demo. 
                  We'll show you exactly how digital employees can transform your business.
                </p>
                <div className="flex items-center gap-2 text-sm text-white/60">
                  <div className="w-2 h-2 rounded-full bg-emerald-400"></div>
                  Free consultation • No commitment required
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}