
const Button = ({label, backgroundColor, textColor, icon, }) => {
  return (
    <button className={`flex justify-between
    items-center gap-2 pl-4 pr-1 py-4 border 
    font-montserrat text-sm leading-none rounded-full w-[200px] h-[35px] ${backgroundColor} ${textColor}`}>
        {label}
        {icon && <img src={icon} alt="icon" className="ml-2 rounded-full w-6 h-6" />}
    </button>
  )
}

export default Button;
