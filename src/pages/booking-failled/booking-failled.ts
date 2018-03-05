import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { BookedListPage } from '../booked-list/booked-list';
import { ProfilePage } from '../profile/profile';
import { LoginPage } from '../login/login';
import { DataServicesProvider } from '../../providers/data-services/data-services';


/**
 * Generated class for the BookingFailledPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-booking-failled',
  templateUrl: 'booking-failled.html',
})
export class BookingFailledPage {

  constructor(public navCtrl: NavController, public navParams: NavParams,public service:DataServicesProvider) {
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
    console.log('ionViewDidLoad BookingFailledPage');
  }

}
