import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AlertController } from 'ionic-angular';
import { DoctorsTimeTablePage } from '../doctors-time-table/doctors-time-table';
import { DataServicesProvider } from '../../providers/data-services/data-services';
import { ProfilePage } from '../profile/profile';
import { LoginPage } from '../login/login';



/**
 * Generated class for the DoctorsListPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-doctors-list',
  templateUrl: 'doctors-list.html',
})
export class DoctorsListPage {

   items:any;
   listitem:any=[];
   result:any;
   

  constructor(public navCtrl: NavController, public navParams: NavParams, public alertCtrl: AlertController,public service:DataServicesProvider) {
     

    let cat = this.service.category;
    let info:any;
     
       let data1 = JSON.stringify({cat});
       console.log('stringfy cat', data1);
      this.service.getDoct(data1).subscribe(response => {
        console.log('data1',response);
  
    info = response.json();
    console.log('this data1',info);
    this.result=info[0].token;

   
    console.log('result', this.result);


  
  

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
  
  


  time_table(doctor_id){
    this.service.clickedDoctor = doctor_id;
     this.navCtrl.push(DoctorsTimeTablePage);

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
    console.log('ionViewDidLoad DoctorsListPage');
  }

}
