import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { AuthService } from "src/app/services/auth.service";

@Component({
  selector: "app-register",
  templateUrl: "./register.component.html",
  styleUrls: ["./register.component.scss"],
})
export class RegisterComponent {
  formRegister: FormGroup = this.fb.group({
    username: ["", Validators.required],
    password: ["", [Validators.required, Validators.minLength(6)]],
  });

  constructor(private fb: FormBuilder, private authService: AuthService) {}

  submitForm() {
    if (this.formRegister.valid) {
      console.log("teste");
      let user = {
        username: this.formRegister.get("username").value,
        password: this.formRegister.get("password").value,
        role: "ADMIN",
      };

      this.authService.register(user);
    }
  }
}
