import { Component, inject } from '@angular/core';
import { TranslationService } from '../../services/translation.service';

@Component({
  selector: 'app-above-the-fold',
  standalone: true,
  imports: [],
  templateUrl: './above-the-fold.component.html',
  styleUrl: './above-the-fold.component.scss'
})
export class AboveTheFoldComponent {

  translationService = inject(TranslationService);
  currentLang = this.translationService.currentLang;

  ngOnInit() {
    this.currentLang = this.translationService.currentLang;
  }

}
