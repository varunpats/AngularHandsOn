import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserChildComponent } from './user/user-child/user-child.component';
import { UserComponent } from './user/user.component';

const routes: Routes = [
  {
    path: 'player', component: UserComponent,
    children: [
      { path: ':id', component: UserChildComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
