import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
userForm: FormGroup;
  constructor(private auth: AuthService, private fb: FormBuilder) {
    this.userForm = this.fb.group({
     "username": [''],
     "password": [''] 
    })
   }

  ngOnInit(): void {
    
  }
  addUser(){
    // console.log(this.userForm.value)
    this.auth.createUser(this.userForm.value).subscribe((data: {})=>{
      console.log(data);
    })
  }

}
