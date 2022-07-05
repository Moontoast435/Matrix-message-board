const messages = [
  {
    message_id: 1,
    message: "example message",
    comments: [
      { comment: "example comment" },
      { comment: "example comment" },
      { comment: "example comment" },
    ],
    react: [{ like: 1 }, { dislike: 0 }, { heart: 0 }],
  },

  {
    message_id: 2,
    message: "new example message",
    comments: [
      { comment: "example comment" },
      { comment: "example comment" },
      { comment: "example comment" },
    ],
    react: [{ like: 0 }, { dislike: 1 }, { heart: 0 }],
  },
];

module.exports = messages;
//
