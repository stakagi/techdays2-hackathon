'use strict';

module.exports.main = async event => {
  return {
    statusCode: 200,
    body: JSON.stringify(
      {
        good_status: 1,
        view_status: 1,
      },
    ),
  };
};
