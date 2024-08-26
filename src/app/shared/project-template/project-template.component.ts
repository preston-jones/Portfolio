import { Component, AfterViewInit, HostListener } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Project } from '../../Interfaces/project.interfaces';
import { TranslateModule } from '@ngx-translate/core';
import AOS from 'aos';

@Component({
  selector: 'app-project-template',
  standalone: true,
  imports: [
    CommonModule,
    TranslateModule
  ],
  templateUrl: './project-template.component.html',
  styleUrls: ['./project-template.component.scss', './project-template.responsive.scss']
})
export class ProjectTemplateComponent implements AfterViewInit {

  evenNumber: boolean = false;
  mouseEnter: boolean = false;


  projectList: Project[] = [
    // {
    //   title: 'DABubble',
    //   img: 'assets/imgs/projectimage_dabubble.png',
    //   descriptionKey: 'portfolio.projects.dabubble.description',
    //   technologies: [
    //     'Angular | TypeScript | Firebase | Material Design | SCSS'
    //   ],
    //   links: [
    //     {
    //       title: 'Live Demo',
    //       url: 'http://dabubble.projects.prestonjones.dev/'
    //     },
    //     {
    //       title: 'GitHub',
    //       url: ''
    //     }
    //   ]
    // },
    {
      title: 'Join',
      img: 'assets/imgs/projectimage_join.png',
      descriptionKey: 'portfolio.projects.join.description',
      technologies: [
        'JavaScript | Firebase | CSS | HTML'
      ],
      links: [
        {
          title: 'Live Demo',
          url: 'http://join.projects.prestonjones.dev/'
        },
        {
          title: 'GitHub',
          url: 'https://github.com/preston-jones/Join'
        }
      ]
    },
    {
      title: 'Cyber City',
      img: 'assets/imgs/projectimage_cybercity.png',
      descriptionKey: 'portfolio.projects.cybercity.description',
      technologies: [
        'JavaScript | OOP | CSS | HTML',
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
      descriptionKey: 'portfolio.projects.pokedex.description',
      technologies: [
        'JavaScript | API | CSS | HTML'
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


  ngAfterViewInit() {
    AOS.init();
  }

  
  @HostListener('window:scroll', ['$event'])
  initAos() {
    AOS.init();
  }


  formatNumber(n: number) {
    return n > 9 ? "" + n : "0" + n;
  }


  onMouseEnter() {
    this.mouseEnter = true;
  }

  onMouseLeave() {
    this.mouseEnter = false;
  }
}