const test = (req, res, next) => {
  res.json({ result: true });
};

module.exports = function (app) {
  app.use('/test', test);
};
