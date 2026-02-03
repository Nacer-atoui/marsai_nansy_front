import React from 'react'
import H2 from './ui-kit/h2'

export default function EventFormat() {
  return (
    <section className="bg-slate-900 py-20 px-4">
      <div className="max-w-7xl mx-auto">
            <H2 texte="Format de la sélection" />
            <p className="text-gray-400 mt-4 max-w-2xl text-lg">Le parcours des oeuvres</p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="relative h-96 rounded-3xl overflow-hidden group shadow-xl border border-slate-800">
                    
                </div>
            </div>
        </div>
    </section>
  )
}
