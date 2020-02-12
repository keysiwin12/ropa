import { Injectable } from '@angular/core';
import { HttpClient , HttpHeaders } from '@angular/common/http'
@Injectable({
  providedIn: 'root'
})
export class SpotifyService {

  constructor(private http  : HttpClient) { }

  private apiSpotify = 'https://api.spotify.com/v1/browse/new-releases';
  
  private apiSearchSpotify = 'https://api.spotify.com/v1/search?q=';
  getData() {

    const headers = new HttpHeaders({
      'Authorization' : "Bearer BQBCurjBQP5FL1VQNBK2B8hHvhQrGygdgWO3yKTcB4vX4GCCW0XC9QFssBMfZ8P5p6cVQNL1hJUzzeL1wMg"
    })

    return this.http.get(this.apiSpotify,{headers})
  }
  
  searchData(q : string , type : string ) {
    const headers = new HttpHeaders({
      'Authorization' : "Bearer BQBCurjBQP5FL1VQNBK2B8hHvhQrGygdgWO3yKTcB4vX4GCCW0XC9QFssBMfZ8P5p6cVQNL1hJUzzeL1wMg"
    })
    return this.http.get(`${this.apiSearchSpotify}${q}&type=${type}&limit=10`,{headers})
  }
}
