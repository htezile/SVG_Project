import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-body-data',
  templateUrl: './body-data.component.html',
  styleUrls: ['./body-data.component.css']
})
export class BodyDataComponent implements OnInit {
@Input() data:any;
  constructor() { }

  ngOnInit() {
  }

}
