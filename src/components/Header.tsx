import { useCallback, useRef, useState } from "react";
import { Link, Outlet } from "react-router";
import { iconClose, iconHamburger, logo } from "../assets";
import { Navbar } from "./Navbar";
type HeaderProp = {
  onClick: (menu: string) => void;
  clicked: string;
};
export const Header = ({ onClick, clicked }: HeaderProp) => {
  const [isOpen, setIsOpen] = useState(false);
  const handleOpen = useCallback((status: boolean) => {
    setIsOpen(status);
  }, []);

  const buttonRef = useRef<HTMLButtonElement | null>(null);
  return (
    <>
      <header className="relative z-50 flex items-center justify-between overflow-x-clip p-300 md:p-0">
        <div className="md:px-500 lg:w-40 lg:pr-0">
          <Link to={"/"} aria-label="Space Tourism">
            <img src={logo} alt="" className="" />
          </Link>
        </div>
        <button
          ref={buttonRef}
          type="button"
          onClick={() => setIsOpen((prev) => !prev)}

          className="relative z-30 cursor-pointer md:hidden"
        >
          {isOpen ? (
            <img src={iconClose} alt="" />
          ) : (
            <img src={iconHamburger} alt="" />
          )}
        </button>
        <div className="bg-secondary/50 relative z-50 hidden h-0.5 w-1/2 translate-x-10 lg:block"></div>
        <Navbar
          isOpen={isOpen}
          onOpen={handleOpen}
          buttonRef={buttonRef}
          onClick={onClick}
          clicked={clicked}
        />
      </header>

      <Outlet />
    </>
  );
};
