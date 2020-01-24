'use strict';

module.exports.main = async event => {
  console.log(event);
  
  return {
    statusCode: 200,
    body: JSON.stringify(
      [
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
        },
        {
          team_id: '2',
          team_name: 'チーム2',
          title: 'タイトル（チーム2）',
          keyword: 'キーワード',
          movie_url: 'movie_url',
          thumbnail_url: 'thumbnail_url',
          members: 'メンバー一覧',
          views: 0,
          votes: 0
        },
        {
          team_id: '3',
          team_name: 'チーム3',
          title: 'タイトル（チーム3）',
          keyword: 'キーワード',
          movie_url: 'movie_url',
          thumbnail_url: 'thumbnail_url',
          members: 'メンバー一覧',
          views: 0,
          votes: 0
        }
      ]
    ),
  };
};
