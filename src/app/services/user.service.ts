import { Injectable } from "@angular/core"
import { User } from '../classes/user';
import { UserInterface } from './../interfaces/user';

@Injectable({
    providedIn: 'root'
}   
)
export class UserService {
    users: User[] = [
        {
            id: 1,
            name: 'Nico1',
            lastname: 'Cappai',
            email: 'nico@esempio.it',
            fiscalcode: 'CPPNCI56H09F809G',
            province: 'Cagliari',
            phone: '859849585',
            age: 27
        },
        {
            id: 2,
            name: 'Nico2',
            lastname: 'Cappai',
            email: 'nico@esempio.it',
            fiscalcode: 'CPPNCI56H09F809G',
            province: 'Cagliari',
            phone: '859849585',
            age: 27
        },
        {
            id: 3,
            name: 'Nico3',
            lastname: 'Cappai',
            email: 'nico@esempio.it',
            fiscalcode: 'CPPNCI56H09F809G',
            province: 'Cagliari',
            phone: '859849585',
            age: 27
        },
        {
            id: 4,
            name: 'Nico4',
            lastname: 'Cappai',
            email: 'nico@esempio.it',
            fiscalcode: 'CPPNCI56H09F809G',
            province: 'Cagliari',
            phone: '859849585',
            age: 27
        }
    ];

getUsers() {
    return this.users;
 }

deleteUser(user: User){
 const index = this.users.indexOf(user);
 if (index > -1){
    this.users.splice(index , 1);
 }
 }

updateUser(user: UserInterface){

    const idx = this.users.findIndex((v) => v.id == user.id);
    alert(idx);
    if (idx !== -1) {
        this.users[idx] = {...user};
    }
}

createUser(user: UserInterface){
    this.users.splice(0, 0, {...user});
}
}