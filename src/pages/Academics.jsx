import PageHero from '../components/PageHero'
import { CheckCircle2 } from 'lucide-react'

const grades = [
  { level: 'Pre-Primary', range: 'LKG & UKG', age: '3 – 5 years', icon: '🌱', subjects: ['Phonics & Literacy', 'Numeracy Basics', 'Activity-based Learning', 'Art & Craft', 'Physical Movement'] },
  { level: 'Primary', range: 'Classes I – V', age: '6 – 11 years', icon: '📖', subjects: ['Telugu / English Language', 'Mathematics', 'Environmental Science', 'General Knowledge', 'Arts & Crafts'] },
  { level: 'Upper Primary', range: 'Classes VI – VIII', age: '12 – 14 years', icon: '🔬', subjects: ['Languages (TM/EM)', 'Mathematics', 'Physical Science', 'Biological Science', 'Social Studies'] },
  { level: 'Secondary', range: 'Classes IX – X', age: '15 – 17 years', icon: '🏆', subjects: ['First & Second Languages', 'Mathematics', 'Physical & Bio Science', 'Social Studies', 'Optional Subjects'] },
]

const activities = [
  { emoji: '🎭', name: 'Cultural Programs', desc: 'Annual day, Dasara, Sankranti, and Independence Day celebrations' },
  { emoji: '⚽', name: 'Sports & Games', desc: 'Cricket, football, kho-kho, kabaddi, and athletics' },
  { emoji: '🎨', name: 'Arts & Craft', desc: 'Drawing, painting, clay modelling, and craft workshops' },
  { emoji: '🎤', name: 'Elocution & Debate', desc: 'Public speaking, debate clubs, and poetry competitions' },
  { emoji: '📰', name: 'School Magazine', desc: 'Student-edited annual magazine featuring creative writing and art' },
  { emoji: '🌿', name: 'Nature Club', desc: 'Environmental awareness drives, gardening, and field trips' },
]

export default function Academics() {
  return (
    <>
      <PageHero
        breadcrumb="Curriculum"
        title="Academics"
        subtitle="Comprehensive education in Telugu Medium and English Medium from Pre-Primary through Secondary."
      />

      {/* Medium options */}
      <section className="py-20 bg-white">
        <div className="max-w-5xl mx-auto px-4">
          <div className="text-center mb-12">
            <p className="text-[#F97316] font-body font-semibold text-sm uppercase tracking-widest mb-2">Medium of Instruction</p>
            <h2 className="font-display text-3xl font-bold text-[#1E3A8A]">Choose Your Medium</h2>
            <div className="section-divider mt-4" />
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                flag: '🇮🇳', medium: 'Telugu Medium (TM)', color: 'bg-[#1E3A8A]',
                desc: 'Our Telugu Medium section provides instruction in the mother tongue, ensuring deep conceptual understanding rooted in regional language and culture. Aligned to AP State Board curriculum.',
                points: ['Strong mother-tongue foundation', 'AP State Board syllabus', 'Cultural connection & identity', 'Focus on Telugu literature & values'],
              },
              {
                flag: '📚', medium: 'English Medium (EM)', color: 'bg-[#F97316]',
                desc: 'The English Medium section prepares students for national and international opportunities with instruction in English across all subjects, building confidence for competitive examinations.',
                points: ['Global language proficiency', 'Competitive exam preparation', 'CBSE/AP Board aligned', 'Digital literacy & modern skills'],
              }
            ].map(({ flag, medium, color, desc, points }) => (
              <div key={medium} className={`${color} rounded-2xl p-8 text-white`}>
                <div className="text-4xl mb-4">{flag}</div>
                <h3 className="font-display text-2xl font-bold mb-4">{medium}</h3>
                <p className="font-body text-sm leading-relaxed opacity-90 mb-5">{desc}</p>
                <ul className="space-y-2">
                  {points.map(p => (
                    <li key={p} className="flex items-center gap-2 text-sm font-body opacity-90">
                      <CheckCircle2 size={15} className="flex-shrink-0 opacity-70" /> {p}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Grade levels */}
      <section className="py-16 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <p className="text-[#F97316] font-body font-semibold text-sm uppercase tracking-widest mb-2">Grade Structure</p>
            <h2 className="font-display text-3xl font-bold text-[#1E3A8A]">From Pre-Primary to Secondary</h2>
            <div className="section-divider mt-4" />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {grades.map(({ level, range, age, icon, subjects }) => (
              <div key={level} className="bg-white rounded-2xl p-6 border-2 border-slate-100 card-hover">
                <div className="text-4xl mb-4">{icon}</div>
                <h3 className="font-display text-lg font-bold text-[#1E3A8A] mb-1">{level}</h3>
                <p className="text-[#F97316] font-body text-sm font-semibold mb-1">{range}</p>
                <p className="text-gray-400 font-body text-xs mb-4">Age: {age}</p>
                <ul className="space-y-1.5">
                  {subjects.map(s => (
                    <li key={s} className="flex items-start gap-2 text-xs font-body text-gray-600">
                      <span className="text-[#F97316] mt-0.5">•</span> {s}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Co-curricular */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <p className="text-[#F97316] font-body font-semibold text-sm uppercase tracking-widest mb-2">Beyond Textbooks</p>
            <h2 className="font-display text-3xl font-bold text-[#1E3A8A]">Co-Curricular Activities</h2>
            <div className="section-divider mt-4" />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {activities.map(({ emoji, name, desc }) => (
              <div key={name} className="flex gap-4 p-5 rounded-2xl border-2 border-slate-100 card-hover">
                <span className="text-3xl flex-shrink-0">{emoji}</span>
                <div>
                  <h4 className="font-display font-bold text-[#1E3A8A] text-base mb-1">{name}</h4>
                  <p className="text-gray-500 font-body text-sm leading-relaxed">{desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
