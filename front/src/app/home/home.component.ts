import { Component, OnInit, HostListener, Inject } from '@angular/core';
import { DOCUMENT } from '@angular/platform-browser';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  public route = '/accueil';
  public pathToImages = '/assets/photo-gallery/Home/';
  public imageSources: string[] = [
    '001.JPG',
    '012.JPG',
    '1010164_10152985891420118_1761859994_n.jpg',
    '10435416_10154288935610118_3316890210166148530_n.jpg',
    '10563034_10154536266900118_1186534598012332256_n.jpg',
    '13557805_10157175033120118_3799658241014390063_n.jpg',
    '14720379_10157712516860118_5813223767870276999_n.jpg',
    '15181129_10157892402125118_7854435761991725771_n.jpg',
    '23822_10150172040845118_2593555_n.jpg',
    'IMG_0274.JPG',
    'IMG_2709.JPG',
    'IMG_4317.JPG',
    'IMG_5676.JPG',
    'IMG_9118.JPG',
  ];

  constructor() {
  }

  ngOnInit() {
  }
}
