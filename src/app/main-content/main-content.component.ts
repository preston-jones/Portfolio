import { Component } from '@angular/core';
import { AboveTheFoldComponent } from './above-the-fold/above-the-fold.component';
import { AboutMeComponent } from './about-me/about-me.component';
import { MySkillsComponent } from './my-skills/my-skills.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { ContactComponent } from './contact/contact.component';
import { ArrowComponent} from '../shared/arrow/arrow.component';
import { ProjectTemplateComponent } from '../shared/project-template/project-template.component';

@Component({
  selector: 'app-main-content',
  standalone: true,
  imports: [
    AboveTheFoldComponent,
    AboutMeComponent,
    MySkillsComponent,
    PortfolioComponent,
    ContactComponent,
    ArrowComponent,
    ProjectTemplateComponent,
  ],
  templateUrl: './main-content.component.html',
  styleUrl: './main-content.component.scss'
})
export class MainContentComponent {
  
  arrowRight: string = 'arrow_right';
  arrowLeft: string = 'arrow_left';

  constructor() {

  }

}
