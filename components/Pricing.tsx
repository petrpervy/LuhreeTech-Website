import { Check, Star, ArrowRight } from 'lucide-react';

const plans = [
  {
    name: 'Starter', 
    price: '$500-1k/mo',
    originalPrice: '$1,200/mo',
    blurb: 'Perfect for small SMBs getting started with automation',
    popular: false,
    bullets: [
      '1 AI Receptionist',
      'Basic lead generation',
      'Email/scheduling assistant',
      'Standard automation workflows',
      'Email support',
      '2-week setup time'
    ],
  },
  {
    name: 'Growth', 
    price: '$1k-2.5k/mo',
    originalPrice: '$2,800/mo',
    blurb: 'Ideal for growing SMBs with multiple digital employees',
    popular: true,
    bullets: [
      '2-3 AI digital employees',
      'Advanced lead-gen bot',
      'Custom automation workflows',
      'Priority support',
      '1-week setup time',
      'Monthly performance reports'
    ],
  },
  {
    name: 'Enterprise', 
    price: '$2.5k-5k/mo',
    originalPrice: '$6,000/mo',
    blurb: 'For established SMBs with complex automation needs',
    popular: false,
    bullets: [
      'Unlimited digital employees',
      'Full automation suite',
      'Custom integrations',
      'Dedicated success manager',
      'Same-day setup',
      'Real-time monitoring',
      'Custom compliance features'
    ],
  },
];

export default function Pricing(){
  return (
    <section id="pricing" className="section">
      <div className="container">
        <div className="text-center mb-16">
          <h2 className="text-gradient mb-6">Simple, Transparent Pricing</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Choose the plan that fits your business. All plans include setup, training, and ongoing support.
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8 items-stretch">
          {plans.map(plan => (
            <div key={plan.name} className={`relative ${plan.popular ? 'md:-mt-8' : ''}`}>
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 z-10">
                  <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-indigo-500 to-purple-600 text-white text-sm font-medium">
                    <Star className="w-4 h-4" />
                    <span>Most Popular</span>
                  </div>
                </div>
              )}
              
              <div className={`glass-liquid glass-glow glass-ripple card hover-lift h-full flex flex-col ${plan.popular ? 'ring-2 ring-indigo-500' : ''}`}>
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">{plan.name}</h3>
                  <div className="mb-4">
                    <div className="text-4xl font-bold text-gray-900">{plan.price}</div>
                    <div className="text-sm text-gray-500 line-through">{plan.originalPrice}</div>
                  </div>
                  <p className="text-gray-600">{plan.blurb}</p>
                </div>
                
                <ul className="space-y-4 flex-grow mb-8">
                  {plan.bullets.map(bullet => (
                    <li key={bullet} className="flex items-start gap-3">
                      <div className="w-5 h-5 rounded-full bg-green-100 flex items-center justify-center flex-shrink-0 mt-0.5">
                        <Check className="w-3 h-3 text-green-600"/>
                      </div>
                      <span className="text-gray-700">{bullet}</span>
                    </li>
                  ))}
                </ul>
                
                <div className="mt-auto">
                  <button className={`btn w-full group ${plan.popular ? 'btn-primary' : 'btn-secondary'}`}>
                    <span>Get Started</span>
                    <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                  </button>
                  
                  <div className="text-center mt-4">
                    <p className="text-sm text-gray-500">
                      <span className="font-medium">Save up to 50%</span> with annual billing
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        {/* Additional Info */}
        <div className="text-center mt-16">
          <div className="glass-crystal glass-glow glass-ripple card-compact max-w-4xl mx-auto">
            <h3 className="text-xl font-semibold text-gray-900 mb-4">All Plans Include</h3>
            <div className="grid md:grid-cols-3 gap-6 text-sm text-gray-600">
              <div className="flex items-center gap-2">
                <Check className="w-4 h-4 text-green-600" />
                <span>Free setup & training</span>
              </div>
              <div className="flex items-center gap-2">
                <Check className="w-4 h-4 text-green-600" />
                <span>30-day money-back guarantee</span>
              </div>
              <div className="flex items-center gap-2">
                <Check className="w-4 h-4 text-green-600" />
                <span>24/7 technical support</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}