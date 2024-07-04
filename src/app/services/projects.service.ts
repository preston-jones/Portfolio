import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProjectsService {

  constructor() { }

  projects = [
    {
      title: 'Cyber City',
      img: './../../../assets/images/cyber-city.png',
      description: '2 D Pixel-Art Arcade Game based on object-oriented approach. Save Cyber City from the Wasp Queens Invasion.',
      languages: [
        'JavaScript',
        'HTML',
        'CSS'
      ],
      links: [
        {
          title: 'Live Demo',
          url: 'https://preston-jones.developerakademie.net/2D_Game/index.html'
        },
        {
          title: 'GitHub',
          url: 'https://github.com/preston-jones/2D_Sidescroller_Game'
        }
      ]
    },
    {
      title: 'Join',
      img: 'https://via.placeholder.com/150',
      description: '2 D Pixel-Art Arcade Game based on object-oriented approach. Save Cyber City from the Wasp Queens Invasion.',
      languages: [
        'JavaScript',
        'HTML',
        'CSS'
      ],
      links: [
        {
          title: 'Live Demo',
          url: 'https://preston-jones.developerakademie.net/2D_Game/index.html'
        },
        {
          title: 'GitHub',
          url: 'https://github.com/preston-jones/2D_Sidescroller_Game'
        }
      ]
    },
  ];
}
