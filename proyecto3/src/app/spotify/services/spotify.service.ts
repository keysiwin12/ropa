import { Injectable } from '@angular/core';
import { HttpClient , HttpHeaders } from '@angular/common/http'
import {map} from 'rxjs/operators'
@Injectable({
  providedIn: 'root'
})
export class SpotifyService {

  constructor(private http  : HttpClient) { }

  private apiSpotify = 'browse/new-releases';
  
  private apiSearchSpotify = 'search?q=';


  public getQuery = (query) => {
    const headers = new HttpHeaders({
      'Authorization' : "Bearer BQBUEboH2O-nGrhd8ulBgO7ucQLmbmIy9Vf4qEWoo0m395e0VuVsxAncK4aLrz1P48RH5JtHYsPr8FZXG1A"
    });
    const url = `https://api.spotify.com/v1/${query}`;
    return this.http.get(url,{headers});
  }

  getData() {
    return this.getQuery(this.apiSpotify).pipe(map(response => response['albums'].items));
  }


  searchData(q : string , type : string ) {
    return this.getQuery(`${this.apiSearchSpotify}${q}&type=${type}&limit=10`).pipe(map((response:any) => response.artists.items));
  }

  getArtist(id: string) {
    return this.getQuery(`artists/${id}`).pipe(map(response => response));
  }

  getTracks(id: string) {
    return this.getQuery(`artists/${id}/top-tracks?country=PE`).pipe(map(response => response['tracks']));
  }

  
}
