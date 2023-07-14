import React, { useState } from "react";
import Card from "../components/cards";
import Box from "@mui/material/Box";
import Grid from '@mui/material/Grid';
import Data from "../components/data"
import AppBar from "../components/AppBar";
import { createTheme, ThemeProvider } from '@mui/material';

const theme = createTheme({
    typography: {
      fontFamily: [
        'Ubuntu',
        'cursive',
      ].join(','),
    },
    palette:{
      lightTheme:{
        purple:"#7149C6",
        white:"#FFFFFF",
        font:"#000000"
      },
      darkTheme:{
        dark:"#2E4F4F",
        font:"#FFFFFF",
        light:"#2C3333"
      }
    }});

function Home(){
    const [bgColor,setBgColor]=useState(true)
  function Trigger(value){
    setBgColor(value)
  }
    return (
        <ThemeProvider theme={theme}>
        <Box sx={{paddingBottom:"5px",backgroundColor:bgColor?'lightTheme.white':'darkTheme.light'}}>
        <AppBar trigger={Trigger}/>
        <Box paddingX={{sm:7,xs:3}} sx={{marginTop:"40px",marginBottom:"50px"}}>
            <Grid container spacing={5}>
               {Data.map((value)=>{
                return (
                    <Card 
                    id={value.id}
                    mode={bgColor}
                    trigger={Trigger}
                    image={value.img_link} 
                    name={value.name} 
                    time={value.time} 
                    stars={value.stars} 
                    reviews={value.reviews} 
                    amount={value.amount}
                    info={value.info} />
                )
               })}
            </Grid>
        </Box>
        </Box>
        </ThemeProvider>
    )
}

export default Home