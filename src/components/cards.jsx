import React, { useState } from "react";
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Typography from "@mui/material/Typography";
import Grid from '@mui/material/Grid';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import Rating from '@mui/material/Rating';
import StarOutlineIcon from '@mui/icons-material/StarOutline';
import StarIcon from '@mui/icons-material/Star';
import IconButton from '@mui/material/IconButton';
import CurrencyRupeeIcon from '@mui/icons-material/CurrencyRupee';
import Button from '@mui/material/Button';
import BookmarkIcon from '@mui/icons-material/Bookmark';
import Collapse from '@mui/material/Collapse';
import Grow from '@mui/material/Grow';
import { Link } from "react-router-dom";
function Card(props){
    const [hover,setHover]=useState(false)
    const [grow,setGrow]=useState(false)
    function HoverIn(){
        setHover(true)
    }
    function HoverOut(){
        setHover(false)
    }
    function HandleClick(){
        setGrow(()=>{
            return !grow
        })
    }
    const buttonSX={
        borderBottomLeftRadius:"20px",
        borderBottomRightRadius:"20px",
        width:'100%',
        height:{xs:"3rem",sm:"2.5rem"},
        backgroundColor:props.mode?"lightTheme.purple":"darkTheme.dark",
        "&:hover":{
            backgroundColor:props.mode?"#6527BE":"#0E8388"
        }
    
    }
    const infoSX={
        width:"90%",
        marginRight:"8px",
        marginBottom:"5px"
    }
    const typoInfoSx={
        color:"#818589",
        fontWeight:"bold"
    }
    const [fill,setFill]= useState(false)
    function StarHandler(){
        if (fill===true){
            setFill(false)
        }
        else{
            setFill(true)
        }
    }
    return(
        <Grid item xs={12} sm={4} marginTop={1}>
            <Grow in={true} style={{ transformOrigin: '0 0 0' }}
          {...(true ? { timeout: 1000 } : {})}>
            <Box sx={{position:"relative"}}>
            <Paper onMouseEnter={HoverIn} onMouseLeave={HoverOut} sx={{borderRadius:"20px",backgroundColor:props.mode?"lightTheme.white":"darkTheme.light"}} elevation={hover?12:5}>
            <IconButton onClick={StarHandler} sx={{position:"absolute",top:"1px",right:"1px",color:props.mode?"white":"white"}}>{fill?<StarIcon/>:<StarOutlineIcon/>}</IconButton>
                <Box onClick={HandleClick}>
                    <Box className="zoomer" sx={{overflow:"hidden",position:"relative"}}> 
                        <img class="img" alt="none" src={props.image}></img>
                    </Box>
                    <Typography paddingX={1.5} sx={{fontWeight:'500',color:props.mode?"lightTheme.font":"darkTheme.font"}} variant="subtitle1" component="h2">
                        {props.name}
                    </Typography>
                    <Box display={'flex'} paddingX={1.5} sx={{marginTop:"-5px"}}>
                        <AccessTimeIcon sx={{width:12.5,color:"#818589"}}/>
                        <Typography marginX="5px" sx={{fontWeight:'100',color:"#818589"}} marginTop="2.5px" variant="caption">
                            {props.time} Days
                        </Typography>
                    </Box>
                    <Collapse in={grow} style={{ transformOrigin: '0 0 0' }}
          {...(grow ? { timeout: 300 } : {})}>
                        <Box marginX={1.5} sx={infoSX}>
                            <Typography variant="caption" sx={typoInfoSx}>
                                {props.info}
                            </Typography>
                        </Box>
                    </Collapse>
                    <Box padding={1.5} sx={{marginTop:"-12px"}} display="flex">
                        <Rating name="read-only" sx={{paddingTop:"2px",color:props.mode?"#F1C93B":"darkTheme.font"}} defaultValue={props.stars} precision={0.5} size="small" readOnly />
                        <Typography marginX="5px" sx={{fontWeight:'500',color:props.mode?"lightTheme.font":"darkTheme.font"}} variant="button">
                            {props.stars}
                        </Typography>
                        <Typography sx={{paddingTop:"2px",marginLeft:"5px",fontWeight:"normal",color:"#818589"}} variant="body2">
                            ({props.reviews})
                        </Typography>
                    </Box>
                    <Box display={'flex'} paddingX={1.5} paddingBottom={1.5} sx={{marginTop:"-12px"}}>
                        <CurrencyRupeeIcon sx={{width:15,color:props.mode?"black":"darkTheme.font"}}/>
                        <Typography sx={{fontSize:"15px",marginTop:"1.5px",color:props.mode?"lightTheme.font":"darkTheme.font"}}>
                            {props.amount}/Night
                        </Typography>
                    </Box>
                </Box>
                <Box display={'flex'}sx={{justifyContent:'center'}}>
                <Link className="link" to={props.name}>
                    <Button variant="contained" size="large" sx={buttonSX} startIcon={<BookmarkIcon/>}>
                        <Typography sx={{marginLeft:"-8px"}}>Book now</Typography>
                    </Button>
                </Link>
                </Box>
            </Paper>
            </Box>
            </Grow>
        </Grid>
        
    )
}
export default Card