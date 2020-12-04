import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { BookInfo } from '../addbook/BookInfo';
import { LibraryService } from '../library.service';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css']
})
export class UpdateComponent implements OnInit {

  book=new BookInfo("","","","");
  message
  constructor(private service:LibraryService,private router:Router,private activated:ActivatedRoute) { }
  
  ngOnInit() {
    let id=parseInt(this.activated.snapshot.paramMap.get('id'));
    this.service.getProductByIdFromDb(id).subscribe(data=>{
console.log("data by id")
this.book=data;
    },
    error=>console.log("data not found by this id")
    )
  }
  updateProductIntoService(){
    this.service.addProductIntoApi(this.book).subscribe(data=> {
this.message="product updated succesfully"
this.router.navigateByUrl('/listofbooks');
// console.log(data);
      },
      error=>{("cannot add")
      this.router.navigateByUrl('/listofbooks');
    }
    )
      }
}
