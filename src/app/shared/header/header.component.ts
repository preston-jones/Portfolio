import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslationService } from '../../services/translation.service';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [
    CommonModule,
  ],
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  openMenu: boolean = false;
  initialized: boolean = false;
  translationService = inject(TranslationService);
  currentLang = this.translationService.currentLang;


  toggleMenu() {
    if (!this.initialized) {
      this.initialized = true;
    }
    this.openMenu = !this.openMenu;
  }


  closeMenu() {
    this.openMenu = false;
  }

  setCurrentLanguage(currentLang: string) {
    this.translationService.setCurrentLanguageInService(currentLang);
    this.currentLang = currentLang;
  }
}