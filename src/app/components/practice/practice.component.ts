import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-practice',
  templateUrl: './practice.component.html',
  styleUrls: ['./practice.component.scss']
})
export class PracticeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  myname(nono: number) {
    alert(nono)
  }

  printdata(val: string) {
    console.log(val)
  }

  /* No need for let, var, const, in class & constroctor*/
  count = 0;
  counter(type: string) {
    if (type === 'add') {
      this.count++
    }
    else {
      this.count--
    }

    // type === 'add' ? this.count++ : this.count-- ;

  }
  disableinput: boolean = true;
  enableit() {
    this.disableinput = false;
  }


}
