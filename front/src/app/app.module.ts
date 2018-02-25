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
import { BiographieComponent } from './biographie/biographie.component';
import { EventsComponent } from './events/events.component';

const appRoutes: Routes = [
  {
    path: 'accueil',
    component: HomeComponent,
    data: { title: 'Accueil' }
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
    path: 'biographie',
    component: BiographieComponent,
    data: { title: 'Biographie' }
  },
  {
    path: 'evenements',
    component: EventsComponent,
    data: { title: 'Evénements' }
  },
  {
    path: '',
    redirectTo: '/accueil',
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
    BiographieComponent,
    EventsComponent,
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
