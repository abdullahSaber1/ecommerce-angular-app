import { Component, OnInit } from '@angular/core';
import { Ilogin } from '../../models/ilogin';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';
import { Iuser } from 'src/app/models/iuser';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  user:Ilogin={email:'', password:''}
  isNotValid:boolean = false;
  userRegisted?:Iuser={username:'',email:'',password:''};
  constructor(private router:Router,private userService:UserService) { }

  ngOnInit(): void {
  }


  login(user:any){
    this.userService.getUsers().subscribe(data=>{
      this.userRegisted=data.find(user=>user.email===this.user.email);
      console.log(this.userRegisted);
    })

    if(this.userRegisted){
      if(this.userRegisted.password===this.user.password){
        this.router.navigate(['/']);
      }else{
        this.isNotValid=true;
      }
    }

  }
}

  // login(myLoginForm:any){
  //  this.userService.login(myLoginForm)

  //  console.log(this.userService.login(myLoginForm));


  //   // console.log(myLoginForm.value);
  //   // if(myLoginForm.value.email === "abdallhsaber9@gmail.com" && myLoginForm.value.password ==="@Passw0rd"){

  //   //   this.router.navigate(['/']);
  //   // }
  //   // else{
  //   //   this.isNotValid=true;

  //   // }

  // }

