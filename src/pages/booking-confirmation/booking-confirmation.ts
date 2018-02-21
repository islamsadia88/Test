import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { BookedListPage } from '../booked-list/booked-list';

/**
 * Generated class for the BookingConfirmationPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-booking-confirmation',
  templateUrl: 'booking-confirmation.html',
})
export class BookingConfirmationPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }
  
  
  booked_list(){
     this.navCtrl.push(BookedListPage);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad BookingConfirmationPage');
  }

}
