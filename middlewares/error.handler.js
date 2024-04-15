function logErrors(err, req, res, next) {
  console.log('logErrors');
  console.error(err);
  next(err);
}

function errorHandles(err, req, res, next) {
  console.log('errorHandles');
  res.status(500).json({
    message: err.message,
    stack: err.stack,
  });
}

module.exports = { logErrors, errorHandles };
