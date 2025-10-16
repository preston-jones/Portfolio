import { Component, ChangeDetectionStrategy, inject, HostListener } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormsModule, NgForm } from '@angular/forms';
import { MatDialogModule } from '@angular/material/dialog';
import { MatDialog } from '@angular/material/dialog';
import { NgOptimizedImage } from '@angular/common';
import { DialogEmailSentComponent } from '../../dialogs/dialog-email-sent/dialog-email-sent.component';
import { DialogEmailErrorComponent } from '../../dialogs/dialog-email-error/dialog-email-error.component';
import { TranslateService, TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [FormsModule,
    MatDialogModule,
    TranslateModule,
    NgOptimizedImage
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss', './contact.responsive.scss', '../../../styles.wcag.scss']
})

export class ContactComponent {

  currentLang: string;
  aboutMeScrolledY = false;
  policy: boolean = false;
  http = inject(HttpClient);
  scrHeight: any;
  scrWidth: any;

  contactData = {
    name: "",
    email: "",
    message: "",
  };


  constructor(private translate: TranslateService, public matDialog: MatDialog) {
    const savedLang = localStorage.getItem('preferredLanguage');
    this.currentLang = savedLang || 'de';
    this.translate.use(this.currentLang);
  }


  post = {
    endPoint: 'https://prestonjones.dev/sendMail.php',
    body: (payload: any) => JSON.stringify(payload),
    options: {
      headers: {
        'Content-Type': 'text/plain',
        responseType: 'text',
      },
    },
  };

  onSubmit(ngForm: NgForm) {
    if (ngForm.submitted && ngForm.form.valid) {
      this.http.post(this.post.endPoint, this.post.body(this.contactData))
        .subscribe({
          next: (response) => {
            this.openSuccessDialog();
            ngForm.resetForm();
          },
          error: (error) => {
            this.openErrorDialog();
          },
        });
    }
  }


  @HostListener('window:scroll', ['$event'])
  function() {
    if (window.scrollY >= 5400) {
      this.aboutMeScrolledY = true;
    }
    else {
      this.aboutMeScrolledY = false
    }
  }


  @HostListener('window:resize', ['$event'])
  getScreenSize() {
    this.scrHeight = window.innerHeight;
    this.scrWidth = window.innerWidth;
  }


  openSuccessDialog(): void {
    const dialogRef = this.matDialog.open(DialogEmailSentComponent);
  }


  openErrorDialog(): void {
    const dialogRef = this.matDialog.open(DialogEmailErrorComponent);
  }
}
