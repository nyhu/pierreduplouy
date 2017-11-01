import { Component, OnInit, HostListener, Inject } from '@angular/core';
import { DOCUMENT } from '@angular/platform-browser';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  public imageSources: string[] = [
    'IMG_0274.JPG',
    'IMG_2709.JPG',
    'IMG_4317.JPG',
    'IMG_5549.JPG',
    'IMG_5674.JPG',
    'IMG_5509.JPG',
    'IMG_5726.JPG',
    'IMG_8985.JPG',
  ];
  public currentElement: Number = 1;

  constructor(@Inject(DOCUMENT) private Document: Document) {
    for (let i = 0; i < this.imageSources.length; i++) {
      this.imageSources[i] = '/assets/photo-gallery/' + this.imageSources[i];
    }
  }

  ngOnInit() {
  }

  public getThumbOpacity(currentElement, currentThumb) {
    currentElement = (currentElement + 900) / 900;
    if (currentElement === currentThumb) {
      return 1;
    } else if (currentElement < currentThumb) {
      return 1 / (1.4 * (currentThumb / currentElement));
    }
    return 1 / (1.4 * (currentElement / currentThumb));
  }

  @HostListener('window:scroll', [])
  onWindowScroll() {
    this.currentElement = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;
  }
}
