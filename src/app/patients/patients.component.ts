import { Component, OnChanges, OnInit } from '@angular/core';
import { PatientService } from './patient.service';
import './patient';
import { AuthService } from '../auth/auth.service';
import { Router } from '@angular/router';
import { AngularFireStorage } from '@angular/fire/storage';
import {finalize} from 'rxjs/operators'
import { Observable } from 'rxjs';
import { AngularFirestore } from '@angular/fire/firestore';

@Component({
  selector: 'app-patients',
  templateUrl: './patients.component.html',
  styleUrls: ['./patients.component.css'],
})
export class PatientsComponent implements OnInit {
  constructor(
    private patientService: PatientService,
    private authService: AuthService,
    private router: Router,
    private stotage:AngularFireStorage,
  ) {

  }

  filterText = '';
  downloadURL!:Observable<string>

  patients: {uid:string, patient: Patient; custodian: custodian }[] = [];

  ngOnInit(): void {

    this.authService.getUserId().subscribe((userId)=>{

      this.patientService.fetchData(userId)


      this.patientService.patients$.subscribe((patients$) => {

        if(patients$.length == 0){
          this.router.navigate(['/reg-patients'])
        }else{
          this.patients = patients$;

        }


      })
    })

  }

  profileUrl!: Observable<string | null>;



  onImagePick(event:Event){
    const file = (event.target as HTMLInputElement).files?.item(0)

    const filePath = 'pro-pic-' + this.patients[0].uid;
    const fileRef = this.stotage.ref(filePath)
    const task = this.stotage.upload(filePath,file)

    task.snapshotChanges().pipe(
      finalize(() => {this.downloadURL = fileRef.getDownloadURL()} )
   )
  .subscribe(()=>{
    this.router.navigate(['/reg-patients'])
  })
  }
}


