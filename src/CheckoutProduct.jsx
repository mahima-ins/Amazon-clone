import React from 'react'
import "./CheckoutProduct.css"
import { useStateValue } from './StateProvider';

const CheckoutProduct = ({id, title, image, price, ratings}) => {
    const [{basket},dispatch]= useStateValue();

    const removeFrombasket =()=>{
        //remove from basket
        dispatch({
            type:"REMOVE_FROM_BASKET",
            id:id,
        });
        
    };
  return (
    <div className='checkoutProduct'>
     <img className='cimage' src={image} alt=""></img>
     <div className='info'>
        <p className='ctitle'>{title}</p>
        <p className='cprice'>
        <small>$</small>
        <strong>{price}</strong>
        </p>

        <div className='cratings'>
                {Array(ratings)
                .fill()
                .map((_)=>(
                    <p>⭐</p>
                ))}
                </div>
                <button onClick={removeFrombasket}>Remove from basket</button>
     </div>
    </div>
  );
 
}
export default CheckoutProduct;
