import { useParams } from "react-router-dom"

const CarsDetailsPage = () => {

    const {carsId} = useParams()

  return (
    <div>
        <h1>Cars details</h1>
        <div>
            <img src="" alt="" />
            <h2>Name: {carsId}</h2>
            <p>Price:</p>
            <p>Location:</p>
        </div>
    </div>
  )
}

export default CarsDetailsPage