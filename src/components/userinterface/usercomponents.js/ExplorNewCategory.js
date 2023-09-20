import React, { createRef } from "react";
import Slider from "react-slick";
import { ServerURL } from "../../services/ServerServices";
import { useMediaQuery } from "@mui/material";
import { useTheme } from '@mui/material/styles';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import KeyboardArrowLeftIcon from "@mui/icons-material/KeyboardArrowLeft";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
export default function ExplorNewCategory(){
      
    const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.down('sm'))
 var settings = {
    dots: false,
    infinite: true,
    speed: 400,
    slidesToShow: matches?3:7,
    slidesToScroll: 7,
    autoplay: false,
    autoplaySpeed: true,
    arrow: false,
    
    
  };

  var slider=createRef()
  var images=['j1.webp','j2.webp','j3.webp','j4.webp','j5.webp','j6.webp','j7.webp','j8.webp',]
 
  function handleLeftClick(){
    slider.current.slickPrev()
  }
  function handleRightClick(){
      slider.current.slickNext()
}
  function ExplorImage()
  { return images.map((item)=>{
        return(<div ><img src={`${ServerURL}/images/${item}`} style={{width:'85%'}}/></div>)
  })
  } 

    return(<div style={{position:'relative'}}>
        
<h3>Explore New Categories</h3>
{matches?<></>:
<div style={{background:'#fff',borderRadius:18,display:'flex',width:36,
height:36,justifyContent:"center",position:'absolute',left:'1%',
top:'50%',zIndex:1,opacity:0.5}}>
< KeyboardArrowLeftIcon onClick={handleLeftClick} style={{fontSize:34}} />
</div>    }
<Slider ref={slider} {...settings}>
 {ExplorImage()}
 </Slider>
 {matches?<></>:
 <div style={{background:'#fff',borderRadius:18,width:36,height:36,display:'flex',justifyContent:'center',position:'absolute',right:'3%',top:'50%',zIndex:1,opacity:0.5}}>
 <KeyboardArrowRightIcon
            onClick={handleRightClick}
            style={{ fontSize: 34 }}
          />
    </div>}
    </div>)
}