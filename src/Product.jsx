import React from 'react'
import "./Product.css" ;

 const Product = ({id, title, price, ratings, image}) => {
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
 <button>Add to basket</button>  
        </div>
    </>
  )
}
export default Product;
