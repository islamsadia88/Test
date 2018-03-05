import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { BookedListPage } from '../booked-list/booked-list';
import { DataServicesProvider } from '../../providers/data-services/data-services';
import * as $ from 'jquery';
import { ProfilePage } from '../profile/profile';
import { LoginPage } from '../login/login';


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
  serial_:any;
  result:any;

  constructor(public navCtrl: NavController, public navParams: NavParams,public service:DataServicesProvider) {
    this.serial_ = this.service.serialRunning;


    
    
  }
  
  
  booked_list(){
     this.navCtrl.push(BookedListPage);
  }


   profile(){
    
    if(this.service.root == true){
      console.log('root true . direct profile page', this.service.root);
      this.navCtrl.push(ProfilePage);

    }
    else{

      console.log('root false .. else', this.service.root);

      this.service.loginDirectionPage = 1;

      console.log('home page direction value', this.service.loginDirectionPage)
    
      this.navCtrl.push(LoginPage);

      console.log('home page clicked value', this.service.loginClicked);

      
    }
     

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad BookingConfirmationPage');
  }

}
