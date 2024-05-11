import { Component } from '@angular/core';
import { GetCertificatesService } from '../../service/get-certificates.service';
import { Validators, FormControl, FormGroupDirective, NgForm } from '@angular/forms';
import { ErrorStateMatcher } from '@angular/material/core';
import { MatDialog } from '@angular/material/dialog';
import { Certificate } from 'src/app/shared/interface/certicates';
import { DialogComponent } from 'src/app/shared/components/dialog/dialog.component';
import { ErrorInterface } from 'src/app/shared/interface/error';
import { ApiService } from 'src/app/shared/service/api.service';
import { map } from 'rxjs';
import { DialogSpinerComponent } from 'src/app/shared/components/dialog-spiner/dialog-spiner.component';
import { GetDataService } from '../../service/get-data.service';

@Component({
  selector: 'app-certificates',
  templateUrl: './certificates.component.html',
  styleUrls: ['./certificates.component.css']
})
export class CertificatesComponent implements ErrorStateMatcher {
  displayedColumns: string[] = ['Name', 'Image', 'Url'];
  error_msg!: string;

  body!: Certificate;
  title = new FormControl('', [Validators.required]);
  url = new FormControl('', [Validators.required]);

  files?: File;
  ulrFile: string | undefined;
  constructor(public getCertificatesService: GetCertificatesService, private dialog: MatDialog, private getDataService: GetDataService,
    private apiService: ApiService
  ) { }

  openDialog(type: string, enterAnimationDuration: string, exitAnimationDuration: string, data: ErrorInterface): void {
    console.log("openDialog: ", data.title);
    this.dialog.closeAll();
    type == 'spiner' ?
      this.dialog.open(DialogSpinerComponent, {
        width: '250px',
        enterAnimationDuration,
        exitAnimationDuration,
        data: data
      }) :
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

  async onSelect(event: any) {
    this.files = event.addedFiles[0]
    if (this.files) {
      await this.fileToBase64(this.files).then((result) => {
        var fileBase64 = result.replace('data:', '')
          .replace(/^.+,/, ''); // To remove data url part
        this.openDialog('spiner', '5', '5', { title: 'Upload', content: '' })

        this.apiService.uploadFile(fileBase64!).pipe(map((data) => {
          this.ulrFile = data;
          this.dialog.closeAll();
        })).subscribe();
      }).catch(error => {
        this.openDialog('info', '5', '4', { title: 'error', content: error })
      });
    }
  }

  fileToBase64 = (file: File): Promise<string> => {
    return new Promise<string>((resolve, reject) => {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => {
        console.log(reader.result!.toString());
        resolve(reader.result!.toString());
      };
      reader.onerror = error => reject(error);
    });
  }

  onRemove(event: any) {
    this.apiService.delletFile(this.ulrFile!).subscribe();
    this.files = undefined;
  }

  async onSubmit() {

    if (!this.title.valid) {
      this.title.setErrors({ incorrect: true });
      this.error_msg = "Error avec titre";
    } else if (!this.url.valid) {
      this.url.setErrors({ incorrect: true });
      this.error_msg = "Error avec url";
    } else if (!this.files) {
      this.error_msg = "Error avec le telechargement";
    } else {
      this.body = { title: this.title.value!.toString(), url: this.url.value!.toString(), urlImage: this.ulrFile! }
      this.openDialog('spiner', '5', '5', { title: 'Submit', content: '' })

      this.apiService.submitCertficate(this.body).pipe(map((data) => {
        this.openDialog('submit', '5', '5', { title: 'Submit', content: 'Done' })

      })).subscribe(() => {
        this.title.setValue(null);
        this.url.setValue(null);
        this.files = undefined;
        this.ulrFile = undefined;
        this.getDataService.getCertificate();

      });


    }
  }
}
