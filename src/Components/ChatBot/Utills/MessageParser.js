class MessageParser {
    constructor(actionProvider) {
      this.actionProvider = actionProvider
    }
  
    parse(message) {
      const lowerCaseMessage = message.toLowerCase()

      if (lowerCaseMessage.includes("hi")) {
        this.actionProvider.greet()
      }
      
      if (lowerCaseMessage.includes("languages")) {
        this.actionProvider.handleLanguageOnTyped()
      }
  
      if (lowerCaseMessage.includes("javascript")) {
        this.actionProvider.handleJavascriptList()
      }
    }
}
  
export default MessageParser