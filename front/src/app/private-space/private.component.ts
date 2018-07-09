import { Component, OnInit, OnDestroy } from '@angular/core';
import { Http, Response } from '@angular/http';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-private',
  templateUrl: './private.component.html',
  styleUrls: ['./private.component.css']
})
export class PrivateComponent implements OnInit, OnDestroy {
  public login = '';
  public password = '';
  public open = null;
  public error = null;

  constructor(
    private RouterRoad: ActivatedRoute,
    private http: Http
  ) { }

  onSubmit(login, passwd) {
    this.login = login;
    this.password = passwd;
    this.error = null;

    console.log("value = ", login, passwd);

    this.http.get('https://api.pierreduplouy.fr/?login=' + login + '&password=' + passwd).subscribe(resp => {
      this.open = resp.json().content[0].directoryList[0];
    }, err => {
      this.error = err;
    })
  }

  close() {
    this.error = null;
    this.open = null;
  }
  ngOnInit() {
  }

  ngOnDestroy() {
  }
}
