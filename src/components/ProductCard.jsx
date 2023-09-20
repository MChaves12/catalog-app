
const ProductCard = ({imgURL, name, price}) => {
  return (
    <div className="flex flex-1 flex-col w-full max-sm:w-full">
    <img
      src={imgURL} alt={name}
      className="w-[280px] h-[380px] object-cover rounded-xl"
    />
    
    <h3 className="mt-2 text-xl leading-normal font-semibold font-palanquin">{name}</h3>
    <p className="mt-2 font-semibold font-montserrat text-coral-red text-sm leading-normal">{price}</p>
  </div>
  )
}

export default ProductCard;
