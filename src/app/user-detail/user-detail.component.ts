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
      if (param['id']){
      const id = Number(param['id']);
      this.userService.getUser(id).subscribe(user => this.user = user);
      }
     })
  }

  saveUser(){
    let obs;
    if(this.user.id > 0){
      obs = this.userService.updateUser(this.user);
    } else {
      obs = this.userService.createUser(this.user);
    }
    obs.subscribe(resp =>{
      console.log('response', resp);
      this.router.navigate(['users']);
    })
    
  }
  resetForm(form: { reset: () => void; }){
    if(this.user.id === 0){
      this.user = new User;
    } else {
      this.user = this.userCopy;
    }
  }
}
