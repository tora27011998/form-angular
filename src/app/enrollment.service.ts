import { Injectable } from '@angular/core';
import {HttpClient, HttpErrorResponse} from '@angular/common/http';
import { catchError} from 'rxjs/operators';
import { throwError } from 'rxjs/';
import { User } from './Models/user.model';

@Injectable({
  providedIn: 'root'
})
export class EnrollmentService {

  _url = 'http://localhost:3000/enroll1';
  constructor(private _http: HttpClient) { }

  enroll(user: User) {
    return this._http.post<any>(this._url, user).pipe(catchError(this.errorHandler));
  }

  errorHandler(err: HttpErrorResponse) {
    return throwError(err);
  }
}
