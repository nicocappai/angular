import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { UserService } from '../services/user.service';
import { User } from '../classes/User';
import { Observable } from 'rxjs';

@Component({
    selector : 'app-users',
    
    templateUrl : 'users.component.html',
    styleUrls : ['users.component.css']
})

export class UsersComponents implements OnInit {

    title = 'Users'
    public users$: Observable<User[]> = this.service.getUsers();
    public users: User[] = [];

    @Output('update-user') updateUser = new EventEmitter<User>();
    
    constructor(private service: UserService){
        
    }

    ngOnInit() {
        this.service.getUsers()
        .subscribe(response => this.users = response);
    }

    onDeleteUser(user : User) {
        this.service.deleteUser(user).subscribe(res => {
            this.service.getUsers().subscribe(response => this.users = response);
        });
    }

    onSelectUser(user: User){
        const userCopy = Object.assign({}, user);
        this.updateUser.emit(userCopy);
    }
}