import { Component, OnInit } from "@angular/core";
import { PostService } from "src/app/services/post.service";

@Component({
  selector: "app-listpost",
  templateUrl: "./listpost.component.html",
  styleUrls: ["./listpost.component.scss"],
})
export class ListpostComponent implements OnInit {
  posts: PostOutputDTO[] = [];

  constructor(private postService: PostService) {}

  ngOnInit(): void {
    this.carregarPosts();
  }

  carregarPosts() {
    this.postService.list().subscribe(
      (data: PostOutputDTO[]) => {
        this.posts = data;
      },
      (error) => {
        console.error("Ocorreu um erro ao buscar os posts.", error);
      }
    );
  }

  adicionarComentario(post: PostOutputDTO, comentario: string) {
    if (comentario.trim() !== "") {
      post.comments.push(comentario);
    }
  }
}
