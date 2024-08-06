import { Component, HostListener, inject } from '@angular/core';
import { TranslationService } from '../../services/translation.service';

@Component({
  selector: 'app-about-me',
  standalone: true,
  imports: [],
  templateUrl: './about-me.component.html',
  styleUrl: './about-me.component.scss'
})
export class AboutMeComponent {

  translationService = inject(TranslationService);
  currentLang = this.translationService.currentLang;
  aboutMeScrolledY = false;

  @HostListener('window:scroll', ['$event'])
  function() {
    console.log(window.scrollY);
    console.log('Language set to: ' + this.currentLang);

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

  ngOnInit() {
    this.currentLang = this.translationService.currentLang;
  }
}