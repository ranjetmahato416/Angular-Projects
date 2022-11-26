import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';


@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent{


  display:boolean = false;
  UserList: any[] = [];

   loginForm = new FormGroup({
    name: new FormControl(''),
    email: new FormControl(''),
    mobile: new FormControl(''),
    address: new FormControl(''),
    state: new FormControl(''),
    zone: new FormControl(''),
    postal: new FormControl('')
   });

   getValues(){
    // debugger;
    this.UserList.push(this.loginForm.value);

    console.log(this.loginForm.value);
   };

   onCheckboxChange(event: any){
    if(event.target.checked){

      this.display = true;
    }
    else{
      this.display = false;
    }
   }
   
   

}
