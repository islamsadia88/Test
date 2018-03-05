import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { DoctorsListPage } from '../doctors-list/doctors-list';
import { DataServicesProvider } from '../../providers/data-services/data-services';
import { ProfilePage } from '../profile/profile';
import { LoginPage } from '../login/login';


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

  constructor(public navCtrl: NavController, public navParams: NavParams, public service:DataServicesProvider) {
  }
  
  
  
  doctors_list(cat){
    this.service.category = cat;
    console.log('category clicked', cat);

    this.navCtrl.push(DoctorsListPage);
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
    console.log('ionViewDidLoad BookAppointmentPage');
  }

}
