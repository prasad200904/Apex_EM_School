import { useState } from 'react'
import PageHero from '../components/PageHero'

const categories = ['All', 'Classrooms', 'Events', 'Sports', 'Cultural', 'Labs']

// Photo grid with placeholder gradients mimicking real photos
const photos = [
  { id: 1, cat: 'Classrooms', title: 'Smart Classroom Setup', emoji: '🏫', grad: 'from-blue-600 to-blue-400' },
  { id: 2, cat: 'Cultural', title: 'Annual Day Celebration', emoji: '🎭', grad: 'from-orange-500 to-red-400' },
  { id: 3, cat: 'Sports', title: 'Cricket Tournament', emoji: '🏏', grad: 'from-green-600 to-teal-400' },
  { id: 4, cat: 'Labs', title: 'Science Lab Session', emoji: '🔬', grad: 'from-purple-600 to-indigo-400' },
  { id: 5, cat: 'Events', title: 'Independence Day', emoji: '🇮🇳', grad: 'from-orange-600 to-yellow-400' },
  { id: 6, cat: 'Cultural', title: 'Bharatanatyam Performance', emoji: '💃', grad: 'from-pink-600 to-rose-400' },
  { id: 7, cat: 'Sports', title: 'Athletic Meet', emoji: '🏃', grad: 'from-sky-600 to-blue-400' },
  { id: 8, cat: 'Classrooms', title: 'Library Reading Hour', emoji: '📚', grad: 'from-amber-600 to-orange-400' },
  { id: 9, cat: 'Events', title: 'Teachers Day Function', emoji: '👩‍🏫', grad: 'from-teal-600 to-cyan-400' },
  { id: 10, cat: 'Cultural', title: 'Diwali Celebration', emoji: '🪔', grad: 'from-yellow-500 to-amber-300' },
  { id: 11, cat: 'Sports', title: 'Kabaddi Competition', emoji: '🤼', grad: 'from-red-600 to-orange-400' },
  { id: 12, cat: 'Labs', title: 'Computer Lab Class', emoji: '💻', grad: 'from-slate-600 to-gray-400' },
  { id: 13, cat: 'Events', title: 'Graduation Ceremony', emoji: '🎓', grad: 'from-blue-800 to-blue-500' },
  { id: 14, cat: 'Cultural', title: 'Fancy Dress Competition', emoji: '🎪', grad: 'from-violet-600 to-purple-400' },
  { id: 15, cat: 'Classrooms', title: 'Group Activity Session', emoji: '🤝', grad: 'from-emerald-600 to-green-400' },
  { id: 16, cat: 'Sports', title: 'Football Match', emoji: '⚽', grad: 'from-lime-600 to-green-400' },
]

export default function Gallery() {
  const [active, setActive] = useState('All')
  const filtered = active === 'All' ? photos : photos.filter(p => p.cat === active)

  return (
    <>
      <PageHero
        breadcrumb="Visual Tour"
        title="Photo Gallery"
        subtitle="Glimpses of life at Apex School — classrooms, events, sports, and cultural moments."
      />

      {/* Filter */}
      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex flex-wrap justify-center gap-3 mb-10">
            {categories.map(cat => (
              <button key={cat} onClick={() => setActive(cat)}
                className={`px-5 py-2.5 rounded-xl font-body text-sm font-medium transition-all
                  ${active === cat
                    ? 'bg-[#1E3A8A] text-white shadow-lg scale-105'
                    : 'bg-slate-100 text-gray-600 hover:bg-slate-200'}`}>
                {cat}
              </button>
            ))}
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {filtered.map(({ id, title, emoji, grad }) => (
              <div key={id}
                className={`relative rounded-2xl overflow-hidden aspect-square bg-gradient-to-br ${grad}
                  card-hover cursor-pointer group`}>
                <div className="absolute inset-0 flex flex-col items-center justify-center p-4">
                  <span className="text-5xl mb-3 drop-shadow-lg">{emoji}</span>
                </div>
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-all flex items-end p-4">
                  <p className="text-white font-body text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity leading-tight">
                    {title}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {filtered.length === 0 && (
            <p className="text-center text-gray-400 font-body py-16">No photos in this category yet.</p>
          )}
        </div>
      </section>

      {/* CTA */}
      <section className="py-12 bg-slate-50">
        <div className="max-w-2xl mx-auto px-4 text-center">
          <p className="text-gray-500 font-body text-sm">
            📸 More photos and videos are added regularly. Follow us for updates.
          </p>
          <a href="https://wa.me/919393999674" target="_blank" rel="noopener noreferrer"
            className="inline-flex mt-4 items-center gap-2 px-6 py-3 rounded-xl bg-[#25D366] text-white font-body text-sm font-medium hover:bg-green-500 transition-colors">
            <svg viewBox="0 0 32 32" className="w-5 h-5 fill-white">
              <path d="M16 2C8.268 2 2 8.268 2 16c0 2.417.635 4.686 1.748 6.658L2 30l7.542-1.716A13.93 13.93 0 0016 30c7.732 0 14-6.268 14-14S23.732 2 16 2z"/>
            </svg>
            Follow on WhatsApp for Updates
          </a>
        </div>
      </section>
    </>
  )
}
