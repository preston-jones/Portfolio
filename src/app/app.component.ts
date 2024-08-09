import { Component, HostListener } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './shared/header/header.component';
import { FooterComponent } from './shared/footer/footer.component';
import { MainContentComponent } from './main-content/main-content.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    RouterOutlet,
    HeaderComponent,
    FooterComponent,
    MainContentComponent,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {

  title = 'Preston Jones Developer';
  userHasScrolled = false;


  @HostListener('window:scroll', ['$event'])
  function() {
    console.log(window.scrollY);
    console.log(this.userHasScrolled);
    

    if (window.scrollY >= 60) {
      this.userHasScrolled = true;
    }
    else {
      this.userHasScrolled = false
    }
  }
}
