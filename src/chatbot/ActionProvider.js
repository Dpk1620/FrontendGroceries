class ActionProvider {
//     constructor(createChatBotMessage, setStateFunc) {
//       this.createChatBotMessage = createChatBotMessage;
//       this.setState = setStateFunc;
//     }
    
//     greet() {
//       const greetingMessage = this.createChatBotMessage("Hi, Welcome to Groceries Mine ")
//       this.updateChatbotState(greetingMessage)
//     }
    
//     updateChatbotState(message) {
   
//   // NOTE: This function is set in the constructor, and is passed in      // from the top level Chatbot component. The setState function here     // actually manipulates the top level state of the Chatbot, so it's     // important that we make sure that we preserve the previous state.
   
//       console.log("message reached", message)
//      this.setState(prevState => ({
//           ...prevState, messages: [...prevState.messages, message]
//       }))
//     }
  }
  
  export default ActionProvider