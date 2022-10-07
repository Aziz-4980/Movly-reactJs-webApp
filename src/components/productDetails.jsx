import React from "react";
import { useParams, useNavigate } from "react-router-dom";

const ProductDetails = () => {
  let { id } = useParams();
  const navigate = useNavigate();
  function handleSave() {
    navigate("/admin");
  }
  // console.log(useParams());
  return (
    <div>
      <h1>Product Details - {id} </h1>
      <button onClick={handleSave}>Save</button>
    </div>
  );
};

export default ProductDetails;
