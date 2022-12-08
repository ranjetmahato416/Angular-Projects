import { Component } from '@angular/core';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent {

  opened = false;

  onClick(){
    this.opened = true;
    setTimeout (() => {
      this.opened =false;
    }, 3000)
  }

}
