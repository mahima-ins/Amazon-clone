import React from 'react';
import './Subtotal.css';
import CurrencyFormat from 'react-currency-format';
import { useStateValue } from './StateProvider';
import { getBasketTotal } from './reducer';

export const Subtotal = () => {
    const [{basket}, disptach]=useStateValue();
  return (
    <div className='subtotal'>
    {/* price */}
    <CurrencyFormat
    renderText={(value)=>(
        <>
        <p>
            Subtotal ({basket.length} items):
            <strong>{value}</strong>
        </p>
        <small className='subtotal_gift'>
            <input type="checkbox"/>This order contains a gift
        </small>
        </>

    )}
    decimalScale={2}
     value={getBasketTotal(basket)}
    // value={0}
    displayType={'text'}
    thousandSeparator={true}
    prefix={"$"}
    />
    <button>Procced to Checkout</button>
    </div>
  )
}
