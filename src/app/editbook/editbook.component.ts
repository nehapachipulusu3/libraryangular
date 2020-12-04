import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BookInfo } from '../addbook/BookInfo';
import { LibraryService } from '../library.service';

@Component({
  selector: 'app-editbook',
  templateUrl: './editbook.component.html',
  styleUrls: ['./editbook.component.css']
})
export class EditbookComponent implements OnInit {
book=new BookInfo("","","","");
  books=[];
  allBooks:any
  constructor(private service:LibraryService,private router:Router) { }

  ngOnInit() {
      this.service.listOfBooksFromDb().subscribe(
       data=>{
         console.log(data)
        this.books=data
      }
       ,
      
        error=>console.log("no books are present")
      )
        }
        Update(id:number){
this.router.navigate(['/update',id]);
        }
        delete(id:number){
let resp=this.service.deleteProductByIdFromDb(id);
resp.subscribe((data)=>{
this.allBooks=data
this.router.navigateByUrl('/editbook');

},
error=>{console.log("book of requested id not found")
}

)

        }
  }



