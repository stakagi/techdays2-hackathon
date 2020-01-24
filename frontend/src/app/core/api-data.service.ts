import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { TeamData } from './models/team';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiDataService {
  readonly teams$ = new BehaviorSubject<TeamData[]>([]);

  private readonly baseUrl =
    'https://tyyjgg9wtj.execute-api.us-east-1.amazonaws.com/dev';

  constructor(private http: HttpClient) {}

  loadTeams() {
    this.http.get(`${this.baseUrl}/teams`).subscribe({
      next: response => {
        console.log(response);
        // const teams: TeamData[] = response.map();
      }
    });
    const teams: TeamData[] = [
      {
        teamName: 'チーム2',
        thumbnailUrl: 'thumbnail_url',
        members: 'メンバー一覧',
        movieUrl: 'movie_url',
        views: 0,
        teamId: '2',
        keyword: 'キーワード',
        votes: 0,
        title: 'タイトル（チーム2）'
      },
      {
        teamName: 'チーム1',
        thumbnailUrl:
          'https://techdays2-hackathon.s3.amazonaws.com/img_20200124_162832.jpg',
        members: 'メンバー一覧',
        movieUrl:
          'https://techdays2-hackathon.s3.amazonaws.com/img_20200124_162832.jpg',
        views: 0,
        teamId: '1',
        keyword: 'キーワード',
        votes: 0,
        title: 'タイトル（チーム1）'
      },
      {
        teamName: 'チーム3',
        thumbnailUrl: 'thumbnail_url',
        members: 'メンバー一覧',
        movieUrl: 'movie_url',
        views: 0,
        teamId: '3',
        keyword: 'キーワード',
        votes: 0,
        title: 'タイトル（チーム3）'
      }
    ];
    setTimeout(() => {
      this.teams$.next(teams);
    }, 1000);
  }
}
