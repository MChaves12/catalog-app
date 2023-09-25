
const WhoWeAre = () => {
  return (
    <section className="flex flex-col justify-center items-center px-2 gap-3 mt-12 md:flex-row">
        <div className="w-full flex flex-col justify-between bg-red-500 rounded-3xl px-2 py-8 md:w-96 lg:w-[1000px] lg:h-[655px]">
            <h3 className="pl-8 font-montserrat uppercase text-4xl font-extrabold lg:w-[750px] lg:text-[72px] lg:leading-[72px]">
                Nós Pensamos em Estilos de um jeito Diferente.
            </h3>
            <hr className="border border-black mt-3"></hr>
            
            <div className=" w-full justify-around flex flex-col px-8 lg:flex-row lg:items-baseline">
                <div>
                    <p className="font-montserrat text-black text-xl font-bold uppercase leading-4 lg:text-3xl">Missão</p>
                    <p className="w-52 mt-4 font-montserrat text-black text-md leading-5 lg:text-2xl lg:w-96">Nossa missão é empoderar a criatividade e a independencia de um jeito único e incrivel.</p>
                </div>
                <div>
                    <p className="font-montserrat text-black text-lg font-bold uppercase leading-4 lg:text-3xl">Atitude</p>
                    <p className="w-64 mt-4 font-montserrat text-black text-md leading-5 lg:text-2xl lg:w-96">A atitude é o nosso brilho mais precioso. Cada peça reflete a elegância e confiança que você merece.</p>
                </div>    
            </div>
        </div>
        <div className="w-full h-96 bg-who bg-cover bg-center rounded-2xl grayscale md:w-96 md:h-[655px]"></div>
    </section>
  )
}

export default WhoWeAre;
