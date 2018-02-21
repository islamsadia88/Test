import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { NearestHospitalsPage } from '../nearest-hospitals/nearest-hospitals';
import { LowTrafficRoutePage } from '../low-traffic-route/low-traffic-route';
import { AvailableAmbulancesPage } from '../available-ambulances/available-ambulances';

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

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  
  
  
   List_view(){
    this.navCtrl.push(AvailableAmbulancesPage);
  }
 
  
  
  nearest_hospitals(){
    this.navCtrl.push(NearestHospitalsPage);
  
  }
  
  
  
  
  ionViewDidLoad() {
    console.log('ionViewDidLoad EmergencyServicesPage');
  }
  

}
