import { Component } from '@angular/core';
import { ContactComponent } from '../contact/contact.component';
import { MainContentComponent } from '../main-content.component';

@Component({
  selector: 'app-imprint',
  standalone: true,
  imports: [
    ContactComponent,
    MainContentComponent,
  ],
  templateUrl: './imprint.component.html',
  styleUrl: './imprint.component.scss'
})
export class ImprintComponent {

}
