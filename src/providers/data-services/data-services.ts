
import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';
import { ToastController } from 'ionic-angular';

/*
  Generated class for the DataServicesProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class DataServicesProvider {

  placeLoc:any ="";
  clickedHospital:any = "";
   name:string="";
   user_id:string="";
   phone:string="";
   email:string="";
   address:string="";
   root:boolean=false;
   category:string="";
   clickedDoctor:any="";
   serialRunning:any;
   bookingDay:any;
   est:any;
   trackDoctorClicked:any="";
   trackDayClicked:any="";
   loginDirectionPage = 0;
   loginClicked:boolean=false;


  constructor(private http:Http,private toastCtrl: ToastController) {
    console.log('Hello DataServicesProvider Provider');
  }
  
  
  getHospitalName(){
    
    return this.http.get('http://localhost/uk_project/hospitals.php')
    .map(res =>res.json());
  }
  
  getAvailableAmb(){
  
    return this.http.get('http://localhost/uk_project/get_available_amb.php')
    .map(res =>res.json());
  
  }

    postLogin(data){
      console.log('provider login data', data);
    let link = "http://localhost/uk_project/login.php";
    return this.http.post(link,data);
  }


  getDoct(cate){
     let link = "http://localhost/uk_project/get_doctorList.php";
     return this.http.post(link,cate);
  }


  getTimeTable(clickedDoc){
   
     let link = "http://localhost/uk_project/getDocTime.php";
     return this.http.post(link,clickedDoc);

  }


  postAppointment(appointment){
    let link = "http://localhost/uk_project/postAppointment.php";
    return this.http.post(link,appointment); 
    

  }


  getBookedList(booked_id){
    let link = "http://localhost/uk_project/getBookedList.php";
    return this.http.post(link,booked_id);


  }


  getWaitingList(waitingDocID){
    
    let link = "http://localhost/uk_project/getTrackingInfo.php";
    return this.http.post(link,waitingDocID);

  }


  postRegister(data){
    
    let link = "http://localhost/uk_project/register.php";
    return this.http.post(link,data);   
  }

  getProfile(user){
    let link = "http://localhost/uk_project/getProfileInfo.php";
    return this.http.post(link,user);

  }

  getProfileManageData(user){
    let link = "http://localhost/uk_project/getProfileDataManage.php";
    return this.http.post(link,user);

  }

  postProfileManageData(data){
    let link = "http://localhost/uk_project/postProfileDataManage.php";
    return this.http.post(link,data);

  }

  getReview(){
    return this.http.get('http://localhost/uk_project/getReview.php')
    .map(res =>res.json())
  }

  postReview(data){
    console.log('provider clicked post review data', data);
    let link = "http://localhost/uk_project/postReview.php";
    return this.http.post(link,data);

  }

}
