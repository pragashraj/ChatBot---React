import { createChatBotMessage } from "react-chatbot-kit"

import Header from "../Header/Header"
import BotAvatar from "../BotAvatar/BotAvatar"
import BotChatMessage from "../BotChatMessage/BotChatMessage"
import UserAvatar from "../UserAvatar/UserAvatar"
import UserChatMessage from "../UserChatMessage/UserChatMessage"

const config = { 
  botName: "Chat-Bot",
  initialMessages: [createChatBotMessage("Hi, I'm here to help. What can we help you with today?")],
  customComponents: {
    header: () => <Header/>,
    botAvatar: () => <BotAvatar/>,
    botChatMessage: (props) => <BotChatMessage props = {props} />,
    userAvatar: () => <UserAvatar/>,
    userChatMessage: (props) => <UserChatMessage props = {props} />
  }
}

export default config