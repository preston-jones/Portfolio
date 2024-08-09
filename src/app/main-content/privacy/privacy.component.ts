import { Component } from '@angular/core';
import { ContactComponent } from '../contact/contact.component';
import { MainContentComponent } from '../main-content.component';

@Component({
  selector: 'app-privacy',
  standalone: true,
  imports: [
    ContactComponent,
    MainContentComponent,
  ],
  templateUrl: './privacy.component.html',
  styleUrl: './privacy.component.scss'
})
export class PrivacyComponent {

}
