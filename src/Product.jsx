import React from 'react'
import "./Product.css" ;
import { useStateValue } from './StateProvider';


 const Product = ({id, title, price, ratings, image}) => {
   const [{basket}, dispatch]= useStateValue();
   console.log(basket)
   
    const addToBasket = ()=>{
     // add item to basket
     dispatch({
        type:'ADD_TO_BASKET',
        item: {
            id: id,
            title: title,
            
            price:price,
            ratings:ratings,
            image:image,

        },
     }) ; 
    };
  return (
    <>
        <div className='product'>
        <div className='product_info'>
            <p>{title}</p>
            <p className='price'>
                <small>$</small>
                <strong>{price}</strong>
            </p>
            <div className='rating'>
                {Array(ratings)
                .fill()
                .map((_)=>(
                    <p>⭐</p>
                ))}
                </div>
            </div>
             <img src={image} 
  alt=""/>
 <button onClick={addToBasket}>Add to basket</button>  
        </div>
    </>
  );
};
export default Product;
