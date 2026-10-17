import {
  backgroundCrewDesktop,
  backgroundCrewMobile,
  backgroundCrewTablet,
} from "../assets";
import { Background } from "../components/Background";
import { useLocalStorage } from "../hook/useLocalStorage";
import type { SpaceData } from "../types/space";
type CrewProp = {
  crewMember: SpaceData;
};
type CrewMenu =
  "Douglas Hurley" | "Mark Shuttleworth" | "Victor Glover" | "Anousheh Ansari";
export const Crew = ({ crewMember }: CrewProp) => {
  const [crewSelected, setCrewSelected] = useLocalStorage(
    "Crew",
    "Douglas Hurley",
  );
  const crewMenu: CrewMenu[] = [
    "Douglas Hurley",
    "Mark Shuttleworth",
    "Victor Glover",
    "Anousheh Ansari",
  ];
  return (
    <div>
      <main className="text-secondary font-barlow-condensed relative z-10 p-300 text-center lg:mx-auto lg:w-[80%] lg:py-600">
        <h1 className="md:text-preset-6 lg:text-preset-5 flex justify-center gap-4 pb-300 md:justify-start">
          <span className="text-secondary/50">02</span>
          <span className="uppercase">MEET YOUR CREW</span>
        </h1>
        <div className="lg:flex lg:items-center">
          <div className="lg:flex lg:w-full lg:flex-col lg:items-start lg:text-start">
            <ul className="font-bellefair grid">
              {crewMember.crew.map(({ name, role, bio }) => (
                <li
                  key={name}
                  className={`transition-opacity duration-500 ease-out ${name === crewSelected ? "opacity-100" : "pointer-events-none opacity-0"} col-start-1 row-start-1`}
                >
                  <p className="text-preset-9 text-secondary/50 md:text-preset-6 lg:text-preset-4 pt-500 uppercase">
                    {role}
                  </p>
                  <h2 className="text-preset-6 md:text-preset-4 xl:text-preset-3 font pb-300 uppercase">
                    {name}
                  </h2>
                  <p className="text-text lg:text-preset-9 font-barlow md:mx-auto md:max-w-lg lg:mx-0">
                    {bio}
                  </p>
                </li>
              ))}
            </ul>
            <nav>
              <ul className="flex justify-center gap-4 pb-400 lg:gap-8">
                {crewMenu.map((crew) => (
                  <li key={crew}>
                    <button
                      type="button"
                      aria-label={`${crew}'s profie.`}
                      onClick={() => setCrewSelected(crew)}
                      className={`${crew === crewSelected ? "bg-secondary" : "bg-secondary/20 hover:bg-secondary/50"} " h-3 w-3 cursor-pointer rounded-full lg:h-4 lg:w-4`}
                    >
                      <span className="sr-only">{crew}</span>
                    </button>
                  </li>
                ))}
              </ul>
            </nav>
          </div>
          <ul className="grid w-full place-items-center">
            {crewMember.crew.map(({ name, images: { png } }) => (
              <li
                key={name}
                className={`transition-opacity duration-500 ease-out ${name === crewSelected ? "opacity-100" : "pointer-events-none opacity-0"} col-start-1 row-start-1 w-68 md:w-sm`}
              >
                <img src={png} alt="" />
              </li>
            ))}
          </ul>
        </div>
      </main>
      <Background
        mobile={backgroundCrewMobile}
        tablet={backgroundCrewTablet}
        desktop={backgroundCrewDesktop}
      />
    </div>
  );
};
