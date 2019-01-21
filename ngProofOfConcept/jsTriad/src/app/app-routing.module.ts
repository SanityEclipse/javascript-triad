import { NgModule } from '@angular/core';

import { Routes, RouterModule } from '@angular/router';

import { GameModule } from "./game/game.module";

const routes : Routes = [
  {
    path:'', redirectTo: 'game',
    pathMatch: 'full',
    data: {}
  }
]

@NgModule({
  imports: [
    GameModule, 
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})

export class AppRoutingModule{};
