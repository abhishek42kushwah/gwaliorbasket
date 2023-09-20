import React from "react";
import PlayCircleIcon from '@mui/icons-material/PlayCircle';
import AddLocationAltIcon from '@mui/icons-material/AddLocationAlt';
import Button from '@mui/material/Button';
import { Divider } from "@mui/material";
import { useEffect, useState } from "react";
import LoginDialog  from "./LoginDialog";
import Address from "./Address"
import { useNavigate } from "react-router-dom";
import { useSelector,useDispatch } from "react-redux";

export default function CartPrice (props){
 var userdata=null
 const [btnMsg,setBtnMsg]=useState("Add Address to Proceed")
  try{
    var user=useSelector((state)=>state.user)
   userdata=Object.values(user)[0]
  }
  catch(e){}
  console.log("userdata:",userdata==undefined)
 
  const pageRefresh=()=>{
    setRefresh(!refresh)
  };

  const navigate=useNavigate()
  const products = useSelector((state) => state.cart);
  const productList=Object.values(products)
  const keys = Object.keys(products);
  const handleDelete = () => {
    keys.forEach((key) => {
      dispatch({ type: "DELETE_CART", payload: [key] });
    });
    setRefresh(!refresh);
  };
  const dispatch = useDispatch();
  const [refresh,setRefresh]=useState(false)
    const [totalPrice,setTotalPrice]=useState("");
  const   [dialogState,setDialogState]=useState(false)
  const   [addressState,setAddressState]=useState(false)
  const   [userData,setUserData]=useState({userid:'',mobileno:''})
    const price = () => {
         
      let total= props.data.reduce((a,b) => {
        return  a+b.offerprice*b.qty;
      },0)  ;
        setTotalPrice(total);
        
      };
     
      const   handleClick=()=>{
       if(btnMsg=="Make Payment")
      navigate("/makepayment")
     else
       setDialogState(true)
      }


      useEffect(() => {
        price();
      }, [props]);
    
    return(
        <div>
        <div style={{display:'flex',justifyContent:'center'}} >
        <div style={{fontSize:15,display:'flex',justifyContent:'center',width:300,
        background:'white',padding:10,border:"5px",margin:10,borderRadius:10}}>
       <img src="assets/discount.png" width={45} height={40}/>
          <div style={{color:"#0F4471", cursor:"pointer",paddingTop:7}}>
         <span  style={{display:'flex',fontFamily:'Poppins'}}> Avail Offers / Coupons<PlayCircleIcon  color="secondary" style={{marginLeft:60}}/></span></div>
        </div>
       </div>

       <div style={{display:'flex',justifyContent:'center'}} >
       <div style={{fontSize:15,width:300,background:'white',padding:10,border:"5px",margin:10,borderRadius:10}}>

        <div>
          <b>Items Total</b>
          <b style={{ float: "right" }}>Rs.{totalPrice}</b>
        </div>
        <div>
          <span>Handling Charge</span>
          <span style={{ float: "right" }}>Rs. 15</span>
        </div>
        <div>
          <span>Delivery Fee</span>
          <span style={{ float: "right" }}>Rs. 40</span>
        </div>
        <Divider sx={{ my: 1 }} />
        <div>
          <b>Total Fee</b>
          <b style={{ float: "right" }}>Rs. {totalPrice + 55}</b>
        </div>

        </div>
        </div>


       <div style={{display:'flex',justifyContent:'center'}} >
       <div style={{fontSize:15,width:300, background:'white',padding:10,border:"5px",margin:10,borderRadius:10}}>
       
        <div style={{color:"#0F4471", cursor:"pointer",paddingTop:7}}>
         <span style={{display:'flex',fontFamily:'Poppins',justifyContent:"space-evenly",marginRight:"10%"}}>
         <AddLocationAltIcon/> Delivery Address</span></div>
       { userdata!=undefined? <>  <div style={{display:'flex',justifyContent:'center'}}>
        <div>{userdata[0]?.fullName}</div>
         <div>{userdata[0]?.city},  {userdata[0]?.state} ,{userdata[0]?.zipcode}
         </div></div>
         </>:<></>  }

         <div style={{paddingTop:15,display:'flex',justifyContent:'center',}}>
          {  keys.length==0? <Button  disabled={true} onClick={handleClick} variant="contained" fullWidth size="large"  color="secondary" disableElevation>
             {btnMsg}
             </Button> : 
             <Button  onClick={handleClick} variant="contained" fullWidth size="large"  color="secondary" disableElevation>
             {btnMsg}
             </Button>
             }
         </div>

        </div>
       </div>
<LoginDialog  setBtnMsg={setBtnMsg} userData={userData} setUserData={setUserData}  state={dialogState} setDialogState={setDialogState} setAddressState={setAddressState} pageRefresh={pageRefresh}/>
<Address  setBtnMsg={setBtnMsg}  userData={userData} setUserData={setUserData} setAddressState={setAddressState} addressState={addressState} pageRefresh={pageRefresh} />
        </div>
    )
}