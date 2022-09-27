import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-todolist',
  templateUrl: './todolist.component.html',
  styleUrls: ['./todolist.component.scss']
})
export class TodolistComponent implements OnInit {

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

}
