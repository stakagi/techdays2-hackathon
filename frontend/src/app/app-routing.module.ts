import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginPageComponent } from './login-page/login-page.component';
import { ListPageComponent } from './list-page/list-page.component';
import { ViewerPageComponent } from './viewer-page/viewer-page.component';

const routes: Routes = [
  { path: 'login', component: LoginPageComponent },
  { path: 'list', component: ListPageComponent },
  { path: 'viewer/:teamId', component: ViewerPageComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
