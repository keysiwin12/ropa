import { Component, OnInit } from '@angular/core';
import { SpotifyService } from '../services/spotify.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  public albums
  constructor(private _servicio:SpotifyService) { 
    this._servicio.getData().subscribe(data => {
      this.albums = data;
      console.log(this.albums); 
    },
    error => {
      console.log(error.error);
    }
    );
  }

  ngOnInit() {
  }

}
