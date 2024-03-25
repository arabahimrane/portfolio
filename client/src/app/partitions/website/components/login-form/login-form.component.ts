import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormControl, FormGroupDirective, NgForm, Validators } from '@angular/forms';
import { ErrorStateMatcher } from '@angular/material/core';
// import { CookieService } from 'ngx-cookie-service';
import { ApiPath } from 'src/app/shared/material/API';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',

  styleUrls: ['./login-form.component.css']
})

export class LoginFormComponent implements ErrorStateMatcher {

  hide = true;
  error_msg!: string;
  username = new FormControl('', [Validators.required]);
  password = new FormControl('', [Validators.required]);

  constructor(private http: HttpClient, ) { }


  isErrorState(control: FormControl | null, form: NgForm | FormGroupDirective | null): boolean {

    const isSubmitted = form && form.submitted;
    return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));

  }


  onSubmit() {

    console.log("password envalid: ", this.password.invalid);
    if (this.username.valid && this.password.valid) {
      const formData = { username: this.username.value, password: this.password.value };
      this.http.post<any>(ApiPath.login, formData).subscribe(
        (response) => {
          console.log('Réponse de la requête:', response);
          // this.cookieService.set('cookieName', 'cookieValue', 30);
        },
        (error) => {
          this.username.setErrors({ incorrect: true });
          this.password.setErrors({ incorrect: true });
          this.error_msg = error.error.message;
        }
      );
    } else {
      this.username.setErrors({ incorrect: true });
      this.password.setErrors({ incorrect: true });
      this.error_msg = 'Veuillez remplir tous les champs requis.';
    }
  }
}

