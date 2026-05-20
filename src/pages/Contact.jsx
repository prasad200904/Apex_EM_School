import { useState } from 'react'
import PageHero from '../components/PageHero'
import { MapPin, Phone, Mail, Clock, Send, CheckCircle2 } from '../icons'

const initialForm = { name: '', phone: '', email: '', message: '' }

export default function Contact() {
  const [form, setForm] = useState(initialForm)
  const [errors, setErrors] = useState({})
  const [submitted, setSubmitted] = useState(false)

  const validate = () => {
    const e = {}
    if (!form.name.trim()) e.name = 'Name is required'
    if (!form.phone.match(/^[6-9]\d{9}$/)) e.phone = 'Enter valid 10-digit mobile number'
    if (form.email && !form.email.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/)) e.email = 'Enter valid email address'
    if (!form.message.trim()) e.message = 'Message is required'
    return e
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    const errs = validate()
    setErrors(errs)
    if (Object.keys(errs).length === 0) setSubmitted(true)
  }

  const inp = (field) => ({
    value: form[field],
    onChange: (ev) => { setForm(f => ({ ...f, [field]: ev.target.value })); setErrors(er => ({ ...er, [field]: '' })) },
    className: `form-input ${errors[field] ? 'border-red-400' : ''}`,
  })

  return (
    <>
      <PageHero
        breadcrumb="Reach Us"
        title="Contact Us"
        subtitle="We'd love to hear from you. Visit us, call us, or drop a message."
      />

      {/* Contact cards */}
      <section className="py-14 bg-white">
        <div className="max-w-5xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
            {[
              { icon: MapPin, label: 'Address', value: 'Behind Nehru Statue, Kothapeta, Vijayawada, AP 520001', href: 'https://maps.google.com/?q=Apex+TM+EM+School+Kothapeta+Vijayawada', color: 'bg-blue-50 text-blue-700' },
              { icon: Phone, label: 'Phone', value: '093939 99674', href: 'tel:+919393999674', color: 'bg-orange-50 text-orange-600' },
              { icon: Mail, label: 'Email', value: 'info@apexschool.in', href: 'mailto:info@apexschool.in', color: 'bg-purple-50 text-purple-700' },
              { icon: Clock, label: 'Working Hours', value: 'Mon–Sat: 8:00 AM – 6:00 PM', href: null, color: 'bg-green-50 text-green-700' },
            ].map(({ icon: Icon, label, value, href, color }) => (
              <div key={label} className="p-6 rounded-2xl border-2 border-slate-100 text-center card-hover">
                <div className={`w-12 h-12 rounded-xl ${color} flex items-center justify-center mx-auto mb-4`}>
                  <Icon size={22} />
                </div>
                <p className="font-body text-xs uppercase tracking-wider text-gray-400 mb-1">{label}</p>
                {href ? (
                  <a href={href} target={href.startsWith('http') ? '_blank' : undefined}
                    rel="noopener noreferrer"
                    className="font-body text-sm font-medium text-[#1E3A8A] hover:text-[#F97316] transition-colors">
                    {value}
                  </a>
                ) : (
                  <p className="font-body text-sm font-medium text-[#1E3A8A]">{value}</p>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Map + Form */}
      <section className="py-10 bg-slate-50">
        <div className="max-w-6xl mx-auto px-4 grid md:grid-cols-2 gap-8">
          {/* Map */}
          <div>
            <h2 className="font-display text-2xl font-bold text-[#1E3A8A] mb-5">Find Us on the Map</h2>
            <div className="rounded-2xl overflow-hidden shadow-sm border border-slate-200 h-96">
              <iframe
                title="Apex School Location"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3825.6066!2d80.6499!3d16.5062!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a35f0a2a4a4a4a5%3A0x1234567890abcdef!2sKothapeta%2C%20Vijayawada%2C%20Andhra%20Pradesh%20520001!5e0!3m2!1sen!2sin!4v1710000000000"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
            <a href="https://maps.google.com/?q=GJC6+X97,Yadavapuram+Vari+Street,Kothapeta,Vijayawada+520001"
              target="_blank" rel="noopener noreferrer"
              className="mt-4 inline-flex items-center gap-2 text-[#1E3A8A] font-body text-sm font-medium hover:text-[#F97316] transition-colors">
              <MapPin size={15} /> Open in Google Maps →
            </a>

            {/* Quick contact */}
            <div className="mt-6 p-5 rounded-2xl bg-[#1E3A8A] text-white">
              <h3 className="font-display text-lg font-bold mb-3">Quick Contact</h3>
              <div className="space-y-3">
                <a href="tel:+919393999674"
                  className="flex items-center gap-3 text-sm font-body text-blue-200 hover:text-white transition-colors">
                  <Phone size={15} className="text-[#F97316]" /> 093939 99674
                </a>
                <a href="https://wa.me/919393999674" target="_blank" rel="noopener noreferrer"
                  className="flex items-center gap-3 text-sm font-body text-blue-200 hover:text-white transition-colors">
                  <svg viewBox="0 0 24 24" className="w-4 h-4 fill-[#25D366]">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                  </svg>
                  WhatsApp Us
                </a>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div>
            <h2 className="font-display text-2xl font-bold text-[#1E3A8A] mb-5">Send a Message</h2>
            {submitted ? (
              <div className="bg-white rounded-2xl p-10 shadow-sm border border-slate-100 text-center h-full flex flex-col justify-center">
                <div className="w-16 h-16 rounded-full bg-green-100 flex items-center justify-center mx-auto mb-4">
                  <CheckCircle2 size={30} className="text-green-500" />
                </div>
                <h3 className="font-display text-xl font-bold text-[#1E3A8A] mb-2">Message Sent!</h3>
                <p className="text-gray-500 font-body text-sm mb-5">We'll get back to you as soon as possible.</p>
                <button onClick={() => { setSubmitted(false); setForm(initialForm) }}
                  className="px-5 py-2.5 rounded-xl bg-[#1E3A8A] text-white font-body text-sm font-medium hover:bg-blue-800 transition-colors mx-auto">
                  Send Another Message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="bg-white rounded-2xl p-7 shadow-sm border border-slate-100 space-y-5" noValidate>
                <div>
                  <label className="block text-sm font-body font-medium text-gray-700 mb-1.5">Your Name *</label>
                  <input type="text" placeholder="Full name" {...inp('name')} />
                  {errors.name && <p className="text-red-500 text-xs mt-1 font-body">{errors.name}</p>}
                </div>
                <div>
                  <label className="block text-sm font-body font-medium text-gray-700 mb-1.5">Phone Number *</label>
                  <input type="tel" placeholder="10-digit mobile number" {...inp('phone')} />
                  {errors.phone && <p className="text-red-500 text-xs mt-1 font-body">{errors.phone}</p>}
                </div>
                <div>
                  <label className="block text-sm font-body font-medium text-gray-700 mb-1.5">Email Address</label>
                  <input type="email" placeholder="your@email.com (optional)" {...inp('email')} />
                  {errors.email && <p className="text-red-500 text-xs mt-1 font-body">{errors.email}</p>}
                </div>
                <div>
                  <label className="block text-sm font-body font-medium text-gray-700 mb-1.5">Message *</label>
                  <textarea rows={5} placeholder="How can we help you?" {...inp('message')} className={`form-input resize-none ${errors.message ? 'border-red-400' : ''}`} />
                  {errors.message && <p className="text-red-500 text-xs mt-1 font-body">{errors.message}</p>}
                </div>
                <button type="submit"
                  className="w-full py-4 rounded-xl bg-[#F97316] text-white font-body font-semibold
                    hover:bg-orange-400 transition-all hover:scale-[1.01] flex items-center justify-center gap-2 shadow-lg">
                  <Send size={18} /> Send Message
                </button>
              </form>
            )}
          </div>
        </div>
      </section>
    </>
  )
}
