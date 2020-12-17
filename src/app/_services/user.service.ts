import { GlobalConstants } from './../global-constants';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';



@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }

  getPublicContent(): Observable<any> {
    return this.http.get(GlobalConstants.apiURL + 'all', { responseType: 'json' });
  }

  getUserBoard(): Observable<any> {
    return this.http.get(GlobalConstants.apiURL + 'auth/user', { responseType: 'json' });
  }

  getModeratorBoard(): Observable<any> {
    return this.http.get(GlobalConstants.apiURL + 'auth/mod', { responseType: 'json' });
  }

  getAdminBoard(): Observable<any> {
    return this.http.get(GlobalConstants.apiURL + 'auth/admin', { responseType: 'json' });
  }

  getLogout(): Observable<any> {
    return this.http.get(GlobalConstants.apiURL + 'auth/logout', { responseType: 'json' });
  }

  getproductlisting(): Observable<any> {
    return this.http.get(GlobalConstants.apiURL + 'product/get_product', { responseType: 'json' });
  }

  getrequirements(): Observable<any> {
    return this.http.get(GlobalConstants.apiURL + 'product/get_requ', { responseType: 'json' });
  }

}
