
const WhoWeAre = () => {
  return (
    <section className=" w-full flex justify-center items-center gap-3 mt-12">
        <div className="flex flex-col justify-between w-[700px] h-[450px] bg-red-500 rounded-3xl px-8 py-16">
            <h3 className="pl-8 w-[550px] font-montserrat uppercase text-4xl max-sm:text-[72px] max-sm:leading-[82px] font-extrabold">
                Nós Pensamos em Estilos de um jeito Diferente.
            </h3>
            <hr className="border border-black mt-3"></hr>
            
            <div className=" flex justify-around py-12 px-8">
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
        <div className="w-[430px] h-[450px] bg-who bg-cover bg-center rounded-2xl grayscale"></div>
    </section>
  )
}

export default WhoWeAre;
