var users = [];

function onLogin(form) {
  var newUser = toJSON(form)//calling this method here to get the json data of the new user who logged in
  users.push(newUser); //here we ad d and store each new user to a javascript array

  return users;
}
// this method converts our form data to json format(a format that is supported by most languages and easy to interact with)
function toJSON(form) {
    let formData = new FormData(form);
    let object = {};
    formData.forEach(function (value, key) {
        object[key] = value;
    });
    return object;
}