import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LibraryService } from '../library.service';
import { User } from '../user';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
user=new User("","","","","","");
message
  constructor(private service:LibraryService,private router:Router) { }
  

  ngOnInit() {
  }
  addUserIntoService(){
    this.service.addUserIntoApi(this.user).subscribe(
      data=> {
        this.message="user added succesfully"
        console.log(this.message)
        this.router.navigateByUrl('register');
              },
              error=>{("cannot add")
              this.router.navigateByUrl('/listofusers');
        
            }
        
            )
        
    
    
  }
 
}
