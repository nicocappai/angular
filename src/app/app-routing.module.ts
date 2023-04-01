import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserDetailComponent } from './user-detail/user-detail.component';
import { UserComponent } from './user/user.component';
import { UsersComponents } from './users/users.component';
import { FormsModule } from '@angular/forms';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { UserService } from './services/user.service';
import { CommonModule } from '@angular/common';

const routes: Routes = [
  {
    path: 'users',
    component: UsersComponents
  },
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'users'
  },
  {
    path: 'users/new',
    component: UserDetailComponent
  },
  {
    path: 'users/:id/edit',
    component: UserDetailComponent
  }
];

@NgModule({
  declarations: [
    UserComponent,
    UsersComponents,
    UserDetailComponent
  ],
  imports: [RouterModule.forRoot(routes),
    FormsModule,
    FontAwesomeModule,
    CommonModule
  ],
  providers: [UserService],
  
  exports: [RouterModule]
})
export class AppRoutingModule { }
