const express = require("express");
const router = express.Router();
const messages = require("../data");
const bodyParser = require("body-parser");
const Message = require("../models/models");

router.use(
  bodyParser.urlencoded({
    extended: true,
  })
);

router.use(bodyParser.json());

// GET methods

router.get("/", (req, res) => {
  const messages = Message.All;
  res.send(messages);
});

router.get("/:id", (req, res) => {
  const msgId = parseInt(req.params.id);
  const selectedMessage = Message.findById(msgId);
  res.send(selectedMessage);
});

router.get("/:id/comments", (req, res) => {
  const msgId = parseInt(req.params.id);
  const selectedComments = Message.findComments(msgId);
  res.send(selectedComments);
});

router.get("/:id/reacts", (req, res) => {
  const msgId = parseInt(req.params.id);
  const selectReacts = Message.findReacts(msgId);
  res.send(selectReacts);
});

// POST methods

router.post("/", (req, res) => {
  const data = req.body;
  const newMsg = Message.create(data);
  res.status(201).send(newMsg);
});

router.post("/:id/comments", (req, res) => {
  const data = req.body;
  const msgId = parseInt(req.params.id);
  const selectedComments = Message.findComments(msgId);
  selectedComments.push(data);
  res.send(selectedComments);
});

router.post("/:id/reacts", (req, res) => {
  const data = req.body;
  const msgId = parseInt(req.params.id);
  let selectReacts = Message.findReacts(msgId);
  let key = Object.keys(data);
  if (key[0] === "like") {
    selectReacts[0].like += 1;
  } else if (key[0] === "dislike") {
    selectReacts[1].dislike += 1;
  } else {
    selectReacts[2].heart += 1;
  }

  res.send(selectReacts);
});
// DELETE methods

router.delete("/:id", (req, res) => {
  const msgId = parseInt(req.params.id);
  msgToDestroy = Message.findById(msgId);
  msgToDestroy.destroy();
  res.status(204).send();
});

module.exports = router;
