import { Component } from '@angular/core';
import { ProjectTemplateComponent } from '../../shared/project-template/project-template.component';

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

}
