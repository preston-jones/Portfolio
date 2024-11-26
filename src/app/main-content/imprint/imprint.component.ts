import { Component } from '@angular/core';
import { ContactComponent } from '../contact/contact.component';
import { MainContentComponent } from '../main-content.component';
import { TranslateService, TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-imprint',
  standalone: true,
  imports: [
    ContactComponent,
    MainContentComponent,
    TranslateModule
  ],
  templateUrl: './imprint.component.html',
  styleUrls: ['./imprint.component.scss', './imprint.responsive.scss']
})
export class ImprintComponent {

  currentLang: string;

  constructor(private translate: TranslateService) {
    const savedLang = localStorage.getItem('preferredLanguage');
    this.currentLang = savedLang || 'de';
    this.translate.use(this.currentLang);
  }

}
