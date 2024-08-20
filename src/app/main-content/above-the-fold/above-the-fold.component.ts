import { Component, inject } from '@angular/core';
import { TranslateService, TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-above-the-fold',
  standalone: true,
  imports: [TranslateModule],
  templateUrl: './above-the-fold.component.html',
  styleUrls: ['./above-the-fold.component.scss', './above-the-fold.responsive.scss']
})


export class AboveTheFoldComponent {

  currentLang: string;

  constructor(private translate: TranslateService) {
    const savedLang = localStorage.getItem('preferredLanguage');
    this.currentLang = savedLang || 'en';
    this.translate.use(this.currentLang);
  }

}
