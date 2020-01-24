import { Component, OnInit, OnDestroy } from '@angular/core';
import { ApiDataService } from '../core/api-data.service';
import { Subscription } from 'rxjs';
import { TeamData } from '../core/models/team';
import { Router } from '@angular/router';

@Component({
  selector: 'app-list-page',
  templateUrl: './list-page.component.html',
  styleUrls: ['./list-page.component.scss']
})
export class ListPageComponent implements OnInit, OnDestroy {
  teams: TeamData[] = [];

  private subscription: Subscription;

  constructor(private api: ApiDataService, private router: Router) {}

  ngOnInit() {
    this.api.loadTeams();
    this.subscription = this.api.teams$.subscribe({
      next: teams => {
        this.teams = teams;
      }
    });
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  select(id: string) {
    this.router.navigate([`/viewer/${id}`]);
  }
}
