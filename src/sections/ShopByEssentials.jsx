import Button from "../components/Button";
import ProductCard from "../components/ProductCard";

import { mockProducts } from "../constants";

const ShopByEssentials = () => {
    
    const btnNames = ["All", "Prata", "Ouro", "Mais Vendidos"];

    return (
    <section>
        <h3 className="font-montserrat w-full text-4xl uppercase font-bold pl-[90px]">Shop By Essentials</h3>

        <div className="flex justify-around gap-5 w-[500px] pl-[90px] mt-5">
            {btnNames.map((btnName) => (
                <Button 
                    key={btnName} 
                    label={btnName} 
                    textColor={"text-black"}
                />
            ))}
        </div>
        
        <div className="flex justify-center">
            <div className="grid grid-cols-4 mt-8 gap-5">
                {mockProducts.map((product) => (
                    <ProductCard key={product.name} {...product} />
                ))}  
            </div>
        </div>
        
    </section>
  )
}

export default ShopByEssentials