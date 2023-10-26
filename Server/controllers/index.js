const { Mountain, Pos } = require("../models");
const axios = require("axios");
const { Op } = require("sequelize");
const openWeather = require("../helper/openWeather");
const { transporter } = require("../helper/nodeMailer");
const baseUrl = "https://ch1news.gemaramadhan.online";
// const baseUrl = 'http://localhost:3000'

class Controller {
  static async showResult(req, res) {
    try {
      const { destination, email, date } = req.query;
      console.log(destination, email, date);
      if (
        new Date() > new Date(date) ||
        new Date().getFullYear() < new Date(date).getFullYear() ||
        new Date().getMonth() < new Date(date).getMonth() ||
        new Date(date).getDate() - new Date().getDate() > 5
      ) {
        throw { message: "Date Invalid" };
      }
      const weatherDate =
        (new Date(date).getDate() - new Date().getDate()) * 8 - 4;

      const mountain = await Mountain.findOne({
        where: { name: { [Op.iLike]: `${destination}%` } },
        include: [{ model: Pos }],
      });
      if (!mountain) {
        throw {
          message: `Sorry.. your destination data is not exist in our database`,
        };
      }
      const apiUrl = openWeather(mountain.lat, mountain.lon);
      const { data } = await axios.get(apiUrl);
      const weather = data.list[weatherDate].weather[0].main;

      const mailOptions = {
        from: "gemaramadhan20@gmail.com",
        to: `${email}`,
        subject: "JAGAT APP INFORMATION ADVENTURE",
        text: `Hi traveler, We hope you enjoy your experience using our app, if you want to explore more fun adventure visit our website ${baseUrl} `,
      };

      const info = await transporter.sendMail(
        mailOptions,
        function (err, data) {
          if (err) {
            console.log("Error EMAIL " + err);
          } else {
            console.log("Email sent successfully");
          }
        }
      );

      // console.log(data.list[0].weather[0].main, new Date().getHours());
      res.status(200).json({ mountain, weather });
    } catch (error) {
      console.log(error);
      if (error.message === "Date Invalid") {
        res.status(400).json({ message: error.message });
      } else if (
        error.message ===
        `Sorry.. your destination data is not exist in our database`
      ) {
        res.status(404).json({ message: error.message });
      } else {
        res.status(500).json({ message: "ISE" });
      }
    }
  }
}

module.exports = Controller;
