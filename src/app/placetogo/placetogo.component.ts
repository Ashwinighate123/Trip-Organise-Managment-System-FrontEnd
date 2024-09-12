import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-placetogo',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './placetogo.component.html',
  styleUrl: './placetogo.component.css'
})
export class PlacetogoComponent {
  constructor(private router: Router) {} // Inject the Router in the constructor

  trips = [
    {
      title: 'Group Trip',
      description: 'With your family and friends',
      imageSrc: 'img/img13.avif',
      routeLink: 'grouptrip'
    },
    {
      title: 'Solo Trip',
      description: 'Feel the fear and do it anyway',
      imageSrc: 'img/img34.jpg',
      routeLink: 'solotrip'
    },
    {
      title: 'Solo Trip',
      description: 'Feel the fear and do it anyway',
      imageSrc: 'img/img34.jpg',
      routeLink: 'solotrip'
    },
    {
      title: 'Solo Trip',
      description: 'Feel the fear and do it anyway',
      imageSrc: 'img/img34.jpg',
      routeLink: 'solotrip'
    },
    {
      title: 'Solo Trip',
      description: 'Feel the fear and do it anyway',
      imageSrc: 'img/img34.jpg',
      routeLink: 'solotrip'
    },
    
  ];
  redirectToNextPage(routeLink: string) {
    this.router.navigate([routeLink]);
  }
}

