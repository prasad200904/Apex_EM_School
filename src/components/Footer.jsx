import { Link } from 'react-router-dom'
import { GraduationCap, MapPin, Phone, Clock, Mail } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="bg-[#111827] text-gray-300 pt-14 pb-6 font-body">
      <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-4 gap-10 mb-10">
        {/* Brand */}
        <div className="md:col-span-1">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-10 h-10 rounded-xl bg-[#F97316] flex items-center justify-center">
              <GraduationCap size={20} className="text-white" />
            </div>
            <div>
              <p className="font-display text-white font-bold text-lg">Apex School</p>
              <p className="text-orange-400 text-xs">TM & EM · Vijayawada</p>
            </div>
          </div>
          <p className="text-sm text-gray-400 leading-relaxed">
            Nurturing young minds with quality education in both Telugu and English mediums since our founding.
          </p>
        </div>

        {/* Quick links */}
        <div>
          <h4 className="text-white font-semibold mb-4 text-sm uppercase tracking-wider">Quick Links</h4>
          <ul className="space-y-2">
            {[['/', 'Home'], ['/about', 'About Us'], ['/academics', 'Academics'],
              ['/admissions', 'Admissions'], ['/gallery', 'Gallery'], ['/contact', 'Contact']].map(([to, label]) => (
              <li key={to}>
                <Link to={to} className="text-sm text-gray-400 hover:text-[#F97316] transition-colors">
                  → {label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h4 className="text-white font-semibold mb-4 text-sm uppercase tracking-wider">Contact</h4>
          <ul className="space-y-3">
            <li className="flex items-start gap-2 text-sm text-gray-400">
              <MapPin size={15} className="text-[#F97316] mt-0.5 flex-shrink-0" />
              Behind Nehru Statue, Kothapeta, Vijayawada, AP 520001
            </li>
            <li className="flex items-center gap-2 text-sm text-gray-400">
              <Phone size={15} className="text-[#F97316]" />
              <a href="tel:+919393999674" className="hover:text-[#F97316] transition-colors">093939 99674</a>
            </li>
            <li className="flex items-center gap-2 text-sm text-gray-400">
              <Mail size={15} className="text-[#F97316]" />
              <a href="mailto:info@apexschool.in" className="hover:text-[#F97316] transition-colors">info@apexschool.in</a>
            </li>
            <li className="flex items-center gap-2 text-sm text-gray-400">
              <Clock size={15} className="text-[#F97316]" />
              Mon–Sat: 8:00 AM – 6:00 PM
            </li>
          </ul>
        </div>

        {/* Medium */}
        <div>
          <h4 className="text-white font-semibold mb-4 text-sm uppercase tracking-wider">Medium of Instruction</h4>
          <div className="space-y-3">
            <div className="flex items-center gap-3 p-3 rounded-xl bg-white/5 border border-white/10">
              <span className="text-2xl">🇮🇳</span>
              <div>
                <p className="text-white text-sm font-semibold">Telugu Medium</p>
                <p className="text-gray-400 text-xs">Pre-Primary to Class X</p>
              </div>
            </div>
            <div className="flex items-center gap-3 p-3 rounded-xl bg-white/5 border border-white/10">
              <span className="text-2xl">📚</span>
              <div>
                <p className="text-white text-sm font-semibold">English Medium</p>
                <p className="text-gray-400 text-xs">Pre-Primary to Class X</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 pt-6 border-t border-white/10 flex flex-col md:flex-row
        items-center justify-between gap-2 text-xs text-gray-500">
        <p>© {new Date().getFullYear()} Apex TM & EM School, Vijayawada. All rights reserved.</p>
        <p>Designed with ❤️ for academic excellence</p>
      </div>
    </footer>
  )
}
