import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { BehaviorSubject, Subject } from 'rxjs';
import { PatientService } from '../patients/patient.service';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(
    private auth: AngularFireAuth,
    private router: Router,
    private snackbar: MatSnackBar,
    private patientService:PatientService,
  ) {}

  userId$ = new BehaviorSubject<string>('')

  getUserId(){
    return this.userId$

  }

  authStatus() {
    this.auth.authState.subscribe(
      (user) => {
        if (user) {
          this.userId$.next(user.uid)

          this.router.navigate(['/patients'])
        }else{
          this.router.navigate(['/'])
        }
      },
      (error) => {

        this.snackbar.open(error.message, 'ok', {
          duration: 3000,
        });
      }
    );
  }

  createUser(email: string, password: string) {
    this.auth.createUserWithEmailAndPassword(email, password).then(() => {
    },(error) => {

      this.snackbar.open(error.message, 'ok', {
        duration: 3000,
      });
    });
  }

  userLogin(email: string, password: string) {
    this.auth.signInWithEmailAndPassword(email, password).then(() => {

      this.router.navigate(['/patients']);
    },(error) => {

      this.snackbar.open(error.message, 'ok', {
        duration: 3000,
      });
    });
  }

  logout(){
    this.auth.signOut()
    this.userId$.next('')
    this.patientService.clearSubscription()

  }
}
