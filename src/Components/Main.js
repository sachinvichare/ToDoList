import { useState } from "react";
import HeaderApp from "./HeaderApp";
import MainList from "./MainList";
import useMainHooks from "../Hooks/useMainHooks";

const Main = () => {
  const [searchInput, setSearchInput] = useState("");

  const searchOnChange = (e) => {
    setSearchInput(e.target.value);
  };

  const { filterList, toDoListHere, manageFav, manageDelete } =
    useMainHooks(searchInput);

  return (
    <div>
      <HeaderApp>
        <div>
          <input type="text" value={searchInput} onChange={searchOnChange} />
        </div>
        <MainList
          toDolist={filterList}
          manageFav={manageFav}
          manageDelete={manageDelete}
        />
      </HeaderApp>
    </div>
  );
};

export default Main;
