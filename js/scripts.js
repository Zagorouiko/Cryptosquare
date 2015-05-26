var normalizeMessage = function(message) {
  var message = message.replace(/\s+/g, "");
  message = message.replace(/[\.,-\/#!$%\^&\*;:{}=\-_`~()]/g, "");
  message = message.toLowerCase();
  return message;
}

var sqrtMessage = function(message) {
  var normalizedMsg = normalizeMessage(message);
  var messageLength = normalizedMsg.length
  var sqrtMessage = Math.sqrt(messageLength);
  sqrtMessage = Math.ceil(sqrtMessage)
  return sqrtMessage;
}
