import { NgModule } from '@angular/core';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatMenuModule } from '@angular/material/menu';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { FlexLayoutModule } from '@angular/flex-layout';




const Material = [MatToolbarModule, MatMenuModule, MatSidenavModule, MatListModule, MatButtonModule, MatIconModule]



@NgModule({
  declarations: [],
  imports: [Material, FlexLayoutModule],
  exports: [Material, FlexLayoutModule]
})
export class MaterialModule { }
