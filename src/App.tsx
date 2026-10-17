import { BrowserRouter, Route, Routes } from "react-router";
import { Header } from "./components/Header";
import data from "./data/data.json";
import { useLocalStorage } from "./hook/useLocalStorage";
import { Crew } from "./pages/Crew";
import { Destination } from "./pages/Destination";
import { Home } from "./pages/Home";
import { Technology } from "./pages/Technology";
import type { SpaceData } from "./types/space";

export const App = () => {
  const [clicked, setClicked] = useLocalStorage("NavMenu", "00");
  const spaceData = data as SpaceData;
  function handleClick(menu: string) {
    setClicked(menu);
  }
  return (
    <div className="mx-auto max-w-330">
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={<Header onClick={handleClick} clicked={clicked} />}
          >
            <Route index element={<Home onClick={handleClick} />} />
            <Route
              path="/destination"
              element={<Destination destination={spaceData} />}
            />
            <Route path="/crew" element={<Crew crewMember={spaceData} />} />
            <Route
              path="/technology"
              element={<Technology tech={spaceData} />}
            />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
};
