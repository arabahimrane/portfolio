import { Component, Input } from '@angular/core';
import { ApiService } from 'src/app/shared/service/api.service';
import { GetDataService } from '../../service/get-data.service';

@Component({
  selector: 'app-option-menu',
  templateUrl: './option-menu.component.html',
  styleUrls: ['./option-menu.component.css']
})
export class OptionMenuComponent {
  @Input() id: string | undefined;
  constructor(private apiService: ApiService, private getDataService: GetDataService) {

    
  }

  delete() {
    console.log("delete: ", this.id);
    this.apiService.deletCertificate(this.id!).subscribe(() => {
      this.getDataService.getCertificate();
    });    
  }

  edit() {
    console.log("edite: ", this.id);

  }

}
