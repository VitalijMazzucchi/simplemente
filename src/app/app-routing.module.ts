import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomepagePage } from './pages/auttenticazione/homepage/homepage.page';
import { LoginPage } from './pages/auttenticazione/login/login.page';
import { RegisterPage } from './pages/auttenticazione/register/register.page';

const routes: Routes = [
  { path: 'Login', component: LoginPage },
  { path: '', pathMatch: 'full', redirectTo: 'Login' },
  { path: 'homepage', component: HomepagePage },
  { path: 'register', component: RegisterPage },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
