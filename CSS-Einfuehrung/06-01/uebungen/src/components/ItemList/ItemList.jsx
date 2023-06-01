import Item from "../Item/Item";

const ItemList = (props) => {

    const myProps = [
        {name: "Bug Grocery"},
        {name: "Send Email"},
        {name: "Finsh Assignment"},
        {name: "Write Blog"},
        {name: "Bake Cake"},
    ]

    return ( 
        <>
        <h2>{props.headline}</h2>
        <ul>
            {myProps.map((item, index) => <Item props={item} key={index}/>)}
        </ul>
        </>
     );
}
 
export default ItemList;