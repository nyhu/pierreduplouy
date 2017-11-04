import { Component, OnInit, HostListener, Inject } from '@angular/core';
import { DOCUMENT } from '@angular/platform-browser';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  public imageSources: string[] = [
    '001.JPG',
    '012.JPG',
    'IMG_0274.JPG',
    'IMG_0537.JPG',
    'IMG_2709.JPG',
    'IMG_4317.JPG',
    'IMG_4345.JPG',
    'IMG_5509.JPG',
    'IMG_5676.JPG',
    'IMG_5679.JPG',
    'IMG_6293.JPG',
    'IMG_9118.JPG',
    'IMG_9207.JPG',
    'IMG_9209.JPG',
    'IMG_9750.jpeg',
    'IMG_9828.jpeg'
  ];
  public currentElement: Number = 1;

  constructor(@Inject(DOCUMENT) private Document: Document) {
    for (let i = 0; i < this.imageSources.length; i++) {
      this.imageSources[i] = '/assets/photo-gallery/Home/' + this.imageSources[i];
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
