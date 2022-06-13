import React from 'react'

import './BotChatMessage.css'

const BotChatMessage = ({props}) => {
    return (
        <div className = 'bot-chat-message-root'>
            <div className = "bot-chat-message-container">
                <span className = 'bot-chat-message-text'>{props && props.message}</span>
            </div>
        </div>
    )
}

export default BotChatMessage