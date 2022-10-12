import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-kid',
  templateUrl: './kid.component.html',
  styleUrls: ['./kid.component.scss']
})
export class KidComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  @Input() data = ""

  @Output() senddata = new EventEmitter()

}
