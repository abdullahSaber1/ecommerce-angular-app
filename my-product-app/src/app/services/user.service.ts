import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Iuser } from '../models/iuser';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private url: string = "http://localhost:3005/credentials";
  private isFounded?: boolean;

  constructor(private http: HttpClient) { }

  getUsers() {
    return this.http.get<Iuser[]>(this.url);
  }

  register(user:Iuser){
    return this.http.post(this.url,user).subscribe();
  }

  login(user:Iuser){
    this.getUsers().subscribe(data=>{
      this.isFounded=data.includes(user)
      console.log(this.isFounded);
    })

    return this.isFounded;
  }
}
