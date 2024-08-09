import { Component, ChangeDetectionStrategy, inject, HostListener } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormsModule, NgForm } from '@angular/forms';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [FormsModule],
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
            alert('Message sent successfully');
            ngForm.resetForm();
          },
          error: (error) => {
            console.error(error);
          },
          complete: () => console.info('send post complete'),
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
}
