'use client'
import { motion } from 'framer-motion'
import { CardGlass } from '@/components/ui/CardGlass'
export function TestimonialsGrid() {
  const testimonials = {
    title: "What our clients say",
    subtitle: "Real results from businesses that trust us with their automation",
    items: [
      {
        quote: "Luhreetech's AI receptionist has transformed our intake process. We never miss a lead anymore.",
        author: "Sarah Chen",
        role: "Managing Partner",
        company: "Chen & Associates Law"
      },
      {
        quote: "The scheduling automation reduced our no-shows by 30%. Our front desk team can focus on patient care.",
        author: "Dr. Michael Rodriguez",
        role: "Medical Director",
        company: "Sunrise Medical Clinic"
      },
      {
        quote: "From first call to final follow-up, everything runs smoothly. It's like having a dedicated assistant.",
        author: "Jennifer Park",
        role: "Operations Manager",
        company: "LogiFlow Solutions"
      }
    ]
  }

  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <motion.div 
          className="text-center space-y-8 mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-h2x text-brand-ink">{testimonials.title}</h2>
          <p className="text-xl text-brand-gray max-w-2xl mx-auto">{testimonials.subtitle}</p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.items.slice(0, 6).map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <CardGlass className="p-6 space-y-4">
                {/* Quote */}
                <p className="text-brand-gray leading-relaxed">"{testimonial.quote}"</p>
                
                {/* Author */}
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-gradient-soft rounded-full flex items-center justify-center">
                    <span className="text-brand-ink font-semibold">
                      {testimonial.author.charAt(0)}
                    </span>
                  </div>
                  <div className="flex-1">
                    <div className="font-semibold text-brand-ink">{testimonial.author}</div>
                    <div className="text-sm text-brand-gray">{testimonial.role}</div>
                  </div>
                  <div className="text-xs bg-brand-light px-2 py-1 rounded-full text-brand-gray">
                    {testimonial.company}
                  </div>
                </div>


              </CardGlass>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
