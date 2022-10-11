import { Component, Input, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms'
@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  @Input()
  email: any;
  inputsame: any = "d-block w-100";
  newuserData: any = {}
  login(data: NgForm) {
    console.log(data)
    this.newuserData = data
  }
} 
