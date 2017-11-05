import { Component, OnInit, HostListener, Inject, Input } from '@angular/core';
import { DOCUMENT } from '@angular/platform-browser';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.css']
})
export class GalleryComponent implements OnInit {
  @Input() public imageSources: string[];
  @Input() public pathToImages: string;
  @Input() public route: string;
  public currentElement: Number = 1;

  constructor( @Inject(DOCUMENT) private Document: Document) {
  }

  ngOnInit() {
    for (let i = 0; i < this.imageSources.length; i++) {
      this.imageSources[i] = this.pathToImages + this.imageSources[i];
    }
  }

  public getThumbOpacity(currentElement, currentThumb) {
    console.log('currentElement = ', currentElement, 'curentThumb = ', currentThumb);
    currentElement = (currentElement + 960) / 900;
    if (currentElement + 0.5 >= currentThumb && currentElement - 0.5 <= currentThumb) {
      return 1;
    } else if (currentElement < currentThumb) {
      return 0.7 / ((currentThumb - currentElement) * (currentThumb - currentElement));
    }
    return 0.7 / ((currentElement - currentThumb) * (currentElement - currentThumb));
  }

  @HostListener('window:scroll', [])
  onWindowScroll() {
    this.currentElement = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;
  }
}
