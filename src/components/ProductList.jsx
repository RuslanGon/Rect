import css from '../components/ProductList.module.css'

const ProductList = ({products}) => {
  return (
    <ul className={css.list}>
    {Array.isArray(products) &&
      products.map((product) => {
        return (
          <li className={css.item} key={product.id}>
            <img width={200} height={200} src={product.images} alt={product.title}/>
            <h2>Title:{product.title}</h2>
            <p>Brand: {product.brand}</p>
            <p>Rating: {product.rating}</p>
            <h3>Price: {product.price}</h3>
          </li>
        );
      })}
  </ul>
  )
}

export default ProductList