'use strict';

module.exports.main = async event => {
  console.log(event);
  
  return {
    statusCode: 200,
    body: JSON.stringify(
      {
        team_id: '1',
        team_name: 'チーム1',
        title: 'タイトル（チーム1）',
        keyword: 'キーワード',
        movie_url: 'movie_url',
        thumbnail_url: 'thumbnail_url',
        members: 'メンバー一覧',
        views: 0,
        votes: 0
      }
    ),
  };

  // Use this code if you don't use the http event with the LAMBDA-PROXY integration
  // return { message: 'Go Serverless v1.0! Your function executed successfully!', event };
};
