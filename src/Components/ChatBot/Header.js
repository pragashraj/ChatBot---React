import React from 'react'

import { Grid, IconButton, Avatar, Box } from '@mui/material'
import { Menu } from '@mui/icons-material'
import { deepOrange } from '@mui/material/colors'

import './Header.css'

const Header = () => {

    const renderSettingIcon = () => {
        return (
            <Box>
                <IconButton aria-label = "settings" onClick = {()=> {}}>
                    <Menu/>
                </IconButton>
            </Box>
        )
    }

    const renderHeaderTitle = () => {
        return (
            <div className = "header-container">
                <Avatar sx={{ bgcolor: deepOrange[500] }}>CB</Avatar>
                <div className = "header-container-title">
                    <span className = "header-container-title-span">This is a Chat-bot</span>
                </div>
            </div>
        )
    }

    return (
        <div>
            <Grid container>
                <Grid item xs = {10} md = {11}>
                    { renderHeaderTitle() }
                </Grid>
                <Grid item xs = {2} md = {1}>
                    { renderSettingIcon() }
                </Grid>
            </Grid>
        </div>
    )
}

export default Header