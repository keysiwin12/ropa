import { Component, OnInit } from '@angular/core';
import { SpotifyService } from '../services/spotify.service';

@Component({
  selector: 'app-buscar',
  templateUrl: './buscar.component.html',
  styleUrls: ['./buscar.component.css']
})
export class BuscarComponent implements OnInit {

  constructor(private spotifyService : SpotifyService) {
      
   }

  ngOnInit() {
  }
  
  public name : string = '';
  public boolImage : false ;

  public albums ;
  onSearch(event) {
    console.log(this.name)
    this.spotifyService.searchData(this.name, 'artist').subscribe(response => {
      this.albums = response;
      
      console.log(this.albums)
    })
  }


}
