import css from '../HTTP.module.css'

const CartList = ({carts}) => {
  return (
    <ul >
    {carts.map((cart) => (
      <li key={cart.id}>
        <ul className={css.list}>
          {cart.products.map((product) => (
            <li key={product.id}>
              <h3>Title: {product.title}</h3>
              <p>Price: ${product.price}</p>
              <p>Quantity: {product.quantity}</p>
              <h4>Total: ${product.total}</h4>
              <p>Discount: {product.discountPercentage}%</p>
              <p>Discounted Total: ${product.discountedTotal}</p>
              <img src={product.thumbnail} alt={product.title} />
            </li>
          ))}
        </ul>
      </li>
    ))}
  </ul>
  )
}

export default CartList