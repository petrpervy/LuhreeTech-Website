export default function Footer(){
  return (
    <footer className="section footer-fade">
      <div className="container">
        <div className="card--lg grid gap-10 md:grid-cols-5">
          <div className="md:col-span-2">
            <h3 className="font-display text-xl text-white mb-4">Luhreetech</h3>
            <p className="text-white/70 mb-6 max-w-md">
              We design, deploy, and manage AI-powered digital employees for SMBs. 
              Transform your business operations with intelligent automation.
            </p>
            <div className="flex items-center gap-4">
              <div className="text-sm text-white/60">
                <div className="font-semibold text-white">Contact</div>
                <div>hello@luhreetech.com</div>
                <div>(555) 123-4567</div>
              </div>
            </div>
          </div>
          
          <div>
            <h4 className="font-semibold text-white mb-4">Product</h4>
            <ul className="space-y-3 text-sm text-white/70">
              <li><a href="#features" className="hover:text-white transition-colors">Features</a></li>
              <li><a href="#integrations" className="hover:text-white transition-colors">Integrations</a></li>
              <li><a href="#security" className="hover:text-white transition-colors">Security</a></li>
              <li><a href="#pricing" className="hover:text-white transition-colors">Pricing</a></li>
              <li><a href="/demo" className="hover:text-white transition-colors">Demo</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold text-white mb-4">Resources</h4>
            <ul className="space-y-3 text-sm text-white/70">
              <li><a href="/case-studies" className="hover:text-white transition-colors">Case Studies</a></li>
              <li><a href="/blog" className="hover:text-white transition-colors">Blog</a></li>
              <li><a href="/roi-calculator" className="hover:text-white transition-colors">ROI Calculator</a></li>
              <li><a href="#faq" className="hover:text-white transition-colors">FAQ</a></li>
              <li><a href="/docs" className="hover:text-white transition-colors">Documentation</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold text-white mb-4">Company</h4>
            <ul className="space-y-3 text-sm text-white/70">
              <li><a href="/about" className="hover:text-white transition-colors">About</a></li>
              <li><a href="/contact" className="hover:text-white transition-colors">Contact</a></li>
              <li><a href="/careers" className="hover:text-white transition-colors">Careers</a></li>
              <li><a href="/privacy" className="hover:text-white transition-colors">Privacy</a></li>
              <li><a href="/terms" className="hover:text-white transition-colors">Terms</a></li>
            </ul>
          </div>
        </div>
        
        <div className="mt-8 pt-6 border-t border-white/10">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="text-sm text-white/60">
              © 2024 Luhreetech. All rights reserved.
            </div>
            <div className="flex items-center gap-6 text-sm text-white/60">
              <span>Trusted by 50+ SMBs</span>
              <span>•</span>
              <span>98% accuracy rate</span>
              <span>•</span>
              <span>24/7 availability</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}