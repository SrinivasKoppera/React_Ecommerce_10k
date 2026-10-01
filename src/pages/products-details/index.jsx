import { useParams } from "react-router-dom";

const ProductsDetails = () => {
  const params = useParams();
  console.log(params);

  return (
    <div>
      <h1>Products Details Page</h1>
      <p>Product ID: {params.id}</p>
    </div>
  );
};

export default ProductsDetails;
