import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private authService:AuthService,
    private router:Router
    ) { }

  isLoading = false
  ngOnInit(): void {
    this.authService.isLoading.subscribe((isLoad)=>{
      this.isLoading = isLoad
    })
  }


  onSubmit(form:NgForm){

    const email = form.value.email
    const password = form.value.password
    this.authService.userLogin(email, password)

  }

  changeLoginStatus(){
    this.router.navigate(['/signup'])

  }


}
