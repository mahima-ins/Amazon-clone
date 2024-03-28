import   React from 'react';
import "./Header.css";
import { Link } from 'react-router-dom';
import SearchIcon from '@mui/icons-material/Search';
import Logo from "../src/assets/logo.jpg";
import { ShoppingBasket } from '@mui/icons-material';
import "./Product"
import { useStateValue } from './StateProvider';
import Checkout from './Checkout';


 const Header = () => {
//  const [basket]= useStateValue();
 
   
  //  const [{basket}]= useStateValue();
   const [{ basket }] = useStateValue();
  // const [ state] =useStateValue();
  // // Access the basket property from the state
  // const { basket } = state;

  return (
    <>
    <nav className='header'>
    <Link to='/'>
    <img src=""></img>
    
    <img className="header-logo"src={Logo}
               style={{ width: "50px", height: "50px" }}
               />
    </Link>
    <div className='header_search'>
      <input type="text" className='search'/>
      <SearchIcon className='icon'/>
      </div>
      <div className='header_nav'>
        <Link to="/login" className="link">
        <div className='option'>
        <span className='option1'>Hello </span>
         <span className='option2'>Sign In</span> 
        </div>
         </Link>

         <Link to="/" className="link">
        <div className='option'>
        <span className='option1'>Returns</span>
         <span className='option2'>& Orders</span> 
        </div>
         </Link>

         <Link to="/" className="link">
        <div className='option'>
        <span className='option1'>Your</span>
         <span  className='option2'>Prime</span> 
        </div>
         </Link>

         <Link className='link' to="/checkout">
         
         <div className='basket'>
          <ShoppingBasket/>
         <span className='option2 basket_count'>{basket?.length}</span>

         </div>

         </Link>
      </div>

               </nav>
               </>

  )
}
export default Header;

