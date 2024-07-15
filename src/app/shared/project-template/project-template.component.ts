import { Component, inject, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProjectsService } from '../../services/projects.service';
import { Project } from '../../Interfaces/project.interfaces';
import AOS from 'aos';

@Component({
  selector: 'app-project-template',
  standalone: true,
  imports: [
    CommonModule
  ],
  templateUrl: './project-template.component.html',
  styleUrl: './project-template.component.scss'
})
export class ProjectTemplateComponent {

  @Input() projectTitle: string = '';
  @Input() projectIndex: number = 0;
  currentProjectTitle?: string;
  currentProjectIndex?: number;
  evenNumber: boolean = false;
  mouseEnter: boolean = false;

  projectsData = inject(ProjectsService).projects;
  currentProjectData: Project = {
    title: '',
    img: '',
    description: '',
    languages: [],
    links: []
  };
  

  projectsLength: number = this.projectsData.length;

  constructor() {
  }
  

  ngOnInit() {
    AOS.init();
    this.currentProjectTitle = this.projectTitle;
    console.log(this.currentProjectTitle);
    this.getCurrentProjectData();
  }


  getCurrentProjectData() {
    const project = this.projectsData.find(project => project.title === this.currentProjectTitle);
    if (project) {
      this.currentProjectData = project;
      this.currentProjectIndex = this.projectIndex;
      this.checkIfNumberIsEven();
    } else {
      // Provide a fallback project data here
      this.currentProjectData = {
        title: '',
        img: '',
        description: '',
        languages: [],
        links: []
      };
    }
    console.log(this.currentProjectData);
  }


  formatNumber(n: number) {
    return n > 9 ? "" + n : "0" + n;
  }


  checkIfNumberIsEven() {
    if (this.projectIndex % 2 == 0) {
      this.evenNumber = true;
    } else {
      this.evenNumber = false;
    }
  }


  onMouseEnter() {
    this.mouseEnter = true;
    console.log(this.mouseEnter);
  }

  onMouseLeave() {
    this.mouseEnter = false;
    console.log(this.mouseEnter);
  }


  // animateProject() {
  //   item.classList.toggle("d-none", !checked);
  // }
}
