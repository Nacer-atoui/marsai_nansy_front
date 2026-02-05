import React from 'react'

export default function h2({texte}: {texte: string}) {
  return (
    <h2 className="text-3xl md:text-5xl font-bold text-white uppercase tracking-wider">{texte}</h2>
  )
}
