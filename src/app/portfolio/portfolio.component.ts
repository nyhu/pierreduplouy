import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.css']
})
export class PortfolioComponent implements OnInit, OnDestroy {
  public route = '/portfolio';
  public pathToImages = '/assets/photo-gallery/Portfolio/PeintureAbstraite/';
  public Vegetal: string[] = [
    '062.JPG',
    'IMG_0448.JPG',
    'IMG_5603.JPG',
    'IMG_5952.JPG',
    'IMG_5973.JPG',
    'IMG_6023.JPG',
    'IMG_8593.JPG',
    'IMG_8594.JPG',
    'IMG_8985.JPG',
  ];
  public Spirit: string[] = [
    'IMG_5549.JPG',
    'IMG_9115.JPG',
    'IMG_9118.JPG',
    'IMG_9215.JPG',
    'IMG_9361.JPG',
    'IMG_9364.JPG',
  ];
  public RefletDO: string[] = [
    '006.JPG',
    '009.JPG',
    '012.JPG',
    '019.JPG',
    '021.JPG',
    'IMG_0274.JPG',
    'IMG_4317.JPG',
    'IMG_9238.JPG',
  ];
  public Nues: string[] = [
    '003.JPG',
    '004.JPG',
    'IMG_5509.JPG',
    'IMG_5737.JPG',
    'IMG_8535.JPG',
    'IMG_8538.JPG',
    'IMG_8540.JPG',
    'IMG_9325.JPG',
    'IMG_9329.JPG',
  ];
  public Ciel: string[] = [
    '001 (2).JPG',
    '013.JPG',
    '014.JPG',
    '017.JPG',
    'IMG_0272.JPG',
    'IMG_0537.JPG',
    'IMG_2960.JPG',
    'IMG_4307.JPG',
    'IMG_4317.JPG',
    'IMG_4330.JPG',
    'IMG_4345.JPG',
    'IMG_4347.JPG',
    'IMG_4377.JPG',
    'IMG_5583.JPG',
    'IMG_5585.JPG',
    'IMG_6293.JPG',
    'IMG_8989.JPG',
    'IMG_9141.JPG',
    'IMG_9148.JPG',
    'IMG_9150.JPG',
    'IMG_9175.JPG',
    'IMG_9185.JPG',
    'IMG_9195.JPG',
  ];
  public Chevaux: string[] = [
    'IMG_2709.JPG',
    'IMG_3829.JPG',
    'IMG_9539.jpeg',
    'IMG_9540.jpeg',
    'IMG_9551.jpeg',
    'IMG_9563.jpeg',
    'IMG_9578.jpeg',
    'IMG_9592.jpeg',
    'IMG_9596.jpeg',
    'IMG_9603.jpeg',
    'IMG_9606.jpeg',
    'IMG_9617.jpeg',
    'IMG_9619.jpeg',
    'IMG_9624.jpeg',
    'IMG_9643.jpeg',
    'IMG_9653.jpeg',
    'IMG_9659.jpeg',
    'IMG_9669.jpeg',
    'IMG_9684.jpeg',
    'IMG_9714.jpeg',
    'IMG_9750.jpeg',
    'IMG_9754.jpeg',
    'IMG_9761.jpeg',
    'IMG_9762.jpeg',
    'IMG_9783.jpeg',
    'IMG_9793.jpeg',
    'IMG_9802.jpeg',
    'IMG_9808.jpg',
    'IMG_9810.jpeg',
    'IMG_9815.jpeg',
    'IMG_9818.jpeg',
    'IMG_9824.jpeg',
    'IMG_9828.jpeg',
    'IMG_9839.jpeg',
    'IMG_9847.jpeg',
    'IMG_9851.jpeg',
    'IMG_9860.jpeg',
    'IMG_9863.jpeg',
    'IMG_9867.jpeg',
    'IMG_9877.jpeg',
    'IMG_9888.jpeg',
    'IMG_9890.jpeg',
    'IMG_9908.jpeg',
    'IMG_9913.jpeg',
    'IMG_9917.jpeg',
    'IMG_9928.jpeg',
    'IMG_9947.jpeg',
  ];
  public PeintureAbstraite: string[] = [
    '001.JPG',
    '007.JPG',
    '011.JPG',
    '020.JPG',
    'IMG_5328.JPG',
    'IMG_5347.JPG',
    'IMG_5348.JPG',
    'IMG_5506.JPG',
    'IMG_5507.JPG',
    'IMG_5508.JPG',
    'IMG_5516.JPG',
    'IMG_5674.JPG',
    'IMG_5675.JPG',
    'IMG_5676.JPG',
    'IMG_5679.JPG',
    'IMG_5681.JPG',
    'IMG_5724.JPG',
    'IMG_5725.JPG',
    'IMG_5726.JPG',
    'IMG_5780.JPG',
    'IMG_8546.JPG',
    'IMG_9206.JPG',
    'IMG_9207.JPG',
    'IMG_9209.JPG',
    'IMG_9210.JPG',
    'IMG_9239.JPG',
    'IMG_9240.JPG',
    'IMG_9241.JPG',
    'IMG_9242.JPG',
    'IMG_9243.JPG',
    'IMG_9244.JPG',
    'IMG_9245.JPG',
    'IMG_9246.JPG',
    'IMG_9247.JPG',
    'IMG_9248.JPG',
    'IMG_9249.JPG',
    'IMG_9252.JPG',
    'IMG_9316.JPG',
    'IMG_9318.JPG',
    'IMG_9319.JPG',
    'IMG_9320.JPG',
    'IMG_9321.JPG',
    'IMG_9323.JPG',
    'IMG_9324.JPG',
    'IMG_9327.JPG',
  ];
  public imageSources: string[] = this.PeintureAbstraite;
  private sub;
  public galleryName;

  constructor(private RouterRoad: ActivatedRoute) { }

  ngOnInit() {
    this.sub = this.RouterRoad.params.subscribe(params => {
      this.galleryName = params['galleryName'];
      if (this.galleryName) {
        this.route = '/portfolio/' + this.galleryName;
        this.pathToImages = '/assets/photo-gallery/Portfolio/' + this.galleryName + '/';
        switch (this.galleryName) {
          case 'Chevaux': this.imageSources = this.Chevaux; break;
          case 'Ciel': this.imageSources = this.Ciel; break;
          case 'Nues': this.imageSources = this.Nues; break;
          case 'PeintureAbstraite': this.imageSources = this.PeintureAbstraite; break;
          case 'RefletDO': this.imageSources = this.RefletDO; break;
          case 'Spirit': this.imageSources = this.Spirit; break;
          case 'Vegetal': this.imageSources = this.Vegetal; break;
        }
      }
    });
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }
}
