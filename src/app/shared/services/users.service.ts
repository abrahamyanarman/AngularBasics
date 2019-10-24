import {Injectable} from "@angular/core";
import {HttpClient, HttpResponseBase, HttpErrorResponse } from "@angular/common/http";
import {User} from "../models/user.model";
import {Observable} from 'rxjs/Observable';


@Injectable()
export class UsersService {
  constructor(private http: HttpClient) {
  }

  getUserByEmail(email: string):Observable<User>{

    let url = 'http://localhost:3000/users?email='+email;

    return this.http.get<User[]>(url)
      .map((user:User[])=>user[0]?user[0]:undefined);

  }
}
