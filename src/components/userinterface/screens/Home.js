import Header from "../usercomponents.js/Header"
import MainSlider from "../usercomponents.js/MainSlider"
import DealsSlider from "../usercomponents.js/DealsSlider"
import Spacer from "../usercomponents.js/Spacer"
import Trending from "../usercomponents.js/Trending"
import ExplorCategory from "../usercomponents.js/ExplorCategory"
import ExplorNewCategory from "../usercomponents.js/ExplorNewCategory"
import BestDeals from "../usercomponents.js/BestDeals"
import TrendingProducts from "../usercomponents.js/TrendingProducts"
import Footer from "../usercomponents.js/Footer"
export default function  Home(props){
   
    return(
       
<div>
<div style={{width:'100%'}}>
<Header/>
</div>

<div style={{display:'flex',justifyContent:'center' ,flexDirection:'column',marginLeft:60}}>
<div style={{width:'95%'}}>
    <MainSlider/>
</div>
<Spacer/>
<div style={{width:'95%'}}>
<DealsSlider/>
</div>
<div style={{width:'95%'}}>
    <Trending/>
</div>
<div style={{width:'95%'}}>
    <ExplorCategory/>
</div>

<div style={{width:'95%'}}>
    <ExplorNewCategory/>
</div>
<div style={{width:'95%'}}>
    <BestDeals/>
</div>


<div style={{width:'95%'}}>
    <TrendingProducts/>
</div>
</div>
<div>
    <Footer />
</div>
</div>  )
}