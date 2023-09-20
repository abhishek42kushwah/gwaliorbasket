import Company from "./components/administrator/Company";
import DisplayAllCompanies from "./components/administrator/DisplayAllCompanies";
import  Dashboard  from "./components/administrator/DashBoard";
import  { BrowserRouter as Router,Routes,Route } from "react-router-dom";
import AdminLogin from "./components/administrator/AdminLogin";
import Home from "./components/userinterface/screens/Home";
import Border from "./components/userinterface/usercomponents.js/Border";
import HomePageDrawer from "./components/userinterface/usercomponents.js/HomePageDrawer";
import Banner from "./components/administrator2/Banner";
import AllCategory from "./components/userinterface/screens/AllCategory";
import Cart from "./components/userinterface/screens/Cart";
import ProductDisplay from "./components/userinterface/screens/ProductDisplay"
import ItemsCart from "./components/userinterface/screens/Product/ItemsCart"
import CartPrice from "./components/userinterface/screens/Product/cartPrice";
import MakePayment from "./components/userinterface/screens/Product/MakePayment";
import Footer from "./components/userinterface/usercomponents.js/Footer"
function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route element={<Company/>} path={"/company"} />
          <Route element={<DisplayAllCompanies/> }path ={"displayallcompanies"}  />
          <Route element={<Dashboard/> } path={"dashboard/*"}   />
          <Route element={<AdminLogin/> }path ={"adminlogin"} />
          <Route element={<Home/>}  path={"home" }/>
          <Route element={<Border/>}  path={"border" }/>
          <Route element={<HomePageDrawer/>}  path={"homepagedrawer" }/>
          <Route element={<Banner/>} path={"banner"} />
          <Route element={<AllCategory/>} path={"AllCategory/"} />
          <Route element={<Banner/>} path={"banner/"} />
          <Route element={<ProductDisplay/>} path={"productdisplay/"} />
          <Route element={<Cart/>} path={"cart/"} />
          <Route element={<ItemsCart/>} path={"itemscart/"} />
          <Route element={<CartPrice/>} path={"cartprice/"} />
          <Route element={<MakePayment/>} path={"makepayment/"} />
          <Route element={<Footer/>} path={"footer/"} />
        </Routes>
      </Router>
    </div>
    
  );
}


export default App;
