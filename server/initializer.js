var React = require('react');
var App = require('../src/scripts/components/app');

var html = "<!doctype html>" +
            "<html lang='en'>" +
              "<head>" +
                "<title>Flux</title>" +
              "</head>" +
              "<body>" +
                "<main id='app'>" +
                  React.renderToString(<App temp={'Server side!'}/>) +
                "</main>" +
                "<script src='scripts/main.js'></script>" +
              "</body>" +
            "</html>"

module.exports = html;
