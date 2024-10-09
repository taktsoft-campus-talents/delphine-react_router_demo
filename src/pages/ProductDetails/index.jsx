import { useParams } from "react-router-dom";
import { products } from "../../data/data.js";

function ProductDetail() {
  const { productId } = useParams();

  const item = products.find((product) => {
    return product.id === Number(productId);
  });

  return (
    <div>
      <h2>Product Detail</h2>
      <h3>{item.name}</h3>
      <p>{item.description}</p>
    </div>
  );
}

export default ProductDetail;
