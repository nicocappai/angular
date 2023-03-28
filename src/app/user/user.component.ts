import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { UserService } from '../services/user.service';
import { User } from './../classes/user';

@Component({
  selector: 'tr[app-user]',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})

export class UserComponent implements OnInit {

  @Input('user-data') user: User| undefined;  
  @Output('onDeleteUser') onDeletedUser = new EventEmitter();
  @Output('onSelectUser') onSelectUser =  new EventEmitter();

  constructor(private UserService: UserService){
  }

  ngOnInit(){

  }

  deleteUser() {
    this.onDeletedUser.emit(this.user);
  }

  updateUser(){
    this.onSelectUser.emit(this.user);
  }
}
