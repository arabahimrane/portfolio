import { Component } from '@angular/core';
import { FormControl, FormGroupDirective, NgForm, Validators } from '@angular/forms';
import { ErrorStateMatcher } from '@angular/material/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import { DialogComponent } from 'src/app/shared/components/dialog/dialog.component';
import { ErrorInterface } from 'src/app/shared/interface/error';
import { loginData } from 'src/app/shared/interface/login';
import { AuthService } from 'src/app/shared/service/auth.service';
import { MyCookieService } from 'src/app/shared/service/my-cookie.service';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css'],
  providers: [CookieService],
})

export class LoginFormComponent implements ErrorStateMatcher {

  hide = true;
  error_msg!: string;
  username = new FormControl('', [Validators.required]);
  password = new FormControl('', [Validators.required]);

  constructor(private router: Router,private myCookie: MyCookieService,private authService: AuthService,private dialog: MatDialog) { }

  openDialog(enterAnimationDuration: string, exitAnimationDuration: string, data: ErrorInterface): void {
    console.log("openDialog: ", data.title);
    this.dialog.open(DialogComponent, {
      width: '250px',
      enterAnimationDuration,
      exitAnimationDuration,
      data: data
    });
  }

  isErrorState(control: FormControl | null, form: NgForm | FormGroupDirective | null): boolean {

    const isSubmitted = form && form.submitted;
    return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));

  }

  async onSubmit(): Promise<any> {

    if (this.username.valid && this.password.valid) {
      try {
        var formData: loginData = { username: this.username.value!, password: this.password.value! };
        return this.authService.signin(formData).subscribe(
          (res) => {
            this.router.navigateByUrl('/admin');
          },
          (error) => {
            throw error;
          }
        );

      } catch (error) {

        console.log("on submit: ", error);
        this.username.setErrors({ incorrect: true });
        this.password.setErrors({ incorrect: true });
        this.error_msg = error!.toString();


      }

    } else {

      this.username.setErrors({ incorrect: true });
      this.password.setErrors({ incorrect: true });
      this.error_msg = 'Veuillez remplir tous les champs requis.';

    }
  }
}

