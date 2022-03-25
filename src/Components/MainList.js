import ListItem from "./ListItem"

const MainList = ({toDolist, manageFav, manageDelete}) => {
    return (
        <ul>
            {toDolist.map((item) => {
                return <ListItem item={item} key={item.id} manageFav={manageFav} manageDelete={manageDelete}/>
            })}
        </ul>
    )
}

export default MainList