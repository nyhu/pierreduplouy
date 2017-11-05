import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import 'hammerjs';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { GalleryComponent } from './components/gallery/gallery.component';
import { FooterComponent } from './components/footer/footer.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { ContactComponent } from './contact/contact.component';
import { PrivateComponent } from './private/private.component';

const appRoutes: Routes = [
  {
    path: 'home',
    component: HomeComponent,
    data: { title: 'Home' }
  },
  {
    path: 'portfolio',
    component: PortfolioComponent,
    data: { title: 'Portfolio' }
  },
  {
    path: 'portfolio/:galleryName',
    component: PortfolioComponent,
    data: { title: 'Gallery' }
  },
  {
    path: 'private-space',
    component: PrivateComponent,
    data: { title: 'Private' }
  },
  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full'
  },
  {
    path: 'contact',
    component: ContactComponent,
    data: { title: 'contact' }
  },
   // {
  //   path: '**',
  //   redirectTo: '/home',
  // }
];

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    GalleryComponent,
    PortfolioComponent,
    ContactComponent,
    FooterComponent,
    PrivateComponent,
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true } // <-- debugging purposes only
    ),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
