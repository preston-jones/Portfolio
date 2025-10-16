import { Component } from '@angular/core';
import { TranslateService, TranslateModule } from '@ngx-translate/core';
import { NgOptimizedImage } from '@angular/common';
import * as AOS from 'aos';

@Component({
  selector: 'app-my-skills',
  standalone: true,
  imports: [TranslateModule, NgOptimizedImage],
  templateUrl: './my-skills.component.html',
  styleUrls: ['./my-skills.component.scss', './my-skills.responsive.scss', '../../../styles.animations.scss', '../../../styles.wcag.scss']
})

export class MySkillsComponent {

  currentLang: string;


  constructor(private translate: TranslateService) {
    const savedLang = localStorage.getItem('preferredLanguage');
    this.currentLang = savedLang || 'de';
    this.translate.use(this.currentLang);
    AOS.init();
  }


  getTranslation(key: string): string {
    return this.translate.instant(key);
  }


  showInfoBox() {
    const infoBox = document.getElementById('info-box');
    infoBox!.style.display = 'block';
  }


  hideInfoBox() {
    const infoBox = document.getElementById('info-box');
    infoBox!.style.display = 'none';
  }
}