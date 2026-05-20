import PageHero from '../components/PageHero'
import { CheckCircle2, BookOpen, Microscope, Library, Dumbbell } from 'lucide-react'

const infra = [
  { icon: BookOpen, title: 'Smart Classrooms', desc: 'Air-ventilated classrooms with digital boards and modern seating for optimal learning.' },
  { icon: Microscope, title: 'Science Labs', desc: 'Fully equipped Physics, Chemistry, and Biology labs with latest instruments.' },
  { icon: Library, title: 'Central Library', desc: 'Vast collection of books, periodicals, and digital resources for all grade levels.' },
  { icon: Dumbbell, title: 'Playground & Sports', desc: 'Expansive grounds for cricket, football, athletics, and indoor games facilities.' },
]

const values = ['Integrity in learning', 'Excellence in every endeavor', 'Inclusive & diverse community',
  'Innovation-driven curriculum', 'Holistic character development', 'Parent–school partnership']

export default function About() {
  return (
    <>
      <PageHero
        breadcrumb="Who We Are"
        title="About Apex School"
        subtitle="A legacy of academic excellence and holistic development in the heart of Vijayawada."
      />

      {/* History & Vision */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 grid md:grid-cols-2 gap-14 items-center">
          {/* Story */}
          <div>
            <p className="text-[#F97316] font-body font-semibold text-sm uppercase tracking-widest mb-2">Our Story</p>
            <h2 className="font-display text-3xl font-bold text-[#1E3A8A] mb-5">Building Futures Since Day One</h2>
            <p className="text-gray-600 font-body leading-relaxed mb-4">
              Apex TM & EM School was established with a singular vision — to provide world-class education that is both accessible and rooted in cultural values. Located behind Nehru Statue in Kothapeta, Vijayawada, our school has been a cornerstone of the community for over 15 years.
            </p>
            <p className="text-gray-600 font-body leading-relaxed mb-6">
              We offer instruction in both Telugu and English mediums, ensuring every child in our community has access to quality education in their preferred language. Our curriculum is designed to meet AP State Board standards while incorporating modern pedagogical approaches.
            </p>
            <ul className="space-y-2">
              {values.map(v => (
                <li key={v} className="flex items-center gap-2 text-sm font-body text-gray-600">
                  <CheckCircle2 size={16} className="text-[#F97316] flex-shrink-0" /> {v}
                </li>
              ))}
            </ul>
          </div>

          {/* Vision / Mission */}
          <div className="space-y-5">
            <div className="p-7 rounded-2xl bg-[#1E3A8A] text-white">
              <h3 className="font-display text-xl font-bold mb-3 flex items-center gap-2">
                <span className="text-3xl">🎯</span> Our Vision
              </h3>
              <p className="font-body text-blue-100 leading-relaxed text-sm">
                To be the leading institution in Andhra Pradesh that nurtures intellectually curious, morally upright, and socially responsible citizens — equipped to excel in a rapidly changing world.
              </p>
            </div>
            <div className="p-7 rounded-2xl bg-[#F97316] text-white">
              <h3 className="font-display text-xl font-bold mb-3 flex items-center gap-2">
                <span className="text-3xl">🚀</span> Our Mission
              </h3>
              <p className="font-body text-orange-50 leading-relaxed text-sm">
                To deliver quality education through dedicated teachers, modern infrastructure, and a nurturing environment that celebrates each child's unique potential and prepares them for a bright future.
              </p>
            </div>
            <div className="p-7 rounded-2xl bg-slate-50 border-2 border-slate-100">
              <h3 className="font-display text-xl font-bold mb-3 text-[#1E3A8A] flex items-center gap-2">
                <span className="text-3xl">💎</span> Our Values
              </h3>
              <p className="font-body text-gray-600 leading-relaxed text-sm">
                Respect, responsibility, resilience, and curiosity form the bedrock of our school culture. We believe every child deserves to be seen, heard, and inspired.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Principal's Message */}
      <section className="py-16 bg-slate-50">
        <div className="max-w-4xl mx-auto px-4">
          <div className="text-center mb-10">
            <p className="text-[#F97316] font-body font-semibold text-sm uppercase tracking-widest mb-2">Leadership</p>
            <h2 className="font-display text-3xl font-bold text-[#1E3A8A]">Principal's Message</h2>
            <div className="section-divider mt-4" />
          </div>
          <div className="bg-white rounded-3xl p-8 md:p-12 shadow-sm border border-slate-100 flex flex-col md:flex-row gap-8 items-start">
            <div className="flex-shrink-0 text-center">
              <div className="w-24 h-24 rounded-full bg-[#1E3A8A] flex items-center justify-center mx-auto mb-3">
                <span className="font-display text-white text-3xl font-bold">P</span>
              </div>
              <p className="font-semibold font-body text-[#1E3A8A] text-sm">The Principal</p>
              <p className="text-gray-400 text-xs font-body">Apex TM & EM School</p>
            </div>
            <div>
              <p className="text-gray-600 font-body leading-relaxed mb-4 italic text-lg">
                "Education is not just about filling a child with knowledge — it is about lighting the flame of curiosity and guiding young minds towards their fullest potential."
              </p>
              <p className="text-gray-500 font-body text-sm leading-relaxed mb-3">
                At Apex TM & EM School, we believe that every child is a unique learner with extraordinary potential. Our team of dedicated educators works tirelessly to create an environment where academic rigor meets joyful discovery.
              </p>
              <p className="text-gray-500 font-body text-sm leading-relaxed">
                We are proud to serve the families of Kothapeta and greater Vijayawada, offering both Telugu and English medium education of the highest standard. I warmly invite you to be part of our growing Apex family.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Infrastructure */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-14">
            <p className="text-[#F97316] font-body font-semibold text-sm uppercase tracking-widest mb-2">Infrastructure</p>
            <h2 className="font-display text-3xl font-bold text-[#1E3A8A]">World-Class Facilities</h2>
            <div className="section-divider mt-4" />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {infra.map(({ icon: Icon, title, desc }) => (
              <div key={title} className="text-center p-7 rounded-2xl border-2 border-slate-100 card-hover">
                <div className="w-14 h-14 rounded-2xl bg-[#1E3A8A]/10 flex items-center justify-center mx-auto mb-5">
                  <Icon size={26} className="text-[#1E3A8A]" />
                </div>
                <h3 className="font-display text-lg font-bold text-[#1E3A8A] mb-2">{title}</h3>
                <p className="text-gray-500 font-body text-sm leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
