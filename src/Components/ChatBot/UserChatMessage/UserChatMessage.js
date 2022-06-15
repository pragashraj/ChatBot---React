import React from 'react'

import './UserChatMessage.css'

const UserChatMessage = ({props}) => {
    return (
        <div className = 'user-chat-message-root'>
            <div className = "user-chat-message-container">
                <span className = 'user-chat-message-text'>{props && props.message}</span>
            </div>
        </div>
    )
}

export default UserChatMessage