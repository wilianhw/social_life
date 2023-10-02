import { HttpClient } from "@angular/common/http";
import { Component } from "@angular/core";
import { FormGroup, FormBuilder, FormArray } from "@angular/forms";
import { Post } from "src/app/intefaces/post.interface";
import { PostService } from "src/app/services/post.service";

@Component({
  selector: "app-post",
  templateUrl: "./post.component.html",
  styleUrls: ["./post.component.scss"],
})
export class PostComponent {
  postForm: FormGroup;

  constructor(private fb: FormBuilder, private postService: PostService) {
    this.postForm = this.fb.group({
      texto: [""],
      imagens: this.fb.array([]),
      links: [""],
    });
  }

  ngOnInit() {}

  onSubmit() {
    const formValues = this.postForm.value;

    const post: Post = {
      texto: formValues.texto,
      imagePosts: formValues.imagens,
      linkPosts: formValues.links.split(",").map((link: string) => link.trim()),
    };

    this.postService.create(post);
  }

  get imagens() {
    return this.postForm.get("imagens") as FormArray;
  }

  onImageSelect(event: any) {
    const selectedImages = event.target.files;
    for (let i = 0; i < selectedImages.length; i++) {
      const reader = new FileReader();
      reader.onload = (e: any) => {
        this.imagens.push(this.fb.control(e.target.result));
      };
      reader.readAsDataURL(selectedImages[i]);
    }
  }

  removeImage(index: number) {
    this.imagens.removeAt(index);
  }
}
