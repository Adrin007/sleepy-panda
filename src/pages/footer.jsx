import React from "react";
import BottomNavigation from '@mui/material/BottomNavigation';
import Modal from "./modal";
import { Paper } from "@mui/material";

function Footer(){
    return(
        <Paper sx={{ position: 'fixed', bottom: 0, left: 0, right: 0}} elevation={3}>
            <BottomNavigation sx={{backgroundColor:"#F0F0F0"}} showLabels>
                <Modal/>
            </BottomNavigation>
        </Paper>
    )
}

export default Footer 