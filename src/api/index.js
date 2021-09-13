export const loadProducts = () =>
  fetch("http://localhost:3000/products")
    .then((r) => r.json())
    .catch((e) => console.log(e));
