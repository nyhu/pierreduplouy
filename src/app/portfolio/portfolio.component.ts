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
  ];
  public Spirit: string[] = [
    '1010164_10152985891420118_1761859994_n.jpg',
    '10665795_10154675388675118_40466241654974777_n.jpg',
    '16831925_10158347304560118_4069544806217532620_n.jpg',
    '20638959_10159244701945118_4306078506850343262_n.jpg',
    '23795167_10159692106265118_5323956002152575652_n.jpg',
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
    '004.JPG',
    '17523004_10158495529525118_1238411069178986374_n.jpg',
    '222778_10150619970120118_8042046_n.jpg',
    '23822_10150172036385118_1549642_n.jpg',
    '23822_10150172040845118_2593555_n.jpg',
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
    '15032672_10157826071360118_5541638258355790382_n.jpg',
    '17203070_10158395351650118_6600197916396089667_n.jpg',
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
    'IMG_8985.JPG',
    'IMG_8989.JPG',
    'IMG_9141.JPG',
    'IMG_9148.JPG',
    'IMG_9150.JPG',
    'IMG_9175.JPG',
    'IMG_9185.JPG',
  ];
  public Animal: string[] = [
    '10563034_10154536266900118_1186534598012332256_n.jpg',
    '10609462_10154536279575118_8188351947805121319_n.jpg',
    'IMG_2709.JPG',
    'IMG_3829.JPG',
    'IMG_9540.jpeg',
    'IMG_9563.jpeg',
    'IMG_9592.jpeg',
    'IMG_9596.jpeg',
    'IMG_9603.jpeg',
    'IMG_9606.jpeg',
    'IMG_9617.jpeg',
    'IMG_9684.jpeg',
    'IMG_9750.jpeg',
    'IMG_9754.jpeg',
    'IMG_9808.jpg',
    'IMG_9824.jpeg',
    'IMG_9860.jpeg',
    'IMG_9863.jpeg',
    'IMG_9867.jpeg',
    'IMG_9877.jpeg',
    'IMG_9913.jpeg',
    'IMG_9917.jpeg',
    'IMG_9928.jpeg',
    'IMG_9947.jpeg',
  ];
  public PeintureAbstraite: string[] = [
    '001.JPG',
    '13043629_10156885477700118_8512479478232080046_n.jpg',
    '13557805_10157175033120118_3799658241014390063_n.jpg',
    '13654341_10157212544605118_4368359716830063337_n.jpg',
    '14595777_10157637252200118_3172832496046253498_n.jpg',
    '14642478_10157637257635118_5588018165238471923_n.jpg',
    '16406694_10158222861300118_7399238620102322498_n.jpg',
    '16406886_10158222867590118_7541446531904635725_n.jpg',
    '16425791_10158222873060118_5518510205928915433_n.jpg',
    '22405603_10159517426565118_140012722411950857_n.jpg',
    '23822_10150168338090118_6211958_n.jpg',
    '24131572_10159729979855118_3555148239418050710_n.jpg',
    'IMG_5328.JPG',
    'IMG_5348.JPG',
    'IMG_5506.JPG',
    'IMG_5508.JPG',
    'IMG_5674.JPG',
    'IMG_5676.JPG',
    'IMG_5679.JPG',
    'IMG_5681.JPG',
    'IMG_5726.JPG',
    'IMG_5780.JPG',
    'IMG_8546.JPG',
    'IMG_9209.JPG',
    'IMG_9239.JPG',
    'IMG_9240.JPG',
    'IMG_9242.JPG',
    'IMG_9243.JPG',
    'IMG_9244.JPG',
    'IMG_9245.JPG',
    'IMG_9246.JPG',
    'IMG_9247.JPG',
    'IMG_9327.JPG',
  ];
  public Paysage: string[] = [
    '10435416_10154288935610118_3316890210166148530_n.jpg',
    '15181129_10157892402125118_7854435761991725771_n.jpg',
    '15193607_10157892401220118_3643440099580653868_n.jpg',
    '15232279_10157892407535118_6953536103179213576_n.jpg',
    '23658628_10159692105455118_2198988967899294277_n.jpg',
    '23658828_10159692104415118_2422327758194651607_n.jpg',
    '23722507_10159692111080118_5494934483628493248_n.jpg',
    '554131_10153311371520118_128691945_n.jpg',
  ]
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
          case 'Animal': this.imageSources = this.Animal; break;
          case 'Paysage': this.imageSources = this.Paysage; break;
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
