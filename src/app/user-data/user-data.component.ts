import { Component } from '@angular/core';
import { UserService } from '../services/user.service';
import { ActivatedRoute } from '@angular/router';
import { UserInterface } from '../interfaces/user';


@Component({
  selector: 'app-user-data',
  templateUrl: './user-data.component.html',
  styleUrls: ['./user-data.component.css']
})
export class UserDataComponent {

  public user : UserInterface | undefined;

  constructor(private UserService: UserService, private route: ActivatedRoute){
  }

  ngOnInit(): void {
    this.route.params.subscribe(param => {
     const id = Number(param['id']);
     this.UserService.getUser(id).subscribe(user => this.user = user);
    })
 }
}
