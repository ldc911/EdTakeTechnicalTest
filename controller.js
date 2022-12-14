const express = require("express");
const { findByQuery } = require("./model");

const sayHello = (req, res) => {
  res.send(
    "Hello EdTake ! Hope to successfully pass this test. At least I had fun !"
  );
};

const request = (req, res) => {
  //preparing arrays to pass to the second API
  const label = [];
  const values = [];

  //catching bad request
  if (req.query.startDate > req.query.endDate) {
    message = "Start date must be before end date";
    res.status(400).send(message);
  } else if (req.query.endDate - req.query.startDate > 30) {
    const message =
      "There must be less than 30 days between start date and end date";
    res.status(400).send(message);
  }
  //if dates are correctly specified, query to the API (through findByQuery) and treating the response to get appropriate format for the second API
  else {
    findByQuery(req.query)
      .then((result) => {
        result = result.data;
        result.data.forEach((element) => {
          label.push(
            `"${element.from.split("T")[0]}, ${element.from
              .split("T")[1]
              .slice(0, -1)}"`
          );
        });
        result.data.forEach((element) => {
          values.push(element.intensity.average);
        });
        result.url = `https://quickchart.io/chart?c={type:'line',data:{labels:[${label}],datasets:[{label:'Co² Emission',data:[${values}]}]}}`;
        res.send(result);
      })

      .catch((err) => res.status(500).send(err.message));
  }
};

module.exports = { sayHello, request };
