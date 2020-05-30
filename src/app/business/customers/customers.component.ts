import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
// import { FileValidator } from 'ngx-material-file-input';

@Component({
  selector: 'app-customers',
  templateUrl: './customers.component.html',
  styleUrls: ['./customers.component.scss']
})
export class CustomersComponent implements OnInit {
  basicFormGroup: FormGroup;
  identityFormGroup: FormGroup;
  residencyFormGroup: FormGroup;
  drivingFormGroup: FormGroup;
  uploadFormGroup: FormGroup;
  minDate: Date;
  maxDate: Date;
  private basicFormData: any;
  private residencyFormData: any;
  private identifyFormData: any;
  private drivingFormData: any;
  private uploadFormData: any;
  isEditable = false;

  constructor(private fb: FormBuilder) {
    const { date, month, year } = this.dates();
    this.maxDate = new Date(year, month, date);
  }

  dates() {
    const today = new Date();
    return {
      date: today.getDate(),
      month: today.getMonth(),
      year: today.getFullYear()
    }
  }

  ngOnInit() {
    this.basicFormGroup = this.fb.group({
      name: ['', Validators.required],
      dob: ['', Validators.required],
      address: ['', Validators.required],
      mobile: ['', Validators.required]
    });
    this.identityFormGroup = this.fb.group({
      aadar: ['', Validators.required],
      passport: ['', Validators.required],
      pan: ['', Validators.required],
      election: ['', Validators.required],
    });
    this.residencyFormGroup = this.fb.group({
      electricity: [''],
      ration: [''], // Food Security Card No
      other: [''],
      leave: ['']
    });

    this.drivingFormGroup = this.fb.group({
      driving: [''],
      drivingType: [''],
      nonTransportLicenceUpto: [''],
      transportLicenceUpto: [''],
    });

    this.uploadFormGroup = this.fb.group({
      aadarFile: ['', [Validators.required]],
      panFile: ['', [Validators.required]],
      passportFile: [''],
      electionFile: [''],
      rationFile: [''],
      drivingFile: ['', [Validators.required]]
    });
  }

  next(step) {
    switch (step) {
      case 'basic':
        this.basicFormData = this.basicFormGroup.value;
        break;
      case 'identity':
        this.identifyFormData = this.identityFormGroup.value;
        break;
      case 'residency':
        this.residencyFormData = this.residencyFormGroup.value;
        break;
      case 'driving':
        this.drivingFormData = this.drivingFormGroup.value;
        break;
    }
  }

  complete() {
    console.log('-----------:: ', this.basicFormData, this.identifyFormData, this.residencyFormData, this.drivingFormData);
  }
}
