export default function Product(props){

  return (
    <div className="product-card">
      <h2 className="product-name">{props.name}</h2>
      <p className="product-price">${props.price}</p>
      <button className="buy-button">Buy Now</button>
    </div>
  )
}