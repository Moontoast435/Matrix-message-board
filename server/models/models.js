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

  static findById(id) {
    const messageData = messagesData.filter((message) => message.id === id) [0];
    const message = new Message(messageData);
    return message;
  }

  static create(message) {
    const newMsgId = messagesData.length + 1;
    const newMsg = new Message({ message_id: newMsgId, ...message });
    messagesData.push(newMsg);
    return newMsg;
  }

  destroy() {
    const message = messagesData.filter((message) => message.id === this.id)[0];
    messagesData.splice(messagesData.indexOf(message), 1);
  }
}

module.exports = Message;
