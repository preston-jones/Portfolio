import { Component, inject, Input } from '@angular/core';
import { ProjectsService } from '../../services/projects.service';
import { Project } from '../../Interfaces/project.interfaces';

@Component({
  selector: 'app-project-template',
  standalone: true,
  imports: [],
  templateUrl: './project-template.component.html',
  styleUrl: './project-template.component.scss'
})
export class ProjectTemplateComponent {

  @Input() projectTitle: string = '';
  currentProjectTitle?: string;

  projectsData = inject(ProjectsService).projects;
  currentProjectData: Project = {
    title: '',
    img: '',
    description: '',
    languages: [],
    links: []
  };

  constructor() {
  }

  ngOnInit() {
    this.currentProjectTitle = this.projectTitle;
    console.log(this.currentProjectTitle);
    this.getCurrentProjectData();
  }


  getCurrentProjectData() {
    const project = this.projectsData.find(project => project.title === this.currentProjectTitle);
    if (project) {
      this.currentProjectData = project;
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
}
