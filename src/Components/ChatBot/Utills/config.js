import { createChatBotMessage } from "react-chatbot-kit"

import Header from "../Header/Header"
import BotAvatar from "../BotAvatar/BotAvatar"
import BotChatMessage from "../BotChatMessage/BotChatMessage"
import UserAvatar from "../UserAvatar/UserAvatar"
import UserChatMessage from "../UserChatMessage/UserChatMessage"
import LearningOptions from "../LearningOptions/LearningOptions"
import InitialWidget from "../InitialWidget/InitialWidget"
import LinkList from '../LinkList/LinkList'

const javascriptOptions = [
  {
    text: "Introduction to JS",
    url: "https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/basic-javascript/",
    id: 1,
  },
  {
    text: "Mozilla JS Guide",
    url: "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide",
    id: 2,
  },
  {
    text: "Frontend Masters",
    url: "https://frontendmasters.com",
    id: 3,
  },
]

const config = { 
  botName: "Chat-Bot",
  initialMessages: [createChatBotMessage("Hi, I'm here to help. What can we help you with today?", {
    widget: "initialWidget"
  })],
  customComponents: {
    header: () => <Header/>,
    botAvatar: () => <BotAvatar/>,
    botChatMessage: (props) => <BotChatMessage props = {props} />,
    userAvatar: () => <UserAvatar/>,
    userChatMessage: (props) => <UserChatMessage props = {props} />
  },
  widgets: [
    {
      widgetName: "learningOptions",
      widgetFunc: (props) => <LearningOptions {...props} />,
    },
    {
      widgetName: "initialWidget",
      widgetFunc: () => <InitialWidget/>,
    },
    {
      widgetName: "javascriptLinks",
      widgetFunc: (props) => <LinkList {...props} />,
      props: {options: javascriptOptions}
    },
  ],
}

export default config