import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { TrackPage } from '../track/track';

/**
 * Generated class for the BookedListPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-booked-list',
  templateUrl: 'booked-list.html',
})
export class BookedListPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }
  
  
  track(){
     this.navCtrl.push(TrackPage);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad BookedListPage');
  }

}
