import React,{useState} from "react";
import Header from "../usercomponents.js/Header"
import { Grid } from "@mui/material";
import ProductView from "./Product/ProductView";
import ProductPrice from "./Product/ProductPrice";
import AboutProduct from "./Product/AboutProduct";
import { useMediaQuery } from "@mui/material";
import { useTheme } from '@mui/material/styles';
import { useLocation } from "react-router-dom";
import Footer from "../usercomponents.js/Footer";

export default function Product(props) {
let location=useLocation()
 var data=location.state.data
    const theme = useTheme()
    const [refresh,setRefresh]=useState(false)
    const matches = useMediaQuery(theme.breakpoints.down('sm'))
    const pageRefresh=()=>{
        setRefresh(!refresh)
    }
    return (<div>
        <div style={{ width: '100%' }}>
            <Header />
        </div>
        <div style={{ display: 'flex', justifyContent: 'center', flexDirection: 'column', margin: 10, }}>
            {matches ? <>
                <Grid container spacing={0} >
                    <Grid item xs={12}>
                        <ProductView ProductImage={props.ProductView} />
                    </Grid>

                    <Grid item xs={12}>
                        <ProductPrice data={data} pageRefresh={pageRefresh}/>
                    </Grid>
                    <Grid item xs={12}>
                        <AboutProduct />
                    </Grid>

                </Grid>

            </> : <>
                <Grid container spacing={2} >
                    <Grid item xs={6}>
                        <ProductView />

                        <Grid item xs={12}>
                            <AboutProduct />
                        </Grid>
                    </Grid>

                    <Grid item xs={6}>
                        <ProductPrice data={data} pageRefresh={pageRefresh}/>
                    </Grid>



                </Grid>
            </>}
        </div>
        
        <Grid>
        <Footer />
      </Grid>
    </div>)
}