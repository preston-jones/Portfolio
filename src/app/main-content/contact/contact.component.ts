import { Component, ChangeDetectionStrategy, inject } from '@angular/core';
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

  http = inject(HttpClient);

  contactData = {
    name: "",
    email: "",
    message: "",
  };


  mailTest = true;

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

    console.log(ngForm.form.valid);
    console.log(this.mailTest);
    console.log(ngForm.submitted);
    

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

}
