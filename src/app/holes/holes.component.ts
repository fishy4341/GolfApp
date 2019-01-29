import { Component, OnInit } from '@angular/core';
import {DataService} from "../course/data.service";
import {Observable} from "rxjs";
import {Player} from "../model/player";
import {ActivatedRoute, Router} from "@angular/router";
import {Company} from "../../../../angular-fire-example/src/app/models/company";

@Component({
  selector: 'app-holes',
  templateUrl: './holes.component.html',
  styleUrls: ['./holes.component.css']
})
export class HolesComponent implements OnInit {

  players$: Observable<Player[]>;

  get holeId(): number {
    return (Number(this.route.snapshot.paramMap.get('id')) - 1);
  }

  constructor(private dataService: DataService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    this.getPlayerData("123f")
  }

  getPlayerData(gameId) {
    this.players$ = this.dataService.getPlayerData(gameId);
  }

  nextHole(players){
    this.dataService.savePlayers("123f", players).then(_ => {
      let nextHole = this.holeId + 2;
      console.log(nextHole);
      this.router.navigate([`/holes/${nextHole}`]);
    });
  }

  previousHole(){
    let previoushole = this.holeId;
    console.log(previoushole);
    this.router.navigate([`/holes/${previoushole}`]);
  }
  completeGame(players){
    this.dataService.savePlayers("123f", players).then(_ => {
      this.router.navigate([`/complete`]);
    });
  }
}
