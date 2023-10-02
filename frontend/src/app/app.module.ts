import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { LoginComponent } from "./pages/login/login.component";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { HttpClientModule } from "@angular/common/http";
import { RegisterComponent } from "./pages/register/register.component";
import { PostComponent } from "./pages/post/post.component";
import { HeaderComponent } from './components/header/header.component';
import { ListpostComponent } from './pages/listpost/listpost.component';
import { CommentFormComponent } from './components/comment-form/comment-form.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    PostComponent,
    HeaderComponent,
    ListpostComponent,
    CommentFormComponent,
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
