import { Component, OnInit } from '@angular/core';

declare var $: any;

@Component({
  selector: 'app-academic',
  templateUrl: './academic.component.html',
  styleUrls: ['./academic.component.css']
})
export class AcademicComponent implements OnInit {

  constructor() {
  }

  ngOnInit(): void {
    $(document).ready(() => {
      $('#SecondaryTrigger').click(() => {
        const eduName = document.getElementById('SecondaryTrigger').getAttribute('name');
        $('#ModalTitle1').text(eduName);
        $('#engineeringData').hide();
        $('#masterData').hide();
        $('#schoolData').show();
        $('#ModalExp1').modal('toggle');
      });

      $('#EngineeringTrigger').click(() => {
        const eduName = document.getElementById('EngineeringTrigger').getAttribute('name');
        $('#ModalTitle1').text(eduName);
        $('#engineeringData').show();
        $('#masterData').hide();
        $('#schoolData').hide();
        $('#ModalExp1').modal('toggle');
      });

      $('#MasterTrigger').click(() => {
        const eduName = document.getElementById('MasterTrigger').getAttribute('name');
        $('#ModalTitle1').text(eduName);
        $('#engineeringData').hide();
        $('#masterData').show();
        $('#schoolData').hide();
        $('#ModalExp1').modal('toggle');
      });

    });
  }
}
