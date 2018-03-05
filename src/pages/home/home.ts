import { Component, ViewChild, ElementRef, NgZone } from '@angular/core';
import { IonicPage, NavController, NavParams, Platform } from 'ionic-angular';
import { EmergencyServicesPage } from '../emergency-services/emergency-services';
import { AppointmentServicesPage } from '../appointment-services/appointment-services';
import { LoginPage } from '../login/login';
import { ProfilePage } from '../profile/profile';
import { Geolocation ,GeolocationOptions ,Geoposition ,PositionError } from '@ionic-native/geolocation'; 
import { googlemaps } from 'googlemaps';
import { DataServicesProvider } from '../../providers/data-services/data-services';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  @ViewChild('map') mapElement: ElementRef;

  map:any;
  latLng:any;
  markers:any;
  mapOptions:any;  
  isKM:any=500;
  isType:any="hospital";
 
  constructor(private ngZone: NgZone, private geolocation : Geolocation, public navCtrl: NavController, public navParams: NavParams,public service:DataServicesProvider) {
   }

  ionViewDidLoad() {
    this.loadMap();
  }

  loadMap(){

    this.geolocation.getCurrentPosition().then((position) => {

this.latLng = new google.maps.LatLng(position.coords.latitude, position.coords.longitude);

          console.log('latLng',this.latLng);

         this.latLng= new google.maps.LatLng(23.777176, 90.399452);
     
      this.mapOptions = {
        center: this.latLng,
        zoom: 14,
       types: ['hospital']
      }   

this.map = new google.maps.Map(this.mapElement.nativeElement, this.mapOptions);

    }, (err) => {
      alert('err '+err);
    });

  }


 /*--------------------Find Nearby Place------------------------*/ 

  nearbyPlace(){
    this.loadMap();
    this.markers = [];
    console.log(this.isType);
    let service = new google.maps.places.PlacesService(this.map);
    service.nearbySearch({
              location: this.latLng,
              radius: this.isKM,
              types: ['hospital']
            }, (results, status) => {
                this.callback(results, status);
            });
  }

  callback(results, status) {
    if (status === google.maps.places.PlacesServiceStatus.OK) {
      for (var i = 0; i < results.length; i++) {
        this.createMarker(results[i]);
        console.log(results[i].name);
      }
      this.service.placeLoc = results;
      console.log('placeLocServices',this.service.placeLoc);

    }
  }


    createMarker(place){
    
    this.markers = new google.maps.Marker({
        map: this.map,
        position: place.geometry.location
    });

    let infowindow = new google.maps.InfoWindow();

    google.maps.event.addListener(this.markers, 'click', () => {
      this.ngZone.run(() => {
        infowindow.setContent(place.name);
        infowindow.open(this.map, this.markers);
      });
    });
  }


  
  
  emergency_service(){
    this.nearbyPlace();
    this.navCtrl.push(EmergencyServicesPage);
  
  }
  
  
  
  login(){

    if(this.service.root == false){
      this.navCtrl.push(LoginPage);

    }

    else{
      this.navCtrl.push(AppointmentServicesPage);
    }
    
  
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

}
