import { Routes } from '@angular/router';

/// Custom components
import { HomeComponent } from './home/home.component';
import { ContactComponent } from './contact/contact.component';
import { GalleryComponent } from './gallery/gallery.component';

/// Routes
export const navRouterConfig: Routes = [
      { path: '', pathMatch: 'prefix', redirectTo: 'home'},
      { path: "home", component: HomeComponent },
      { path: "contact", component: ContactComponent },
      { path: "gallery", component: GalleryComponent }
];

