import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';
import { LoginPage } from '../login/login';
import { DataServicesProvider } from '../../providers/data-services/data-services';
import * as $ from 'jquery';

/**
 * Generated class for the RegisterPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-register',
  templateUrl: 'register.html',
})
export class RegisterPage {
  data:any;
  item:any;
  result:any;

  constructor(public navCtrl: NavController, public navParams: NavParams,public service:DataServicesProvider,private viewCtrl: ViewController) {
    this.data = {};
    this.data.userID = "";
    this.data.fullName = "";
    this.data.email="";
    this.data.address="";
    this.data.phone="";
    this.data.password = "";
    this.result="";
  }


  register(){
    let userID = this.data.userID;
    let fullName=this.data.fullName;
    let email = this.data.email;
    let address = this.data.address;
    let phone = this.data.phone;
    let password = this.data.password;

    let info:any;

    if($.trim(userID).length>0 && $.trim(fullName).length && $.trim(email).length>0  &&
    $.trim(address).length>0&&$.trim(phone).length>0&& $.trim(password).length>0){
    let data = JSON.stringify({userID,fullName,email,address,phone,password});
    this.service.postRegister(data).subscribe(response => {
    
    info=response.json();
    this.result=info[0].token;
  
    if(this.result!="Invalid"){
    this.navCtrl.push(LoginPage);
    }
   else{
     $('#error').html("<span class='text-danger'>Username already taken</span>");
    }
               
    }, error => {
    $('#error').html("<span class='text-danger'>Invalid username or Password</span>");
        });

    }
    else{
       console.log("error");
       $('#err').html("<span class='text-danger'>Check All The fields</span>");
    }

  }

   dismiss(){
    this.viewCtrl.dismiss();
  }
  
  
   login(){
    this.navCtrl.push(LoginPage);
  
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad RegisterPage');
  }

}
