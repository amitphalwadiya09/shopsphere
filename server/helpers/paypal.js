const paypal = require("paypal-rest-sdk");

paypal.configure({
  mode: "sandbox",
  client_id:
    "AQ4MvNvtM2eydAS5dQK8r_h7gJOpCialXwHnZcX3OSCVctxoePHxaYNQHhyc9uwVmUyZQVTui68GGcuF",
  client_secret:
    "EAT3ZmNkyl37pYq4eWDUkglj3JTErkagbIKXP4UN1T5YYO2O8LHYMQKdPOiwmGaz0x6TNVoZrIkXe_Yo",
});

module.exports = paypal;
