import { Component, OnInit } from '@angular/core';
import {DataService} from "../course/data.service";
import {Observable} from "rxjs";
import {Player} from "../model/player";

@Component({
  selector: 'app-complete',
  templateUrl: './complete.component.html',
  styleUrls: ['./complete.component.css']
})
export class CompleteComponent implements OnInit {

  constructor(private dataService: DataService) { }

  players$: Observable<Player[]>;

  ngOnInit() {
    this.getPlayerData('123f');
  }

  getPlayerData(gameId){
    this.players$ = this.dataService.getPlayerData(gameId);
  }

}
