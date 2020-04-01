import { Component, OnInit } from '@angular/core';

declare var $: any;

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    $(document).ready( () => {
    $('#project1').click(() => {
      $('#ModalTitle2').text('Twitter Data Analysis');
      $('#twitterData').show();
      $('#ShuttleData').hide();
      $('#ASEData').hide();
      $('#Unity').hide();
      $('#other').hide();
      $('#ModalExp').modal('toggle');
    });

    $('#project2').click(() => {
        $('#ModalTitle2').text('Shuttle App');
        $('#twitterData').hide();
        $('#ShuttleData').show();
        $('#ASEData').hide();
        $('#Unity').hide();
        $('#other').hide();
        $('#ModalExp').modal('toggle');
      });

    $('#project3').click(() => {
        $('#ModalTitle2').text('Deep Learning Models Hub');
        $('#twitterData').hide();
        $('#ShuttleData').hide();
        $('#ASEData').show();
        $('#Unity').hide();
        $('#other').hide();
        $('#ModalExp').modal('toggle');
      });


    $('#project4').click(() => {
        $('#ModalTitle2').text('Unity 3D');
        $('#twitterData').hide();
        $('#ShuttleData').hide();
        $('#ASEData').hide();
        $('#Unity').show();
        $('#other').hide();
        $('#ModalExp').modal('toggle');
      });


    $('#project5').click(() => {
        $('#ModalTitle2').text('Other Projects');
        $('#twitterData').hide();
        $('#ShuttleData').hide();
        $('#ASEData').hide();
        $('#Unity').hide();
        $('#other').show();
        $('#ModalExp').modal('toggle');
      });


    });
  }

}
