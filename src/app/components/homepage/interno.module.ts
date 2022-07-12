import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ClientiComponent } from './sidebar/clienti/clienti.component';
import { FattureComponent } from './sidebar/fatture/fatture.component';

import { InternoRoutingModule } from './interno-routing.module';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatListModule } from '@angular/material/list';

import { HomepagePage } from './homepage.page';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { RegisterPage } from './sidebar/register/register.page';
import { FormsModule } from '@angular/forms';
import { IndiceComponent } from './sidebar/indice/indice.component';
import { MatPaginatorModule } from '@angular/material/paginator';
@NgModule({
  declarations: [
    ClientiComponent,
    FattureComponent,
    HomepagePage,
    RegisterPage,
    IndiceComponent,
  ],
  imports: [
    CommonModule,
    InternoRoutingModule,

    MatGridListModule,
    MatSidenavModule,
    MatListModule,
    MatButtonModule,
    MatGridListModule,
    MatCardModule,
    MatIconModule,
    MatToolbarModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatIconModule,
    FormsModule,
    MatPaginatorModule,
  ],
})
export class InternoModule {}