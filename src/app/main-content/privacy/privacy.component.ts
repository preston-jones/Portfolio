import { Component } from '@angular/core';
import { ContactComponent } from '../contact/contact.component';
import { MainContentComponent } from '../main-content.component';
import { TranslateService, TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-privacy',
  standalone: true,
  imports: [
    ContactComponent,
    MainContentComponent,
    TranslateModule
  ],
  templateUrl: './privacy.component.html',
  styleUrls: ['./privacy.component.scss', './privacy.responsive.scss']
})
export class PrivacyComponent {

  currentLang: string;

  constructor(private translate: TranslateService) {
    const savedLang = localStorage.getItem('preferredLanguage');
    this.currentLang = savedLang || 'de';
    this.translate.use(this.currentLang);
  }

}
