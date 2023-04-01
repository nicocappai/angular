import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from './../services/user.service';
import { User } from '../classes/User';

@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.css']
})
export class UserDetailComponent implements OnInit {
  private userCopy: User;
  private __user: User;
  
  @Input() set user(user: User){
    this.__user = user;
    this.userCopy = Object.assign({}, user);
  }
  get user(){
    return this.__user;
  }
  
  constructor( private userService: UserService, private route: ActivatedRoute, private router: Router) {
    this.user = new User();
    this.__user = new User();
    this.userCopy = new User();
  }

  ngOnInit(): void {
     this.route.params.subscribe(param => {
      const id = Number(param['id']);
      const user = this.userService.getUser(id);
      if (user){
        this.user = user;
      }
     })
  }

  saveUser(){
    if(this.user.id > 0){
      this.userService.updateUser(this.user);
    } else {
      this.userService.createUser(this.user);
    }
  }
  resetForm(form: { reset: () => void; }){
    if(this.user.id === 0){
      this.user = new User;
    } else {
      this.user = this.userCopy;
    }
  }
}
