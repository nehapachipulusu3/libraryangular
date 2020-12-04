import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

 
constructor(private router:Router) { }

ngOnInit() {
}

logout(){
  localStorage.clear();
  this.router.navigateByUrl('/home');
}
isAdmin(){
  if (localStorage.getItem('admindetails')){
    return true;
  }
  else{
    return false;
  }
 }

 isUser(){
  if (localStorage.getItem('userdetails')){
    return true;
  }
  else{
    return false;
  }
 }
 isLoggedad(){
   if(localStorage.getItem('admindetails')){
     return true;
   }
   else{
     return false;
   }
 }
 isLoggedUser(){
   if(localStorage.getItem('userdetails')){
     return true;
   }
   else{
     return false;
   }
 }
 search(){
  this.router.navigateByUrl('listofbooks');
    }

}