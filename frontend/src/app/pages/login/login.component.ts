import { Component, OnInit } from "@angular/core";
import {
  FormControl,
  FormGroup,
  RequiredValidator,
  Validators,
} from "@angular/forms";
import { AuthService } from "src/app/services/auth.service";

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.scss"],
})
export class LoginComponent {
  form = new FormGroup({
    username: new FormControl(null, Validators.required),
    password: new FormControl(null, Validators.required),
  });

  constructor(private authService: AuthService) {}

  submitForm() {
    let user = {
      username: this.form.get("username").value,
      password: this.form.get("password").value,
    };

    this.authService.login(user);
  }
}
