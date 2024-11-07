import { Component } from '@angular/core';
import { TranslateService, TranslateModule } from '@ngx-translate/core';
import AOS from 'aos';

@Component({
  selector: 'app-my-skills',
  standalone: true,
  imports: [TranslateModule],
  templateUrl: './my-skills.component.html',
  styleUrls: ['./my-skills.component.scss', './my-skills.responsive.scss', '../../../styles.animations.scss']
})

export class MySkillsComponent {

  currentLang: string;


  constructor(private translate: TranslateService) {
    const savedLang = localStorage.getItem('preferredLanguage');
    this.currentLang = savedLang || 'en';
    this.translate.use(this.currentLang);
    AOS.init();
  }
}