import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { AngularFireStorage } from '@angular/fire/storage';
import { Router } from '@angular/router';
import { BehaviorSubject, Observable, of, Subject, Subscription } from 'rxjs';
import { AuthService } from '../auth/auth.service';
import './patient';

@Injectable({
  providedIn: 'root',
})
export class PatientService {
  constructor(
    private firestore: AngularFirestore,
    private router: Router
  ) {}

  downloadURL = new BehaviorSubject<Observable<string>>(of());
  patients: { uid: string; patient: Patient; custodian: custodian }[] = [];
  patients$ = new BehaviorSubject<
    { uid: string; patient: Patient; custodian: custodian }[]
  >([]);
  patientSubscription: Subscription[] = [];


  fetchData(userId: string) {
    this.patientSubscription.push(
      this.firestore
        .collection<{ uid: string; patient: Patient; custodian: custodian }>(
          'patients',
          (ref) => ref.where('uid', '==', userId)
        )
        .valueChanges()
        .subscribe((result) => {
          this.patients = result;
          this.patients$.next(this.patients);
        })
    );
  }

  addPatientsDataToDatabase(
    userId: string,
    patient: Patient,
    custodian: custodian
  ) {
    const neededDataAboutPatient = {
      uid: userId,
      patient,
      custodian,
    };
    this.firestore
      .collection('patients')
      .add(neededDataAboutPatient)
      .then(() => {
        this.router.navigate(['/patients']);
      });
  }

  clearSubscription() {
    if (this.patientSubscription) {
      this.patientSubscription.forEach((sub) => {
        sub.unsubscribe();
      });
    }
  }
}
