import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { EmergencyServicesPage } from './emergency-services';

@NgModule({
  declarations: [
    EmergencyServicesPage,
  ],
  imports: [
    IonicPageModule.forChild(EmergencyServicesPage),
  ],
})
export class EmergencyServicesPageModule {}
