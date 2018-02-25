const encodings = require('./encodings');

exports.encode = function(classificationCode) {
  return encodings[classificationCode];
};

