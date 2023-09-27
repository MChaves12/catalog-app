import { useState } from "react";
import Button from "../components/Button";
import ProductCard from "../components/ProductCard";

import { mockProducts } from "../constants";

const ShopByEssentials = () => {
    
    const btnNames = ["All", "prata", "ouro", "Mais Vendidos"];

    const [products, setProducts] = useState(mockProducts);

    const checkCategory = (products, btnName) => {
        let filteredProducts = [];

        if(products && btnName === "All"){
            setProducts(mockProducts);
        }
        
        for(let i=0; i<products.length; i++) {
            if(products[i].category === btnName){
                filteredProducts.push(products[i]);
                setProducts(filteredProducts);
            }
        }
        console.log(filteredProducts)
    }
   

    return products && (
    <section id="products">
        <h3 className="font-montserrat w-full text-3xl text-center uppercase font-bold md:text-4xl md:mt-11 ">Shop By Essentials</h3>

        <div className="flex justify-around px-2 gap-4 mt-5 lg:justify-center">
            {btnNames.map((btnName) => (
                <Button
                    key={btnName} 
                    label={btnName} 
                    textColor={"text-black"}
                    products={mockProducts}
                    checkCategory={checkCategory}
                />
            ))}
        </div>
        
        <div className="flex justify-center">
            <div className="grid grid-cols-2 mt-8 gap-1 px-2 lg:grid-cols-4">
                {products.map((product) => (
                    <ProductCard key={product.name} {...product} />
                ))}  
            </div>
        </div>    
    </section>
  )}

export default ShopByEssentials