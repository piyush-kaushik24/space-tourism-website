import { useEffect, useRef, type RefObject } from "react";
import { useNavigate } from "react-router";
type NavbarProps = {
  isOpen: boolean;
  onOpen: (status: boolean) => void;
  buttonRef: RefObject<HTMLButtonElement | null>;
  onClick: (menu: string) => void;
  clicked: string;
};
export const Navbar = ({
  isOpen,
  onOpen,
  buttonRef,
  onClick,
  clicked,
}: NavbarProps) => {
  const navigate = useNavigate();
  const spaceMenu = [
    {
      id: "00",
      name: "Home",
      path: "/",
    },
    {
      id: "01",
      name: "Destination",
      path: "/destination",
    },
    {
      id: "02",
      name: "Crew",
      path: "/crew",
    },
    {
      id: "03",
      name: "Technology",
      path: "/technology",
    },
  ];
  const navbarRef = useRef<HTMLDivElement | null>(null);
  useEffect(() => {
    function handleClick(e: MouseEvent) {
      const target = e.target as Node;
      if (
        !buttonRef.current?.contains(target) &&
        !navbarRef.current?.contains(target)
      ) {
        onOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClick);

    return () => {
      document.removeEventListener("mousedown", handleClick);
    };
  }, [onOpen, buttonRef]);

  return (
    <nav
      ref={navbarRef}
      className={`absolute top-0 right-0 h-screen w-3/4 py-1000 pl-400 transition-transform duration-500 ease-in ${
        isOpen ? "translate-x-0" : "translate-x-full"
      } bg-secondary/5 font-barlow-condensed backdrop-blur-2xl md:static md:h-full md:w-full md:translate-x-0 md:p-500 md:pl-1200`}
    >
      <ul className="flex flex-col gap-600 md:flex-row lg:justify-end">
        {spaceMenu.map(({ id, name, path }) => (
          <li
            key={id}
            className="group flex items-center justify-between md:flex-col"
          >
            <button
              type="button"
              onClick={() => {
                navigate(path);
                onClick(id);
                onOpen(false);
              }}
              className="flex cursor-pointer gap-100"
            >
              <span className="text-secondary font-bold">{id}</span>
              <span className="text-secondary/80">{name}</span>
            </button>
            <span
              className={`h-0 w-1 opacity-0 transition-all duration-500 ${
                id === clicked
                  ? "bg-secondary h-5 opacity-100"
                  : "group-hover:bg-secondary bg-transparent group-hover:h-5 group-hover:opacity-50 md:group-hover:h-full"
              } md:absolute md:bottom-0 md:h-full md:translate-y-1/2 md:rotate-90`}
            />
          </li>
        ))}
      </ul>
    </nav>
  );
};
