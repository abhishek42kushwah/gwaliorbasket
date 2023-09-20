import { makeStyles } from "@mui/styles";
export const useStyles = makeStyles({
    mainContainer: {
        display: 'flex',
    //    justifyContent: 'center',
        alignItems: 'center',
        background: '#dfe6e9',
        height: '100vh',
        width: '100vw',
        
    },
    box: {
        padding: 30,
        margin: 100,
        background: '#FFF',
        width: 800,
        height: '65%',
        borderRadius: 10,
        display:'flex'
        
    },
    headingStyle: {
        fontWeight: 'bold',
        fontSize: 18,
        fontFamily: 'Poppins',
        letterSpacing: 1

    },
    rowStyle: {
        display: 'flex',
        margin:40,
        flexDirection: 'row',
        justifyContent:'space-between'
    }

})

