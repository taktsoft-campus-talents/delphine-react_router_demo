import { products } from "../../data/data.js";
import { Link } from "react-router-dom";
import { Outlet } from "react-router-dom";

function Products() {
  console.log(products);

  return (
    <div>
      <ul>
        {products.map((product) => (
          <li key={product.id}>
            <Link to={`/products/${product.id}`}> {product.name}</Link>
          </li>
        ))}
      </ul>
      <Outlet></Outlet>
    </div>
  );
}

export default Products;
