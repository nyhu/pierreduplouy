import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public title = 'Pierre du Plouy';
  public navbarName = 'topnav';

  constructor () {
  }

  public expandNavbar() {
    if (this.navbarName === 'topnav') {
      this.navbarName += ' responsive';
    } else {
      this.navbarName = 'topnav';
    }
    console.log('ok');
  }
}
