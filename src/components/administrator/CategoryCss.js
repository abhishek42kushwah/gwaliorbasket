import { LineWeight } from "@material-ui/icons";
import { makeStyles } from "@mui/styles";
export const useStyles= makeStyles({
 mainContainer:{
    display:'flex',
   // justifyContent:'center',
    alignItems:'center',
    margin:'10',
    background:'#dfe6e9',
    height:'100vh',
    width:'100vw'

 },
box:{
    padding:20,
    margin:100,
    background:'#FFF',
    width:800,
    borderRadius:10,
    Weight:"100vw",
},
headingStyle:{
    fontWeight:'bold',
    fontSize:18,
    fontFamily:'Poppins',
    letterSpacing:1

},
rowStyle:{
    display:'flex',
    flexDirection:'row',
    justifyContent:'space-between'
}

})

