import React from 'react'

export default function NightEvent() {
  return (
    <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
            <div className="gap-10 p-12 bg-white/10 border border-[#00FFFF]/30 shadow-[0_0_15px_#00FFFF]/50 rounded-xl bg-[url('/public/fond-night-opacity.png')] bg-cover bg-center ">
                <button className="px-6 py-3 bg-mars-orange text-white font-bold rounded-lg uppercase mb-6 hover:bg-orange-600 transition-colors duration-300 w-[30%]">
                    Cérémonie de clôture
                </button>

                <div className='flex gap-10 '>
                    <div className="flex mb-6 flex-col w-[50%] gap-6">
                        <h2 className="text-white text-4xl md:text-[100px] font-bold">MARS<span className='text-mars-orange'>AI</span> <br />NIGHT</h2>
                        <p className="text-gray-400 mt-4 text-lg md:text-2xl max-w-3xl">
                            Fête Électro mêlant IA et futurs souhaitables. Une expérience immersive sonore et visuelle. 
                        </p>
                    </div>
                    <div className="flex flex-col md:flex-row gap-6 w-[50%] ">
                        <div className="flex-1 bg-gray-900 border border-slate-700 rounded-xl p-6 text-gray-500">
                            <div className='flex items-center flex-col justify-center gap-10 p-5'>
                                <img src="/public/calendrier.png" alt="Icone d'un calendrier" className='w-20'/>
                                <p className='text-7xl font-bold'>13 JUIN</p>
                                <p className='text-3xl text-orange-500'>à partir de 19h</p>
                                <button className="px-6 py-3 bg-mars-orange text-white font-bold rounded-lg uppercase mb-6 hover:bg-orange-600 transition-colors duration-300 w-[50%]">Prendre mon pass</button>
                            </div>
                        </div>
                    </div>
                </div>
                
            </div>
        </div>
    </section>
  )
}
