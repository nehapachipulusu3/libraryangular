import { Component, OnInit } from '@angular/core';
import { LibraryService } from '../library.service';

@Component({
  selector: 'app-requestbook',
  templateUrl: './requestbook.component.html',
  styleUrls: ['./requestbook.component.css']
})
export class RequestbookComponent implements OnInit {

  books=[];
  bookName:any;
  constructor(private service:LibraryService) { }

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
        Search(){
          if(this.bookName == ""){
            this.ngOnInit();
          }else{
            this.books=this.books.filter(resp=>{
              return resp.bookName.toLocaleLowerCase().match(this.bookName.toLocaleLowerCase());
            })
          }
        }
  }


