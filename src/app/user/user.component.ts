import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { UserService } from '../services/user.service';
import { User } from '../classes/User';
import { faPencilAlt, faTrash } from '@fortawesome/free-solid-svg-icons';
import { Router } from '@angular/router';


@Component({
  selector: 'tr[app-user]',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})

export class UserComponent implements OnInit {

  @Input('user-data') user: User| undefined;  
  @Output('onDeleteUser') onDeletedUser = new EventEmitter();
  @Output('onSelectUser') onSelectUser =  new EventEmitter();

  faPen = faPencilAlt;
  faTrash = faTrash;
  constructor(private UserService: UserService, private route: Router){
  }

  ngOnInit(){

  }

  deleteUser() {
    this.onDeletedUser.emit(this.user);
  }

  updateUser(){
    this.route.navigateByUrl('/users' + this.user?.id + '/edit')
    this.onSelectUser.emit(this.user);
  }
}
