import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

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
  translate: any;


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
    // this.translate.use(currentLang);
    
  }
}