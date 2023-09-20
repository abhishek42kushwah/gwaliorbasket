import React from "react";
import Header from "../usercomponents.js/Header";
import {Button,useMediaQuery} from '@mui/material';
import DeliveryDiningIcon from '@mui/icons-material/DeliveryDining';
import ItemsCart from "./Product/ItemsCart";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import CartPrice from "./Product/cartPrice";
import {MediaQuery} from "@mui/material";
export default function Cart(props){
  const matches = useMediaQuery("(max-width:600px)");

  const pageRefresh=()=>{
    setRefresh(!refresh)
  }
  const [refresh, setRefresh] = useState(false);
  const dispatch = useDispatch();
  const products = useSelector((state) => state.cart);
  const productList=Object.values(products)
  const keys = Object.keys(products);
  const handleDelete = () => {
    keys.forEach((key) => {
      dispatch({ type: "DELETE_CART", payload: [key] });
    });
    setRefresh(!refresh);
  };


    return(
  <div style={{background:'#f2f2f2'}}>
                 <div><Header/></div>
       
       
    <div>
      <div  style={{ width:"100%",backgroundColor:"#9659a7",height:60,display:'flex',flexDirection:"column",justifyContent:'center',alignItems:'center'}}>
                     <div style={{alignItems:'center',display:'flex',fontFamily:"Poppin",fontSize:20}} >
                <DeliveryDiningIcon fontSize="large" style={{padding:6}} />  Delivering to you in 9 mins 
                
                     </div> 
      </div>

      <div style={{width:'100%',marginTop:45,display:'flex',justifyContent:"space-between"}} >
                <span style={{fontSize:20,fontFamily:"Poppin",paddingLeft:"19%" }}>
            Cart ({Object.keys(products).length} Items)
                 </span>
                 <span style={{paddingRight:"19%"}}>
               <Button  onClick={handleDelete} variant="outlined" color="error"  size="small">
                       Empty Cart
               </Button>
                 </span>
      </div>


          <div style={{display:"flex",justifyContent:"center" }} >
          
            <ItemsCart products={productList} pageRefresh={pageRefresh}  />

            <CartPrice  data={productList}  pageRefresh={pageRefresh} />
           
          </div>

          






        </div> 


           </div>
       
    )
}