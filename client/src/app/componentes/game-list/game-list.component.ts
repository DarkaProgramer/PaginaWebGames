import { Component,HostBinding } from '@angular/core';
import { GamesService } from 'src/app/services/games.service';

@Component({
  selector: 'app-game-list',
  templateUrl: './game-list.component.html',
  styleUrls: ['./game-list.component.css']
})
export class GameListComponent {
   @HostBinding('class') classes='row';
    games: any =[];


    constructor(private gamesService : GamesService){}



  ngOnInit(){
    this.gamesService.getGames().subscribe(
      
      resp => { 
        this.games =resp;
        
        //console.log(resp),
      },
      err => console.error(err)
    )
  }
}
