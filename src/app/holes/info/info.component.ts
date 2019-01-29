import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {DataService} from "../../course/data.service";
import {Company} from "../../../../../angular-fire-example/src/app/models/company";
import {Observable} from "rxjs";
import {Hole} from "../../model/hole";
import {AngularFireDatabase} from "@angular/fire/database";
import {Player} from "../../model/player";

@Component({
  selector: 'app-info',
  templateUrl: './info.component.html',
  styleUrls: ['./info.component.css']
})
export class InfoComponent implements OnInit {

  get holeId(): number {
    return (Number(this.route.snapshot.paramMap.get('id')) - 1);
  }

  hole$: Observable<Hole>;
  player$: Observable<Player[]>;
  private sub: any;

  constructor(private route: ActivatedRoute, private dataService: DataService, private db: AngularFireDatabase) {
    // this.hole$ = this.db.object<Hole>(`games/123f/holes/${this.holeId}`).valueChanges();
  }

  ngOnInit() {
    this.sub = this.route.params.subscribe(params => {
      this.paramsChanged(params['id']);
    });
    console.log(this.holeId);

  }

  getHoleData(gameId, holeId) {
    this.hole$ = this.dataService.getHoleData(gameId, holeId);
    this.player$ = this.dataService.getPlayerData(gameId);
    console.log(this.hole$);
  }

  paramsChanged(id) {
    this.getHoleData("123f", this.holeId);
  }

}
