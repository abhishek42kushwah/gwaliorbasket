import React from "react";
import Breadcrumbs from '@mui/material/Breadcrumbs';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';
import Stack from '@mui/material/Stack';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';


export default function Location(props)
{
  const breadcrumbs = [
    <Link underline="hover" key="1" color="inherit" href="/Home" >
      Home
    </Link>,
    <Link
      underline="hover"
      key="2"
      color="inherit"
      href="/material-ui/getting-started/installation/"
    
    >
      Frozen Veggies
    </Link>,
    <Typography key="3" color="text.primary">
     Safal Frozen Green Peas
    </Typography>,
  ];

    return(
      <Stack spacing={2}>
       <Breadcrumbs
        separator={<NavigateNextIcon fontSize="small" />}
        aria-label="breadcrumb"
      >
        {breadcrumbs}
      </Breadcrumbs>
    </Stack>
    )
       
}
