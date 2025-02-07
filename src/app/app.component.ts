import { Component, HostListener } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './shared/header/header.component';
import { FooterComponent } from './shared/footer/footer.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    RouterOutlet,
    HeaderComponent,
    FooterComponent,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {

  title = 'Preston Jones Developer';
  userHasScrolled = false;


  @HostListener('window:scroll', ['$event'])
  function() {    
    if (window.scrollY >= 60) {
      this.userHasScrolled = true;
    }
    else {
      this.userHasScrolled = false
    }
  }
}
