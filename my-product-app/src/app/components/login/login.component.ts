import { Component, OnInit } from '@angular/core';
import { Ilogin } from '../../models/ilogin';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  user:Ilogin={email:'', password:''}
  isNotValid:boolean = false;
  constructor(private router:Router) { }

  ngOnInit(): void {
  }

  login(myLoginForm:any){
    console.log(myLoginForm.value);
    if(myLoginForm.value.email === "abdallhsaber9@gmail.com" && myLoginForm.value.password ==="@Passw0rd"){

      this.router.navigate(['/']);
    }
    else{
      this.isNotValid=true;

    }

  }

}
