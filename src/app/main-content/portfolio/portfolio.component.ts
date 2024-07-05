import { Component, inject } from '@angular/core';
import { ProjectTemplateComponent } from '../../shared/project-template/project-template.component';
import { ProjectsService } from '../../services/projects.service';

@Component({
  selector: 'app-portfolio',
  standalone: true,
  imports: [
    ProjectTemplateComponent,
  ],
  templateUrl: './portfolio.component.html',
  styleUrl: './portfolio.component.scss'
})
export class PortfolioComponent {

  projectsData = inject(ProjectsService).projects;

}
