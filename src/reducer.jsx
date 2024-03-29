 export const initialState={
     basket: [{
        id :"123",
    title : "The Lean Startup: How Today's Entrepreneurs Use Continuous Innovation to Create Radically Successful Businesses",
    price : 111.967,
    ratings :3,
    image : "https://www.globalorange.nl/wp-content/uploads/2022/09/booktip_lean-startup-eric-ries_NEW.png"

     },
     {
        id :"123",
    title : "The Lean Startup: How Today's Entrepreneurs Use Continuous Innovation to Create Radically Successful Businesses",
    price : 111.967,
    ratings :3,
    image : "https://www.globalorange.nl/wp-content/uploads/2022/09/booktip_lean-startup-eric-ries_NEW.png"

     },
    ],
     user: null,
    
 };

 export const getBasketTotal= (basket)=>
 basket?.reduce((amount, item)=> item.price+amount, 0);
 
 const reducer=(state, action)=>{
    console.log(action);
    switch (action.type){
    case 'ADD_TO_BASKET':
     // logic for adding item to basket
     return{
        ...state,
        basket: [...state.basket, action.item],
    };
    
     case'REMOVE_FROM_BASKET':
     // for removing item

     //cloned the basket
     let newBasket=[...state.basket];

     const index=state.basket.findIndex(
        (basketItem)=> basketItem.id === action.id);

     if(index>=0){
        //item exists in basket, remove it
        newBasket.splice(index,1);
     }else{
        console.warn(`cant remove product (id: ${action.id}) as it is not a basket`);
     }
     return { ...state,
         basket: newBasket,
         };
     
    default:
        return state;
    }
};
 export default reducer;