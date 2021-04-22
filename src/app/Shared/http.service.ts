import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { NgForm }   from '@angular/forms';
@Injectable({
  providedIn: "root"
})
export class HttpService {
  constructor(private httpreq:HttpClient) { }

  sendMessage(){

    let headers = {
      headers : new HttpHeaders({
        'Content-Type' :'application/json'
      })
    }
    return this.httpreq.post("http://localhost:3000/email",headers);
  }
}
