import { Injectable } from '@angular/core';
import{HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';
import { BookInfo } from './addbook/BookInfo';
import { User } from './user';
@Injectable({
  providedIn: 'root'
})
export class LibraryService {

  constructor(private http:HttpClient) { }
  listOfBooksFromDb():Observable<any>{
    return this.http.get<any>("http://localhost:9090/books");
  }
  addProductIntoApi(book:BookInfo):Observable<any>{
    return this.http.post<any>("http://localhost:9090/book",book);
  }
  getProductByIdFromDb(id:number):Observable<any>{
    return this.http.get<any>("http://localhost:9090/book/"+id);
  }
  deleteProductByIdFromDb(id){
    return this.http.delete("http://localhost:9090/book/"+id);
  }
  loginDetailsFromDb(user:User){
    return this.http.post("http://localhost:9090/login",user);

  }
  getAllLogins(){
    return this.http.get("http://localhost:9090/getalllogins");

  }
  addUserIntoApi(user:User):Observable<any>{
    return this.http.post<any>("http://localhost:9090/register",user);
  }
  listOfUsersFromDb():Observable<any>{
    return this.http.get<any>("http://localhost:9090/users");
  }
  deleteUserByIdFromDb(id){
    return this.http.delete("http://localhost:9090/user/"+id);
  }
}
