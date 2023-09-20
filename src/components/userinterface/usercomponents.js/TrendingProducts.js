import React, { useEffect,useState } from "react";
import { ServerURL,getData } from "../../services/ServerServices";
import { useMediaQuery } from "@mui/material";
import { useTheme } from '@mui/material/styles';


export default function TrendingProducts(){
      
    const theme = useTheme();
  const xs = useMediaQuery(theme.breakpoints.down('xs'));
  const sm = useMediaQuery(theme.breakpoints.down('sm'));
  const md = useMediaQuery(theme.breakpoints.down('md'));
  const lg = useMediaQuery(theme.breakpoints.down('lg'));
  const matches = useMediaQuery(theme.breakpoints.down('sm'))
  const [dealsProduct,setDealsProduct] = useState([])
 
  const fetchProduct = async () => {
    var result = await getData("userinterface/fetch_all_productstrending");
     
    setDealsProduct(result.data)
  }

  useEffect(function (){
    fetchProduct();
  },[]);

  
  function ExplorImage()
  { return dealsProduct.map((item)=>{
        return(
       <div style={{width:"10%",
       padding:"10px 10px 0px 10px",
       background:'linear-gradient(0deg, rgba(93,45,253,1) 0%, rgba(253,153,45,1) 100%)',
       borderRadius:"10%",
       alignItems:'center',
       flexDirection:'column',
      margin:13
       
       
       }}>
       <div 
       style={{
        color:'rgba(93,45,253,1)',
        background:'#fff',
        margin:20,
        textAlign:'center',
        fontFamily:'Poppins',
        fontSize: xs ?4: sm ? 6 :md ? 8: lg?14:14,
        fontWeight:"bolder",
        padding:3,
        borderRadius:'0.3rem',
        width:'60%',
        marginBottom:'15%'
       }}>
       Trending
       </div>
       <div 
       style={{
        color:'#fff',
        fontFamily:'Poppins',
        fontSize: xs?4:sm?6 :md?8:lg?16:16 ,
        fontWeight:'bolder',
        textAlign:'center',
        marginBottom:'15%',
       }}>
        {item.productname}
       </div>
       <img src={`${ServerURL}/images/${item.image}`} 
        style={{width:'60%'}}
       />
       </div>);
  });
  } 





    return(
      <div>
        <h3>Most Popular Products</h3>
       {matches?<></>:
        <div style={{
          padding:5,
          display:'flex',
          flexDirection:'row',
          flexWrap:'wrap',
          textAlign:'center'
        }} >
        {ExplorImage()}
        </div>}
      </div>
    )
}