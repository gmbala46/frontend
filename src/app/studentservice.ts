import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import {Form} from './Form'

@Injectable({
  providedIn: 'root',
})
export class Studentservice {

  private baseUrl = "http://localhost:3636/form";
  constructor(private http :HttpClient){

  }
  saveStudent(form:Form):Observable<Form>
  {
    return this.http.post<Form>(`${this.baseUrl}/save`,form);
  }
  fetchAllStudent():Observable<Form[]>
  {
    return this.http.get<Form[]>(`${this.baseUrl}/all`);

  }
}