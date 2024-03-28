import React from 'react'
import { useStateValue } from './StateProvider'
import CheckoutProduct from './CheckoutProduct';
import "./Checkout.css";

const Checkout = () => {
    const[{basket}]= useStateValue();
  return (
    <>
  
    {basket?.length === 0 ?(
        <div><h2>Your shopping Basket is empty</h2>You have no items in your basket. To buy one or more
        items, click "Add to basket" next to the item</div>
    ) : (
    <div>
        <h2>Your shopping Basket</h2>
    </div>
    )}

    {/* lits out all the checkout products */}
     {basket.map((item)=>(
<CheckoutProduct
  id={item.id}
  title={item.title}
  image={item.image}
  price={item.price}
  ratings={item.ratings}
/>
     ))}
   
    </>
  )
}
export default Checkout;
