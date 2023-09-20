import * as React from 'react';
import {AppBar,Grid,Paper} from '@mui/material/';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import { height } from '@mui/system';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Divider from '@mui/material/Divider';
import InboxIcon from '@mui/icons-material/Inbox';
import DraftsIcon from '@mui/icons-material/Drafts';
import CategoryIcon from '@mui/icons-material/Category';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import AddPhotoAlternateIcon from '@mui/icons-material/AddPhotoAlternate';
import LogoutIcon from '@mui/icons-material/Logout';
import { Routes,Route } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import  Category  from "./Category";
import DisplayAllCategories from "./DisplayAllCategories";
import DisplayAllProducts from "./DisplayAllProducts";
import Product from "./Product";
import { ServerURL } from '../services/ServerServices';
import ProductList from "./ProductList";
import Banner from '../administrator2/Banner';



export default function Dashboard(props)
{   var navigate=useNavigate()
 //var admin=JSON.parse(localStorage.getItem('ADMIN'))
 
    return(
        <div>
            <AppBar position="static">
  <Toolbar variant="dense">
    <IconButton edge="start" color="#2d3436" aria-label="menu" sx={{ mr: 2 }}>
      <MenuIcon />
    </IconButton>
    <Typography variant="h6" color="inherit" component="div">
      GwaliorBasket
    </Typography>
  </Toolbar>
</AppBar> 
<Grid container spacing={3}>
<Grid item xs={2}>
<div style={{display:'flex' ,flexDirection:"column",}}>
<img src='/assets/adani.png' style={{width:50,margin:20,borderRadius:40 }} />
<Paper style={{width:200,height:60,background:"#dfe6e9" ,margin:5,display:'flex',alignItems:'center',justifyContent:'space-between'}} elevation={1}>
<img src='/assets/admin.jpg' style={{width:50,borderRadius:25,marginLeft:10 }}/>
<span style={{fontWeight:'bolder', fontFamily:'poppins',marginRight:50 }}> Jack Rayan</span>
</Paper> 
<div style={{width:220,margin:10}}> 
 <List component="nav">
          <ListItem >
            <ListItemButton onClick={()=>navigate("/dashboard/displayallcategories")}>
              <ListItemIcon>
                <CategoryIcon />
              </ListItemIcon>
              <ListItemText primary={<span style={{fontWeight:500,letterSpacing:1 ,fontfamily:'Poppins'}}> Category</span>} />
            </ListItemButton>
            </ListItem>
            <ListItem>
            <ListItemButton  onClick={()=>navigate("/dashboard/displayallproducts")}>
              <ListItemIcon>
                <AddShoppingCartIcon/>
              </ListItemIcon>
              <ListItemText primary={<span style={{fontWeight:500,letterSpacing:1 ,fontfamily:'Poppins'}}> Product</span>} />
            </ListItemButton>
            </ListItem>


            <ListItem >
            <ListItemButton onClick={()=>navigate("/dashboard/ProductList")} >
              <ListItemIcon>
                <AddPhotoAlternateIcon/>
              </ListItemIcon>
              <ListItemText primary={<span style={{fontWeight:500,letterSpacing:1 ,fontfamily:'Poppins'}}>Product List</span>} />
            </ListItemButton>
            </ListItem>
          

            <ListItem >
            <ListItemButton  onClick={()=>navigate("/dashboard/banner")}>
              <ListItemIcon>
                <AddPhotoAlternateIcon/>
              </ListItemIcon>
              <ListItemText primary={<span style={{fontWeight:500,letterSpacing:1 ,fontfamily:'Poppins'}}>Banner</span>} />
            </ListItemButton>
            </ListItem>
            
            <Divider/>


            <ListItem >
            <ListItemButton >
              <LogoutIcon>
                <AddPhotoAlternateIcon/>
              </LogoutIcon>
              <ListItemText primary={<span style={{fontWeight:500,letterSpacing:1,fontfamily:'Poppins'}}>Logout</span>} />
            </ListItemButton>
            </ListItem>
            
</List>
</div>
</div>
</Grid>
<Grid item  xs={9}>
  <Routes>
    <Route element={<DisplayAllCategories/>} path={"displayallcategories"} />
    <Route element={<Category/>} path={"category"}/>
    <Route element={<DisplayAllProducts/>} path={"displayallproducts"} />
    <Route element={<Product/>} path={"product"}/>
    <Route element={<ProductList/>} path={"productlist"}/>
    <Route element={<Banner/>} path={"banner"}/>
  </Routes>
</Grid>
</Grid>
</div>
    )
}  