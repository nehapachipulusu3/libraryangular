import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LibraryService } from '../library.service';
import { User } from '../user';

@Component({
  selector: 'app-listofusers',
  templateUrl: './listofusers.component.html',
  styleUrls: ['./listofusers.component.css']
})
export class ListofusersComponent implements OnInit {
users=[];
user=new User("","","","","","");
allUsers
  constructor(private service:LibraryService,private router:Router) { }

  ngOnInit() {
    this.service.listOfUsersFromDb().subscribe(
      data=>{
        console.log(data)
       this.users=data
     }
      ,
     
       error=>console.log("no users are present")
     )
     
  }
  delete(id:number){
    let resp=this.service.deleteUserByIdFromDb(id);
    resp.subscribe((data)=>{
    this.allUsers=data
    this.router.navigateByUrl('/listofusers');
    
    },
    error=>{console.log("book of requested id not found")
    }
    
    )
    
            }

}
