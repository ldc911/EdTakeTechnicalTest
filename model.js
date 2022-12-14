const axios = require("axios");

const findByQuery = (query) => {
  const { startDate, endDate, period } = query;

  return axios.get(
    `https://api.carbonintensity.org.uk/intensity/stats/${startDate}/${endDate}/${parseInt(
      period,
      10
    )}`
  );
};

module.exports = { findByQuery };
