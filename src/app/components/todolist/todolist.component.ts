import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-todolist',
  templateUrl: './todolist.component.html',
  styleUrls: ['./todolist.component.scss']
})
export class TodolistComponent implements OnInit {
  value: any;
  title = 'to do list';
  constructor() { }

  ngOnInit(): void {
  }



  alltask: any = [];


  addtask(item: string) {

    this.alltask.push({ id: this.alltask.length, task: item });

    console.log(this.alltask)
  }
  removetask(id: Number) {
    console.log(id)
    this.alltask = this.alltask.filter((item: any) => item.id !== id)
  }


} 
