import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { NearestHospitalsPage } from '../nearest-hospitals/nearest-hospitals';
import { LowTrafficRoutePage } from '../low-traffic-route/low-traffic-route';
import { AvailableAmbulancesPage } from '../available-ambulances/available-ambulances';
import { ProfilePage } from '../profile/profile';
import { LoginPage } from '../login/login';
import { DataServicesProvider } from '../../providers/data-services/data-services';


/**
 * Generated class for the EmergencyServicesPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-emergency-services',
  templateUrl: 'emergency-services.html',
})
export class EmergencyServicesPage {

  constructor(public navCtrl: NavController, public navParams: NavParams,public service:DataServicesProvider) {
  }

  
  
  
   List_view(){
    this.navCtrl.push(AvailableAmbulancesPage);
  }
 
  
  
  nearest_hospitals(){
    this.navCtrl.push(NearestHospitalsPage);
  
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
    console.log('ionViewDidLoad EmergencyServicesPage');
  }
  

}
