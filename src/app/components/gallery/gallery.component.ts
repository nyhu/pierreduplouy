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
