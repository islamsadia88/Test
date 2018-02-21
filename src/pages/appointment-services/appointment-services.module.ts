import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AppointmentServicesPage } from './appointment-services';

@NgModule({
  declarations: [
    AppointmentServicesPage,
  ],
  imports: [
    IonicPageModule.forChild(AppointmentServicesPage),
  ],
})
export class AppointmentServicesPageModule {}
