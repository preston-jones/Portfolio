import { Component, HostListener, inject } from '@angular/core';
import { TranslateService, TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-my-skills',
  standalone: true,
  imports: [TranslateModule],
  templateUrl: './my-skills.component.html',
  styleUrl: './my-skills.component.scss'
})

export class MySkillsComponent {

  currentLang: string;
  mySkillsScrolledY = false;

  @HostListener('window:scroll', ['$event'])
  function() {
    if (window.scrollY >= 1700) {
      this.mySkillsScrolledY = true;
    }
    else {
      this.mySkillsScrolledY = false
    }
  }

  constructor(private translate: TranslateService) {
    const savedLang = localStorage.getItem('preferredLanguage');
    this.currentLang = savedLang || 'en';
    this.translate.use(this.currentLang);
  }
}