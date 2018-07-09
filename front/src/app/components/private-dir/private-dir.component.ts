import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-private-dir',
  templateUrl: './private-dir.component.html',
  styleUrls: ['./private-dir.component.css']
})
export class PrivateDirComponent implements OnInit {
  @Input() public dir;
  @Input() public deep;
  public pathToImg = null;
  public route = '/private-space';
  public open: boolean = false;

  constructor() {}

  ngOnInit() {
    this.pathToImg = "https://cdn.pierreduplouy.fr" + this.dir.Path + "/";
  }

  openDir() {
    this.open = !this.open;
  }
}
