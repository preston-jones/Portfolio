import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-about-me',
  standalone: true,
  imports: [],
  templateUrl: './about-me.component.html',
  styleUrl: './about-me.component.scss'
})
export class AboutMeComponent {

  aboutMeScrolledY = false;

  @HostListener('window:scroll', ['$event']) 
  function () {
    console.log(window.scrollY);
    
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

  constructor() {
  }
}
