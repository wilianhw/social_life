import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Post } from "../intefaces/post.interface";
import { AuthService } from "./auth.service";

@Injectable({
  providedIn: "root",
})
export class PostService {
  constructor(private http: HttpClient, private authService: AuthService) {}

  public create(post: Post) {
    const authToken = localStorage.getItem("token");

    if (authToken) {
      const headers = new HttpHeaders({
        Authorization: `Bearer ${authToken}`,
      });

      const idUser = this.authService.extractUserIdFromToken(authToken);

      this.http
        .post(`http://localhost:8080/post/${idUser}`, post, { headers })
        .subscribe((response) => {
          console.log(response);
        });
    } else {
      console.error("Token de autenticação não encontrado.");
    }
  }

}
