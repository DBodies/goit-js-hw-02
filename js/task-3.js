function checkForSpam(message) {
    let userMessage = message.toLowerCase()
return message.toLowerCase().includes("spam") || message.toLowerCase().includes("sale")
}