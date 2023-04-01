import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { UserService } from '../services/user.service';
import { User } from '../classes/User';

@Component({
    selector : 'app-users',
    
    templateUrl : 'users.component.html',
    styleUrls : ['users.component.css']
})

export class UsersComponents implements OnInit {

    title = 'Users'
    users: User[] = [];
    @Output() updateUser = new EventEmitter<User>();
    
    constructor(private service: UserService){
        
    }

    ngOnInit() {
        this.users = this.service.getUsers();
    }

    onDeleteUser(user : User) {
        this.service.deleteUser(user);
    }

    onSelectUser(user: User){
        const userCopy = Object.assign({}, user);
        this.updateUser.emit(userCopy);
    }
}