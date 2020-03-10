import { Component, OnInit } from '@angular/core';
import { SpotifyService } from '../services/spotify.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-buscar',
  templateUrl: './buscar.component.html',
  styleUrls: ['./buscar.component.css']
})
export class BuscarComponent implements OnInit {

  constructor(private spotifyService : SpotifyService , private router: Router) {
      
   }

  ngOnInit() {
  }
  
  public name : string = '';
  public boolImage : false ;
  public loading : boolean ;
  public albums ;
  onSearch(event) {
    if(this.name) {
      this.loading = true;
      console.log(this.name)
      this.spotifyService.searchData(this.name, 'artist').subscribe(response => {
        this.albums = response;
        console.log(this.albums)
        this.loading = false;
        for(let album of this.albums) {
          console.log(album.id);
        }
      })
    }
  }

  verArtista(id) { 
    console.log(id)
    this.router.navigate(['artist',id]);
  }

}
