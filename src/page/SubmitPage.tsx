
import SubmitMetaData from '../components/SubmitMetaData'
import SubmitRealisator from '../components/SubmitRealisator'
import SubmitAi from '../components/SubmitAi'
import SubmitTeam from '../components/SubmitTeam'
import SubmitMedia from '../components/SubmitMedia'

export default function SubmitPage() {
  return (
    <section className="bg-midnight py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl md:text-5xl font-bold text-white uppercase tracking-wider mb-10">Soumission de film</h2>
        <SubmitRealisator />
        <SubmitMetaData />
        <SubmitAi />
        <SubmitMedia />
        <SubmitTeam/>
      </div>
    </section>
  )
}
