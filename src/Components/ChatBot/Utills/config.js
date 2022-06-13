import { createChatBotMessage } from "react-chatbot-kit"

import Header from "../Header/Header"
import BotAvatar from "../BotAvatar/BotAvatar"
import BotChatMessage from "../BotChatMessage/BotChatMessage"

const config = { 
  botName: "Chat-Bot",
  initialMessages: [createChatBotMessage("Hi, I'm here to help. What do you want to learn?")],
  customComponents: {
    header: () => <Header/>,
    botAvatar: () => <BotAvatar/>,
    botChatMessage: (props) => <BotChatMessage props = {props} />,
  }
}

export default config