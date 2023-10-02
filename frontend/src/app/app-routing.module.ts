import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { LoginComponent } from "./pages/login/login.component";
import { RegisterComponent } from "./pages/register/register.component";
import { PostComponent } from "./pages/post/post.component";
import { IsAuthenticatedGuard } from "./guards/isAuthenticated.guard";
import { ListpostComponent } from "./pages/listpost/listpost.component";
import { HeaderComponent } from "./components/header/header.component";

const routes: Routes = [
  { path: "", pathMatch: "full", redirectTo: "/login" },
  { path: "login", component: LoginComponent},
  { path: "register", component: RegisterComponent},
  { path: "create-post", component: PostComponent, canActivate: [IsAuthenticatedGuard] },
  { path: "list-post", component: ListpostComponent, canActivate: [IsAuthenticatedGuard]},
  { path: "header", component: HeaderComponent, canActivate: [IsAuthenticatedGuard]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
