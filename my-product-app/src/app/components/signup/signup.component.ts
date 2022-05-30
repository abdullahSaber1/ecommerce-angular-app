import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';
import { InputValidator } from '../add-product/Custom-Validator/cannotContain-space.validators';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  registerForm=new FormGroup({
    username:new FormControl('',[Validators.required]),
    email:new FormControl('',[Validators.required,Validators.email,InputValidator.cannotContainSpace]),
    password:new FormControl('',[Validators.required,Validators.minLength(8),
      Validators.pattern("(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}")]),
    confirmPassword:new FormControl('',[Validators.required]),

  })

  isNotValid?:boolean;
  notMatched?:boolean;

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

    if(password!== confirmPassword){
      this.notMatched=true;
    }else{
      if(!this.isNotValid){
        this.authService.register({email,password,username});
        this.router.navigate(['/']);
      }

    }



  }
}


