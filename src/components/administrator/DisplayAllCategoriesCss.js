import { makeStyles } from "@mui/styles";
export const useStyles= makeStyles({
 mainContainer:{
    display:'flex',
    justifyContent:'center',
    alignItems:'center',
    background:'#dfe6e9',
    height:'auto',
    width:'85vw'

 },
box:{
    padding:10,
    margin:30,
    background:'#FFF',
    width:"90%",
   // height:"70%",
    borderRadius:10
     
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
    justifyContent: 'space-between'
}

})

