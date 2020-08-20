var express = require("express");
var router = express.Router();

const battleModel = require("../Models/battle_model");

router.get("/list", async (req, res) => {
  const users = await battleModel.battle.find({}).select("region -_id");
  const resArray = [];
  users.forEach((elem) => resArray.push(elem.region));
  res.json(resArray);
});

router.get("/count", async (req, res) => {
  const users = await battleModel.battle.find({});
  res.json(users.length);
});

router.post("/search", async (req, res) => {
  var search_query = req.query.king;
  var location = req.query.location;
  var type = req.query.type;
  console.log(req.query.location);

  var pattern = search_query
    .split("")
    .map((x) => {
      return `(?=.*${x})`;
    })
    .join("");

  var location_pattern = location
    .split("")
    .map((x) => {
      return `(?=.*${x})`;
    })
    .join("");

  var type_pattern = type
    .split("")
    .map((x) => {
      return `(?=.*${x})`;
    })
    .join("");

  const searchResults = await battleModel.battle.find({
    $or: [
      { attacker_king: { $regex: new RegExp(`${pattern}`, "g") } },
      { defender_king: { $regex: new RegExp(`${pattern}`, "g") } },
      { region: { $regex: new RegExp(`${location_pattern}`, "g") } },
      { location: { $regex: new RegExp(`${location_pattern}`, "g") } },
      { battle_type: { $regex: new RegExp(`${type_pattern}`, "g") } },
    ],
  });
  res.send(searchResults);
});

router.get("/search", async (req, res) => {
  const searchResults = await battleModel.battle.find({});
  res.send(searchResults);
});

module.exports = router;
