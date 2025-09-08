import { ArrowRight, CheckCircle } from "lucide-react"

export default function ClosingCTA() {
  return (
    <section className="section">
      <div className="container">
        <div className="bg-gray-50 p-12 text-center rounded-lg">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Ready to deploy digital employees?
          </h2>
          
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            Join 50+ SMBs that have transformed their operations with AI-powered digital employees. 
            Book a demo today and see how we can help you scale.
          </p>
          
          <div className="flex flex-wrap justify-center gap-4 mb-8">
            <div className="flex items-center gap-2 text-gray-700">
              <CheckCircle className="w-5 h-5 text-emerald-500" />
              <span>Personal consultation</span>
            </div>
            <div className="flex items-center gap-2 text-gray-700">
              <CheckCircle className="w-5 h-5 text-emerald-500" />
              <span>No setup fees</span>
            </div>
            <div className="flex items-center gap-2 text-gray-700">
              <CheckCircle className="w-5 h-5 text-emerald-500" />
              <span>30-day money back</span>
            </div>
          </div>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a 
              href="/demo" 
              className="bg-orange-500 hover:bg-orange-600 text-white text-lg px-8 py-4 rounded-lg flex items-center gap-2 transition-colors duration-300"
            >
              Book a Demo
              <ArrowRight className="w-5 h-5" />
            </a>
            <a 
              href="tel:+1-555-0123" 
              className="btn-ghost text-lg px-8 py-4"
            >
              Call (555) 123-4567
            </a>
          </div>
          
          <p className="text-sm text-gray-500 mt-6">
            Available Monday-Friday, 9AM-6PM EST
          </p>
        </div>
      </div>
    </section>
  )
}