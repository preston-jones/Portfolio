import { Injectable } from '@angular/core';
import { Project } from '../Interfaces/project.interfaces';

@Injectable({
  providedIn: 'root'
})
export class ProjectsService {

  constructor() { }

  projects: Project[] = [
    {
      title: 'DABubble',
      img: 'assets/imgs/projectimage_dabubble.png',
      description: 'A chat messenger app inspired by Slack, allows users to communicate with each other through channels or direct messages. ',
      languages: [
        'Angular',
        'TypeScript',
        'Firebase',
        'Material Design',
        'SCSS'
      ],
      links: [
        {
          title: 'Live Demo',
          url: 'http://dabubble.projects.prestonjones.dev/'
        },
        {
          title: 'GitHub',
          url: ''
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
        'Firebase',
        'SCSS',
      ],
      links: [
        {
          title: 'Live Demo',
          url: 'https://prestonjones-developer.de/projects/join/index.html'
        },
        {
          title: 'GitHub',
          url: 'http://join.projects.prestonjones.dev/'
        }
      ]
    },
    {
      title: 'Cyber City',
      img: 'assets/imgs/projectimage_cybercity.png',
      description: '2 D Pixel-Art Arcade Game based on object-oriented approach. Save Cyber City from the Wasp Queens Invasion.',
      languages: [
        'JavaScript',
        'OOP',
        'HTML',
        'CSS'
      ],
      links: [
        {
          title: 'Live Demo',
          url: 'http://cybercity.projects.prestonjones.dev/'
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
        'API',
        'CSS',
        'HTML'
      ],
      links: [
        {
          title: 'Live Demo',
          url: 'http://pokedex.projects.prestonjones.dev/'
        },
        {
          title: 'GitHub',
          url: 'https://github.com/preston-jones/pokedex'
        }
      ]
    },

  ];
}
