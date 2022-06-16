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
      "Fantastic, I've got the following resources for you on languages:",
      { widget: "learningOptions" }
    )

    this.updateChatbotState(message)
  }

  handleJavaOnClick = () => {
    const message = this.createChatBotMessage(
      "Fantastic, I've got the following resources for you on Java:",
      {
        widget: "javascriptLinks"
      }
    )

    this.updateChatbotState(message)
  }
}
 
export default ActionProvider