function ResponseModel(success, message, requestBody, error) {
  return {
    success, message, error, requestBody,
  };
}

module.exports = { ResponseModel };
