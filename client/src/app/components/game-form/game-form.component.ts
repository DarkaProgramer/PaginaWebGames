import { Component,OnInit,HostBinding  } from '@angular/core';
import { Games } from 'src/app/models/Games';
import { GamesService } from 'src/app/services/games.service';
@Component({
  selector: 'app-game-form',
  templateUrl: './game-form.component.html',
  styleUrls: ['./game-form.component.css']
})
export class GameFormComponent {
 @HostBinding('class') classes = 'row';
 game: Games = { 
  id: 0,
  title: '',
  description: '',
  image: '',
  created_at: new Date()

 }
 constructor(private gameService : GamesService){}
 ngOInit(){}
  
saveNewGame(){
  this.gameService.saveGames(this.game).subscribe(
  resp =>{console.log(resp)},
  err => console.log(err)

  ) 

}

}
