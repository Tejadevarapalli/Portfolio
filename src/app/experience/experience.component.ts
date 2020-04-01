import { Component, OnInit } from '@angular/core';

declare var $: any;

@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.css']
})



export class ExperienceComponent implements OnInit {

  constructor() {
  }

  ngOnInit(): void {
    $(document).ready( () => {
      $('#E2opentrigger').click(() => {
        const companyName = document.getElementById('E2opentrigger').getAttribute('name');
        $('#ModalTitle').text(companyName);
        $('#UMKCdata').hide();
        $('#E2opendata').show();
        $('#Modalexp').modal('toggle');
      });
      $('#UMKCtrigger').click(() => {
        const companyName = document.getElementById('UMKCtrigger').getAttribute('name');
        $('#ModalTitle').text('UMKC Information Services');
        $('#E2opendata').hide();
        $('#UMKCdata').show();
        $('#Modalexp').modal('toggle');
      });
    });
  }
}
