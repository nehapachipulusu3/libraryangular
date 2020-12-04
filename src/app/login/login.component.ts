import { variable } from '@angular/compiler/src/output/output_ast';
import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormControl, FormGroup, NgForm, Validators} from '@angular/forms'
import { Router } from '@angular/router';
import { LibraryService } from '../library.service';
import { User } from '../user';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
// user=new User("","","","","","");
//   constructor(private service:LibraryService, private router:Router) { }

//   ngOnInit() {
//   }
//   loginuser(){
// this.service.loginDetailsFromDb(this.user).subscribe(
//   data=>{
//     console.log("login successfull")

//   },
//   error=>{console.log("cannot find")
//   this.router.navigateByUrl('/editbook');

// }
// )
//   }
// }
data1;
data2;
data3;
info;

loginForm=new FormGroup({
  email:new FormControl('',[Validators.required,Validators.email]),
  password:new FormControl('',[Validators.required,Validators.minLength(8)])
});
constructor(private service:LibraryService,private router:Router,private fb:FormBuilder) { }

  ngOnInit() {
    // this.service.getAllLogins().subscribe(data=>this.logins=data);
  }

  login(){
    this.service.getAllLogins().subscribe(response=>{
      this.data1=response;
      this.data2=this.data1[0];
      this.data3=this.data1[1];
      this.data3=this.data1[2];
      this.data3=this.data1[3];

    console.log(this.data1);
console.log(this.data1[0].email)
console.log(this.loginForm.value.email);


if(this.loginForm.value.email===this.data1[1].email)
{
  if(this.data1[1].roles==='user')
  {
    this.info='LoggedIn successfully'
  console.log(this.info);
  this.router.navigateByUrl('/userhome');
  setTimeout(()=>{this.info=null;
  },500);
  
  localStorage.setItem('userdetails',JSON.stringify(this.data1[1]));
  console.log('stored locally');
}
else{
  this.info='enter a valid mail id';
}
  
  }
  if(this.loginForm.value.email===this.data1[2].email)
{
  if(this.data1[2].roles==='user')
  {
    this.info='LoggedIn successfully'
  console.log(this.info);
  this.router.navigateByUrl('/userhome');
  setTimeout(()=>{this.info=null;
  },500);
  
  localStorage.setItem('userdetails',JSON.stringify(this.data1[2]));
  console.log('stored locally');
}
else{
  this.info='enter a valid mail id';
}
  
  }
  if(this.loginForm.value.email===this.data1[3].email)
{
  if(this.data1[3].roles==='user')
  {
    this.info='LoggedIn successfully'
  console.log(this.info);
  this.router.navigateByUrl('/userhome');
  setTimeout(()=>{this.info=null;
  },500);
  
  localStorage.setItem('userdetails',JSON.stringify(this.data1[3]));
  console.log('stored locally');
}
else{
  this.info='enter a valid mail id';
}
  
  }
  if(this.loginForm.value.email===this.data1[0].email)
  {
    if(this.data1[0].roles==='admin'){
      this.info='admin';
      console.log(this.info);
      setTimeout(()=>{
        this.info=null;
      },500);
      localStorage.setItem('admindetails',JSON.stringify(this.data1[0]));
      console.log('stored locally');
      this.router.navigateByUrl('/adminhome');
    }
    else{
      this.info='create an account';
      console.log(this.info);
    }
  }
 })
   }
}