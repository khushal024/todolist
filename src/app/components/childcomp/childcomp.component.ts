import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-childcomp',
  templateUrl: './childcomp.component.html',
  styleUrls: ['./childcomp.component.scss']
})
export class ChildcompComponent implements OnInit {

  constructor() { }

  randomtext = "Passed data from parent to child"

  ngOnInit(): void {
  }
  gotthedata: any = ""
  getdata(data: any) {
    alert("Data Sent");
    this.gotthedata = data
  }
}
