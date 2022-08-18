import {
  HttpClient,
  HttpErrorResponse,
  HttpParams
} from '@angular/common/http';
import { Injectable } from '@angular/core';

import { catchError, Observable, throwError, timeout } from 'rxjs';

import { Logging } from './abstract/logging';
import { TimeoutConfiguration } from '@models/appConfiguration';

@Injectable({
  providedIn: 'root'
})
export class HttpBaseService {

  constructor(
    private http: HttpClient,
    private logging: Logging,
    private timeouts: TimeoutConfiguration) { }

  protected handleError = (error: HttpErrorResponse) => {
    if (error != null) {
      this.logging.error(error.message, error);
    }

    // Return an observable with a user-facing error message.
    return throwError(() =>
      new Error('Something bad happened; please try again later.'));
  }

  protected httpGet<T>(
    url: string,
    params: HttpParams | undefined = undefined): Observable<T> {
    return this.http
      .get<T>(url, { params: params })
      .pipe(
        timeout(this.timeouts.requestTimeout),
        catchError(this.handleError)
      );
  }

  protected httpPost<T, P>(
    url: string,
    item: T,
    params: HttpParams | undefined = undefined): Observable<P> {
    return this.http
      .post<P>(url, item, { params: params })
      .pipe(
        timeout(this.timeouts.requestTimeout),
        catchError(this.handleError)
      );
  }
}
