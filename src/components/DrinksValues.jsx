

const DrinksValues = ({drinks, totalDrinks}) => {
  return (
<ul>
    <li>Beer: {drinks.beer}</li>
    <li>Whiskey: {drinks.whiskey}</li>
    <li>Wine: {drinks.wine}</li>
    <li>Total drinks: <b>{totalDrinks}</b></li>
</ul>
  )
}

export default DrinksValues