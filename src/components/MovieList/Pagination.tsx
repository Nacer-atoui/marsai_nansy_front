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
      <div className="text-center ">
        <div className="flex justify-center gap-5">
          <p className="cursor-pointer focus:outline-2 focus:outline-[#00FFFF]/30  mt-10 w-full lg:w-[8%] border-[#00FFFF]/30 border-2 p-3 rounded-lg bg-[#0B0F23] " onClick={() => {actualPage > 1 ? setActualPage(actualPage -1) : false}}>
            ᐊ Précédent
          </p>
 
          {[...Array(pagination)].map((_, i) => {
            if (actualPage-1 == i) {
              return (
                <p className="focus:outline-2 focus:outline-[#00FFFF]/30  mt-10 w-full lg:w-[3%] border-[#00FFFF]/30 border-2 p-3 rounded-lg bg-[#0B0F23] opacity-35 disabled">
                  {i + 1}
                </p>
              );
            } else {
              return (
                <p
                  className="cursor-pointer focus:outline-2 focus:outline-[#00FFFF]/30  mt-10 w-full lg:w-[3%] border-[#00FFFF]/30 border-2 p-3 rounded-lg bg-[#0B0F23]"
                  onClick={() => {
                    setActualPage(i+1);
                  }}
                >
                  {i + 1}
                </p>
              );
            }
          })}

          <p className="cursor-pointer focus:outline-2 focus:outline-[#00FFFF]/30  mt-10 w-full lg:w-[8%] border-[#00FFFF]/30 border-2 p-3 rounded-lg bg-[#0B0F23] "  onClick={() => {actualPage < 3 ? setActualPage(actualPage +1) : false}}>
            Suivant ᐅ
          </p>
        </div>
      </div>
    </section>
  );
}
