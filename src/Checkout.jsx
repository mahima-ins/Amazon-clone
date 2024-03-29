import React from 'react'
import { useStateValue } from './StateProvider'
import CheckoutProduct from './CheckoutProduct';
import CurrencyFormat from 'react-currency-format';
import "./Checkout.css";
import { Subtotal } from './Subtotal';

const Checkout = () => {
    const[{basket}]= useStateValue();
  return (
    <>
   <div className='checkout'>
    <div className='checkout_left'>
  
    {basket?.length === 0 ?(
        <div><h2>Your shopping Basket is empty</h2>
        <p>
        You have no items in your basket. To buy one or more
        items, click "Add to basket" next to the item
        </p>
        </div>
    ) : (
    <div>
        <h2 className='checkout_title'>Your shopping Basket</h2>
        
       
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
     </div>
     {basket.length > 0 &&(
      <div className='checkout_right'>
      <Subtotal/> 
        
      </div>
     )}
     </div>
    </>
  )
}
export default Checkout;
