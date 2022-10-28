import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ApiService } from '../shared/api.service';
import { user } from '../shared/user.model';
@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {

  formValue!: FormGroup;
  userob: user = new user();

  constructor(private formbuilder: FormBuilder, private api: ApiService) { }

  ngOnInit(): void {
    this.formValue = this.formbuilder.group({
      Fname: [''],
      Lname: [''],
      Email: [''],
    })
  }

  postdata() {
    this.userob.Fname = this.formValue.value.Fname;
    this.userob.Lname = this.formValue.value.Lname;
    this.userob.Email = this.formValue.value.Email;

    this.api.postdata(this.userob)
      .subscribe(res => {
        alert("Added Successfuly")
        this.formValue.reset();
      }),
      (err: any) => {
        alert(err);
      }
  }

  onEdit(row: any) {
    this.formValue.controls['Fname'].setValue(row.Fname);
    this.formValue.controls['Lname'].setValue(row.Lname);
    this.formValue.controls['Email'].setValue(row.Email);
  }
}