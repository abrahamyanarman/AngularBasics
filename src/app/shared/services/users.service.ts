import {Injectable} from "@angular/core";
import {HttpClient, HttpResponseBase, HttpErrorResponse } from "@angular/common/http";
import {User} from "../models/user.model";
import {Observable} from 'rxjs/Observable';
import {BaseApi} from "../core/base-api";


@Injectable()
export class UsersService extends BaseApi{
  constructor(public http: HttpClient) {
    super(http);
  }

 /* getUserByEmail(email: string):Observable<User>{

    let url = 'http://localhost:3000/users?email='+email;

    return this.http.get<User[]>(url)
      .map((user:User[])=>user[0]?user[0]:undefined);

  }

  createNewUser(user:User):Observable<User>{
      return this.http.post<User>('http://localhost:3000/users',user);
  }*/

  getUserByEmail(email: string):Observable<User>{
    return this.get<User[]>(`users?email=${email}`)
      .map((user:User[])=>user[0]?user[0]:undefined);
  }

  createNewUser(user:User):Observable<User>{
    return this.post<User>('users',user);
  }


}
