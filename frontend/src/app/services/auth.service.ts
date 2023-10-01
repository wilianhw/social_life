import { HttpClient, HttpHeaders } from "@angular/common/http";
import { tap } from "rxjs/operators";
import { Injectable } from "@angular/core";

@Injectable({
  providedIn: "root",
})
export class AuthService {
  private readonly JWT_TOKEN = "token";

  constructor(private http: HttpClient) {}

  login(user: { username: string; password: string }) {
    const headers = new HttpHeaders().set('Content-Type', 'application/json');

    console.log(user)
    return this.http.post("http://localhost:8080/auth/login", user, { headers })
    .subscribe(response => {
        console.log(response);
    });
  }
}