import { logo } from "../assets/images";
import { navLinks } from "../constants";

const Nav = () => {
  return (
    <header className="padding-x py-4 absolute z-10 w-full bg-slate-800">
      <nav className="flex justify-between max-containe">
        <a href="/">
          <img src={logo} alt="Logo" width={90} height={24} />
        </a>
        <ul className="flex-1 flex justify-center items-center gap-16">
          {navLinks.map((link) => (
            <li key={link.label}>
              <a
                href={link.href}
                className="font-montserrat leading-normal text-sm text-white"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
};

export default Nav;
