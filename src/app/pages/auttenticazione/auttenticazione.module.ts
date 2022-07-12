import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

import { NavbarComponent } from 'src/app/components/navbar/navbar.component';
import { LoginPage } from './login/login.page';
import { FormsModule } from '@angular/forms';
import { RegisterPage } from './register/register.page';

import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSelectModule } from '@angular/material/select';

import { StellineComponent } from './stelline/stelline.component';
@NgModule({
  declarations: [LoginPage, RegisterPage, NavbarComponent, StellineComponent],
  imports: [
    CommonModule,
    MatFormFieldModule,
    MatInputModule,
    MatDatepickerModule,
    MatIconModule,
    MatCheckboxModule,
    MatButtonModule,
    FormsModule,
    HttpClientModule,
    MatToolbarModule,
    MatSelectModule,
  ],
})
export class AuttenticazioneModule {}
