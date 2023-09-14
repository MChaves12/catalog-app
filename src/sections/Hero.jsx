import Button from "../components/Button";
import {arrowDown, email} from "../assets/icons";

export const Hero = () => {
  return (
    <section className="flex justify-evenly mt-2">

        <div className="bg-hero hero1 flex justify-evenly items-end pb-4">
            <Button label="SHOP NOW" backgroundColor="bg-white" textColor="text-black" icon={arrowDown} />
            <Button label="CONTACT US" textColor="text-white" icon={email} />
        </div>

        <div className="flex flex-col justify-between">
            <div className=" bg-stone-300 w-[610px] h-[350px] rounded-xl flex flex-col justify-around">
                <h1 className="mt-2 pl-8 w-96 font-montserrat text-4xl max-sm:text-[72px] max-sm:leading-[82px] font-extrabold">
                    VISTA-SE DE <span className="text-red-400"> ATITUDE </span> USE AMARÍLIS.
                </h1>
                <p className="info-text">
                    Queremo desafiar o obvio, o padrão, com um estilo unico e peças fantasticas.
                </p>
            </div>

            <div className="flex justify-between">
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
