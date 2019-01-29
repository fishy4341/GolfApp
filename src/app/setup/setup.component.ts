import { Component, OnInit } from '@angular/core';
import {CourseService} from "../course/course.service";
import {Course} from "../course/course";
import {DataService} from "../course/data.service";
import {Router} from "@angular/router";



@Component({
  selector: 'app-setup',
  templateUrl: './setup.component.html',
  styleUrls: ['./setup.component.css']
})
export class SetupComponent implements OnInit {

  courseArray: Course[];
  selectedCourse: any;
  teeBoxes: [];
  tee: number;
  ready: boolean = false;
  courseId: number;
  selectedTeeBox;
  players: Array<any> =[];

  constructor(private courseService: CourseService, private gameService: DataService, private router: Router) { }

  ngOnInit() {
    this.getCourses();
  }

  getCourses() {
    this.courseService.getCourses()
      .subscribe(courselist => {
        this.courseArray = courselist['courses'];
      });
  }

  getCourse() {
    console.log("get course");
    this.courseService.getCourse(this.courseId)
      .subscribe(course => {
        this.selectedCourse = course['data'];
        console.log(this.selectedCourse);
        this.teeBoxes = this.selectedCourse.holes[0].teeBoxes;
      })
  }


  setPlayers(number) {
    console.log("number of players", number);
    this.players = [];
    for(let i=0; i < number; i++){
      this.players.push({name: 'player' + i, score: [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0], inScore: [], total: 0});
    }
    this.ready = true;
  }

  play() {
    this.gameService.newGame(this.selectedCourse, this.selectedTeeBox, this.players).then(_ => this.router.navigate(['/holes/1']));
  }

}
