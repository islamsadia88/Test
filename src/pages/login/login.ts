import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';
import { AppointmentServicesPage } from '../appointment-services/appointment-services';
import { RegisterPage } from '../register/register';
import { DataServicesProvider } from '../../providers/data-services/data-services';
import * as $ from 'jquery';
import { LoadingController } from 'ionic-angular';
import { TabsPage } from '../tabs/tabs';
import { ProfilePage } from '../profile/profile';
import { AddReviewPage } from '../add-review/add-review';


/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {

   userinfo:any;
   tabBarElement:any;
   loader:any;
   responsedata:any;
   result:any;
   userdata:any;
   data:any;

  data1:any;
  result1:any;

   constructor(public navCtrl: NavController, 
              public navParams: NavParams,
              private viewCtrl: ViewController,
              public service:DataServicesProvider,
              public loadingCtrl:LoadingController) {
              this.data1 = {};
}
  
  
  login(){

   let username = this.data1.username;
   let password = this.data1.password;
   let info:any;
   


    console.log("data username", this.data1.username);
    console.log("data password", this.data1.password);
    console.log("islam");
    console.log(username);

    this.presentLoading();
    if($.trim(username).length>0 && $.trim(password).length>0){ 
       let data1 = JSON.stringify({username,password});
      this.service.postLogin(data1).subscribe(response => {
        console.log('data1',response);
  
    info = response.json();
    console.log('this data1',info);
    this.result=info[0].token;


    if(this.result!="Invalid"){
      this.service.root=true; 
      this.service.name = info[0].name;
      this.service.user_id = info[0].id;
      //console.log('user ID in login page',this.service.user_id);
      this.service.email = info[0].email;
      this.service.phone = info[0].phone;
      this.service.address = info[0].address;

      console.log('login page direction value', this.service.loginDirectionPage);

      if(this.service.loginDirectionPage == 0){
        this.navCtrl.push(AppointmentServicesPage);

      }
      else if(this.service.loginDirectionPage == 1){
        this.service.loginClicked == true;
        //this.service.loginDirectionPage = false;
        this.navCtrl.push(ProfilePage);
      }
      else if(this.service.loginDirectionPage == 2)
        {
          this.navCtrl.push(AddReviewPage);
        }

      /*if(this.service.loginClicked == false)
        {
          console.log('home login direction', this.service.loginClicked);
          this.service.loginDirectionPage = false;
          

        }*/
      
      
    
  
      }
    else{
        $('#error').html("<span class='text-danger'>Invalid</span>");
    }
               
    }, error => {
    $('#error').html("<span class='text-danger'>Doesnt match</span>");
        });
    
      

    }
      else{
       $('#error').html("<strong class='text-danger'>Username or Password can't be empty</strong>");
    }

    this.loader.dismiss();
    

  }

  

  presentLoading() {
    this.loader = this.loadingCtrl.create({
      content: "Loging in ..."
    });
    this.loader.present();
  }

  dismiss(){
    this.viewCtrl.dismiss();
  }
  
  
  register(){
  this.navCtrl.push(RegisterPage);
  }

  ionViewDidLoad() {
    console.log('login root', this.service.root);
    console.log('ionViewDidLoad LoginPage');
  }

}
