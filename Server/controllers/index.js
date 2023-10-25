const { Mountain, Pos } = require("../models");
const axios = require("axios");
const { Op } = require("sequelize");
const openWeather = require("../helper/openWeather");
const baseUrl = "https://ch1news.gemaramadhan.online";
// const baseUrl = 'http://localhost:3000'

class Controller {
  static async showResult(req, res) {
    try {
      const { name, date } = req.query;
      console.log(name);
      const mountain = await Mountain.findOne({
        where: { name: { [Op.iLike]: `${name}%` } },
        include: [{ model: Pos }],
      });
      const apiUrl = openWeather(mountain.lat, mountain.lon)
      const {data} = await axios.get(apiUrl)
      const weather = data.list[0].weather[0].main
      // console.log(data.list[0].weather[0].main, new Date().getHours());
      res.status(200).json({mountain, weather})
    } catch (error) {
      console.log(error);
      res.status(500).json({message: "ISE", error})
    }
  }
}

module.exports = Controller;
