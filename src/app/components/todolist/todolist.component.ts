import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-todolist',
  templateUrl: './todolist.component.html',
  styleUrls: ['./todolist.component.scss']
})
export class TodolistComponent implements OnInit {
  value: string = '';
  title = 'To do list';
  name:string = 'Your';
  constructor() { }

  ngOnInit(): void {
  }

  alltask: any = []; 

  addtask(item: string) { 
    if(item == ''){
      alert('Please type your task')
    }
    else{
      this.alltask.push({ id: this.alltask.length, task: item });
      console.log(this.alltask)   
    }
    this.value = ''; 
    console.log('Value',this.value)  
  }
  
  removetask(id: Number) {
    console.log(id, this.alltask)
    this.alltask = this.alltask.filter((item:any) => { return item.id !== id})    
  }

  removeall(){
    console.log('ds')
    this.alltask = []; 
  }
} 
