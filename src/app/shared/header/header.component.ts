import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [
    CommonModule,
  ],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {

  openMenu: boolean = false;


  toggleMenu() {
    this.openMenu = !this.openMenu;
    console.log(this.openMenu);
  }


  closeMenu() {
    this.openMenu = false;
  }

}
