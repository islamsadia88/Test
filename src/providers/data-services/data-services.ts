
import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';
import { ToastController } from 'ionic-angular';

/*
  Generated class for the DataServicesProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class DataServicesProvider {

  placeLoc:any ="";
  clickedHospital:any = "";


  constructor(private http:Http,private toastCtrl: ToastController) {
    console.log('Hello DataServicesProvider Provider');
  }
  
  
  getHospitalName(){
    
    return this.http.get('http://localhost/uk_project/hospitals.php')
    .map(res =>res.json());
  }
  
  getAvailableAmb(){
  
    return this.http.get('http://localhost/uk_project/get_available_amb.php')
    .map(res =>res.json());
  
  }

}
