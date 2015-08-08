/**
 * Welcome to Pebble.js!
 *
 * This is where you write your app.
 */

var UI = require('ui');
// var Vector2 = require('vector2');
var ajax = require('ajax');

// Download data
var conditionURL = 'http://api.wunderground.com/api/544c922a1759523c/conditions/q/CA/San_Francisco.json';
// var forecastURL = 'http://api.wunderground.com/api/544c922a1759523c/forecast/q/CA/San_Francisco.json';
var main = new UI.Card({
  title: 'PUnd',
  icon: 'images/menu_icon.png',
  subtitle: 'Location Loading',
  body: 'Temp Loading'
});
main.show();

ajax({url: conditionURL, type: 'json'},
  function(response) {
    var currentObservation = response.current_observation;
    main.subtitle(currentObservation.display_location.full)
    main.body(currentObservation.temp_f);

  },
  function(error) {
    console.log('Ajax failed: ' + error);
  }
);

// ajax({url: forecastURL, type: 'json'},
//   function(response) {
//   console.log(JSON.stringify(response));
//   var firstDayForecast = response.forecast.simpleforecast.forecastday[1];
//   var secondDayForecast = response.forecast.simpleforecast.forecastday[2];
//   var thirdDayForecast = response.forecast.simpleforecast.forecastday[3];
//   var firstDay = firstDayForecast.date.weekday_short;
//   var secondDay = secondDayForecast.date.weekday_short;
//   var thirdDay = thirdDayForecast.date.weekday_short;
//   var firstDayHigh = firstDayForecast.high.fahrenheit;
//   var secondDayHigh = secondDayForecast.high.fahrenheit;
//   var thirdDayHigh = thirdDayForecast.high.fahrenheit;
//   var firstDayLow = firstDayForecast.low.fahrenheit;
//   var secondDayLow = secondDayForecast.low.fahrenheit;
//   var thirdDayLow = thirdDayForecast.low.fahrenheit;
//   var firstDayConditions = firstDayForecast.conditions;
//   var secondDayConditions = secondDayForecast.conditions;
//   var thirdDayConditions = thirdDayForecast.conditions;
//   },
//   function(error) {
//     console.log('Ajax failed: ' + error);
//   }
// );


// main.on('click', 'up', function(e) {
//   var menu = new UI.Menu({
//     sections: [{
//       items: [{
//         title: 'Pebble.js',
//         icon: 'images/menu_icon.png',
//         subtitle: 'Can do Menus'
//       }, {
//         title: 'Second Item',
//         subtitle: 'Subtitle Text'
//       }]
//     }]
//   });
//   menu.on('select', function(e) {
//     console.log('Selected item #' + e.itemIndex + ' of section #' + e.sectionIndex);
//     console.log('The item is titled "' + e.item.title + '"');
//   });
//   menu.show();
// });

// main.on('click', 'select', function(e) {
//   var wind = new UI.Window({
//     fullscreen: true,
//   });
//   var textfield = new UI.Text({
//     position: new Vector2(0, 65),
//     size: new Vector2(144, 30),
//     font: 'gothic-24-bold',
//     text: 'Text Anywhere!',
//     textAlign: 'center'
//   });
//   wind.add(textfield);
//   wind.show();
// });

// main.on('click', 'down', function(e) {
//   var card = new UI.Card();
//   card.title('A Card');
//   card.subtitle('Is a Window');
//   card.body('The simplest window type in Pebble.js.');
//   card.show();
// });
