function ErrorModel(code, message, name, stack) {
  return {
    code, message, name, stack,
  };
}

module.exports = { ErrorModel };
