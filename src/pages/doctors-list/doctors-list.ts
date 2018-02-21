import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AlertController } from 'ionic-angular';
import { BookingConfirmationPage } from '../booking-confirmation/booking-confirmation';


/**
 * Generated class for the DoctorsListPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-doctors-list',
  templateUrl: 'doctors-list.html',
})
export class DoctorsListPage {

  constructor(public navCtrl: NavController, public navParams: NavParams, public alertCtrl: AlertController) {
  }
  
  
  showConfirm() {
    let confirm = this.alertCtrl.create({
      title: 'Appointment booking',
      message: 'Do you want to book an appointment?',
      buttons: [
        {
          text: 'Cancel',
          handler: () => {
            console.log('Disagree clicked');
            
          }
        },
        {
          text: 'Ok',
          handler: () => {
            console.log('Agree clicked');
            this.navCtrl.push(BookingConfirmationPage);
          }
        }
      ]
    });
    confirm.present();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad DoctorsListPage');
  }

}
