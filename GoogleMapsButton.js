// Add a script adding a new div with a violet button inside in it (linking do Google maps) to the map element

// Get the map element
var mapElement = document.getElementsByClassName('map-content')[0];

// Create a new div element
var newDiv = document.createElement('div');

// Set the new div element's class to "map-button"
newDiv.className = 'map-content-button';

// Set the new div element's innerHTML to the HTML of the button
newDiv.innerHTML =
  '<a class="lia-button lia-button-fifth" href="https://www.google.com/maps/place/Dynatrace+Polska/@54.3992731,18.5738151,17z/data=!3m1!4b1!4m6!3m5!1s0x46fd7528f4d428df:0x6af9edc74b6f5fa2!8m2!3d54.39927!4d18.57639!16s%2Fg%2F11b620zfdn" target="_blank">View on Google Maps</a>';

// Add the new div element to the map element
mapElement.appendChild(newDiv);
