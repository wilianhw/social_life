import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { LoginComponent } from "./pages/login/login.component";
import { RegisterComponent } from "./pages/register/register.component";
import { InitialComponent } from "./pages/post/post.component";
import { IsAuthenticatedGuard } from "./guards/isAuthenticated.guard";

const routes: Routes = [
  { path: "", pathMatch: "full", redirectTo: "/login" },
  { path: "login", component: LoginComponent},
  { path: "register", component: RegisterComponent},
  { path: "initial", component: InitialComponent, canActivate: [IsAuthenticatedGuard] },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
