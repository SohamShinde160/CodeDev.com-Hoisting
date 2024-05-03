const mongoose = require("mongoose");
require("dotenv").config();

const { MONGODB_URL } = process.env;

exports.connect = () => {
	mongoose
    .connect(MONGODB_URL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    .then(console.log(`Database Connected Successfully`))
    .catch((err) => {
      console.log(`Database Connection Failed`);
      console.log(err);
      process.exit(1);
    });
};
