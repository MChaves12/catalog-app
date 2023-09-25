
const WhoWeAre = () => {
  return (
    <section className="flex flex-col justify-center items-center px-2 gap-3 mt-12">
        <div className="w-full flex flex-col justify-between bg-red-500 rounded-3xl px-2 py-8">
            <h3 className="pl-8 font-montserrat uppercase text-4xl font-extrabold">
                Nós Pensamos em Estilos de um jeito Diferente.
            </h3>
            <hr className="border border-black mt-3"></hr>
            
            <div className=" w-full h-72 justify-around flex flex-col px-8">
                <div>
                    <p className="font-montserrat text-black text-xl font-bold uppercase leading-4">Missão</p>
                    <p className="w-52 mt-4 font-montserrat text-black text-md leading-5">Nossa missão é empoderar a criatividade e a independencia de um jeito único e incrivel.</p>
                </div>
                <div>
                    <p className="font-montserrat text-black text-lg font-bold uppercase leading-4">Atitude</p>
                    <p className="w-64 mt-4 font-montserrat text-black text-md leading-5">A atitude é o nosso brilho mais precioso. Cada peça reflete a elegância e confiança que você merece.</p>
                </div>    
            </div>
        </div>
        <div className="w-full h-96 bg-who bg-cover bg-center rounded-2xl grayscale"></div>
    </section>
  )
}

export default WhoWeAre;
