import { Star, Quote } from "lucide-react"

const testimonials = [
  {
    name: "Sarah Chen",
    role: "Practice Manager",
    company: "Metro Health Clinic",
    content: "Our AI receptionist handles all incoming calls and appointments. We've reduced missed calls by 90% and our staff can focus on patient care instead of scheduling.",
    rating: 5,
    avatar: "SC"
  },
  {
    name: "Michael Rodriguez",
    role: "Managing Partner",
    company: "Rodriguez Law Firm",
    content: "The lead generation bot finds qualified prospects automatically. We've increased our client intake by 60% while reducing manual research time by 80%.",
    rating: 5,
    avatar: "MR"
  },
  {
    name: "Jennifer Walsh",
    role: "Owner",
    company: "Walsh Home Services",
    content: "The email assistant manages our inbox and schedules appointments. We never miss a lead anymore, and our response time improved from hours to minutes.",
    rating: 5,
    avatar: "JW"
  }
]

function TestimonialCard({ testimonial }: { testimonial: typeof testimonials[0] }) {
  return (
    <div className="glass-crystal glass-glow glass-ripple card hover-lift h-full p-8">
      <div className="flex items-center gap-1 mb-4">
        {Array.from({ length: testimonial.rating }).map((_, i) => (
          <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
        ))}
      </div>
      
      <Quote className="w-8 h-8 text-gray-400 mb-4" />
      
      <p className="text-gray-700 mb-6 leading-relaxed">
        "{testimonial.content}"
      </p>
      
      <div className="flex items-center gap-4">
        <div className="w-12 h-12 rounded-full bg-gradient-to-r from-brand-orange to-brand-orangeDeep flex items-center justify-center text-white font-semibold">
          {testimonial.avatar}
        </div>
        <div>
          <div className="font-semibold text-gray-900">{testimonial.name}</div>
          <div className="text-sm text-gray-600">{testimonial.role}, {testimonial.company}</div>
        </div>
      </div>
    </div>
  )
}

export default function Testimonials() {
  return (
    <section className="section">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">What our customers say</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Join hundreds of businesses that have transformed their operations with AI automation
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-6 md:gap-8">
          {testimonials.map((testimonial, index) => (
            <TestimonialCard key={index} testimonial={testimonial} />
          ))}
        </div>
      </div>
    </section>
  )
}