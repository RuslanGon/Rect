// import { useEffect, useState } from "react";
import Loader from "./components/Loader.jsx";
import Error from "./components/Error.jsx";
// import { requestProducts, requestProductsByQuery } from "./services/api.js";
import ProductList from "./components/ProductList.jsx";
import css from "./AppHTTPrequests.module.css";
import SearchForm from "./components/SearchForm.jsx";
import { useProductSearch } from "./hooks/useProductSearch.jsx";

const AppHTTPrequests = () => {
  
  const {products, isLoading, isError, searchQuery} = useProductSearch()

  return (
    <div>
      <h1 className={css.title}>Super market</h1>
      {isLoading && <Loader />}
      {isError && <Error />}
      <SearchForm searchQuery={searchQuery} />
      <ProductList products={products} />
    </div>
  );
};

export default AppHTTPrequests;
