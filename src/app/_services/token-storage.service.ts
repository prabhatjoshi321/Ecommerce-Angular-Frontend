import { Injectable } from '@angular/core';

const TOKEN_KEY = 'auth_token';
const USER_KEY = 'auth_user';
const ID_KEY = 'id_key';
const COMPARE = '';
const SEARCH_DATA = 'data';
const LAWYER_ID = 'data';

@Injectable({
  providedIn: 'root'
})
export class TokenStorageService {

  constructor() { }

  signout(): void {
    window.sessionStorage.clear();
  }

  public saveToken(token: string): void {
    window.sessionStorage.removeItem(TOKEN_KEY);
    window.sessionStorage.setItem(TOKEN_KEY, token);
  }

  public getToken(): any {
    return (sessionStorage.getItem(TOKEN_KEY));
  }

  public saveUser(user): void {
    window.sessionStorage.removeItem(USER_KEY);
    window.sessionStorage.setItem(USER_KEY, JSON.stringify(user));
  }

  public getUser(): any {
    return JSON.parse(sessionStorage.getItem(USER_KEY));
  }

  public searchData(data: any): void{
    window.sessionStorage.removeItem(SEARCH_DATA);
    window.sessionStorage.setItem(SEARCH_DATA, JSON.stringify(data));
  }

  public returnSearch(): any{
    return JSON.parse(sessionStorage.getItem(SEARCH_DATA));
  }

  public saveProdId(id: string): void {
    window.sessionStorage.removeItem(ID_KEY);
    window.sessionStorage.setItem(ID_KEY, id);
  }

  public getProdId(): any {
    return(sessionStorage.getItem(ID_KEY));
  }

  public saveCdata(id: string): void {
    window.sessionStorage.removeItem(COMPARE);
    window.sessionStorage.setItem(COMPARE, id);
  }

  public getCdata(): any{
    return(sessionStorage.getItem(COMPARE));
  }

  public setLawyer(id: string): void {
      window.sessionStorage.removeItem(LAWYER_ID);
      window.sessionStorage.setItem(LAWYER_ID, id);
  }

  public getLawyer(): any{
    return(sessionStorage.getItem(LAWYER_ID));
  }


}
