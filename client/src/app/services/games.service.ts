import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Games } from './models/Games';

@Injectable({
  providedIn: 'root'
})
export class GamesService {

 //API_URI = 'http://localhost:3000/src/data'; // fuente de datos archivo json y servidor json
  API_URI= 'http://localhost:3000/api' ;//fuente de datos back-end y base de datos
 


  constructor(private http : HttpClient) { }

  getGames(){
    return this.http.get(`${this.API_URI}/games`)
  }


  getGame(id : string){
    return this.http.get(`${this.API_URI}/games/${id}`)
  }

saveGames(game: Games){
  return this.http.post(`${this.API_URI}/games`,game)
}
}
