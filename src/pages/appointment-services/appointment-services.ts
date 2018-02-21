import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { BookAppointmentPage } from '../book-appointment/book-appointment';
import { BookedListPage } from '../booked-list/booked-list';

/**
 * Generated class for the AppointmentServicesPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-appointment-services',
  templateUrl: 'appointment-services.html',
})
export class AppointmentServicesPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }
  
  
  
  book_appointment(){
    this.navCtrl.push(BookAppointmentPage);
  }
  
  
  booked_list(){
     this.navCtrl.push(BookedListPage);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AppointmentServicesPage');
  }

}
