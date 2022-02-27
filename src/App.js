import "./styles.css";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getAllProducts } from "./redux/actions/productActions";

export default function App() {
  const dispatch = useDispatch();
  const { products } = useSelector((state) => state.products);
  console.log(products);

  useEffect(() => {
    const getProducts = () => {
      dispatch(getAllProducts());
    };
    getProducts();
  }, [dispatch]);

  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      {products.map((prd) => (
        <h2>{prd.category}</h2>
      ))}
    </div>
  );
}
