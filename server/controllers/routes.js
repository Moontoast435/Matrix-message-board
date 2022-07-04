const express = require("express");
const router = express.Router();
const messages = require("../data");

const Message = require("../models/models");

router.get("/", (req, res) => {
  const messages = Message.All;
  res.send(messages);
});

router.get("/:id", (req, res) => {
  const msgId = parseInt(req.params.id);
  const selectedMessage = Message.findById(msgId);
  res.send(selectedMessage);
});

router.post("/", (req, res) => {
  const data = req.body;
  const newMsg = Message.create(data);
  res.status(201).send(newMsg);
});

router.delete("./:id", (req, res) => {
  const msgId = parseInt(req.params.message_id);
  msgToDestroy = Message.findById(msgId);
  msgToDestroy.destroy();
  res.status(204).send();
});

module.exports = router;
