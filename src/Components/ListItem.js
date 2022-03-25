import style from "./ListItem.module.css";
import { AiFillStar, AiFillDelete } from "react-icons/ai";

const ListItem = ({ item , manageFav, manageDelete}) => {
  return (
    <div className={style.listWarp}>
      <div className={style.leftSide}>{item.name}</div>
      <div className={style.rightSide}>
        <AiFillStar
          className={item.favourite ? style.AiFillStarcolor : ""}
          onClick={() => manageFav(item)}
        />
        <AiFillDelete onClick={() => manageDelete(item)}/>
      </div>
    </div>
  );
};

export default ListItem;
