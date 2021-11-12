import React from "react";
import {AppBar, Box, IconButton, Toolbar} from "@material-ui/core";
import AppsIcon from '@mui/icons-material/Apps'
import styled from "styled-components";
import {Button} from "@mui/material";

const BarTitle = styled.h3`
font-weight: normal;
`


export const Navbar = () => {
    return (
        <Box sx={{flexGrow: 1}}>
            <AppBar position="static">
                <Toolbar variant="dense">
                    <IconButton edge="start" color="inherit" aria-label="menu" sx={{mr: 2}}>
                        <AppsIcon/>
                    </IconButton>
                    <BarTitle className="genshin_text" sx={{flexGrow: 1}}>原神圣遗物生成器(装逼用)</BarTitle>
                    <Button color="inherit">中文</Button>
                    <Button color="inherit">English (coming soon)</Button>
                </Toolbar>
            </AppBar>
        </Box>
    )
}