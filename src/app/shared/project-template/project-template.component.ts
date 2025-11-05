import { Component, AfterViewInit, HostListener } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Project } from '../../Interfaces/project.interfaces';
import { TranslateModule } from '@ngx-translate/core';
import * as AOS from 'aos';

@Component({
  selector: 'app-project-template',
  standalone: true,
  imports: [
    CommonModule,
    TranslateModule
  ],
  templateUrl: './project-template.component.html',
  styleUrls: ['./project-template.component.scss', './project-template.responsive.scss', '../../../styles.animations.scss']
})
export class ProjectTemplateComponent {

  evenNumber: boolean = false;
  mouseEnter: boolean = false;


  projectList: Project[] = [
    {
      title: 'HCloud Vision',
      img: 'assets/imgs/projectimage_hcloud.jpeg',
      descriptionKey: 'portfolio.projects.hcloud.description',
      technologies: [
        'Angular | TypeScript | TailwindCSS | Serverless Proxy | Mock API'
      ],
      links: [
        {
          title: 'Live Demo',
          url: 'https://hcloud.projects.prestonjones.dev/'
        },
        {
          title: 'GitHub',
          url: 'https://github.com/preston-jones/hcloud-angular-dashboard'
        }
      ]
    },
    {
      title: 'NexChat',
      img: 'assets/imgs/projectimage_nexchat.jpeg',
      descriptionKey: 'portfolio.projects.nexchat.description',
      technologies: [
        'Angular | TypeScript | Firebase | Material Design | SCSS'
      ],
      links: [
        {
          title: 'Live Demo',
          url: 'https://nexchat.projects.prestonjones.dev/'
        },
        {
          title: 'GitHub',
          url: 'https://github.com/preston-jones/NexChat'
        }
      ]
    },
    {
      title: 'Join',
      img: 'assets/imgs/projectimage_join.jpeg',
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
      img: 'assets/imgs/projectimage_cybercity.jpeg',
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
  ];

  constructor() {
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