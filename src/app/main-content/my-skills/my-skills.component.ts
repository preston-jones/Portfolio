import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-my-skills',
  standalone: true,
  imports: [],
  templateUrl: './my-skills.component.html',
  styleUrl: './my-skills.component.scss'
})

export class MySkillsComponent {

  mySkillsScrolledY = false;

  @HostListener('window:scroll', ['$event'])
  function() {
    if (window.scrollY >= 1700) {
      this.mySkillsScrolledY = true;
    }
    else {
      this.mySkillsScrolledY = false
    }
  }
}