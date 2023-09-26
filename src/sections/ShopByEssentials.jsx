import Button from "../components/Button";
import ProductCard from "../components/ProductCard";

import { mockProducts } from "../constants";

const ShopByEssentials = () => {
    
    const btnNames = ["All", "Prata", "Ouro", "Mais Vendidos"];

    return (
    <section>
        <h3 className="font-montserrat w-full text-3xl text-center uppercase font-bold md:text-4xl md:mt-11 ">Shop By Essentials</h3>

        <div className="flex justify-around px-2 gap-4 mt-5 lg:justify-center">
            {btnNames.map((btnName) => (
                <Button 
                    key={btnName} 
                    label={btnName} 
                    textColor={"text-black"}
                />
            ))}
        </div>
        
        <div className="flex justify-center">
            <div className="grid grid-cols-2 mt-8 gap-1 px-2 lg:grid-cols-4">
                {mockProducts.map((product) => (
                    <ProductCard key={product.name} {...product} />
                ))}  
            </div>
        </div>    
    </section>
  )
}

export default ShopByEssentials