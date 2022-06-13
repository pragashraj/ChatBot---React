import React from 'react'

import { Avatar } from '@mui/material'
import { deepOrange } from '@mui/material/colors'

import './BotAvatar.css'

const BotAvatar = () => {
    return (
        <div className = 'bot-avatar-root'>
            <Avatar sx = {{width: "25px", height: "25px", padding: "5px", bgcolor: deepOrange[500]}}>B</Avatar>
        </div>
    )
}

export default BotAvatar