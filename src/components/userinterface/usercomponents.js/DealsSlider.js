import React,{createRef} from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { ServerURL } from '../../services/ServerServices';
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import { useMediaQuery } from "@mui/material";
import { useTheme } from '@mui/material/styles';

export default function DealsSlider(props)
{
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.down('sm'));

    var settings = {
        dots: true,
        arrow:false,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1 ,
        autoplay: false,
        
      };

      var slider=createRef()
      var images=['d1.webp','d2.webp','d3.webp','d4.webp','d5.webp','d7.webp', ]
      function handleLeftClick(){
        slider.current.slickPrev()
      }
      function handleRightClick(){
          slider.current.slickNext()
    }

          function playImages()
      {return images.map((Item)=>{
        return(<div><img src={`${ServerURL}/images/${Item}`} style={{ width:'99%'}}/></div>)
   
      })
      }
    return(
        
<div style={{position:'relative'}}>
{matches?<></>:
<div style={{background:'#fff',borderRadius:18,display:'flex',width:36,
height:36,justifyContent:"center",position:'absolute',left:'1%',
top:'40%',zIndex:1,opacity:0.5}}>


<KeyboardArrowLeftIcon onClick={handleLeftClick} style={{fontSize:35,}}/>
</div>  }
    <Slider ref={slider} {...settings}>
        {playImages()}
    </Slider>
    {matches?<></>:
   <div style={{background:'#fff',borderRadius:18,width:36,height:36,
   display:'flex',justifyContent:'center',position:'absolute',right:'1%',
   top:'40%',zIndex:1,opacity:0.5}}>
    <KeyboardArrowRightIcon onClick={handleRightClick} style={{fontSize:35}}/>
    </div>}

</div>       
    )
}