import { useEffect, useState } from "react";
import Pagination from "../Pagination/index.jsx";

function Products() {
  const [allProducts, setAllProducts] = useState([]);

  useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts = async () => {
    try {
      const res = await fetch("https://dummyjson.com/products");
      if (res.ok) {
        const { products } = await res.json();
        setAllProducts(products);
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <>
      <Pagination itens={allProducts} itensPerPage={9} />
    </>
  );
}

export default Products;
