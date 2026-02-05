export default function Sponsors() {
  return (
      <section className="bg-midnight py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="flex justify-center">
            <img className="w-10 mr-5 " src="handshake.png" alt="handshake" />
            <p className="text-[30px] font-bold uppercase">Nos partenaires</p>
          </div>
          <div className="flex justify-center mt-10">
            <h2 className="text-3xl md:text-5xl font-bold text-white uppercase tracking-wider">
              Ils soutiennent{' '}
              <span className="text-mars-orange font-bold">le futur</span>
            </h2>
          </div>
          <div className="flex justify-around mt-[50px] gap-10">
            <div className="p-10 w-[25%] h-[220px] bg-white rounded-[20px] flex flex-col align-center justify-center">
              <img
                className="border-2  w-[100%]"
                src="topito.png"
                alt="topito logo"
              />
            </div>
            <div className="p-10 w-[25%] h-[220px] bg-white rounded-[20px] flex flex-col align-center justify-center">
              <img
                className="border-2  w-50%]"
                src="bioguia.jpg"
                alt="topito logo"
              />
            </div>
            <div className="p-10 w-[25%] h-[220px] bg-white rounded-[20px] flex flex-col align-center justify-center">
              <img
                className=" border-2  w-[100%]"
                src="Dotsub.png"
                alt="topito logo"
              />
            </div>

            <div className="p-10 w-[25%] h-[220px] bg-white rounded-[20px] flex flex-col align-center justify-center">
              <img
                className="border-2  w-[100%]"
                src="topito.png"
                alt="topito logo"
              />
            </div>
          </div>
                    <div className="flex justify-center">
                    <div className="p-10 w-[25%] h-[220px] bg-white rounded-[20px] flex flex-col align-center justify-center">
                    <img
                    className="border-2  w-[100%]"
                    src="topito.png"
                    alt="topito logo"
                    />
                        

          </div>
        </div>
        </div>
      </section>
  );
}
