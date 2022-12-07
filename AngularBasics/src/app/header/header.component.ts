import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {

  showSpinner = false;

  onClick(){
    this.showSpinner = true;
    setTimeout(() => {
      this.showSpinner = false;
      
    }, 3000);
  }
  
}
