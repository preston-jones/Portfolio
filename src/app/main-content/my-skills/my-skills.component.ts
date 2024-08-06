import { Component, HostListener, inject } from '@angular/core';
import { TranslationService } from '../../services/translation.service';

@Component({
  selector: 'app-my-skills',
  standalone: true,
  imports: [],
  templateUrl: './my-skills.component.html',
  styleUrl: './my-skills.component.scss'
})

export class MySkillsComponent {

  translationService = inject(TranslationService);
  currentLang = this.translationService.currentLang;
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

    ngOnInit() {
    this.currentLang = this.translationService.currentLang;
  }
}