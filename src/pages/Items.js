import { Link } from "react-router-dom";
import { ITEMS } from "../data/itemsData";

function Items() {
  return (
    <>
      <main>
        <h1>Items Page</h1>
      </main>
      {ITEMS.map((item, id) => {
        console.log(item);
        return (
          <ul key={id}>
            <Link to={`/items/${item.id}`}>
              <li>{item.name}</li>
            </Link>
          </ul>
        );
      })}
    </>
  );
}

export default Items;
