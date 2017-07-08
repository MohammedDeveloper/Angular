import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import {RouterModule} from '@angular/router';
import {navRouterConfig} from './app.routes';

/// Custom components
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { ContactComponent } from './contact/contact.component';
import { GalleryComponent } from './gallery/gallery.component';



/// Custom providers
import { HomeService } from './home/home.service';
import { HomePipe } from './home/home.pipe';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    ContactComponent,
    GalleryComponent,
    HomePipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(navRouterConfig, {useHash: false})
  ],
  providers: [HomeService],
  bootstrap: [AppComponent]
})
export class AppModule { }
