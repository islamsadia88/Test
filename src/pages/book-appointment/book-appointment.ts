import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { DoctorsListPage } from '../doctors-list/doctors-list';

/**
 * Generated class for the BookAppointmentPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-book-appointment',
  templateUrl: 'book-appointment.html',
})
export class BookAppointmentPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }
  
  
  
  doctors_list(){
    this.navCtrl.push(DoctorsListPage);
  }
  
  
  

  ionViewDidLoad() {
    console.log('ionViewDidLoad BookAppointmentPage');
  }

}
