import React,{createRef,useState,useEffect} from "react";
import { getData } from "../../services/ServerServices";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useMediaQuery } from "@mui/material";
import { useTheme } from '@mui/material/styles';
import { ServerURL } from '../../services/ServerServices';
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';

export default function MainSlider(props)
{
const [images,setImages]=useState([])
const fetchBannerImages=async()=>{
  var result=await getData('userinterface/fetch_banner_images')
  var dataImages=result.data[0].bannerpicture;
  var im = dataImages.substring(0,dataImages.length-1).split(",")
  setImages(im)

  
};


useEffect(function(){
  fetchBannerImages()
},[])



  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.down('sm'));

    var settings = {
        dots: true,
        arrow:true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1 ,
        autoplay: true,
        autoplaySpeed: 2000,
      };

      var slider=createRef()
      
      function handleLeftClick(){
        slider.current.slickPrev()
      }
      function handleRightClick(){
          slider.current.slickNext()
    }


          function playImages()
      {return images.map((Item)=>{
        return(<div><img src={`${ServerURL}/images/${Item}`} style={{ width:'100%'}}/></div>)
   
      })
      }
    return(
        
<div style={{position:'relative'}}>
{matches?<></>:
<div  style={{background:'#fff',borderRadius:18 ,display:'flex',justifyContent:'center',width:30,height:30,position:'absolute',left:'1%',top:'40%',zIndex:1,opacity:0.5}}>  
<KeyboardArrowLeftIcon onClick={handleLeftClick} style={{fontSize:35}}/>
</div> }
<Slider ref={slider} {...settings}>
        {playImages()}
</Slider>
{ matches?<></>:
  <div style={{background:'#fff',borderRadius:18,display:'flex',justifyContent:'center',width:36,height:36,position:'absolute',right:'1%',top:'40%',zIndex:1,opacity:0.5}}>
    <KeyboardArrowRightIcon onClick={handleRightClick} style={{fontSize:35,}}/>
</div>}
        </div>
    )
}