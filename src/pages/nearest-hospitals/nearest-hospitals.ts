import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { LowTrafficRoutePage } from '../low-traffic-route/low-traffic-route';
import { DataServicesProvider } from '../../providers/data-services/data-services';
import { AlertController } from 'ionic-angular';
import { SMS } from '@ionic-native/sms';
import { ProfilePage } from '../profile/profile';
import { LoginPage } from '../login/login';


/**
 * Generated class for the NearestHospitalsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-nearest-hospitals',
  templateUrl: 'nearest-hospitals.html',
})
export class NearestHospitalsPage {

   items:any=[];
   itemsD:any=[];
   listitem:any=[];
   distance:any=[];
   d:number;
   j:number=5;
   dist:any=[];

  constructor(public navCtrl: NavController, public navParams: NavParams, private Data:DataServicesProvider, public service:DataServicesProvider, public alertCtrl: AlertController, private sms: SMS) {
    this.Data.getHospitalName().subscribe(data =>{
        this.itemsD=data;

        console.log('data items length', this.items.length);
        console.log('data itemsD length', this.itemsD.length);


        for (let i = 0; i < this.items.length; i++) {
         for( let k = 0; k < this.itemsD.length; k++){

            if(this.items[i].name == this.itemsD[k].hos_name)
            {
              this.listitem.push( this.items[i] );
              console.log( this.items[i] );
              this.d = this.items[i].geometry.location.lat();
              console.log( 'lati', this.d );
              console.log('rating', this.items[i].rating);
              this.distance.push({
                dis: this.calculateDistance(this.items[i].geometry.location.lat(), this.items[i].geometry.location.lng()),
                n: this.items[i].name

              });

              console.log('clicked hospital',this.service.clickedHospital);



              this.dist = this.distance.sort(function(a, b){
                                               return a.dis-b.dis
                                                });
              console.log('Dist', this.dist);


             }
        

         }
      
      }

      


    });

    this.items=this.service.placeLoc;
    
  
  }



   calculateDistance(lat1:number,long1:number){
     let lat2:number = 23.777176;
     let long2:number = 90.399452;
     console.log('lat1',lat1);
     console.log('long1',long1);
     let p = 0.017453292519943295;    // Math.PI / 180
     let c = Math.cos;
     let a = 0.5 - c((lat1-lat2) * p) / 2 + c(lat2 * p) *c((lat1) * p) * (1 - c(((long1- long2) * p))) / 2;
     let dis = (12742 * Math.asin(Math.sqrt(a))); // 2 * R; R = 6371 km
     return dis;
  }
  
  
  
  low_traffic_route(lat:number, long:number){
    console.log('lat inside route', lat);
    this.service.clickedHospital = {
      lt: lat,
      ln: long
    }
    console.log('total long lat', this.service.clickedHospital);
  this.navCtrl.push(LowTrafficRoutePage);
  
}



  sendSMS(){
    var options: {
      replaceLineBreaks: true,
      android: {
        intent: 'INTENT'
      }
    }

    this.sms.send('07516771756','Sadia',options).then(() => {
      console.log('sms worked');
    }).catch((err) => {
      alert(JSON.stringify(err))
    });

    
  }





  showConfirm() {
    let confirm = this.alertCtrl.create({
      title: 'Send Alert',
      message: 'Do you want to send a notification of emergency case to that hospital?',
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
            this.sendSMS();
            
            
          }
        }
      ]
    });
    confirm.present();
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
    console.log('ionViewDidLoad NearestHospitalsPage');
  }

}
