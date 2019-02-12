import { BookEditPage } from './../book-edit/book-edit';
import { BookdetailPage } from './../bookdetail/bookdetail';
import { BookRestProvider } from './../../providers/book-rest/book-rest';
import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { Book } from '../../models/book.model';



@Component({
  selector: 'page-book-list',
  templateUrl: 'book-list.html',
})
export class BookListPage {

  books:Book;
  category:string;

  constructor(private bookrest:BookRestProvider, public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewWillEnter(){
    this.category=this.navParams.get("category");
    this.bookrest.getbookList().subscribe(data=>{
      this.books=data.filter(book => book.category === this.category);
    });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad BookListPage');
  }

  BookEdit(bookid:number){
    this.navCtrl.push(BookEditPage,
      {bookid:bookid}
    );
  }

  goBack(){
    this.navCtrl.pop();
  }

  ShowDetail(bookid:number){
    this.navCtrl.push(BookdetailPage,
      {bookid:bookid}
    );
  }

}
