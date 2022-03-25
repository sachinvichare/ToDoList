import { useEffect, useState } from "react";
const useMainHooks = (searchInput) => {
  const toDoListHere = [
    { name: "FeedDog", favourite: true, id: 1 },
    { name: "Call Parents", favourite: false, id: 2 },
    { name: "Call Car", favourite: true, id: 20 },
    { name: "Buy Laptop", favourite: true, id: 3 },
    { name: "go To Gym", favourite: false, id: 4 },
    { name: "Lunch Time", favourite: true, id: 5 },
    { name: "React", favourite: false, id: 6 },
    { name: "JavaScript", favourite: false, id: 7 },
    { name: "Unit Testing", favourite: false, id: 8 },
  ];

  const [filterList, setFilterList] = useState(toDoListHere);

  useEffect(() => {
    const makeList = toDoListHere.filter((value, index) => {
      if (value.name.indexOf(searchInput) !== -1) {
        return value;
      }
    });
    const Fav = makeList.filter((item) => item.favourite);
    const notFav = makeList.filter((item) => !item.favourite);
    const comBo = [...Fav, ...notFav];
    setFilterList(comBo);
  }, [searchInput]);

  const manageFav = (param) => {
    const makeList = toDoListHere.map((value, index) => {
      if (value.id === param.id) {
        value.favourite = !value.favourite;
        return value;
      } else {
        return value;
      }
    });
    setFilterList(makeList);
  };

  const manageDelete = (param) => {
    const makeList = toDoListHere.filter((value, index) => {
      if (value.id !== param.id) {
        return value;
      }
    });
    setFilterList(makeList);
  };

  return { filterList, toDoListHere, manageFav, manageDelete };
};

export default useMainHooks;
