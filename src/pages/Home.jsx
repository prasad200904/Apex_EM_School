import { Link } from 'react-router-dom'
import { BookOpen, Users, Award, TrendingUp, MapPin, Phone, Star, CheckCircle2, ChevronRight } from '../icons'

const stats = [
  { icon: Award, value: '15+', label: 'Years of Excellence' },
  { icon: Users, value: '1200+', label: 'Students Enrolled' },
  { icon: BookOpen, value: '60+', label: 'Certified Teachers' },
  { icon: TrendingUp, value: '98%', label: 'Pass Rate' },
]

const highlights = [
  { emoji: '🇮🇳', title: 'Telugu Medium', desc: 'Strong regional foundation with curriculum aligned to state board standards.' },
  { emoji: '📚', title: 'English Medium', desc: 'Global-standard education preparing students for competitive examinations.' },
  { emoji: '📍', title: 'Prime Location', desc: 'Located behind Nehru Statue, Kothapeta — heart of Vijayawada.' },
  { emoji: '🏆', title: 'Academic Excellence', desc: 'Consistent top results in district and state level examinations.' },
  { emoji: '🧪', title: 'Modern Labs', desc: 'Well-equipped science, computer, and language labs for hands-on learning.' },
  { emoji: '🎭', title: 'Holistic Development', desc: 'Sports, arts, cultural programs alongside academics for all-round growth.' },
]

const testimonials = [
  { name: 'Ravi Kumar', role: 'Parent', text: 'The teachers here are incredibly dedicated. My son has flourished both academically and personally.' },
  { name: 'Lakshmi Devi', role: 'Parent', text: 'Excellent school with a nurturing environment. My daughter secured 1st rank in district exams.' },
  { name: 'Srinivas Rao', role: 'Alumni', text: 'Apex School built my foundation. The values and discipline I learned here shaped my career.' },
]

export default function Home() {
  return (
    <>
      {/* HERO */}
      <section className="relative min-h-screen flex items-center overflow-hidden bg-[#1E3A8A]">
        {/* Background pattern */}
        <div className="absolute inset-0 opacity-10"
          style={{ backgroundImage: 'radial-gradient(circle, #fff 1.5px, transparent 1.5px)', backgroundSize: '32px 32px' }} />
        {/* Gradient orbs */}
        <div className="absolute top-20 right-10 w-96 h-96 rounded-full bg-[#F97316]/20 blur-3xl" />
        <div className="absolute bottom-10 left-0 w-72 h-72 rounded-full bg-white/5 blur-2xl" />

        <div className="relative max-w-7xl mx-auto px-4 pt-24 pb-16 grid md:grid-cols-2 gap-12 items-center">
          {/* Text */}
          <div>
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#F97316]/20 border border-[#F97316]/30 mb-6 animate-fadeUp">
              <Star size={14} className="text-[#F97316]" />
              <span className="text-orange-300 text-sm font-body font-medium">Admissions Open 2025–26</span>
            </div>
            <h1 className="font-display text-5xl md:text-6xl font-bold text-white leading-tight mb-4 animate-fadeUp delay-100">
              Apex TM & EM<br />
              <span className="text-[#F97316]">School</span>
            </h1>
            <p className="text-blue-200 text-lg font-body leading-relaxed mb-3 animate-fadeUp delay-200">
              Shaping tomorrow's leaders through quality education in <strong className="text-white">Telugu Medium</strong> & <strong className="text-white">English Medium</strong> — from Pre-Primary to Higher Secondary.
            </p>
            <p className="flex items-center gap-2 text-blue-300 text-sm font-body mb-8 animate-fadeUp delay-200">
              <MapPin size={14} className="text-[#F97316]" />
              Behind Nehru Statue, Kothapeta, Vijayawada, AP 520001
            </p>
            <div className="flex flex-wrap gap-4 animate-fadeUp delay-300">
              <Link to="/admissions"
                className="px-7 py-3.5 rounded-xl bg-[#F97316] text-white font-semibold font-body
                  shadow-2xl hover:bg-orange-400 hover:scale-105 transition-all flex items-center gap-2">
                Admissions Open <ChevronRight size={18} />
              </Link>
              <Link to="/contact"
                className="px-7 py-3.5 rounded-xl bg-white/10 text-white font-semibold font-body
                  border border-white/20 hover:bg-white/20 transition-all flex items-center gap-2">
                <Phone size={16} /> Contact Us
              </Link>
            </div>
          </div>

          {/* Stats card */}
          <div className="grid grid-cols-2 gap-4 animate-fadeUp delay-400">
            {stats.map(({ icon: Icon, value, label }) => (
              <div key={label} className="bg-white/10 backdrop-blur border border-white/20 rounded-2xl p-6
                hover:bg-white/15 transition-all hover:-translate-y-1 text-center">
                <div className="w-12 h-12 rounded-xl bg-[#F97316]/20 flex items-center justify-center mx-auto mb-3">
                  <Icon size={22} className="text-[#F97316]" />
                </div>
                <p className="font-display text-3xl font-bold text-white">{value}</p>
                <p className="text-blue-200 text-sm font-body mt-1">{label}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Wave */}
        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1440 60" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M0 60L60 50C120 40 240 20 360 15C480 10 600 20 720 25C840 30 960 30 1080 25C1200 20 1320 10 1380 5L1440 0V60H0Z" fill="white"/>
          </svg>
        </div>
      </section>

      {/* HIGHLIGHTS */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-14">
            <p className="text-[#F97316] font-body font-semibold text-sm uppercase tracking-widest mb-2">Why Choose Us</p>
            <h2 className="font-display text-4xl font-bold text-[#1E3A8A]">Excellence in Every Dimension</h2>
            <div className="section-divider mt-4" />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {highlights.map(({ emoji, title, desc }) => (
              <div key={title} className="p-6 rounded-2xl border-2 border-slate-100 card-hover bg-white group">
                <div className="text-4xl mb-4">{emoji}</div>
                <h3 className="font-display text-xl font-bold text-[#1E3A8A] mb-2 group-hover:text-[#F97316] transition-colors">{title}</h3>
                <p className="text-gray-500 font-body text-sm leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA BANNER */}
      <section className="bg-gradient-to-r from-[#1E3A8A] to-[#1d4ed8] py-16">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="font-display text-3xl md:text-4xl font-bold text-white mb-4">
            Begin Your Child's Journey to Excellence
          </h2>
          <p className="text-blue-200 font-body mb-8">
            Enroll now for the 2025–26 academic year. Limited seats available in both mediums.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link to="/admissions"
              className="px-8 py-4 rounded-xl bg-[#F97316] text-white font-semibold font-body
                shadow-2xl hover:bg-orange-400 hover:scale-105 transition-all">
              Apply for Admission →
            </Link>
            <a href="tel:+919393999674"
              className="px-8 py-4 rounded-xl bg-white/15 text-white font-semibold font-body
                border border-white/30 hover:bg-white/25 transition-all flex items-center gap-2">
              <Phone size={16} /> Call: 093939 99674
            </a>
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-14">
            <p className="text-[#F97316] font-body font-semibold text-sm uppercase tracking-widest mb-2">Testimonials</p>
            <h2 className="font-display text-4xl font-bold text-[#1E3A8A]">What Parents & Alumni Say</h2>
            <div className="section-divider mt-4" />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {testimonials.map(({ name, role, text }) => (
              <div key={name} className="bg-white rounded-2xl p-7 shadow-sm border border-slate-100 card-hover">
                <div className="flex gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={15} className="fill-[#F97316] text-[#F97316]" />
                  ))}
                </div>
                <p className="text-gray-600 font-body text-sm leading-relaxed mb-5 italic">"{text}"</p>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-[#1E3A8A]/10 flex items-center justify-center font-display font-bold text-[#1E3A8A]">
                    {name[0]}
                  </div>
                  <div>
                    <p className="font-semibold font-body text-sm text-[#1E3A8A]">{name}</p>
                    <p className="text-gray-400 text-xs font-body">{role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* QUICK CONTACT */}
      <section className="py-16 bg-white">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <h2 className="font-display text-3xl font-bold text-[#1E3A8A] mb-3">Visit Us Today</h2>
          <p className="text-gray-500 font-body mb-6">We're open Monday to Saturday, 8:00 AM – 6:00 PM</p>
          <div className="flex flex-wrap justify-center gap-4">
            <div className="flex items-center gap-3 px-5 py-3 rounded-xl bg-slate-50 border border-slate-200">
              <MapPin size={18} className="text-[#F97316]" />
              <span className="font-body text-sm text-gray-700">Kothapeta, Vijayawada 520001</span>
            </div>
            <a href="tel:+919393999674"
              className="flex items-center gap-3 px-5 py-3 rounded-xl bg-[#1E3A8A] text-white font-body text-sm font-medium hover:bg-blue-800 transition-colors">
              <Phone size={18} /> 093939 99674
            </a>
          </div>
        </div>
      </section>
    </>
  )
}
