import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { DataServicesProvider } from '../../providers/data-services/data-services';
import { HomePage } from '../home/home';
import { ManageProfilePage } from '../manage-profile/manage-profile';
import { HelpPage } from '../help/help';
import { MyApp } from '../../app/app.component';

/**
 * Generated class for the ProfilePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-profile',
  templateUrl: 'profile.html',
})
export class ProfilePage {
  userdetails:any;
  data:any;

  userinfo={"user_name":"","name":"","address":"","phone":"","email":""};

  constructor(public navCtrl: NavController, public navParams: NavParams,public service:DataServicesProvider) {
    let user_condition = this.service.root;
     console.log('user con', user_condition);

    //if(this.service.root == true){
     
       let user_id=this.service.user_id;
    console.log("serarch");
    console.log(user_id);
   // let id=1;
      let str=JSON.stringify({user_id});
      this.service.getProfile(str).subscribe(respose=>{
        console.log(respose);
        this.data=respose.json();
        this.userinfo.name=this.data[0].user_name;
        this.userinfo.phone=this.data[0].phone;
        //this.userinfo.address=this.data[0].lastdate;
        this.userinfo.email=this.data[0].email;
    });

    /*}

    else{
      this.navCtrl.push(LogoutPage);

    }*/


   

  }


  manage(){
    this.navCtrl.push(ManageProfilePage);

  }


  help(){
     this.navCtrl.push(HelpPage);
  }



   logout()
 {
  //this.service.splashValue=true;
  this.service.root=false;
  //this.cache.clearAll;
  //const root=this.app.getRootNav();
  //root.popToRoot();
  this.navCtrl.push(HomePage);


 }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ProfilePage');
  }

}
