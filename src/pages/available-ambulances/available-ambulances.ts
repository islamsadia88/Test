import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { MapPage } from '../map/map';
import { DataServicesProvider } from '../../providers/data-services/data-services';
import { ProfilePage } from '../profile/profile';
import { LoginPage } from '../login/login';


/**
 * Generated class for the AvailableAmbulancesPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-available-ambulances',
  templateUrl: 'available-ambulances.html',
})
export class AvailableAmbulancesPage {


  items:any=[];
  itemsD:any=[];
   listitem:any=[];
   distance:any=[];
   d:number;
   j:number=5;




  constructor(public navCtrl: NavController, public navParams: NavParams, public service:DataServicesProvider, private Data:DataServicesProvider) {
    
    this.Data.getAvailableAmb().subscribe(data =>{
        this.itemsD=data;

        console.log('data items length', this.items.length);
        console.log('data itemsD length', this.itemsD.length);


        for (let i = 0; i < this.items.length; i++) {
         for( let k = 0; k < this.itemsD.length; k++){

            if((this.items[i].name == this.itemsD[k].org_name) && (this.itemsD[k].avail_amb > 0))
            {
              this.listitem.push( this.items[i] );
              console.log( this.items[i] );
              this.d = this.items[i].geometry.location.lat();
              console.log( 'lati', this.d );

              this.distance.push({
                dis: this.calculateDistance(this.items[i].geometry.location.lat(), this.items[i].geometry.location.lng()),
                n: this.items[i].name

              });

              console.log('distance', this.distance);

             }
        

         }
      
      }

       console.log('distance later', this.distance);


      


    });

    this.items=this.service.placeLoc;

    console.log('test');

    console.log('list', this.service.placeLoc);

    console.log('items', this.items);
    console.log('itemsD',this.itemsD);

    console.log('items length', this.items.length);
    console.log('itemsD length', this.itemsD.length);
    console.log('listitem length', this.listitem.length);

    
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
  
  
  
  map_view(){
    this.navCtrl.push(MapPage);
  
  }
  
  
  
    list_view(){
    this.navCtrl.push(AvailableAmbulancesPage);
  
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
    console.log('ionViewDidLoad AvailableAmbulancesPage');
  }
  


}
