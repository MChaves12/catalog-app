const Button = ({label, backgroundColor, textColor, icon, products, checkCategory}) => {
  
  const handleClick = () => {
    checkCategory(products, label)
  }
  
  
  return (
    <button onClick={handleClick} className={`flex justify-between
    items-center gap-2 pl-4 pr-4 py-4 border
    font-montserrat text-sm leading-none rounded-full 
    h-[35px] ${backgroundColor} ${textColor} 
    hover:bg-black hover:text-white
    focus:bg-black focus:text-white`}>
        {label}
        {icon && <img src={icon} alt="icon" className="ml-2 rounded-full w-6 h-6" />}
    </button>
  )
}

export default Button;
