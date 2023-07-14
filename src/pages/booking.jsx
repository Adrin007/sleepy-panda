import React, { useRef } from "react";
import { useParams } from "react-router-dom";
import Data from "../components/data";
import { Box, Typography,Grid,Grow } from "@mui/material";
import { createTheme, ThemeProvider } from '@mui/material';
import Appbar from "../components/AppBar";
import Paper from '@mui/material/Paper';
import QuiltedImageList from "./quilted_collage";
import AccountBalanceIcon from '@mui/icons-material/AccountBalance';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import FitnessCenterIcon from '@mui/icons-material/FitnessCenter';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import AirlineSeatFlatIcon from '@mui/icons-material/AirlineSeatFlat';
import AutoAwesomeIcon from '@mui/icons-material/AutoAwesome';
import AutorenewIcon from '@mui/icons-material/Autorenew';
import WifiIcon from '@mui/icons-material/Wifi';
import Footer from "./footer";
import { useInView } from 'react-intersection-observer';
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

function Booking(){
    const {id} = useParams()
    const {ref:footerRef,inView:footerIsVisible} = useInView()
    var index = Data.map(item => item.name).indexOf(id);
    return(
        <ThemeProvider theme={theme}>
            <Box>
                <Appbar/>
                <Box sx={{marginLeft:{sm:"50px",xs:"20px"},marginRight:{sm:"50px",xs:"20px"}}}>
                    <Box marginY={2} marginBottom={0}>
                        <Typography sx={{color:"#191825",fontSize:{sm:"1.8rem",xs:"22px"}}}>
                            Enjoy The Amenity On {id}
                        </Typography>
                    </Box>
                    <Box display="flex" sx={{color:"#818589"}} marginBottom={2}>
                        <Typography variant="subtitle2" sx={{marginRight:"4px",fontSize:{sm:"14px",xs:"11px"}}} fontWeight="bold">
                            {Data[index].reviews} reviews
                        </Typography>
                        |
                        <Box display="flex" marginX={0.5}>
                            <AccountBalanceIcon sx={{marginRight:{sm:"3px",xs:"2px"},marginTop:"1.5px",fontSize:{sm:"17px",xs:"13px"}}}/>
                            <Typography variant="subtitle2" sx={{fontSize:{sm:"14px",xs:"11px"}}} fontWeight="bold">
                                Encrypted Payment!
                            </Typography>
                        </Box>
                        |
                        <LocationOnIcon sx={{marginLeft:"2px",marginTop:"1.5px",fontSize:{sm:"17px",xs:"13px"}}}/>
                        <Typography sx={{fontSize:{sm:"14px",xs:"11px"}}} variant="subtitle2" fontWeight="bold">
                            Near my ButtHole
                        </Typography>
                    </Box>
                    <Box display="flex" sx={{flexDirection:{xs:"column",sm:"row"}}} elevation={12}>
                        <Box>
                            <img className="bookingImg" src={Data[index].img_link} alt="none" />
                        </Box>
                        <QuiltedImageList/>
                    </Box>
                    <Box marginY={2}>
                        <Paper sx={{width:"100%",height:"100%",borderRadius:"20px",backgroundColor:"#F0F0F0"}} elevation={5}>
                            <Box sx={{marginLeft:{sm:"50px",xs:"20px"},marginRight:{sm:"50px",xs:"20px"}}} paddingY={2}>
                                <Typography sx={{color:"#191825",fontSize:{sm:"1.5rem",xs:"20px"}}}>
                                    Entire Villa Hosted By Adrin
                                </Typography>
                                <Typography sx={{color:"#818589",fontSize:{sm:"15px",xs:"11px"}}} variant="body1">
                                    16+ guests | 7 bedrooms | 16 beds | 7.5 bathrooms
                                </Typography>
                            </Box>
                            <Box marginX={3} marginY={3} sx={{paddingBottom:"50px"}} paddingBottom={3}>
                                <Grid container spacing={3}>
                                    <Grid item xs={12} sm={4}>
                                        <Paper elevation={5} sx={{backgroundColor:"#F0F0F0",height:"100%",borderRadius:"15px"}}>
                                            <Box marginX={3}>
                                            <span className="nigga"><FitnessCenterIcon sx={{marginTop:{sm:"9px",xs:"12px"},marginRight:"9px",fontSize:{sm:"29px",xs:"20px"}}}/><Typography sx={{marginTop:"9.5px",fontSize:{sm:"1.3rem",xs:"16px"}}}>In-Built Gym</Typography></span>
                                            <Typography sx={{marginY:"10px",color:"#818589",fontSize:{xs:"12px",sm:"15px"}}}>Sed ut perspiciatis unde omnis iste natus error</Typography>
                                            </Box>
                                        </Paper>
                                    </Grid>
                                    <Grid item xs={12} sm={4}>
                                        <Paper elevation={5} sx={{backgroundColor:"#F0F0F0",height:"100%",borderRadius:"15px"}}>
                                            <Box marginX={3}>
                                            <span className="nigga"><AccessTimeIcon fontSize="large" sx={{marginTop:{sm:"9px",xs:"12px"},marginRight:"10px",fontSize:{sm:"29px",xs:"20px"}}}/><Typography sx={{marginTop:"9.5px",fontSize:{sm:"1.3rem",xs:"16px"}}}>Easy Check In/Out</Typography></span>
                                            <Typography sx={{marginY:"10px",color:"#818589",fontSize:{xs:"12px",sm:"15px"}}}>Sed ut perspiciatis unde omnis iste natus error</Typography>
                                            </Box>
                                        </Paper>
                                    </Grid>
                                    <Grid item xs={12} sm={4}>
                                        <Paper elevation={5} sx={{backgroundColor:"#F0F0F0",height:"100%",borderRadius:"15px"}}>
                                            <Box marginX={3}>
                                            <span className="nigga"><AirlineSeatFlatIcon fontSize="large" sx={{marginTop:{sm:"9px",xs:"12px"},marginRight:"10px",fontSize:{sm:"29px",xs:"20px"}}}/><Typography sx={{marginTop:"9.5px",fontSize:{sm:"1.3rem",xs:"16px"}}}>Peacefull Community</Typography></span>
                                            <Typography sx={{marginY:"10px",color:"#818589",fontSize:{xs:"12px",sm:"15px"}}}>Sed ut perspiciatis unde omnis iste natus error</Typography>
                                            </Box>
                                        </Paper>
                                    </Grid>
                                    <Grid item xs={12} sm={4}>
                                        <Paper elevation={5} sx={{backgroundColor:"#F0F0F0",height:"100%",borderRadius:"15px"}}>
                                            <Box marginX={3}>
                                            <span className="nigga"><AutoAwesomeIcon fontSize="large" sx={{marginTop:{sm:"9px",xs:"12px"},marginRight:"10px",fontSize:{sm:"29px",xs:"20px"}}}/><Typography sx={{marginTop:"9.5px",fontSize:{sm:"1.3rem",xs:"16px"}}}>Luxurious As Fuck</Typography></span>
                                            <Typography sx={{marginY:"10px",color:"#818589",fontSize:{xs:"12px",sm:"15px"}}}>Sed ut perspiciatis unde omnis iste natus error</Typography>
                                            </Box>
                                        </Paper>
                                    </Grid>
                                    <Grid item xs={12} sm={4}>
                                        <Paper elevation={5} sx={{backgroundColor:"#F0F0F0",height:"100%",borderRadius:"15px"}}>
                                            <Box marginX={3}>
                                            <span className="nigga"><AutorenewIcon fontSize="large" sx={{marginTop:{sm:"9px",xs:"12px"},marginRight:"10px",fontSize:{sm:"29px",xs:"20px"}}}/><Typography sx={{marginTop:"9.5px",fontSize:{sm:"1.3rem",xs:"16px"}}}>Refund Available</Typography></span>
                                            <Typography sx={{marginY:"10px",color:"#818589",fontSize:{xs:"12px",sm:"15px"}}}>Sed ut perspiciatis unde omnis iste natus error</Typography>
                                            </Box>
                                        </Paper>
                                    </Grid>
                                    <Grid ref={footerRef} item xs={12} sm={4}>
                                        <Paper elevation={5} sx={{backgroundColor:"#F0F0F0",height:"100%",borderRadius:"15px"}}>
                                            <Box marginX={3}>
                                            <span className="nigga"><WifiIcon fontSize="large" sx={{marginTop:{sm:"9px",xs:"12px"},marginRight:"10px",fontSize:{sm:"29px",xs:"20px"}}}/><Typography sx={{marginTop:"9.5px",fontSize:{sm:"1.3rem",xs:"16px"}}}>Unlimited Wi-Fi</Typography></span>
                                            <Typography sx={{marginY:"10px",color:"#818589",fontSize:{xs:"12px",sm:"15px"}}}>Sed ut perspiciatis unde omnis iste natus error</Typography>
                                            </Box>
                                        </Paper>
                                    </Grid>
                                </Grid>
                            </Box>
                        </Paper>      
                    </Box>
                    <Box marginY={2} sx={{paddingBottom:"100px"}}>
                        <Paper elevation={5} sx={{width:"100%",height:"100%",borderRadius:"20px",backgroundColor:"#F0F0F0"}}>
                            <Box marginX={3} paddingY={2}>
                                <Typography variant="h6" sx={{fontWeight:"bold"}}>
                                    DESCRIPTION
                                </Typography>
                                <Box>
                                    <Typography sx={{color:"#818589"}} variant="caption">
                                        Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur
                                    </Typography>
                                </Box>
                            </Box>
                        </Paper>
                    </Box>
                </Box>
                    {footerIsVisible?<Footer/>:null}
            </Box>
        </ThemeProvider>
    )
}
export default Booking