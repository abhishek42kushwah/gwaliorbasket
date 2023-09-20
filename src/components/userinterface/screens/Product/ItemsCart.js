import { Button,ButtonGroup,Box, } from "@mui/material";
import React from "react";
import {useMediaQuery} from "@mui/material";
import {useTheme} from "@mui/material";
import {ServerURL } from "../../../services/ServerServices";
import {Divider} from "@mui/material";
import PlusMinus from "./PlusMinus";


export default function ItemsCart(props)

{
   
  const theme = useTheme();
  const matches = useMediaQuery("(max-width:600px)");
  return(
   
<div>
 <div style={{display:'flex',justifyContent:'center',background:"#f2f2f2"}} > 
 <div style={{background:'white',padding:15,border:"5px",margin:10,borderRadius:10,overflow:'auto',width:400}}>
  <div style={{ textAlign: "center", color: "red", fontWeight: "bold", fontSize: 20, display: props.products[0] ? "none" : "block"}}  > 
    Cart is Empty
  </div>
    {props.products.map((item,i)=>{
      return(
        <div key={i}>
        <Box display="flex" p={matches ? 1 : 2} alignItems="center" justifyContent="space-between">
        <div style={{display:'flex'}}>
                <img src={`${ServerURL}/images/${item.productimage}`} alt="item" style={{ width: matches ? 55 : 70 }} />
                <div style={{ display: "flex", flexDirection: "column", marginLeft: 20, fontSize: matches ? 12 : 14 }}>
                  <span>{item.productname}</span>
                  <span>
                    {item.weight} {item.pricetype}
                  </span>
                  <b style={{ fontSize: matches ? 14 : 16, marginTop: 10 }}>Rs. {item.offerprice}</b>
                </div>
                </div>
                <PlusMinus product={item} pageRefresh={props.pageRefresh} />
              </Box>

              <Divider />


        </div>
      )
    })}    
 




</div>
</div>


    <div style={{display:'flex',justifyContent:'center',background:"#f2f2f2"}} >
    
    

       <div style={{background:'white',padding:15,border:"5px",margin:10,borderRadius:10,}}>
       
       
       
        <div style={{padding:"10px 0px",fontSize:'20px'}} >
        Delivery Partner Tip
        </div>


        <div style={{color:"grey",fontSize:15,fontFamily:'Poppins'}}>
        The entire amount will be sent to your delivery partner
        </div>

        <div style={{ paddingTop:15,display: "flex", gap: 15 }}>
          {["Rs. 10", "Rs. 20", "Rs. 40", "Rs. 70"].map((item, i) => {
            return (
              <Button key={i}  variant="outlined" sx={{ borderRadius: 50 }} color="secondary">
                {item}
              </Button>
            );
          })}
        </div> 
      
    </div>
    </div>
    <div style={{display:'flex',justifyContent:'center',background:"#f2f2f2"}}>
      <div style={{background:'white',padding:15,border:"5px",margin:10,borderRadius:10}}>
      <div style={{padding:"10px 0px",fontSize:20}}>
     
          <div style={{fontSize:15,display:'flex',justifyContent:'center'}}>
       <img src="assets/777.webp" width={50} height={40}/>
          See how we ensure our partner's safetey
          <div style={{color: "orange", cursor: "pointer",marginLeft:10}}>Learn more</div>
          
        </div>
      
      </div>

      </div>

    </div>
   
    </div>
  )
}
