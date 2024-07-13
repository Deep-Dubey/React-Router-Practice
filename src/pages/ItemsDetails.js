import { useParams } from "react-router-dom";
import { ITEMS } from "../data/itemsData";

function Items() {
  const { id } = useParams();
  console.log(id);
  const data = ITEMS.find((item) =>item.id === Number(id));
  console.log(data);
  return (
    <>
      <main>
        <h1>Item Details Page</h1>
      </main>
      <h2>{data.name}</h2>
      <p>{data.id}</p>
      <p>{data.price}</p>
    </>
  );
}

export default Items;
