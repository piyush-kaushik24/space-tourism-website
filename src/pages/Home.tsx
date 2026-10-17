import { useNavigate } from "react-router";
import {
  backgroundHomeDesktop,
  backgroundHomeMobile,
  backgroundHomeTablet,
} from "../assets";
import { Background } from "../components/Background";
type HomeProp = {
  onClick: (menu: string) => void;
};

export const Home = ({ onClick }: HomeProp) => {
  const navigateDestination = useNavigate();
  return (
    <div>
      <main className="text-text font-barlow-condensed relative z-10 grid gap-1600 p-300 px-500 md:gap-1000 md:py-1600 xl:grid-cols-2">
        <div className="mx-auto max-w-lg space-y-300">
          <h1 className="flex flex-col space-y-300 text-center">
            <span className="md:text-preset-5">SO, YOU WANT TO TRAVEL TO</span>
            <span className="text-secondary textpres md:text-preset-1 font-bellefair text-7xl">
              SPACE
            </span>
          </h1>
          <p className="md:text-preset-8 xl:text-preset-9 font-barlow text-center">
            Let’s face it; if you want to go to space, you might as well
            genuinely go to outer space and not hover kind of on the edge of it.
            Well sit back, and relax because we’ll give you a truly out of this
            world experience!
          </p>
        </div>

        <button
          type="button"
          aria-label="Destination Page"
          onClick={() => {
            navigateDestination("/destination");
            onClick("01");
          }}
          className="text-primary md:text-preset-4 font-bellefair h-40 w-40 cursor-pointer self-center justify-self-center rounded-full bg-white transition-shadow duration-500 ease-in hover:shadow-[0_0_0_80px_rgba(255,255,255,0.1)] focus-visible:shadow-[0_0_0_80px_rgba(255,255,255,0.1)] md:h-68 md:w-68"
        >
          EXPLORE
        </button>
      </main>
      <Background
        desktop={backgroundHomeDesktop}
        tablet={backgroundHomeTablet}
        mobile={backgroundHomeMobile}
      />
    </div>
  );
};
