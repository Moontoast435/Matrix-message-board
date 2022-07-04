const messagesData = require("../data");

class Message {
  constructor(data) {
    this.message_id = data.message_id;
    this.message = data.message;
    this.comments = data.comments;
    this.react = data.react;
  }
  static get All() {
    const messages = messagesData.map((message) => new Message(message));
    return messages;
  }

  static findById(message_id) {
    const messageData = messagesData.filter(
      (message) => message.message_id === message_id
    )[0];
    const message = new Message(messageData);
    return message;
  }
  // Will display all comments of a selected message
  static findComments(message_id) {
    const messageData = messagesData.filter(
      (message) => message.message_id === message_id
    )[0];
    const message = new Message(messageData);
    return message.comments;
  }
  //will display all the reacts of a selected message
  static findReacts(message_id) {
    const messageData = messagesData.filter(
      (message) => message.message_id === message_id
    )[0];
    const message = new Message(messageData);
    return message.react;
  }

  static create(message, messageContent) {
    const newMsgId = messagesData.length + 1;
    const newMsg = new Message({
      message_id: newMsgId,
      messageContent,
      ...message,
    });
    messagesData.push(newMsg);
    return newMsg;
  }

  destroy() {
    const message = messagesData.filter(
      (message) => message.message_id === this.message_id
    )[0];
    messagesData.splice(messagesData.indexOf(message), 1);
  }
}

module.exports = Message;
