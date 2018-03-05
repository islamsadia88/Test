import { Component, ChangeDetectionStrategy } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import { DataServicesProvider } from '../../providers/data-services/data-services';
import * as $ from 'jquery'
import { ProfilePage } from './../profile/profile';

/**
 * Generated class for the ManageProfilePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'page-manage-profile',
  templateUrl: 'manage-profile.html',
})
export class ManageProfilePage {

  name:string="";
  email:any;
  address:any;
  pass:any;
  phone:any;
  data:any;
  userinfo:any;
  updateName:any;
  updateEmail:any;
  updatePass:any;
  updateAddress:any;
  updatePhone:any;



  constructor(public navCtrl: NavController, public navParams: NavParams,public service:DataServicesProvider,private alertController: AlertController) {
    let find_id=this.service.user_id;
    let info:any;
    console.log("serarch");
    console.log(find_id);
   // let id=1;
      let str=JSON.stringify({find_id});
      this.service.getProfileManageData(str).subscribe(response=>{
        console.log('response inside constractor',response);
        info=response.json();
        this.name=info[0].user_name;
        this.email=info[0].email;
        this.pass=info[0].password;
        this.address=info[0].address;
        this.phone=info[0].phone;
        
    });
  
  console.log(this.name);
    this.userinfo={};
    this.userinfo.name="";
    this.userinfo.email="";
    this.userinfo.pass="";
    this.userinfo.address="";
    this.userinfo.phone="";
   


}


Update(){
  
   if($.trim(this.userinfo.name).length>0){
      this.updateName=this.userinfo.name;
     }
    else{
      this.updateName=this.name;
    }
    if($.trim(this.userinfo.email).length>0){
      this.updateEmail=this.userinfo.email;
     }
    else{
       this.updateEmail=this.email;
    }

    if($.trim(this.userinfo.address).length>0){
      this.updateAddress=this.userinfo.address;
     }
    else{
       this.updateAddress=this.address;
    }

    if($.trim(this.userinfo.pass).length>0){
      this.updatePass=this.userinfo.pass;
     }
    else{
       this.updatePass=this.pass;
    }

    if($.trim(this.userinfo.phone).length>0){
      this.updatePhone=this.userinfo.phone;
     }
    else{
       this.updatePhone=this.phone;
    }


      let name=this.updateName;
      let email=this.updateEmail;
      let pass=this.updatePass;
      let address=this.updateAddress;
      let phone=this.updatePhone;
      let user_id=this.service.user_id;

      let info1:any;


      let details=JSON.stringify({user_id,name,email,pass,address,phone});
      console.log(name);
      console.log(email);
      console.log(user_id);
      this.service.postProfileManageData(details).subscribe(respose1=>{
        console.log(respose1);
        info1=respose1.json();
        //this.service.name1=data[0].
        if(info1[0].token!="Invalid"){
        let alert = this.alertController.create({
        title: 'Done',
        subTitle: 'You have successfully updated your profile',
        //buttons: ['OK']
        buttons:[
           {
                      text: 'OK',
                       handler: data => {
                             //this.isTrue=true;
                             this.navCtrl.push(ProfilePage);
                      }
                    }
        ]
      });
       alert.present();
     // this.navCtrl.push(ProfilePage);
        }
        else{

          console.log("Invalid couldnt update");

        }
      });
   }




  ionViewDidLoad() {
    console.log('ionViewDidLoad ManageProfilePage');
  }

}
