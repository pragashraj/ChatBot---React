class ActionProvider {
  constructor(createChatBotMessage, setStateFunc) {
    this.createChatBotMessage = createChatBotMessage
    this.setState = setStateFunc
  }
  
  greet() {
    const greetingMessage = this.createChatBotMessage("Hi, friend.")
    this.updateChatbotState(greetingMessage)
  }
  
  updateChatbotState(message) { 
    this.setState(prevState => ({
    	...prevState, messages: [...prevState.messages, message]
    }))
  }

  handleLanguageOnTyped = () => {
    const message = this.createChatBotMessage(
      "Great, What do you want learn?",
      { widget: "learningOptions" }
    )

    this.updateChatbotState(message)
  }

  handleJavascriptOnClick = () => {
    const message = this.createChatBotMessage(
      "Fantastic, I've got the following resources for you on Javascript:",
      {
        widget: "javascriptLinks"
      }
    )

    this.updateChatbotState(message)
  }
}
 
export default ActionProvider