import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthService } from './auth.service';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})
export class AuthComponent implements OnInit {

  constructor(private authService:AuthService) { }

  isLoading = false
  ngOnInit(): void {
    this.authService.isLoading.subscribe((isLoad)=>{
      this.isLoading = isLoad
    })
  }

  isSingup = false

  onSubmit(form:NgForm){
    const email = form.value.email
    const password = form.value.password
    if(this.isSingup){

      this.authService.createUser(email, password)
    }else{
      this.authService.userLogin(email, password)
    }

  }

  changeLoginStatus(){
    this.isSingup = !this.isSingup
  }

}
