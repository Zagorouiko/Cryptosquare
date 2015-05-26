var encrypt = function(message) {
  message = message.replace(/\s+/g, "");
  message = message.replace(/[\.,-\/#!$%\^&\*;:{}=\-_`~()]/g, "");
  message = message.toLowerCase()
  return message;
}
