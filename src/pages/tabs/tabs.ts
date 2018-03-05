import { Component } from '@angular/core';

import { AboutPage } from '../about/about';
import { ContactPage } from '../contact/contact';
import { HomePage } from '../home/home';
import { ProfilePage } from '../profile/profile';
import { LoginPage } from '../login/login';
import { DataServicesProvider } from '../../providers/data-services/data-services';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = HomePage;
  
  tab3Root = AboutPage;
  tab4Root = ContactPage;

  constructor( private service:DataServicesProvider) {

  

   

  }

 

}
