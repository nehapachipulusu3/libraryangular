import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddbookComponent } from './addbook/addbook.component';
import { ListofbooksComponent } from './listofbooks/listofbooks.component';
import { EditbookComponent } from './editbook/editbook.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HeaderComponent } from './header/header.component';
import { AdminoperationsComponent } from './adminoperations/adminoperations.component';
import { UpdateComponent } from './update/update.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { AdminhomeComponent } from './adminhome/adminhome.component';
import { AboutComponent } from './about/about.component';
import { RegisterComponent } from './register/register.component';
import { ListofusersComponent } from './listofusers/listofusers.component';
import { BooksearchComponent } from './booksearch/booksearch.component';
import { UserhomeComponent } from './userhome/userhome.component';
import {Ng2SearchPipeModule} from 'ng2-search-filter';
import { IssuebookComponent } from './issuebook/issuebook.component';
import { RequestbookComponent } from './requestbook/requestbook.component';

@NgModule({
  declarations: [
    AppComponent,
    AddbookComponent,
    ListofbooksComponent,
    EditbookComponent,
    HeaderComponent,
    AdminoperationsComponent,
    UpdateComponent,
    LoginComponent,
    
    HomeComponent,
    AdminhomeComponent,
    AboutComponent,
    RegisterComponent,
    ListofusersComponent,
    BooksearchComponent,
    UserhomeComponent,
    IssuebookComponent,
    RequestbookComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    Ng2SearchPipeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
