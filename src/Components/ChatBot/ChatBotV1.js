import React, { Component } from 'react'

import Chatbot from 'react-chatbot-kit'

import {Card, CardContent, Paper} from '@mui/material'

import ActionProvider from './Utills/ActionProvider'
import MessageParser from './Utills/MessageParser'
import config from './Utills/config'

import './ChatBot.css'

class ChatBotV1 extends Component {
  render() {
    return (
      <div className = 'chatbot-root'>
        <Paper elevation = {6}>
          <Card>
            <CardContent>
              <Chatbot 
                config = {config}
                actionProvider = {ActionProvider}
                messageParser = {MessageParser}
              />
            </CardContent>
          </Card>
        </Paper>
      </div>
    )
  }
}

export default ChatBotV1