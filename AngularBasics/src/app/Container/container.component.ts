import { Component } from "@angular/core";

@Component({
    selector: 'app-container',
    templateUrl: 'container.component.html',
    styleUrls: ['./container.component.css']
})

export class ContainerComponent{
    

    showSpinner = false;

  onClick(){
    this.showSpinner = true;
    setTimeout(() => {
      this.showSpinner = false;
      
    }, 3000);
  }
    

}