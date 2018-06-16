import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

constructor() { }
login(username: string, password: string): Observable<any> {
  // const url = environment.urlApi.concat('');
  // const params = new HttpParams().set('username', username).set('password', password);

  // return this.httpClient.get(url, {params});
  console.log(username, password);
  return Observable.create((observable) => {
    observable.next(true);
  });
}
}
