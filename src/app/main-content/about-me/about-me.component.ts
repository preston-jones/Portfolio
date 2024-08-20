import { Component, HostListener, inject } from '@angular/core';
import { TranslateService, TranslateModule } from '@ngx-translate/core';

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


  constructor(private translate: TranslateService) {
    const savedLang = localStorage.getItem('preferredLanguage');
    this.currentLang = savedLang || 'en';
    this.translate.use(this.currentLang);
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
}