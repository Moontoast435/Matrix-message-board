const messages = [
  {
    message_id: 1,
    message: "example message",
    comments: [
      { comment_id: 1, comment: "example comment" },
      { comment_id: 2, comment: "example comment" },
      { comment_id: 3, comment: "example comment" },
    ],
    react: {
      like: 1,
      dislike: 0,
      heart: 0
    }
  },

  {
    message_id: 2,
    message: "new example message",
    comments: [
      { comment_id: 1, comment: "new example comment" },
      { comment_id: 2, comment: "new example comment" },
      { comment_id: 3, comment: "new example comment" },
    ],
    react: {
      like: 0,
      dislike: 1,
      heart: 0
    }
  },
];

module.exports = messages;
