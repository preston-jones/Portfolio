import { Component, HostListener } from '@angular/core';
import { ProjectTemplateComponent } from '../../shared/project-template/project-template.component';
import { TranslateService, TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-portfolio',
  standalone: true,
  imports: [
    ProjectTemplateComponent,
    TranslateModule
  ],
  templateUrl: './portfolio.component.html',
  styleUrl: './portfolio.component.scss'
})
export class PortfolioComponent {

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
}
