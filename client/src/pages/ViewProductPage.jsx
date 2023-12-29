import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

function ViewProductPage() {
  const navigate = useNavigate();
  const [state, setState] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    getProductData();
  }, []);

  async function getProductData() {
    const result = await axios.get(`http://localhost:4001/products/`);
    console.log(result.data.data);
    setState(result.data.data);
  }

  return (
    <div>
      <h1>View Product Page</h1>
      {state.map((item) => {
        return (
          <div className="view-product-container" key={id}>
            <h2>Product Title : {item.name}</h2>
            <p>Content : {item.description}</p>
            <p>Price : {item.price}</p>
            <img src={item.image} />
          </div>
        );
      })}

      <button
        onClick={() => {
          navigate("/");
        }}
      >
        Back to Home
      </button>
    </div>
  );
}

export default ViewProductPage;
