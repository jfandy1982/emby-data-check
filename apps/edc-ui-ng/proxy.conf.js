module.exports = {
  '/edc-api': {
    secure: false,
    target: `http://localhost:${process.env.API_PORT || 3000}`,
  },
};
