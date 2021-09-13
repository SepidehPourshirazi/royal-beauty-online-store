import React, { useState, useEffect } from "react";
import { loadProducts } from "../../api";

function Makeup() {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    loadProducts().then((p) => setProducts(p));
  }, []);

  return (
    <div>
      {products.map((p) => (
        <p key={p.id}>{p.id}</p>
      ))}
    </div>
  );
}

export default Makeup;
