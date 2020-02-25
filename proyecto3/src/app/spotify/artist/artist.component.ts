import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SpotifyService } from '../services/spotify.service';

@Component({
  selector: 'app-artist',
  templateUrl: './artist.component.html',
  styleUrls: ['./artist.component.css']
})
export class ArtistComponent implements OnInit {

  public artist
  public imagen;
  public id;
  constructor(private _ac : ActivatedRoute , private spotifyService : SpotifyService) {
    this._ac.params.subscribe(response => {
      console.log(response);
      this.id = response.id;
      console.log(this.id)
      this.spotifyService.getArtist(this.id).subscribe(data => {
        console.log(data);
        this.artist = data;
        this.imagen = this.artist.images[0].url;      
      } ,
      error => {
        console.log(error.error);
      }
      )
    })
  }


  ngOnInit() {
  
  }


  
}
