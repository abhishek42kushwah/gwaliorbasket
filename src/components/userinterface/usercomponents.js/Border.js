import { AppBar,Button,Paper,Grid} from "@mui/material";
import {React,createRef} from "react";
import SearchIcon from '@mui/icons-material/Search';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { ServerURL } from "../../services/ServerServices";
import KeyboardArrowLeft from "@mui/icons-material/KeyboardArrowLeft";
import KeyboardArrowRight from "@mui/icons-material/KeyboardArrowRight";
export default function Border()
{
  var setting ={
    dots:true,
    arrow:true,
    Infinite:true,
    speed:500,
    slidesToShow:1,
    slidesToScroll:1,
    autoplay:false,
   

  };
     var slider=createRef()
     var images=['c1.webp','c2.webp','c3.webp','c4.webp','c5.webp','c6.webp',]
     
     function handleLeftClick(){
      slider.current.slickPrev()
     }

     function handleRightClick(){
      slider.current.slickNext()
     }
     
     function playImages()
     {
        return images.map((Item)=>{
            return(<div> <img src={`${ServerURL}/images/${Item}`} style={{width:'auto',height:250,margin:50,display:'flex',justifyContent:'center'}}/> </div>)
        })
     }

    return(
        <div style={{display:'flex',flexDirection:'column ' }} >
        <AppBar position="static" style={{display:'flex',alignItems:'left',justifyContent:'centner' , background:'#482289',height:80,width:'auto'}}>
        <div style={{margin:20,display:'flex' }}>
        
         <div style={{marginRight:'auto'}}>
        <span style={{fontFamily:'poppins',fontWeight:'bold',fontSize:30}}>
     GwaliorBasket
</span>
</div>
<div>
<Button variant="contained" disableElevation style={{display:'flex',marginRight:50,background:'#12C78A',}}>
      Add To Card 
    </Button>
    </div>
 <SearchIcon/>
</div>
 
</AppBar>
    
<div style={{width:'50%',height:400 ,position:'static'}}>

<Paper style={{margin:70,height:450}}  >

<div  style={{marginLeft:100,justifyContent:'center',position:'static'}}>
     
     <div style={{background:'#fff',borderRadius:18,display:'flex',justifyContent:'center',width:30,height:30,position:'absolute',left:80,top:300,zIndex:1,opacity:0.5}}> 
     <KeyboardArrowLeft onClick={handleLeftClick}  style={{fontSize:35}}/>  
     </div>
      <Slider ref={slider} {...setting}>
         {playImages()}
        </Slider>
        <div style={{background:'#fff',borderRadius:18,display:'flex',justifyContent:'center',wight:30,height:30,position:'absolute',right:830,top:300,zIndex:1,opacity:0.5}} > 
     <KeyboardArrowRight onClick={handleRightClick}  style={{fontSize:35}}/>  
     </div>
    </div>
</Paper>
</div>


        </div>     
    )
}