import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { PatientService } from 'src/app/patients/patient.service';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-patients-data',
  templateUrl: './patients-data.component.html',
  styleUrls: ['./patients-data.component.css']
})
export class PatientsDataComponent implements OnInit {

  constructor(private router:Router,
    private authService:AuthService,
    private patientService:PatientService
    ) { }

    isLoading = false

  ngOnInit(): void {

    this.authService.isLoading.subscribe(isLoad=>{
      this.isLoading = isLoad
    })

    this.patientService.patients$.subscribe((patientData)=>{
      if(patientData.length > 0){
        this.router.navigate(['/patients'])
      }
    })
  }

  patientData!: Patient;
  custodianData!:custodian;
  isPatient = true

  goToNext(form:NgForm){
    this.patientData = form.value
    this.isPatient = false
  }

  onSubmit(form:NgForm){
    this.custodianData = form.value
    let userId = this.authService.getUserId().subscribe(userId=>{

      this.patientService.addPatientsDataToDatabase(
        userId,
        this.patientData, this.custodianData)
    })

  }

}
