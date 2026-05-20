import { useState } from 'react'
import PageHero from '../components/PageHero'
import { CheckCircle2, FileText, Send } from '../icons'

const steps = [
  { num: '01', title: 'Submit Enquiry', desc: 'Fill the online enquiry form below or call us at 093939 99674 to express your interest.' },
  { num: '02', title: 'School Visit', desc: 'Schedule a visit to tour our campus, meet staff, and understand the curriculum.' },
  { num: '03', title: 'Application Form', desc: 'Collect and complete the official admission application form from the school office.' },
  { num: '04', title: 'Document Submission', desc: 'Submit all required documents along with the application form to the office.' },
  { num: '05', title: 'Admission Confirmed', desc: 'Receive your child\'s admission letter and fee payment details from the school.' },
]

const docs = [
  'Birth Certificate (Original + 2 copies)',
  'Transfer Certificate (if coming from another school)',
  'Previous year\'s Report Card / Progress Report',
  'Aadhaar Card (Child)',
  'Aadhaar Card (Parent/Guardian)',
  'Passport size photos (4 copies)',
  'Caste Certificate (if applicable)',
  'Residence proof (Utility bill / Ration card)',
]

const fees = [
  { level: 'LKG / UKG', tm: '₹8,000', em: '₹12,000', reg: '₹500' },
  { level: 'Class I – V', tm: '₹9,500', em: '₹14,000', reg: '₹500' },
  { level: 'Class VI – VIII', tm: '₹11,000', em: '₹16,500', reg: '₹500' },
  { level: 'Class IX – X', tm: '₹13,000', em: '₹19,000', reg: '₹500' },
]

const initialForm = { name: '', parentName: '', grade: '', phone: '', email: '', medium: '', message: '' }

export default function Admissions() {
  const [form, setForm] = useState(initialForm)
  const [errors, setErrors] = useState({})
  const [submitted, setSubmitted] = useState(false)

  const validate = () => {
    const e = {}
    if (!form.name.trim()) e.name = 'Student name is required'
    if (!form.parentName.trim()) e.parentName = 'Parent name is required'
    if (!form.grade) e.grade = 'Please select a grade'
    if (!form.medium) e.medium = 'Please select a medium'
    if (!form.phone.match(/^[6-9]\d{9}$/)) e.phone = 'Enter valid 10-digit mobile number'
    if (form.email && !form.email.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/)) e.email = 'Enter valid email address'
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
    onChange: (e) => { setForm(f => ({ ...f, [field]: e.target.value })); setErrors(er => ({ ...er, [field]: '' })) },
    className: `form-input ${errors[field] ? 'border-red-400' : ''}`,
  })

  return (
    <>
      <PageHero
        breadcrumb="Join Us"
        title="Admissions 2025–26"
        subtitle="Begin your child's journey at Apex School. Seats are limited — enquire today."
      />

      {/* Admission Steps */}
      <section className="py-20 bg-white">
        <div className="max-w-5xl mx-auto px-4">
          <div className="text-center mb-12">
            <p className="text-[#F97316] font-body font-semibold text-sm uppercase tracking-widest mb-2">Process</p>
            <h2 className="font-display text-3xl font-bold text-[#1E3A8A]">How to Apply</h2>
            <div className="section-divider mt-4" />
          </div>
          <div className="relative">
            <div className="hidden md:block absolute left-8 top-8 bottom-8 w-0.5 bg-slate-200" />
            <div className="space-y-6">
              {steps.map(({ num, title, desc }) => (
                <div key={num} className="flex gap-6 items-start pl-0 md:pl-0">
                  <div className="flex-shrink-0 w-16 h-16 rounded-2xl bg-[#1E3A8A] flex items-center justify-center shadow-lg relative z-10">
                    <span className="font-display text-white font-bold text-lg">{num}</span>
                  </div>
                  <div className="flex-1 pt-3 pb-6 border-b border-slate-100">
                    <h3 className="font-display text-xl font-bold text-[#1E3A8A] mb-1">{title}</h3>
                    <p className="text-gray-500 font-body text-sm leading-relaxed">{desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Enquiry Form */}
      <section className="py-16 bg-slate-50" id="enquiry-form">
        <div className="max-w-2xl mx-auto px-4">
          <div className="text-center mb-10">
            <p className="text-[#F97316] font-body font-semibold text-sm uppercase tracking-widest mb-2">Get in Touch</p>
            <h2 className="font-display text-3xl font-bold text-[#1E3A8A]">Online Enquiry Form</h2>
            <div className="section-divider mt-4" />
          </div>

          {submitted ? (
            <div className="bg-white rounded-3xl p-12 shadow-sm border border-slate-100 text-center">
              <div className="w-20 h-20 rounded-full bg-green-100 flex items-center justify-center mx-auto mb-5">
                <CheckCircle2 size={36} className="text-green-500" />
              </div>
              <h3 className="font-display text-2xl font-bold text-[#1E3A8A] mb-3">Enquiry Submitted!</h3>
              <p className="text-gray-500 font-body text-sm leading-relaxed mb-6">
                Thank you for your interest in Apex School. Our admissions team will contact you within 24 hours at <strong>{form.phone}</strong>.
              </p>
              <button onClick={() => { setSubmitted(false); setForm(initialForm) }}
                className="px-6 py-3 rounded-xl bg-[#1E3A8A] text-white font-body font-medium text-sm hover:bg-blue-800 transition-colors">
                Submit Another Enquiry
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="bg-white rounded-3xl p-8 shadow-sm border border-slate-100 space-y-5" noValidate>
              <div className="grid md:grid-cols-2 gap-5">
                <div>
                  <label className="block text-sm font-body font-medium text-gray-700 mb-1.5">Student Name *</label>
                  <input type="text" placeholder="Child's full name" {...inp('name')} />
                  {errors.name && <p className="text-red-500 text-xs mt-1 font-body">{errors.name}</p>}
                </div>
                <div>
                  <label className="block text-sm font-body font-medium text-gray-700 mb-1.5">Parent / Guardian Name *</label>
                  <input type="text" placeholder="Father's / Mother's name" {...inp('parentName')} />
                  {errors.parentName && <p className="text-red-500 text-xs mt-1 font-body">{errors.parentName}</p>}
                </div>
              </div>
              <div className="grid md:grid-cols-2 gap-5">
                <div>
                  <label className="block text-sm font-body font-medium text-gray-700 mb-1.5">Grade Applying For *</label>
                  <select {...inp('grade')}>
                    <option value="">Select Grade</option>
                    {['LKG', 'UKG', ...Array.from({length: 10}, (_, i) => `Class ${i + 1}`)].map(g => (
                      <option key={g} value={g}>{g}</option>
                    ))}
                  </select>
                  {errors.grade && <p className="text-red-500 text-xs mt-1 font-body">{errors.grade}</p>}
                </div>
                <div>
                  <label className="block text-sm font-body font-medium text-gray-700 mb-1.5">Medium of Instruction *</label>
                  <select {...inp('medium')}>
                    <option value="">Select Medium</option>
                    <option value="Telugu Medium">Telugu Medium (TM)</option>
                    <option value="English Medium">English Medium (EM)</option>
                  </select>
                  {errors.medium && <p className="text-red-500 text-xs mt-1 font-body">{errors.medium}</p>}
                </div>
              </div>
              <div className="grid md:grid-cols-2 gap-5">
                <div>
                  <label className="block text-sm font-body font-medium text-gray-700 mb-1.5">Mobile Number *</label>
                  <input type="tel" placeholder="10-digit mobile number" {...inp('phone')} />
                  {errors.phone && <p className="text-red-500 text-xs mt-1 font-body">{errors.phone}</p>}
                </div>
                <div>
                  <label className="block text-sm font-body font-medium text-gray-700 mb-1.5">Email Address</label>
                  <input type="email" placeholder="your@email.com (optional)" {...inp('email')} />
                  {errors.email && <p className="text-red-500 text-xs mt-1 font-body">{errors.email}</p>}
                </div>
              </div>
              <div>
                <label className="block text-sm font-body font-medium text-gray-700 mb-1.5">Message / Questions</label>
                <textarea rows={4} placeholder="Any specific questions or requirements..." {...inp('message')} className="form-input resize-none" />
              </div>
              <button type="submit"
                className="w-full py-4 rounded-xl bg-[#1E3A8A] text-white font-body font-semibold
                  hover:bg-blue-800 transition-all hover:scale-[1.01] flex items-center justify-center gap-2 shadow-lg">
                <Send size={18} /> Submit Enquiry
              </button>
            </form>
          )}
        </div>
      </section>

      {/* Fee Structure */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4">
          <div className="text-center mb-10">
            <p className="text-[#F97316] font-body font-semibold text-sm uppercase tracking-widest mb-2">Fees</p>
            <h2 className="font-display text-3xl font-bold text-[#1E3A8A]">Annual Fee Structure</h2>
            <div className="section-divider mt-4" />
            <p className="text-gray-500 font-body text-sm mt-3">*Fees shown are approximate annual tuition fees. Contact school for exact breakdown.</p>
          </div>
          <div className="overflow-x-auto rounded-2xl border border-slate-200 shadow-sm">
            <table className="w-full font-body text-sm">
              <thead>
                <tr className="bg-[#1E3A8A] text-white">
                  <th className="px-6 py-4 text-left font-semibold">Grade Level</th>
                  <th className="px-6 py-4 text-center font-semibold">Telugu Medium</th>
                  <th className="px-6 py-4 text-center font-semibold">English Medium</th>
                  <th className="px-6 py-4 text-center font-semibold">Registration Fee</th>
                </tr>
              </thead>
              <tbody>
                {fees.map((row, i) => (
                  <tr key={row.level} className={i % 2 === 0 ? 'bg-white' : 'bg-slate-50'}>
                    <td className="px-6 py-4 font-medium text-[#1E3A8A]">{row.level}</td>
                    <td className="px-6 py-4 text-center text-gray-700">{row.tm}</td>
                    <td className="px-6 py-4 text-center text-gray-700">{row.em}</td>
                    <td className="px-6 py-4 text-center text-[#F97316] font-medium">{row.reg}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Documents */}
      <section className="py-16 bg-slate-50">
        <div className="max-w-3xl mx-auto px-4">
          <div className="text-center mb-10">
            <p className="text-[#F97316] font-body font-semibold text-sm uppercase tracking-widest mb-2">Checklist</p>
            <h2 className="font-display text-3xl font-bold text-[#1E3A8A]">Required Documents</h2>
            <div className="section-divider mt-4" />
          </div>
          <div className="bg-white rounded-2xl p-8 border border-slate-100 shadow-sm">
            <div className="grid md:grid-cols-2 gap-3">
              {docs.map((doc) => (
                <div key={doc} className="flex items-start gap-3 p-3 rounded-xl hover:bg-slate-50 transition-colors">
                  <FileText size={16} className="text-[#F97316] flex-shrink-0 mt-0.5" />
                  <span className="font-body text-sm text-gray-700">{doc}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
