import { BookRestProvider } from './../../providers/book-rest/book-rest';
import { Book } from './../../models/book.model';
import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the BookEditPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-book-edit',
  templateUrl: 'book-edit.html',
})
export class BookEditPage {

  bookid:number;
  book:Book

  constructor(public bookrest:BookRestProvider, public navCtrl: NavController, public navParams: NavParams) {
  }


  ionViewWillEnter(){
    this.bookid=this.navParams.get("bookid");
    this.bookrest.getbookList().subscribe(data=>{
      this.book=data.filter(book => book.bookid === this.bookid)[0];
    })
  }
  ionViewDidLoad() {
    this.bookid=this.navParams.get("bookid");
    console.log(this.bookid);
  }
  goBack(){
    this.navCtrl.pop();
  }
}
