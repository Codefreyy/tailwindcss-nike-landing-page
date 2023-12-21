import { headerLogo } from "../assets/images"
import { hamburger } from "../assets/icons"
import { navLinks } from "../constants"

const Nav = () => {
  return (
    <header className="padding-x py-8  w-full z-10">
      <nav className="flex justify-between items-center max-container">
        <a href="/">
          <img src={headerLogo} alt="Nike Logo" width={120} height={29} />
        </a>
        <ul className="flex-1 flex justify-end items-center gap-16 max-lg:hidden">
          {navLinks.map((nav) => (
            <li
              key={nav.href}
              className="font-montserrat leading-normal text-lg text-slate-gray"
            >
              <a href={nav.href}>{nav.label}</a>
            </li>
          ))}
        </ul>
        <div className="lg:hidden">
          <img src={hamburger} alt="Hamburger Menu" width={25} height={25} />
        </div>
      </nav>
    </header>
  )
}

export default Nav
