const express = require("express");
const router = express.Router();
const messages = require("../data");
const bodyParser = require("body-parser");
const Message = require("../models/models");

router.use(bodyParser.json());

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

router.post("/", (req, res) => {
  const data = req.body;
  const newMsg = Message.create(data, data.message);
  res.status(201).send(newMsg);
});

router.delete("/:id", (req, res) => {
  const msgId = parseInt(req.params.id);
  msgToDestroy = Message.findById(msgId);
  msgToDestroy.destroy();
  res.status(204).send();
});

module.exports = router;
