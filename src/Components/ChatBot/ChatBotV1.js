import React, { Component } from 'react'

import Chatbot from 'react-chatbot-kit'

import {Card, CardContent, Paper} from '@mui/material'

import ActionProvider from './ActionProvider'
import MessageParser from './MessageParser'
import Config from './Config'

import './ChatBot.css'

class ChatBotV1 extends Component {
  render() {
    return (
      <div className = 'chatbot-root'>
        <Paper elevation = {6}>
          <Card sx = {{ width: 440, height: 550 }}>
            <CardContent>
              <Chatbot 
                config = {Config} 
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