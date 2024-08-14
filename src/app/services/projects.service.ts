import { Injectable } from '@angular/core';
import { Project } from '../Interfaces/project.interfaces';
import { TranslateService, TranslateModule } from '@ngx-translate/core';

@Injectable({
  providedIn: 'root'
})
export class ProjectsService {

  currentLang: string;
  descriptionTranslate: any;
  projects: Project[] = [];

  constructor(private translate: TranslateService) {
    this.ngOnInit();

    const savedLang = localStorage.getItem('preferredLanguage');
    this.currentLang = savedLang || 'en';
    this.translate.use(this.currentLang);
  }


  ngOnInit() {
    this.translate.stream('portfolio.projects.dabubble.description').subscribe((data: any) => {
      this.descriptionTranslate = data;
      console.log(this.descriptionTranslate);
    });
    this.initializeProjects();

  }


  initializeProjects() {
    this.projects = [
      {
        title: 'DABubble',
        img: 'assets/imgs/projectimage_dabubble.png',
        description: this.descriptionTranslate,
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
          'JavaScript',
          'Firebase',
          'CSS',
          'HTML'
        ],
        links: [
          {
            title: 'Live Demo',
            url: 'http://join.projects.prestonjones.dev/'
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
          'CSS',
          'HTML',
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
}