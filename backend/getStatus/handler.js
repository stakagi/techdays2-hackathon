//チームIDとユーザーIDをもらってDB内のTeamIDとstatusKeyを照合してvalueを持ってくる
//good と viewそれぞれで実効
'use strict';

const AWS = require("aws-sdk");
const DynamoDB = new AWS.DynamoDB.DocumentClient({
    region: 'us-east-1'
});

module.exports.main = async event => {
  try{
    console.log(event);
    //DynamoDBを捜索する
    
    console.log(" event.pathParameters.teamId: "+ event.pathParameters.teamId)
    console.log(" event.pathParameters.userId: "+ event.pathParameters.userId)
    // var queryDynamoDB = await DynamoDB.scan({ TableName: 'UserStatus' }).promise();
    // var queryDynamoDB = await DynamoDB.query(
    //   {
    //     TableName: 'UserStatus' ,
    //     KeyConditionExpression: "team_id = :val001 and begins_with(status_key, :val002)",
    //     ExpressionAttributeValues:{
    //       ':val001': event.pathParameters.teamId,
    //       ':val002': event.pathParameters.userId,
    //     }
    //   }
    // ).promise();
      var queryDynamoDBGood = await DynamoDB.query(
      {
        TableName: 'UserStatus' ,
        KeyConditionExpression: "team_id = :val001 and status_key = :val002",
        ExpressionAttributeValues:{
          ':val001': event.pathParameters.teamId,
          ':val002': event.pathParameters.userId+"_good",
        }
      }
    ).promise();
    
    var queryDynamoDBView = await DynamoDB.query(
      {
        TableName: 'UserStatus' ,
        KeyConditionExpression: "team_id = :val001 and status_key = :val002",
        ExpressionAttributeValues:{
          ':val001': event.pathParameters.teamId,
          ':val002': event.pathParameters.userId+"_view",
        }
      }
    ).promise();
    
    console.log("good: "+queryDynamoDBGood.Items.count +" view: "+queryDynamoDBView.Items.count)
    
    var good = 0 
    var view = 0 
    if(queryDynamoDBGood.Items.value){
      good = 1
    }
    if(queryDynamoDBView.Items.value){
      view = 1
    }
    var body = {
      good_status: good,
      view_status: view,
    }
    
    return {
      statusCode: 200,
      body: JSON.stringify(body)
    };
  }catch(err){
    console.log(err);
  }
};