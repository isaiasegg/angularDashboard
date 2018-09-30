import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http'; 
import { Subject }    from 'rxjs';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class GeneralService { 
  //
  private data = new Subject<any>();
  data$ = this.data.asObservable();
  changeData(data) { this.data.next(data); }

  constructor(private http: HttpClient) { }; 

  login(user) {
    const data = JSON.stringify(user);
    return this.http.post('/api/login/', data, httpOptions);
  } 

  getData() { 
      return this.http.get('/api/data/'); 
  }

}

