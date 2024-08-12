import { Component, ChangeDetectionStrategy, inject, HostListener } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormsModule, NgForm } from '@angular/forms';
import { MatDialogModule } from '@angular/material/dialog';
import { MatDialog } from '@angular/material/dialog';
import { DialogEmailSentComponent } from '../../dialog-email-sent/dialog-email-sent.component';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [FormsModule,
    MatDialogModule,
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss'
})

export class ContactComponent {

  aboutMeScrolledY = false;
  policy: boolean = false;
  http = inject(HttpClient);

  contactData = {
    name: "",
    email: "",
    message: "",
  };


  constructor(public matDialog: MatDialog) { }


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
            this.openDialog();
            ngForm.resetForm();
          },
          error: (error) => {
            console.error(error);
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


  openDialog(): void {
    const dialogRef = this.matDialog.open(DialogEmailSentComponent);
  }
}
