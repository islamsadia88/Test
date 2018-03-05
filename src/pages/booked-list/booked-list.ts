import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { TrackPage } from '../track/track';
import { DataServicesProvider } from '../../providers/data-services/data-services';
import { ProfilePage } from '../profile/profile';
import { LoginPage } from '../login/login';


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

  result:any;
  items:any;
  listitem:any=[];

  constructor(public navCtrl: NavController, public navParams: NavParams,public service:DataServicesProvider) {
    let user_id = this.service.user_id;
    let info:any;
     
       let data1 = JSON.stringify({user_id});
       console.log('stringfy cat', data1);
      this.service.getBookedList(data1).subscribe(response => {
        console.log('data1',response);
  
    info = response.json();
    console.log('this info',info);
    //this.result=info[0].token;

   
    //console.log('result', this.result);


  
  

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
  
  
  track(tackClicked, app_day){
    this.service.trackDoctorClicked = tackClicked;
    this.service.trackDayClicked = app_day;

    console.log('track clicked', this.service.trackDoctorClicked);
     this.navCtrl.push(TrackPage);
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
    console.log('ionViewDidLoad BookedListPage');
  }

}
