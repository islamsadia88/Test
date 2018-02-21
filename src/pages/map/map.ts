import { Component, NgZone, ElementRef, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams, Platform } from 'ionic-angular';
import { LocationsProvider } from '../../providers/locations/locations';
import { GoogleMapsProvider } from '../../providers/google-maps/google-maps';
import { Geolocation ,GeolocationOptions ,Geoposition ,PositionError } from '@ionic-native/geolocation'; 
import { googlemaps } from 'googlemaps';
import { AvailableAmbulancesPage } from '../available-ambulances/available-ambulances';
import { DataServicesProvider } from '../../providers/data-services/data-services';

/**
 * Generated class for the MapPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
 
 
 declare var google;
 

@IonicPage()
@Component({
  selector: 'page-map',
  templateUrl: 'map.html',
})
export class MapPage {
  
  
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
    console.log('map ');
    this.loadMap();
    console.log('map loaded');
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
    //this.loadMap();
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



  ListPage(){
    this.navCtrl.push(AvailableAmbulancesPage);
  }
 
 
}
