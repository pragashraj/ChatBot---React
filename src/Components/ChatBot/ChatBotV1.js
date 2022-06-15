import React, { Component } from 'react'

import Chatbot from 'react-chatbot-kit'
import 'react-chatbot-kit/build/main.css'

import {Card, CardContent, Paper} from '@mui/material'

import ActionProvider from './Utills/ActionProvider'
import MessageParser from './Utills/MessageParser'
import config from './Utills/config'

import './ChatBot.css'

class ChatBotV1 extends Component {

  renderChatBotContent = () => {
    return <Chatbot 
      config = {config}
      actionProvider = {ActionProvider}
      messageParser = {MessageParser}
    />
  }

  render() {
    return (
      <div className = 'chatbot-root'>
        <Paper elevation = {6}>
          <Card>
            <CardContent>{ this.renderChatBotContent() }</CardContent>
          </Card>
        </Paper>
      </div>
    )
  }
}

export default ChatBotV1