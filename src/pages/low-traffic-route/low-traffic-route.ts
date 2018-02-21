import { Component, ViewChild, ElementRef } from '@angular/core';
import { IonicPage } from 'ionic-angular';
import { NavController } from 'ionic-angular';
import { Geolocation ,GeolocationOptions ,Geoposition ,PositionError } from '@ionic-native/geolocation'; 
import { googlemaps } from 'googlemaps';
import { DataServicesProvider } from '../../providers/data-services/data-services';

declare var google;

/**
 * Generated class for the LowTrafficRoutePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-low-traffic-route',
  templateUrl: 'low-traffic-route.html',
})
export class LowTrafficRoutePage {
    @ViewChild('map') mapElement: ElementRef;
  map: any;
  start = {lat: 23.777176, lng: 90.399452};
  end: any;
  directionsService = new google.maps.DirectionsService;
  directionsDisplay = new google.maps.DirectionsRenderer;
  latLng:any;
  mapOptions:any; 

  constructor(public navCtrl: NavController, private geolocation : Geolocation, public service:DataServicesProvider) {

  }

  ionViewDidLoad() {
    this.initMap();
    this.calculateAndDisplayRoute();
  }

  initMap() {
    this.map = new google.maps.Map(this.mapElement.nativeElement, {
      zoom: 7,
      center: {lat: 23.777176, lng: 90.399452}
    });

    this.directionsDisplay.setMap(this.map);
  }


    calculateAndDisplayRoute() {
      this.end ={
        lat: this.service.clickedHospital.lt,
        lng: this.service.clickedHospital.ln
      }
      console.log('end',this.end);
      console.log("calculation");
    this.directionsService.route({
      origin: this.start,
      destination: this.end,
      travelMode: 'DRIVING'
    }, (response, status) => {
      if (status === 'OK') {
        this.directionsDisplay.setDirections(response);
      } else {
        window.alert('Directions request failed due to ' + status);
      }
    });

    console.log("calculation Done");
  }

}
