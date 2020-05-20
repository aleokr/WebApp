import {Injectable} from "@angular/core";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Observable} from "rxjs";
import {User} from "../interfaces/user";


@Injectable({
  providedIn: 'root'
})
export class LoginService{

  constructor(private http: HttpClient ) {}

  public authenticateUser(login: string, password: string): Observable<User> {
    return this.http.get<User>('http://localhost:8443/user/authenticate/' + login + '/' + password);
  }
}
