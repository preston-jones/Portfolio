import { Component, inject, Input } from '@angular/core';
import { ProjectsService } from '../../services/projects.service';

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
  currentProjectData: any;

  constructor() {
    console.log('Hallo');
  }

  ngOnInit() {
    this.currentProjectTitle = this.projectTitle;
    console.log(this.currentProjectTitle);
    this.getCurrentProjectData();
  }


  getCurrentProjectData() {
    this.currentProjectData = this.projectsData.find(project => project.title === this.currentProjectTitle);
    console.log(this.currentProjectData);
  }

}
