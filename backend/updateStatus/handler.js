'use strict';

module.exports.main = async event => {
  return {
    statusCode: 200,
    body: JSON.stringify(
      {
        message: "OK",
      },
    ),
  };
};
