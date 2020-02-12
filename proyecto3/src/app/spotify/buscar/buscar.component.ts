import { Component, OnInit } from '@angular/core';
import { SpotifyService } from '../services/spotify.service';

@Component({
  selector: 'app-buscar',
  templateUrl: './buscar.component.html',
  styleUrls: ['./buscar.component.css']
})
export class BuscarComponent implements OnInit {

  constructor(private spotifyService : SpotifyService) {
    // this.spotifyService.searchData('muse','artist').subscribe(response => {
    //   // console.log(response);     
    // })
      
   }

  ngOnInit() {
  }
  
  public name : string = '';

  public albums ;
  onSearch(event) {
    console.log(this.name)
    this.spotifyService.searchData(this.name, 'artist').subscribe(response => {
      console.log(response['artists']);
      this.albums = response['artists'].items
    })
  }
}
