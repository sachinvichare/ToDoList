import { useState } from "react";
import HeaderApp from "./HeaderApp";
import MainList from "./MainList";
import useMainHooks from "../Hooks/useMainHooks";

const Main = () => {
  const [searchInput, setSearchInput] = useState("");
  const [nxtState, setNxtState] = useState({ a: 0, b: 4 });

  const searchOnChange = (e) => {
    setSearchInput(e.target.value);
  };

  const { filterList, toDoListHere, manageFav, manageDelete } = useMainHooks(
    searchInput,
    nxtState
  );

  const goNext = () => {
    const getLength = toDoListHere.length;
    if (nxtState.b < getLength) {
      setNxtState({ ...nxtState, a: nxtState.a + 4, b: nxtState.b + 4 });
    }
  };

  const goPrevious = () => {
    if (nxtState.a !== 0) {
      setNxtState({ ...nxtState, a: nxtState.a - 4, b: nxtState.b - 4 });
    }
  };

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
        <button onClick={goPrevious}>Previous</button>
        <button onClick={goNext}>Next</button>
      </HeaderApp>
    </div>
  );
};

export default Main;
