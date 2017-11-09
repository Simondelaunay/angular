import { Injectable } from '@angular/core';
import { Observable } from "rxjs/Observable";
import 'rxjs/add/operator/map';
import {HttpClient} from "@angular/common/http";

import { Http, Response, Headers, URLSearchParams, RequestOptions } from '@angular/http';


import { Pizza } from './pizza';


@Injectable()
export class ContactserviceService {

  private readonly url = 'https://pizza-delaunay1-simsimz.c9users.io/pizzas';

  private list;

  constructor(private http: HttpClient) {
  }

  get(): Observable<any[]> {
    this.list = this.http.get(this.url);
    console.log(this.list);
    return this.list;
  }

  getById(id): Observable<any[]> {
    this.list = this.http.get(this.url + '/' + id);
    return this.list;
  }

  //Create pizza
  create(pizza: Pizza): Observable<any> {
    console.log('creeate-service');
    return this.http.post(this.url, pizza);
  }
//
  //private extractData(res: Response) {
  //  let body = res.json();
  //  return body;
  //}
  //private handleError (error: Response | any) {
  //  console.error(error.message || error);
  //  return Observable.throw(error.status);
  //}

}