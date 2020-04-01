import { Component, OnInit } from '@angular/core';

declare var $:any;
@Component({
  selector: 'app-summary',
  templateUrl: './summary.component.html',
  styleUrls: ['./summary.component.css']
})
export class SummaryComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    $(document).ready( () => {

    });
  }

}
