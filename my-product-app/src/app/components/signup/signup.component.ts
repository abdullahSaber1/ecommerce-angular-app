import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  registerForm=new FormGroup({
    username:new FormControl(''),
    email:new FormControl(''),
    password:new FormControl(''),
    confirmPassword:new FormControl(''),

  })

  isNotValid?:boolean;

  constructor(private authService:UserService,private router:Router) { }

  ngOnInit(): void {
  }

  get username(){
    return this.registerForm.get('username');
  }

  get password(){
    return this.registerForm.get('password');
  }

  get confirmPassword(){
    return this.registerForm.get('confirmPassword');
  }

  get email(){
    return this.registerForm.get('email');
  }

  register(user:any){

    const {email,password,username,confirmPassword} = user;

    this.authService.getUsers().subscribe(data=>{
      this.isNotValid=data.includes(user)
      console.log(this.isNotValid);
    })

    if(this.isNotValid){
      this.authService.register({email,password,username});
      this.router.navigate(['/']);
    }

  }
}


