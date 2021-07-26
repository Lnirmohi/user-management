import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { abort } from 'process';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }

  getUsers(): Observable<any> {
    return this.http.get('https://my-json-server.typicode.com/Lnirmohi/users-list/users');
  }

  addUser(user) {
    this.http.post('https://my-json-server.typicode.com/Lnirmohi/users-list/users',
    user
    , {
      headers: {
        'content-type': 'application/json'
      }}).subscribe(data => {
      console.log(data);
    });
  }

  deleteUser(id: number) {
    this.http.delete('https://my-json-server.typicode.com/Lnirmohi/users-list/users' + id);
  }

  updateUser(id: number) {
    this.http.put('https://my-json-server.typicode.com/Lnirmohi/users-list/users',
    id
    , {
      headers: {
        'content-type': 'application/json'
      }}).subscribe(data => {
      console.log(data);
    });
  }
}
