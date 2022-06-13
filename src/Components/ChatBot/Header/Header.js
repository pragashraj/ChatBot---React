import React from 'react'

import { Grid, IconButton, Box } from '@mui/material'
import { Menu } from '@mui/icons-material'

import './Header.css'
import chatbotLogo from '../../../assets/images/logo.png'

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
                <img src = {chatbotLogo} alt = "logo" className = 'chat-bot-logo'/>
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