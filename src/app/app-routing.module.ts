import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { AddbookComponent } from './addbook/addbook.component';
import { AdminhomeComponent } from './adminhome/adminhome.component';
import { AdminoperationsComponent } from './adminoperations/adminoperations.component';
import { BooksearchComponent } from './booksearch/booksearch.component';
import { EditbookComponent } from './editbook/editbook.component';
import { HomeComponent } from './home/home.component';
import { IssuebookComponent } from './issuebook/issuebook.component';
import { ListofbooksComponent } from './listofbooks/listofbooks.component';
import { ListofusersComponent } from './listofusers/listofusers.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { RequestbookComponent } from './requestbook/requestbook.component';
import { UpdateComponent } from './update/update.component';
import { UserhomeComponent } from './userhome/userhome.component';


const routes: Routes = [
  {path:'listofbooks',component:ListofbooksComponent},
  {path:'adminoperations',component:AdminoperationsComponent},
  {path:'addbook',component:AddbookComponent},
  {path:'editbook/:id',component:EditbookComponent},
   {path:'editbook',component:EditbookComponent},
   {path:'update/:id',component:UpdateComponent},
   {path:'update',component:UpdateComponent},
   {path:'login',component:LoginComponent},
   {path:'home',component:HomeComponent},
   {path:'adminhome',component:AdminhomeComponent},
   {path:'about',component:AboutComponent},
   {path:'register',component:RegisterComponent},
   {path:'listofusers',component:ListofusersComponent},
   {path:'booksearch',component:BooksearchComponent},
   {path:'userhome',component:UserhomeComponent},
   {path:'issuebook',component:IssuebookComponent},
   {path:'requestbook',component:RequestbookComponent},




   









];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
