import { Component, HostListener } from '@angular/core';
import { TranslateService, TranslateModule } from '@ngx-translate/core';
import AOS from 'aos';

@Component({
  selector: 'app-about-me',
  standalone: true,
  imports: [TranslateModule],
  templateUrl: './about-me.component.html',
  styleUrls: ['./about-me.component.scss', './about-me.responsive.scss']
})
export class AboutMeComponent {

  currentLang: string;
  aboutMeScrolledY = false;
  scrHeight: any;
  scrWidth: any;

  @HostListener('window:resize', ['$event'])
  getScreenSize() {
    this.scrHeight = window.innerHeight;
    this.scrWidth = window.innerWidth;
  }


  constructor(private translate: TranslateService) {
    const savedLang = localStorage.getItem('preferredLanguage');
    this.currentLang = savedLang || 'en';
    this.translate.use(this.currentLang);
    this.getScreenSize();
  }


  @HostListener('window:scroll', ['$event'])
  function() {
    if (window.scrollY >= 400) {
      this.aboutMeScrolledY = true;
    }
    else if (window.scrollY > 1400) {
      this.aboutMeScrolledY = false;
    }
    else {
      this.aboutMeScrolledY = false
    }
  }

  
  @HostListener('window:scroll', ['$event'])
  initAos() {
    AOS.init();
  }
}