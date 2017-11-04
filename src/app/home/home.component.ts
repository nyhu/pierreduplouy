import { Component, OnInit, HostListener, Inject } from '@angular/core';
import { DOCUMENT } from '@angular/platform-browser';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  public route = '/home';
  public pathToImages = '/assets/photo-gallery/Home/';
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

  constructor() {
  }

  ngOnInit() {
  }
}
