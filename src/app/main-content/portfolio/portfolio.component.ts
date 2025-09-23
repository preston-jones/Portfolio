import { Component } from '@angular/core';
import { ProjectTemplateComponent } from '../../shared/project-template/project-template.component';
import { TranslateModule } from '@ngx-translate/core';
import * as AOS from 'aos';

@Component({
  selector: 'app-portfolio',
  standalone: true,
  imports: [
    ProjectTemplateComponent,
    TranslateModule
  ],
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.scss', './portfolio.responsive.scss', '../../../styles.animations.scss']
})
export class PortfolioComponent {

  constructor () {
    AOS.init();
  }
}