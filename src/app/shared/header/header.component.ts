import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateService, TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [
    CommonModule,
    TranslateModule
  ],
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss',]
})
export class HeaderComponent {
  openMenu: boolean = false;
  initialized: boolean = false;
  currentLang: string;


  constructor(private translate: TranslateService) {
    const savedLang = localStorage.getItem('preferredLanguage');
    this.currentLang = savedLang || 'en';
    this.translate.use(this.currentLang);
  }


  changeLanguage(lang: string): void {
    this.translate.use(lang);
    this.currentLang = lang;
    localStorage.setItem('preferredLanguage', lang);
  }


  toggleMenu() {
    if (!this.initialized) {
      this.initialized = true;
    }
    this.openMenu = !this.openMenu;
  }


  closeMenu() {
    this.openMenu = false;
  }
}