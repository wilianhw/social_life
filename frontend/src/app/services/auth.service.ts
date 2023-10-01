import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Router } from "@angular/router";
import { BehaviorSubject } from "rxjs";
import jwt_decode from "jwt-decode";

@Injectable({
  providedIn: "root",
})
export class AuthService {
  private _isLoggedIn = new BehaviorSubject<boolean>(false);
  isLoggedIn = this._isLoggedIn.asObservable();

  constructor(private http: HttpClient, private router: Router) {
    const token = localStorage.getItem('token');
    this._isLoggedIn.next(!!token);
  }

  login(user: { username: string; password: string }) {
    const headers = new HttpHeaders().set("Content-Type", "application/json");

    return this.http
      .post("http://localhost:8080/auth/login", user, { headers })
      .subscribe((response: any) => {
        localStorage.setItem('token', response.token);
        this._isLoggedIn.next(true);
        this.router.navigate(["/initial"]);
      });
  }

  register(user: { username: string; password: string; role: string }) {
    const headers = new HttpHeaders().set("Content-Type", "application/json");
    console.log("teste");

    return this.http
      .post("http://localhost:8080/auth/register", user, { headers })
      .subscribe(() => {
        this.router.navigate(["/login"]);
      });
  }

  extractUserIdFromToken(token: string): number | null {
    try {
      const decodedToken: any = jwt_decode(token);
      return decodedToken.userId;
    } catch (error) {
      console.error('Erro ao decodificar o token:', error);
      return null;
    }
  }
}
