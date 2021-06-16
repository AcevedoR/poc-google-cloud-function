exports.helloHttp = (req, res) => {
  let message = req.query.message || req.body.message || 'Hello World http !!';
  res.status(200).send(message);
};
