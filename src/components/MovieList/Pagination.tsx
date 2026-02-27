import type { SetStateAction } from 'react';
import type { Dispatch } from 'react';

export default function Pagination({
  actualPage,
  pagination,
  setActualPage,
}: {
  actualPage: number;
  pagination: number;
  setActualPage: Dispatch<SetStateAction<number>>;
}) {
  return (
    <section className="py-20 px-4 font-montserrat text-white">
      <div className="text-center">
        <div className="flex justify-center items-center gap-2 lg:gap-5 flex-wrap">
          
          {/* BOUTON PRÉCÉDENT */}
          <button 
            className={`mt-10 px-6 py-3 rounded-lg bg-[#0B0F23] border-2 transition-all ${
              actualPage > 1 
              ? 'cursor-pointer border-[#00FFFF]/30 hover:border-[var(--primary-color)]' 
              : 'opacity-20 cursor-not-allowed border-gray-700'
            }`}
            onClick={() => actualPage > 1 && setActualPage(actualPage - 1)}
          >
            ᐊ Précédent
          </button>
 
          {/* CHIFFRES DE PAGINATION */}
          {[...Array(pagination)].map((_, i) => {
            const pageNum = i + 1;
            const isActive = actualPage === pageNum;

            return (
              <button
                /* 💡 RÉSOLUTION DE L'ERREUR : Key unique ajoutée ici */
                key={`page-node-${pageNum}`}
                className={`mt-10 w-12 h-12 flex items-center justify-center border-2 rounded-lg transition-all ${
                  isActive
                    ? 'border-[var(--primary-color)] bg-[var(--primary-color)]/20 text-white shadow-[0_0_15px_var(--primary-color)]/30'
                    : 'cursor-pointer border-[#00FFFF]/30 bg-[#0B0F23] hover:border-[var(--primary-color)]/50'
                }`}
                onClick={() => !isActive && setActualPage(pageNum)}
              >
                {pageNum}
              </button>
            );
          })}

          {/* BOUTON SUIVANT */}
          <button 
            className={`mt-10 px-6 py-3 rounded-lg bg-[#0B0F23] border-2 transition-all ${
              actualPage < pagination 
              ? 'cursor-pointer border-[#00FFFF]/30 hover:border-[var(--primary-color)]' 
              : 'opacity-20 cursor-not-allowed border-gray-700'
            }`}
            /* 💡 CORRECTION LOGIQUE : On compare avec 'pagination' au lieu du chiffre fixe 3 */
            onClick={() => actualPage < pagination && setActualPage(actualPage + 1)}
          >
            Suivant ᐅ
          </button>
          
        </div>
      </div>
    </section>
  );
}