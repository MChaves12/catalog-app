import Button from "../components/Button";
import {arrowDown, email} from "../assets/icons";

export const Hero = () => {
  return (
    <section className="flex flex-col px-2 justify-evenly mt-2 h-[800px] md:flex-row md:h-[400px]">

        <div className="bg-hero hero1 flex justify-evenly items-end pb-4 md:w-96 lg:w-[900px] lg:h-[450px]">
            <Button label="SHOP NOW" backgroundColor="bg-white" textColor="text-black" icon={arrowDown} />
            <Button label="CONTACT US" textColor="text-white" icon={email} />
        </div>

        <div className="flex flex-col justify-between h-[400px] md:w-96 md:h-96 md:gap-1 lg:w-[600px] lg:h-[450px]">
            <div className=" bg-stone-300 h-52 rounded-xl flex flex-col justify-around lg:h-64">
                <h1 className="mt-2 pl-8 font-montserrat text-[38px] leading-10 font-extrabold lg:text-[52px] lg:leading-[48px]">
                    VISTA-SE DE <span className="text-red-400"> ATITUDE </span> USE AMARÍLIS.
                </h1>
                <p className="info-text lg:text-lg">
                    Queremo desafiar o obvio, o padrão, com um estilo unico e peças fantasticas.
                </p>
            </div>

            <div className="flex justify-between gap-1">
                <div className="bg-ouro hero3">
                    <p className="pl-8 text-2xl font-montserrat font-bold text-white-400">
                        #OURO
                    </p>
                </div>

                <div className="bg-prata hero3">
                    <p className="pl-8 text-2xl font-montserrat font-bold text-white-400">
                        #PRATA
                    </p>
                </div>  
            </div>    
        </div>
    </section>
  )
}

export default Hero;
