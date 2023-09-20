import React,{useState,createRef} from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { ServerURL } from "../../../services/ServerServices";
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';



 var ProductImage = {
    dots: true,
    infinite: true, 
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplaySpeed: 2000,
    focusOnSelect:true,
  };
var sliderNav = {
    slidesToShow: 2,
    slidesToScroll: 1,
    asNavFor: '.slider-for',
    dots: false,
    centerMode: true,
    focusOnSelect: true,
    vertical: true,
    centerMode: true
}


export default function ProductView(props){



function handleLeftClick(){
    slider.current.slickPrev()
}
function handleRightClick(){
    slider.current.slickNext()
}


const images= [ "wa1.jpeg","wa2.jpeg","wa3.jpeg","wa4.jpeg","wa5.jpeg","wa6.webp"] 
const slider=createRef()

const setImageView=()=>{
    return images.map((item)=>{
        return(<div style={{display:'flex',justifyContent:'centre',width:"50%"}}>
            <img src={`${ServerURL}/images/${item}`} style={{display:'flex',justifyContent:'center'
            ,width:'50%',paddingLeft:"25%",}}/>
        </div>)
    })
}
	return(
 <div>

       
        <div style={{display:"flex",justifyContent:"center",position:'relative',width:"90%" ,padding:10}}> 
        <div style={{width: '100%',border:'1px solid #b2bec3',  
            borderRadius:'7px',margin:'10px 5px 5px 40px',}}>
            
             <div style={{background:'#fff',borderRadius:18,display:'flex',width:36,
height:36,justifyContent:"center",position:'absolute',left:'6%',
top:'40%',zIndex:1,opacity:0.5}}>

<KeyboardArrowLeftIcon onClick={handleLeftClick} style={{fontSize:35,}}/>
</div> 
            <Slider ref={slider} {...ProductImage}>
                {setImageView()}
            </Slider>
            <div style={{background:'#fff',borderRadius:18,width:36,height:36,
   display:'flex',justifyContent:'center',position:'absolute',right:'1%',
   top:'40%',zIndex:1,opacity:0.5}}>
    <KeyboardArrowRightIcon onClick={handleRightClick} style={{fontSize:35}}/>
    </div>
    
        </div>


        


        </div>
        
        </div>
    )	

}