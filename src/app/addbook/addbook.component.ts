import { Component, OnInit } from '@angular/core';
import {NgForm} from '@angular/forms';
import { Router } from '@angular/router';
import { LibraryService } from '../library.service';
import { BookInfo } from './BookInfo';
// import { BookInfo } from './BookInfo';

@Component({
  selector: 'app-addbook',
  templateUrl: './addbook.component.html',
  styleUrls: ['./addbook.component.css']
})

export class AddbookComponent implements OnInit {
  book=new BookInfo("","","","");
  message
  myform: any;
  
  constructor(private service:LibraryService,private router:Router) { }
  
  ngOnInit() {
  }
  addProductIntoService(){
    this.service.addProductIntoApi(this.book).subscribe(
      data=> {
this.message="product added succesfully"
console.log(this.message)
this.router.navigateByUrl('addbook');
      },
      error=>{("cannot add")
      this.router.navigateByUrl('/listofbooks');

    }

    )

      }
      onSubmit() {
        if (this.myform.valid) {
          console.log("Form Submitted!");
          this.myform.reset();
        }
      }
}
