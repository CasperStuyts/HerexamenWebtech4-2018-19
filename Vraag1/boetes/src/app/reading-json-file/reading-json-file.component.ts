import { Component, Input } from '@angular/core';
import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import {Observable} from 'rxjs/Rx';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Injectable()
export class ReadingJsonService{

private _jsonURL = 'assets/overtredingen.json';

constructor(private http: Http) {
 var object;
 this.getJSON().subscribe(data => object=data, error => console.log(error));
}

public getJSON(): Observable<any> {
  return this.http.get(this._jsonURL)
   .map((response:any) => response.json())
   ;

}
}