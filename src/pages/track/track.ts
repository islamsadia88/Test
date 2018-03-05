import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { DataServicesProvider } from '../../providers/data-services/data-services';

/**
 * Generated class for the TrackPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-track',
  templateUrl: 'track.html',
})
export class TrackPage {
  result:any;
  items:any;
  listitem:any=[];

  constructor(public navCtrl: NavController, public navParams: NavParams,public service:DataServicesProvider) {
    let doc_id = this.service.trackDoctorClicked;
    let app_day = this.service.trackDayClicked;
    let info:any;
     
       let data1 = JSON.stringify({doc_id,app_day});
       //console.log('stringfy cat', data1);
      this.service.getWaitingList(data1).subscribe(response => {
        //console.log('data1',response);
  
    info = response.json();
  
  

    //if(this.result!="Invalid"){
        this.items=info;
        console.log('outside items', this.items);

        for (let i = 0; i<this.items.length; i++) 
        {
          this.listitem.push( this.items[i] );
          console.log('items', this.items[i]);
      
  
        }
      /*}
    else{
        $('#error').html("<span class='text-danger'>Invalid</span>");
    }
               
    }, error => {
    $('#error').html("<span class='text-danger'>Doesnt match</span>");*/
        });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad TrackPage');
  }

}
