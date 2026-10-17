import {
  backgroundTechnologyDesktop,
  backgroundTechnologyMobile,
  backgroundTechnologyTablet,
} from "../assets";
import { Background } from "../components/Background";
import { useLocalStorage } from "../hook/useLocalStorage";
import type { SpaceData } from "../types/space";
type TechnologyProp = {
  tech: SpaceData;
};
type TechnologyMenu = "Launch vehicle" | "Spaceport" | "Space capsule";
export const Technology = ({ tech }: TechnologyProp) => {
  const [clickedTech, setClickedTech] = useLocalStorage(
    "Technology",
    "Launch vehicle",
  );
  const technologyMenu: TechnologyMenu[] = [
    "Launch vehicle",
    "Spaceport",
    "Space capsule",
  ];
  return (
    <div>
      <main className="text-secondary relative z-10 p-300 pb-600 md:p-500">
        <h1 className="md:text-preset-6 lg:text-preset-5 font-barlow-condensed flex justify-center gap-4 pb-300 md:justify-start">
          <span className="text-secondary/50">03</span>
          <span className="uppercase">space launch 101</span>
        </h1>
        <div className="font-bellefair lg:flex lg:flex-row-reverse lg:items-center lg:justify-center">
          <ul className="grid pt-800 pb-400">
            {tech.technology.map(
              ({ name, images: { portrait, landscape } }) => (
                <li
                  key={name}
                  className={`transition-opacity duration-500 ease-out ${clickedTech === name ? "block opacity-100" : "pointer-events-none opacity-0"} col-start-1 row-start-1 text-center`}
                >
                  <img
                    src={portrait}
                    alt={name}
                    className="h-68 w-full object-cover object-bottom md:hidden lg:block lg:h-auto"
                  />
                  <img
                    src={landscape}
                    alt={name}
                    className="mx-auto hidden md:block lg:hidden"
                  />
                </li>
              ),
            )}
          </ul>
          <div className="lg:flex lg:items-center">
            <nav>
              <ul className="md:text-preset-6 flex justify-center gap-4 pb-500 lg:flex-col lg:pr-800 lg:pb-0">
                {technologyMenu.map((item, index) => (
                  <li key={item}>
                    <button
                      type="button"
                      aria-label={`Read about ${item}.`}
                      onClick={() => setClickedTech(item)}
                      className={`${item === clickedTech ? "bg-secondary" : "text-secondary hover:ring-secondary hover:ring"} text-preset-9 text-primary ring-secondary/30 lg:text-preset-4 h-10 w-10 cursor-pointer rounded-full ring md:h-14 md:w-14 xl:h-20 xl:w-20`}
                    >
                      <span>{index + 1}</span>
                    </button>
                  </li>
                ))}
              </ul>
            </nav>
            <div>
              <span className="text-preset-9 text-secondary/50 md:text-preset-6 inline-block w-full text-center uppercase lg:text-start">
                the terminology...
              </span>
              <ul className="grid text-center lg:pr-400">
                {tech.technology.map(({ name, description }) => (
                  <li
                    key={name}
                    className={`transition-opacity duration-500 ease-out ${clickedTech === name ? "block opacity-100" : "pointer-events-none opacity-0"} col-start-1 row-start-1 text-center lg:text-start`}
                  >
                    <h2 className="text-preset-6 md:text-preset-4 lg:text-preset-3 uppercase">
                      {name}
                    </h2>
                    <p className="text-text lg:text-preset-9 font-barlow mt-200 md:mx-auto md:max-w-lg">
                      {description}
                    </p>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </main>
      <Background
        mobile={backgroundTechnologyMobile}
        tablet={backgroundTechnologyTablet}
        desktop={backgroundTechnologyDesktop}
      />
    </div>
  );
};
