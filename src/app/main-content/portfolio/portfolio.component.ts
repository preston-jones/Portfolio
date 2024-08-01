import { Component, inject, HostListener } from '@angular/core';
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
  portfolioScrolledY = false;

  @HostListener('window:scroll', ['$event'])
  function() {
    if (window.scrollY >= 2700) {
      this.portfolioScrolledY = true;
    }
    else {
      this.portfolioScrolledY = false
    }
  }


  show() {
    console.log(this.projectsData);
  }

}
