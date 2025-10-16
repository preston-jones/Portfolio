import { Component, HostListener } from '@angular/core';
import { TranslateService, TranslateModule } from '@ngx-translate/core';
import { NgOptimizedImage } from '@angular/common';
import * as AOS from 'aos';

@Component({
  selector: 'app-about-me',
  standalone: true,
  imports: [TranslateModule, NgOptimizedImage],
  templateUrl: './about-me.component.html',
  styleUrls: ['./about-me.component.scss', './about-me.responsive.scss', '../../../styles.animations.scss', '../../../styles.wcag.scss']
})
export class AboutMeComponent {

  currentLang: string;
  // aboutMeScrolledY = false;
  scrHeight: any;
  scrWidth: any;

  @HostListener('window:resize', ['$event'])
  getScreenSize() {
    this.scrHeight = window.innerHeight;
    this.scrWidth = window.innerWidth;
  }


  constructor(private translate: TranslateService) {
    const savedLang = localStorage.getItem('preferredLanguage');
    this.currentLang = savedLang || 'de';
    this.translate.use(this.currentLang);
    this.getScreenSize();
    AOS.init();
  }
}