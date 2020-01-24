'use strict';

const AWS = require("aws-sdk");
const DynamoDB = new AWS.DynamoDB.DocumentClient({
    region: 'us-east-1'
});

module.exports.main = async event => {
  try{
    console.log(event);
    
    //DynamoDBを捜索する
    var queryDynamoDB = await DynamoDB.scan({ TableName: 'Teams' }).promise();
    
    return {
      statusCode: 200,
      body: JSON.stringify(queryDynamoDB.Items)
    };
  }catch(err){
    console.log(err);
  }
  
  // return {
  //   statusCode: 200,
  //   body: JSON.stringify(
  //     [
  //       {
  //         team_id: '1',
  //         team_name: 'チーム1',
  //         title: 'タイトル（チーム1）',
  //         keyword: 'キーワード',
  //         movie_url: 'movie_url',
  //         thumbnail_url: 'thumbnail_url',
  //         members: 'メンバー一覧',
  //         views: 0,
  //         votes: 0
  //       },
  //       {
  //         team_id: '2',
  //         team_name: 'チーム2',
  //         title: 'タイトル（チーム2）',
  //         keyword: 'キーワード',
  //         movie_url: 'movie_url',
  //         thumbnail_url: 'thumbnail_url',
  //         members: 'メンバー一覧',
  //         views: 0,
  //         votes: 0
  //       },
  //       {
  //         team_id: '3',
  //         team_name: 'チーム3',
  //         title: 'タイトル（チーム3）',
  //         keyword: 'キーワード',
  //         movie_url: 'movie_url',
  //         thumbnail_url: 'thumbnail_url',
  //         members: 'メンバー一覧',
  //         views: 0,
  //         votes: 0
  //       }
  //     ]
  //   ),
  // };
};
