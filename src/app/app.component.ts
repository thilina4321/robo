import { Component, OnInit } from '@angular/core';
import { AuthService } from './auth/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{

  constructor(private authService:AuthService){}
  isAuth = false

  ngOnInit(){

    this.authService.isUser.subscribe((isUser)=>{
      this.isAuth = isUser
    })
    this.authService.authStatus()
  }

  onLogout(){
    this.authService.logout()
  }

}
