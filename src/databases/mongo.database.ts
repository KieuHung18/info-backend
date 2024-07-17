import MongoStore from "connect-mongo";
const host = process.env.MONGO_HOST;
const mongoStore = MongoStore.create({
  mongoUrl: host,
});
// Catch errors
mongoStore.on("error", function (error) {
  console.log(error);
});
export default mongoStore;
