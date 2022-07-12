import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AuttenticazioneModule } from './pages/auttenticazione/auttenticazione.module';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { HomepagePage } from './pages/auttenticazione/homepage/homepage.page';
import { MatButtonModule } from '@angular/material/button';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatCardModule } from '@angular/material/card';

@NgModule({
  declarations: [AppComponent, SidebarComponent, HomepagePage],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatIconModule,
    AuttenticazioneModule,
    MatSidenavModule,
    MatListModule,
    MatButtonModule,
    MatGridListModule,
    MatCardModule,
  ],
  exports: [SidebarComponent],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
