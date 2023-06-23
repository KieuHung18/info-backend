const logError = (err, req, res, next) => {
  console.log("Api: ", req.url);
  console.error("Error: ", err);
  next(err);
};

const returnError = (err, req, res, next) => {
  res
    .status(err.statusCode || 500)
    .json({ error: { name: err.name, message: err.message } });
};

export { logError, returnError };
