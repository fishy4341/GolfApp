import { Injectable } from '@angular/core';
import {AngularFireDatabase, AngularFireObject} from "@angular/fire/database";
import {Game} from "../model/game";
import {Observable} from "rxjs";
import {Hole} from "../model/hole";
import {Player} from "../model/player";

@Injectable({
  providedIn: 'root'
})
export class DataService {

  private gameRef: AngularFireObject<Game>;
  private playerRef: AngularFireObject<Player[]>;

  constructor(private db: AngularFireDatabase) {
    this.gameRef = this.db.object<Game>(`games`);
    this.playerRef = this.db.object<Player[]>('games');
  }

  getCourseObservable(id): Observable<any> {
    return this.db.object(`games/${id}`).valueChanges();
  }

  newGame(course, teebox, players) {
    let holesArry = [];
    for (let i = 0; i < course.holes.length; i++){
      holesArry.push({id: i, par: course.holes[i].teeBoxes[teebox].par, yards: course.holes[i].teeBoxes[teebox].yards, hcp: course.holes[i].teeBoxes[teebox].hcp})
    }
    let gameinfo = {
      id: "123f",
      courseId: course.id,
      selectedTeebox: teebox,
      players: players,
      holes: holesArry,
    };
    // const list = this.db.list(`companies/player1`);
    // list.push({company2: "random"});
    this.gameRef = this.db.object<Game>(`games/${gameinfo.id}`);
    return this.gameRef.set(gameinfo);
  }
  getHoleData(gameid, holeid): Observable<Hole>{
    return this.db.object<Hole>(`games/${gameid}/holes/${holeid}`).valueChanges();

  }

  getPlayerData(gameid): Observable<Player[]>{
    return this.db.object<Player[]>(`games/${gameid}/players`).valueChanges()
  }

  savePlayers(gameid, players) {
    this.playerRef = this.db.object<Player[]>(`games/${gameid}/players`);
    for(let i=0; i < players.length; i++){
      let outscore = 0;
      let inscore = 0;
      for(let j=0; j < 9; j++) {
        outscore = outscore + players[i].score[j];
      }
      for(let k=9; k < 18; k++) {
        inscore = inscore + players[i].score[k];
      }
      players[i].outscore = outscore;
      players[i].inscore = inscore;
      players[i].total = outscore + inscore;
    }
    return this.playerRef.set(players);
  }
}
