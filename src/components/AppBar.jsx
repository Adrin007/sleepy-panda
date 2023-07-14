import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import HomeIcon from '@mui/icons-material/Home';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import NightlightRoundSharpIcon from '@mui/icons-material/NightlightRoundSharp';
import WbSunnyRoundedIcon from '@mui/icons-material/WbSunnyRounded';
import { Link } from 'react-router-dom';
import { useState } from 'react';

export default function Appbar(props) {
  const [moonButton,setMoonButton]=useState(false)
  function MoonClick(){
    setMoonButton(()=>{
      return (!moonButton)
    })
  }
  function trigger(){
    props.trigger(moonButton)
  }
 
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" sx={{backgroundColor:moonButton?'darkTheme.dark':'lightTheme.purple',height:{xs:"5rem",sm:"5rem"}}}>
        <Toolbar>
          <Box sx={{marginLeft:{xs:"-15px",sm:"0px"}}}>
            <img className="logo" src="panda.png" alt="" />
          </Box>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1,marginTop:{xs:"9px",sm:"-5px"},marginLeft:{xs:'-8px',sm:"-7px"},fontWeight:"bold",fontSize:{xs:"145x",sm:"50px"},color:moonButton?'darkTheme.orange':'lightTheme.white' }}>
            SLEEPY PANDA
          </Typography>
          <Box sx={{marginTop:{xs:"10px",sm:"0px"},marginRight:{xs:"0px",sm:"10px"}}}>
            <Link to={"/"}>
              <IconButton sx={{marginRight:{xs:"-3px",sm:"12px"}}}>
                <HomeIcon sx={{color:'lightTheme.white'}}/>
              </IconButton>
            </Link>
            <IconButton sx={{marginRight:{xs:"-3px",sm:"12px"}}}>
              <AccountCircleIcon sx={{color:'lightTheme.white'}}/>
            </IconButton>
            <IconButton onClick={()=>{
              MoonClick();
              trigger()
            }} sx={{marginRight:{xs:"-3px",sm:"12px"}}}>
            {moonButton?<WbSunnyRoundedIcon sx={{color:'lightTheme.white'}}/>:<NightlightRoundSharpIcon sx={{color:"white"}}/>}
            </IconButton>
          </Box>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
