import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';


@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent{


  display:boolean = false;
  emailValue: string = '';
  UserList: any[] = [];

   loginForm = new FormGroup({
    name: new FormControl(''),
    email: new FormControl(this.emailValue),
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

   onDataChange(eventData: any){
    // console.log((<HTMLInputElement>eventData.target).value);
    this.emailValue = (<HTMLInputElement>eventData.target).value;
   }

   onCheckboxChange(event: any){
    if(event.target.checked){

      this.display = true;
    }
    else{
      this.display = false;
    }
   }
   
   

}
