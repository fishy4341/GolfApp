import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CourseService {

  private apiUrl = 'https://golf-courses-api.herokuapp.com/courses';

  constructor(private http: HttpClient) {

  }

  getCourses(): Observable<object> {
    return this.http.get<object>(this.apiUrl);
  }

  getCourse(id: number): Observable<object> {
    return this.http.get<object>(this.apiUrl + `/${id}`);
  }
}
