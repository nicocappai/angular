import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent {
  @Output() onNewUser = new EventEmitter();

  newUser(){
    this.onNewUser.emit();
  }
}
