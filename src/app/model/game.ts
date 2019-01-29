import {Player} from "./player";
import {Hole} from "./hole";

export interface Game {
  id: string;
  courseId: number;
  selectedTeebox: string;
  players: Player[];
  holes: Hole[];
}
