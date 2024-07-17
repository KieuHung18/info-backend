import MongoStore from "connect-mongo";
const userName = process.env.MONGO_USER_NAME;
const password = process.env.MONGO_PASSWORD;

// mongodb+srv://kieuhungcm2015:<password>@cluster0.hoi02x3.mongodb.net/

const mongoStore = MongoStore.create({
  mongoUrl:
    "mongodb+srv://" +
    userName +
    ":" +
    password +
    "@cluster0.hoi02x3.mongodb.net/",
});
// Catch errors
mongoStore.on("error", function (error) {
  console.log(error);
});
export default mongoStore;
