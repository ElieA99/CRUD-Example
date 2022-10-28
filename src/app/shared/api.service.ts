import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) { }

  getdata() {
    return this.http.get('http://localhost:3000/data');
  }

  getdataid(ID: any) {
    return this.http.get(`http://localhost:3000/data/${ID}`);
  }

  postdata(data: any) {
    return this.http.post<any>(`http://localhost:3000/post`, data)
      .pipe(map((res: any) => {
        return res;
      }))
  }

  deletedata(ID: any) {
    return this.http.delete<any>(`http://localhost:3000/data/${ID}`);
  }

}




