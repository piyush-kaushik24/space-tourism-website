import {
  backgroundDestinationDesktop,
  backgroundDestinationMobile,
  backgroundDestinationTablet,
} from "../assets";
import { Background } from "../components/Background";
import { useLocalStorage } from "../hook/useLocalStorage";
import type { SpaceData } from "../types/space";
type DestinationProp = {
  destination: SpaceData;
};
type TabsMenu = "Moon" | "Mars" | "Europa" | "Titan";
export const Destination = ({ destination }: DestinationProp) => {
  const [planet, setPlanet] = useLocalStorage("Destination", "Moon");
  const tabsMenu: TabsMenu[] = ["Moon", "Mars", "Europa", "Titan"];
  return (
    <div>
      <main className="text-text font-barlow-condensed relative z-10 p-300 md:p-400">
        <h1 className="md:text-preset-6 lg:text-preset-5 flex justify-center gap-4 pb-300 md:justify-start">
          <span className="text-secondary/50 font-bold">01</span>
          <p className="">PICK YOUR DESTINATION</p>
        </h1>
        <div className="grid-cols-2 items-center lg:grid lg:gap-8">
          <ul className="grid">
            {destination.destinations.map(({ name, images: { png } }) => (
              <li
                key={name}
                className={`transition-opacity duration-500 ease-out ${planet === name ? "block opacity-100" : "pointer-events-none opacity-0"} planets-float col-start-1 row-start-1 mx-auto w-1/2 text-center lg:w-sm`}
              >
                <img src={png} alt="" />
              </li>
            ))}
          </ul>
          <div>
            <nav className="pt-400">
              <ul className="text-preset-7 my-400 flex justify-center gap-400 lg:justify-start">
                {tabsMenu.map((item) => (
                  <li key={item} className="group">
                    <button
                      type="button"
                      onClick={() => setPlanet(item)}
                      className={`${planet === item ? "text-secondary" : "hover:text-secondary"} cursor-pointer uppercase`}
                    >
                      {item}
                    </button>
                    <div
                      className={`w-0 transition-all duration-300 ease-in ${planet === item ? "w-full opacity-100" : "opacity-0"} bg-secondary group-hover:bg-secondary/50 mx-auto mt-4 h-1 group-hover:w-full group-hover:opacity-100`}
                    ></div>
                  </li>
                ))}
              </ul>
            </nav>
            <ul className="grid">
              {destination.destinations.map(
                ({ name, description, distance, travel }) => (
                  <li
                    key={name}
                    className={`transition-opacity duration-500 ease-out ${planet === name ? "block opacity-100" : "pointer-events-none opacity-0"} col-start-1 row-start-1 text-center lg:text-start`}
                  >
                    <h2 className="text-preset-3 text-secondary md:text-preset-2 lg:text-preset-2 font-bellefair uppercase">
                      {name}
                    </h2>
                    <p className="border-secondary/9 lg:text-preset-9 font-barlow mt-200 border-b-2 pb-300 md:mx-auto md:max-w-lg lg:mx-0">
                      {description}
                    </p>
                    <div className="gap-16 md:flex md:items-center md:justify-center lg:justify-start">
                      <p className="grid py-300 uppercase">
                        <span className="text-preset-7">Avg. distance</span>
                        <span className="text-preset-5 text-secondary font-bellefair">
                          {distance}
                        </span>
                      </p>
                      <p className="grid uppercase">
                        <span className="text-preset-7"> Est. travel time</span>
                        <span className="text-preset-5 text-secondary font-bellefair">
                          {travel}
                        </span>
                      </p>
                    </div>
                  </li>
                ),
              )}
            </ul>
          </div>
        </div>
      </main>
      <Background
        desktop={backgroundDestinationDesktop}
        tablet={backgroundDestinationTablet}
        mobile={backgroundDestinationMobile}
      />
    </div>
  );
};
