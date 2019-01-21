import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GameComponent }     from './game.component';
import { PlayerComponent }   from './player/player.component';
import { OpponentComponent } from './opponent/opponent.component';
import { BoardComponent}     from './board/board.component';

import { GameRoutingModule } from './game-routing.module';

@NgModule({
  imports:[ CommonModule, GameRoutingModule ],
  exports:[],
  declarations:[ GameComponent, PlayerComponent, BoardComponent, OpponentComponent ],
  providers:[]
})

export class GameModule {}
