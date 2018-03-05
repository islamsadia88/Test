import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { DataServicesProvider } from '../../providers/data-services/data-services';
import { AlertController } from 'ionic-angular';
import { BookingConfirmationPage } from '../booking-confirmation/booking-confirmation';
import { BookingFailledPage } from '../booking-failled/booking-failled';
import * as $ from 'jquery';
import { ProfilePage } from '../profile/profile';
import { LoginPage } from '../login/login';


/**
 * Generated class for the DoctorsTimeTablePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-doctors-time-table',
  templateUrl: 'doctors-time-table.html',
})
export class DoctorsTimeTablePage {

   items:any;
   listitem:any=[];
   result:any;
  

  constructor(public navCtrl: NavController, public navParams: NavParams,public service:DataServicesProvider, public alertCtrl: AlertController) {
    let d_id = this.service.clickedDoctor;
    let info:any;
     
       let data1 = JSON.stringify({d_id});
       console.log('stringfy ID', data1);
      this.service.getTimeTable(data1).subscribe(response => {
        console.log('data1',response);
  
    info = response.json();
    console.log('this data1',info);
    //this.result=info[0].token;

   
   // console.log('result', this.result);


  
  

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


  showConfirm(existing,day) {
    var x = existing;
    
    console.log('doctor ID',this.service.clickedDoctor);
    let confirm = this.alertCtrl.create({
      title: 'Appointment booking',
      message: 'Do you want to book an appointment?',
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
            this.service.serialRunning = ++x;
            this.service.est = ((x*15)/60);
            console.log('est', this.service.est);
            this.service.bookingDay = day;
            console.log('booked day',this.service.bookingDay);

     let user_id = this.service.user_id;
     let user_name = this.service.name;
     let doc = this.service.clickedDoctor;
     let app_day = this.service.bookingDay;
     let serial_nm = this.service.serialRunning;
     let estimate = this.service.est;

     let info_:any;

  
    let data1_ = JSON.stringify({user_id,user_name,doc,app_day,serial_nm,estimate});
    this.service.postAppointment(data1_).subscribe(response_ => {
    console.log('posting response',response_);
    info_=response_.json();
    //this.result1=this.service.name;
    this.result = info_[0].token;
    console.log('validity response',this.result);
    if(this.result!="Invalid"){
    //this.navCtrl.push(AboutPage);
     this.navCtrl.push(BookingConfirmationPage);
      }
    else
      {
        this.navCtrl.push(BookingFailledPage);
      }

               
    }, error => {
    $('#error').html("<span class='text-danger'>Invalid</span>");
        });

           
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
    console.log('ionViewDidLoad DoctorsTimeTablePage');
  }

}
