function validate(event) {
  // TODO - write custom validation logic to validate the longitude and latitude
  // values. The latitude value must be a number between -90 and 90; the
  // longitude value must be a number between -180 and 180. If either/both are
  // invalid, show the appropriate error message in the form, and stop the 
  // form from being submitted. If both values are valid, allow the form to be
  // submitted.
  console.log('TODO - validate the longitude, latitude values before submitting');
  

  let val = document.querySelector(".observation_form");

  let lat = parseFloat(val.obsv_latitude.value);
  let latLabel = val.querySelector("#obsv_label_latitude>span");

  let long = parseFloat(val.obsv_longitude.value);
  let longLabel = val.querySelector("#obsv_label_longitude>span");

  let resultVal = true;

  if (lat < -90 || lat > 90 || isNaN(lat)) {
    latLabel.innerText = "* must be a valid Latitude (-90 to 90)";
    resultVal = false;
  } else latLabel.innerText = "*";

  if ((long < -180 || long > 180 || isNaN(long)) && resultVal !== false) {
    longLabel.innerText = "* must be a valid Longitude (-180 to 180)";
    resultVal = false;
  } else longLabel.innerText = "*";

  return resultVal;
}

// Wait for the window to load, then set up the submit event handler for the form.
window.onload = function() {
  const form = document.querySelector('form');
  form.onsubmit = validate;
};
