import { useState, useRef } from "react";
import { motion, useInView } from "framer-motion";
import Button from "../components/Button";
import ProductCard from "../components/ProductCard";

import { mockProducts } from "../constants";

const ShopByEssentials = () => {
    
    const btnNames = ["All", "prata", "ouro", "Mais Vendidos"];

    const [products, setProducts] = useState(mockProducts);

    const ref = useRef(null)
    const isInView = useInView(ref, {once: true})

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
    };

    const container = {
        hidden: { opacity: 1, scale: 0 },
        visible: {
          opacity: isInView ? 1 : 0,
          scale: 1,
          transition: {
            delayChildren: 0.3,
            staggerChildren: 0.2
          }
        },
      };

      const item = {
        hidden: { y: 20, opacity: 0 },
        visible: {
          y: 0,
          opacity: 1
        }
      };
   

    return products && (
    <section id="products" className="flex flex-col justify-center items-center">
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
        
        <div className="flex justify-center items-center">
            <motion.div className="container grid grid-cols-2 mt-8 gap-1 px-2 lg:grid-cols-4"
                variants={container}
                initial="hidden"
                animate="visible"
                
            >
                {products.map((product) => (
                    <motion.div ref={ref}  key={product.name} className="item" variants={item}>
                        <ProductCard key={product.name} {...product} />
                    </motion.div>
                ))}  
            </motion.div>
        </div>    
    </section>
  )}

export default ShopByEssentials