import { logo } from "../assets/images";
import { hamburger } from "../assets/icons";
import { navLinks } from "../constants";

const Nav = () => {
  return (
    <header className="padding-x py-4 z-10 relative w-full">
      <nav className="flex justify-between max-containe">
        <a href="/">
          <img src={logo} alt="Logo" width={90} height={24} />
        </a>
        <ul className="flex-1 flex justify-center items-center gap-16 max-lg:hidden">
          {navLinks.map((link) => (
            <li key={link.label}>
              <a
                href={link.href}
                className="font-montserrat leading-normal text-sm text-green-400"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>
        <div className="hidden max-lg:block">
            <img
                src={hamburger}
                alt="Hamburguer Icon"
                width={25}
                height={25}
            />
        </div>
      </nav>
    </header>
  );
};

export default Nav;
