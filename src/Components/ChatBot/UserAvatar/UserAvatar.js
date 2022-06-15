import React from 'react'

import { Avatar } from '@mui/material'
import { green } from '@mui/material/colors'

import './UserAvatar.css'

const UserAvatar = () => {
    return (
        <div className = 'user-avatar-root'>
            <Avatar sx = {{width: "25px", height: "25px", padding: "5px", bgcolor: green[500]}}>
            U
            </Avatar>
        </div>
    )
}

export default UserAvatar