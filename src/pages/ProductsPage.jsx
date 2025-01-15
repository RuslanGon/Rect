// import { useEffect, useState } from "react";
import Loader from "../components/Loader.jsx";
import Error from "../components/Error.jsx";
// import { requestProducts, requestProductsByQuery } from "./services/api.js";
import ProductList from "../components/ProductList.jsx";
import css from "../AppHTTPrequests.module.css";
import { useProductSearch } from "../hooks/useProductSearch.jsx";

const ProductsPage = () => {
  
  const {products, isLoading, isError} = useProductSearch({isSearchPage: false})

  return (
    <div>
      <h1 className={css.title}>Super market</h1>
      {isLoading && <Loader />}
      {isError && <Error />}
      <ProductList products={products} />
    </div>
  );
};

export default ProductsPage;
