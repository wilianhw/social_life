import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-comment-form',
  templateUrl: './comment-form.component.html',
  styleUrls: ['./comment-form.component.scss']
})
export class CommentFormComponent {

  @Output() comentarioAdicionado = new EventEmitter<string>();
  comentarioForm: FormGroup;

  constructor(private formBuilder: FormBuilder) {
    this.comentarioForm = this.formBuilder.group({
      novoComentario: ['', Validators.required]
    });
  }

  adicionarComentario() {
    const comentario = this.comentarioForm.get('novoComentario').value;
    this.comentarioAdicionado.emit(comentario);
    this.comentarioForm.reset();
  }

}
