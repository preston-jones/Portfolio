import { Injectable } from '@angular/core';
import { Project } from '../Interfaces/project.interfaces';

@Injectable({
  providedIn: 'root'
})
export class ProjectsService {

  constructor() { }

  projects: Project[] = [
    {
      title: 'Cyber City',
      img: 'assets/imgs/projectimage_cybercity.png',
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
      img: 'assets/imgs/projectimage_join.png',
      description: 'Task manager inspired by the Kanban System. Create and organize tasks using drag and drop functions, assign users and categories. ',
      languages: [
        'Angular',
        'TypeScript',
        'HTML',
        'CSS',
        'Firebase'
      ],
      links: [
        {
          title: 'Live Demo',
          url: 'https://preston-jones.developerakademie.net/join/index.html'
        },
        {
          title: 'GitHub',
          url: 'https://github.com/preston-jones/2D_Sidescroller_Game'
        }
      ]
    },
    {
      title: 'Pokedex',
      img: 'assets/imgs/projectimage_pokedex.png',
      description: 'Based on the PokéAPI a simple library that provides and catalogues pokemon information. ',
      languages: [
        'JavaScript',
        'HTML',
        'CSS',
        'Api'
      ],
      links: [
        {
          title: 'Live Demo',
          url: 'https://preston-jones.developerakademie.net/Pokedex/index.html'
        },
        {
          title: 'GitHub',
          url: 'https://github.com/preston-jones/pokedex'
        }
      ]
    },
    {
      title: 'DABubble',
      img: 'assets/imgs/projectimage_pokedex.png',
      description: 'Based on the PokéAPI a simple library that provides and catalogues pokemon information. ',
      languages: [
        'JavaScript',
        'HTML',
        'CSS',
        'Api'
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
