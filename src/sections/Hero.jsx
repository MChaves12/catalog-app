import Button from "../components/Button";
import {arrowDown, email} from "../assets/icons";

export const Hero = () => {
  return (
    <section>

        <div className="mt-[2.5px] bg-hero hero1 flex justify-evenly items-end pb-4">
            <Button label="SHOP NOW" backgroundColor="bg-white" textColor="text-black" icon={arrowDown} />
            <Button label="CONTACT US" textColor="text-white" icon={email} />
        </div>

    </section>
  )
}

export default Hero;
