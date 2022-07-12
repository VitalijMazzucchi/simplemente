import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomepagePage } from './components/homepage/homepage.page';
import { ClientiComponent } from './components/homepage/sidebar/clienti/clienti.component';
import { FattureComponent } from './components/homepage/sidebar/fatture/fatture.component';
import { IndiceComponent } from './components/homepage/sidebar/indice/indice.component';
import { RegisterPage } from './components/homepage/sidebar/register/register.page';

import { LoginPage } from './pages/auttenticazione/login/login.page';

const routes: Routes = [
  { path: 'Login', component: LoginPage },
  { path: '', pathMatch: 'full', redirectTo: 'Login' },
  {
    path: 'homepage',
    component: HomepagePage,

    children: [
      {
        path: '',
        component: IndiceComponent,
      },
      { path: 'indice', component: IndiceComponent },
      { path: 'clienti', component: ClientiComponent },
      { path: 'fatture', component: FattureComponent },
      { path: 'register', component: RegisterPage },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
