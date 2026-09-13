
import React from "react";
import { useNavigate } from "react-router-dom";

const Products = () => {
  const navigate = useNavigate()
  const products = [
    {
      id: 1,
      name: "Laptop",
      price: 55000,
      description: "Powerful laptop for work and development",
      image: "https://images.unsplash.com/photo-1496181133206-80ce9b88a853",
    },
    {
      id: 2,
      name: "Smartphone",
      price: 20000,
      description: "Modern smartphone with a great display",
      image: "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9",
    },
    {
      id: 3,
      name: "Headphones",
      price: 3000,
      description: "Wireless headphones with clear sound",
      image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e",
    },
    {
      id: 4,
      name: "Keyboard",
      price: 1500,
      description: "Mechanical keyboard for comfortable typing",
      image: "https://images.unsplash.com/photo-1587829741301-dc798b83add3",
    },
  ];

  return (
    <div className="container mt-5">
      <h1 className="text-center mb-4">Products</h1>

      <div className="row">
        {products.map((product) => (
          <div className="col-md-3 mb-4" key={product.id}>
            <div className="card h-100 shadow">
              <img
                src={product.image}
                className="card-img-top"
                alt={product.name}
                style={{ height: "200px", objectFit: "cover" }}
              />

              <div className="card-body">
                <h5 className="card-title">{product.name}</h5>

                <h6 className="text-success">
                  ₹{product.price}
                </h6>

                <p className="card-text">
                  {product.description}
                </p>

                <button onClick={() => navigate(`/products/${product.id}`)} className="btn btn-primary">
                 VIEW PRODUCT
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Products;


