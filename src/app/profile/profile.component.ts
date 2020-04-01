import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  email: string;
  FullName: string;
  Education: string;
  Job: string;
  constructor() { }
  ngOnInit(): void {
    this.email = 'tejadevarapalli47@gmail.com';
    this.FullName = 'Teja Devarapalli';
    this.Education = 'MS in Computer Science';
    this.Job = 'Full Stack Software Developer, Software Engineer, Data Engineer';
  }
}
