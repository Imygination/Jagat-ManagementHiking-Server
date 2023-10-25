const { Mountain, Pos } = require("../models");
const axios = require("axios");
const { Op } = require("sequelize");
const baseUrl = "https://ch1news.gemaramadhan.online";
// const baseUrl = 'http://localhost:3000'

class Controller {
  static async showResult(req, res) {
    try {
      const { name } = req.query;
      console.log(name);
      const mountain = await Mountain.findOne({
        where: { name: { [Op.iLike]: `${name}%` } },
        include: [{ model: Pos }],
      });
      res.status(200).json({mountain})
    } catch (error) {
      console.log(error);
      res.status(500).json({message: "ISE", error})
    }
  }
}

module.exports = Controller;
