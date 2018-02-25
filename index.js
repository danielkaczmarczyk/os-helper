const data = require('./encodings');

exports.decode = function(classificationCode) {
  return data[classificationCode];
};

