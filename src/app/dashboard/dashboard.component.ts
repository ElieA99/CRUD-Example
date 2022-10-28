import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ApiService } from '../shared/api.service';
import { user } from '../shared/user.model';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  formValue!: FormGroup;
  userOb: user = new user();
  List: any

  constructor(private formBuilder: FormBuilder, private api: ApiService, private apiCaller: HttpClient) { }

  ngOnInit(): void {
    this.formValue = this.formBuilder.group({
      Fname: [''],
      Lname: [''],
      Email: [''],
      ID: ['']
    })
    this.getdata();
  }

  getdata() {
    this.apiCaller.get('http://localhost:3000/data')
      .subscribe((json: any) => {
        this.List = json;
      });
  }

  deletedata(ID: any) {
    this.api.deletedata(ID)
      .subscribe((res: any) => {
        alert("Deleted Successfully !!")
        this.getdata();
        window.location.reload();
      })
  }

  updateUser() {
    this.apiCaller.put('http://localhost:3000/put', {
      ID: this.formValue.controls['ID'].getRawValue(),
      Fname: this.formValue.controls['Fname'].getRawValue(),
      Lname: this.formValue.controls['Lname'].getRawValue(),
      Email: this.formValue.controls['Email'].getRawValue(),
    })
      .subscribe();
    alert("Updated Successfully")
    window.location.reload();
  }

  onEdit(row: any) {
    this.formValue.controls['ID'].setValue(row.ID);
    this.formValue.controls['Fname'].setValue(row.Fname);
    this.formValue.controls['Lname'].setValue(row.Lname);
    this.formValue.controls['Email'].setValue(row.Email);
  }

}
