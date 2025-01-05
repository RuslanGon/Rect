// {
//   "id": 168,
//   "title": "Charger SXT RWD",
//   "price": 32999.99,
//   "quantity": 3,
//   "total": 98999.97,
//   "discountPercentage": 13.39,
//   "discountedTotal": 85743.87,
//   "thumbnail": "https://cdn.dummyjson.com/products/images/vehicle/Charger%20SXT%20RWD/thumbnail.png"

import axios from "axios"
import { useEffect, useState } from "react"

// },
const AppHTTPrequests = () => {
const [carts, setCarts] = useState(null)

useEffect(() => {
  async function fetchCarts () {
const {data} = await axios.get("https://dummyjson.com/carts")
console.log(data);
setCarts(data.carts)
  }
  fetchCarts()
}, [])

  return (
    <div>
      <h1>Cars from USA</h1>
      <ul>
       {Array.isArray(carts) && carts.map(cart => {
        return <li key={cart.id}>
        <h2>Title:{cart.title}</h2>
        <p>Price: {cart.price}</p>
        <p>Quantity: {cart.quantity}</p>
        <h3>Total: {cart.total}</h3>
        <img src="" alt="" width={250} height={250} />
      </li>
       }) }
      </ul>
    </div>
  )
}

export default AppHTTPrequests